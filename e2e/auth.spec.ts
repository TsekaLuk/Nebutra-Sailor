import { expect, test } from "@playwright/test";

test.describe("Authentication Flow", () => {
  test("sign-in page is accessible", async ({ page }) => {
    await page.goto("/sign-in");
    await expect(page).not.toHaveTitle(/404|Not Found/i);
  });

  test("sign-up page is accessible", async ({ page }) => {
    await page.goto("/sign-up");
    await expect(page).not.toHaveTitle(/404|Not Found/i);
  });

  test("sign-in link from landing page navigates correctly", async ({ page }) => {
    await page.goto("/");
    const signInLink = page.getByRole("link", { name: /sign in|log in/i }).first();
    if (await signInLink.isVisible()) {
      await signInLink.click();
      await expect(page).not.toHaveTitle(/Error|404/i);
    }
  });
});
