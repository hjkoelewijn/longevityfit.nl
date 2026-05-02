"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/confirm?next=/dashboard`;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    setStatus("success");
    setMessage("Check je e-mail. De magic link is naar je inbox gestuurd.");
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
        <div className="flex justify-center">
          <Image
            src="/branding/longevity-fit-zwart-goud.png"
            alt="Longevity Fit"
            width={260}
            height={30}
            priority
            className="h-8 w-auto"
          />
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-stone-900">Inloggen</h1>
        <p className="mt-2 text-sm text-stone-600">
          Vul je e-mailadres in. Je ontvangt direct een veilige login-link.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block text-sm font-medium text-stone-700" htmlFor="email">
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="jij@voorbeeld.nl"
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-stone-400 focus:ring-2 focus:ring-stone-200"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-stone-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Versturen..." : "Stuur magic link"}
          </button>
        </form>

        {message ? (
          <p
            className={`mt-4 text-sm ${
              status === "error" ? "text-red-600" : "text-emerald-700"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </main>
  );
}
