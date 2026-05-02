"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

type Phase1Input = {
  name: string;
  age: number;
  householdAdults: number;
  householdChildrenAges: number[];
  cookingSkill: 1 | 2 | 3;
  cookingTimeWeekday: string;
  cookingTimeWeekend: string;
  sportFrequency: string;
  sportIntensity: string;
};

type Phase2Input = {
  mealsPerDay: string;
  breakfastRoutine: string;
  snackHabits: string;
  eatOutPerWeek: string;
  habitVsHunger: string;
};

type Phase3Input = {
  dietStyle: string;
  allergies: string[];
  intolerances: string[];
  dislikes: string;
  notes: string;
};

type Phase4Input = {
  foodExperience: string;
  gutStatus: {
    bowel_regularity: string;
    bloating: string;
    gut_issue: string;
  };
  dairyApproach: string;
  glutenApproach: string;
  coffeeIntake: string;
  alcoholIntake: string;
};

type Phase5Input = {
  cycleStatus: string;
  cycleLastPeriod: string | null;
  cycleLength: number | null;
};

type Phase6Input = {
  goals: string[];
};

type Phase7Input = {
  hasBalanceTest: "yes_now" | "yes_later" | "no";
  supplementsUsed: string[];
  balanceTest: {
    testDate: string | null;
    omega3Total: string;
    omega6Total: string;
    omegaRatio: string;
    aaEpaRatio: string;
    saturatedFat: string;
    monounsaturated: string;
    transFat: string;
    individualFattyAcidsNote: string;
    cellHardness: string;
    mentalStrength: string;
  };
};

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return { supabase, user };
}

export async function savePhase1Action(input: Phase1Input) {
  const { supabase, user } = await requireUser();

  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      name: input.name,
      age: input.age,
      household_adults: input.householdAdults,
      household_children: input.householdChildrenAges,
      cooking_skill: input.cookingSkill,
      cooking_time_weekday: input.cookingTimeWeekday,
      cooking_time_weekend: input.cookingTimeWeekend,
      sport_frequency: input.sportFrequency,
      sport_intensity: input.sportIntensity,
    },
    { onConflict: "id" },
  );

  if (error) {
    return { ok: false as const, message: error.message };
  }

  return { ok: true as const };
}

export async function savePhase2Action(input: Phase2Input) {
  const { supabase, user } = await requireUser();

  const eatingPattern = {
    meals_per_day: input.mealsPerDay,
    breakfast_routine: input.breakfastRoutine,
    snack_habits: input.snackHabits,
    eat_out_per_week: input.eatOutPerWeek,
    habit_vs_hunger: input.habitVsHunger,
  };

  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      eating_pattern: eatingPattern,
    },
    { onConflict: "id" },
  );

  if (error) {
    return { ok: false as const, message: error.message };
  }

  return { ok: true as const };
}

export async function savePhase3Action(input: Phase3Input) {
  const { supabase, user } = await requireUser();

  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      diet_style: input.dietStyle,
      allergies: input.allergies,
      intolerances: input.intolerances,
      dislikes: input.dislikes,
      notes: input.notes,
    },
    { onConflict: "id" },
  );

  if (error) {
    return { ok: false as const, message: error.message };
  }

  return { ok: true as const };
}

export async function savePhase4Action(input: Phase4Input) {
  const { supabase, user } = await requireUser();

  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      food_experience: input.foodExperience,
      gut_status: input.gutStatus,
      dairy_approach: input.dairyApproach,
      gluten_approach: input.glutenApproach,
      coffee_intake: input.coffeeIntake,
      alcohol_intake: input.alcoholIntake,
    },
    { onConflict: "id" },
  );

  if (error) {
    return { ok: false as const, message: error.message };
  }

  return { ok: true as const };
}

export async function savePhase5Action(input: Phase5Input) {
  const { supabase, user } = await requireUser();

  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      cycle_status: input.cycleStatus,
      cycle_last_period: input.cycleLastPeriod,
      cycle_length: input.cycleLength,
    },
    { onConflict: "id" },
  );

  if (error) {
    return { ok: false as const, message: error.message };
  }

  return { ok: true as const };
}

export async function savePhase6Action(input: Phase6Input) {
  const { supabase, user } = await requireUser();

  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      goals: input.goals,
    },
    { onConflict: "id" },
  );

  if (error) {
    return { ok: false as const, message: error.message };
  }

  return { ok: true as const };
}

export async function savePhase7Action(input: Phase7Input) {
  const { supabase, user } = await requireUser();

  const balanceTestChoice =
    input.hasBalanceTest === "yes_now"
      ? "entered"
      : input.hasBalanceTest === "yes_later"
        ? "later"
        : "none";

  const { error: profileError } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      balance_test_choice: balanceTestChoice,
      supplements_used: input.supplementsUsed,
    },
    { onConflict: "id" },
  );

  if (profileError) {
    return { ok: false as const, message: profileError.message };
  }

  if (input.hasBalanceTest === "yes_now") {
    if (!input.balanceTest.testDate) {
      return { ok: false as const, message: "Vul de testdatum in." };
    }

    const numericOrNull = (value: string) => {
      const trimmed = value.trim();
      if (!trimmed) return null;
      const n = Number(trimmed.replace(",", "."));
      return Number.isFinite(n) ? n : null;
    };

    const individualFattyAcids = input.balanceTest.individualFattyAcidsNote.trim()
      ? { note: input.balanceTest.individualFattyAcidsNote.trim() }
      : {};

    const { error: testError } = await supabase.from("balance_tests").insert({
      user_id: user.id,
      test_date: input.balanceTest.testDate,
      omega_3_total: numericOrNull(input.balanceTest.omega3Total),
      omega_6_total: numericOrNull(input.balanceTest.omega6Total),
      omega_ratio: numericOrNull(input.balanceTest.omegaRatio),
      aa_epa_ratio: numericOrNull(input.balanceTest.aaEpaRatio),
      saturated_fat: numericOrNull(input.balanceTest.saturatedFat),
      monounsaturated: numericOrNull(input.balanceTest.monounsaturated),
      trans_fat: numericOrNull(input.balanceTest.transFat),
      individual_fatty_acids: individualFattyAcids,
      cell_hardness: numericOrNull(input.balanceTest.cellHardness),
      mental_strength: numericOrNull(input.balanceTest.mentalStrength),
      supplements_used: input.supplementsUsed,
      notes: null,
    });

    if (testError) {
      return { ok: false as const, message: testError.message };
    }
  }

  revalidatePath("/dashboard");
  revalidatePath("/onboarding");
  redirect("/dashboard");
}
