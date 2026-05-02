import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signOutAction } from "./actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-stone-200 bg-white p-10 shadow-sm">
        <div className="flex justify-start">
          <Image
            src="/branding/longevity-fit-zwart-goud.png"
            alt="Longevity Fit"
            width={300}
            height={35}
            priority
            className="h-9 w-auto"
          />
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-stone-900">Dashboard</h1>
        <p className="mt-3 text-stone-600">
          Welkom{user.email ? `, ${user.email}` : ""}. Je bent succesvol ingelogd.
        </p>

        <div className="mt-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
          <p className="text-sm text-stone-700">
            Dag 1 staat: auth, beveiligde route en basisfundament zijn klaar.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/profile"
            className="text-sm font-medium text-stone-900 underline-offset-4 hover:underline"
          >
            Naar profiel
          </Link>
        </div>

        <form action={signOutAction} className="mt-8">
          <button
            type="submit"
            className="rounded-xl border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-100"
          >
            Uitloggen
          </button>
        </form>
      </div>
    </main>
  );
}
