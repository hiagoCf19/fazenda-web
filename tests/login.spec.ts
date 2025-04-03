import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Acessar" }).click();
  await page.getByRole("button", { name: "Faça login" }).click();
  await page.getByRole("textbox", { name: "Insira seu email" }).click();
  await page
    .getByRole("textbox", { name: "Insira seu email" })
    .fill("fazenda@gamail.com");
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill("123456");
  await page.getByRole("button", { name: "Acessar" }).click();
});
