"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  // Simulated action
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log("Contact inquiry received:", formData)

  // Redirect to success page
  redirect("/success")
}
