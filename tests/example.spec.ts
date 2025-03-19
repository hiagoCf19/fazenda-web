import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/admin/dashboard");
  await page.waitForTimeout(1000); // Espera 1 segundo
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.waitForTimeout(1000); // Espera 1 segundo
  await page.getByRole("textbox", { name: "Email" }).fill("teste@gmail.com");
  await page.waitForTimeout(1000); // Espera 1 segundo
  await page.getByRole("button", { name: "Send" }).click();
  await page.waitForTimeout(1000); // Espera 1 segundo
  await page.getByRole("listitem").filter({ hasText: "Dashboard" }).click();
});
