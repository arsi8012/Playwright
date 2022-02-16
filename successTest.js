const { chromium } = require("playwright");
const { email, password } = require("../Playwright/user");

const { expect } = require("@playwright/test");

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 5000,
    });
    const page = await browser.newPage();
    await page.goto("https://netology.ru");
    await page.click("text=Войти");
    await page.locator('[placeholder="Email"]').fill(email);
    await page.locator('[type="password"]').fill(password);
    await page.click('button:has-text("Войти")');

    await expect(page.locator("text=Мои курсы и профессии")).toBeVisible();

    await browser.close();
})();