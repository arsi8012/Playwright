const { chromium } = require("playwright");

const { expect } = require("@playwright/test");

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 5000,
    });
    const page = await browser.newPage();
    await page.goto("https://netology.ru");
    await page.click("text=Войти");
    await page.fill('[placeholder="Email"]', "ok@mail.ru");
    await page.fill('[placeholder="Пароль"]', "123456");
    await page.click('button:has-text("Войти")');

    await expect(page.locator("text=Вы ввели неправильно логин или пароль")).toBeVisible();

    await browser.close();
})();