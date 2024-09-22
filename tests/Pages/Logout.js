const { expect } = require("@playwright/test");
const { Login } = require("./Login");
exports.Logout =
class Logout
{
    constructor(page)
    {
        this.page=page;
        this.login_toggle_button="//div[class='panel header'] button[type='button']";
        this.Signout_btn = "//div[aria-hidden='false'] li[data-label='or'] a"
        this.siginlink = "//header/div[1]/div[1]/ul[1]/li[2]/a[1]";
    }
    async Signout()
    {
        await this.page.locator(this.login_toggle_button).click();
        await this.page.locator(this.Signout_btn).click();
        await expect(this.page.locator(this.siginlink)).toBeVisible();
    }
}