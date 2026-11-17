"use server";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export const addUserAction = async (prevState, formData) => {
  try {
    const name = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const data = await auth.api.signUpEmail({
      body: {
        name: name,
        email: email,
        password: password,
      },
    });
  } catch (err) {
    return { success: false, error: err.message, data: null };
  }
  revalidatePath("/populaire");
  redirect(`/populaire`);
};
export const signInAction = async (prevState, formData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const data = await auth.api.signInEmail({
      body: {
        email,
        email: email,
        password: password,
      },

      headers: await headers(),
    });
  } catch (err) {
    console.log("[signin error]", err);
    return { success: false, error: err.message, data: null };
  }
  redirect(`/populaire`);
};
export const signOutAction = async () => {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect(`/`);
};
