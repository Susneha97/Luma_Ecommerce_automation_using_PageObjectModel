const { expect } = require("@playwright/test");
exports.CreateAccount =
class CreateAccount
{
    constructor(page)
    {
        this.page=page;
        this.CreateAcc_link = "//div[@class='panel header']//a[normalize-space()='Create an Account']";
        this.firstname ="#firstname";
        this.lastname = '#lastname';
        this.email_address = '#email_address'
        this.password="#password";
        this.confirm_password='#password-confirmation';
        this.create_button="//button[@title='Create an Account']";
        this.Verifyuser="div[class='panel header'] span[class='logged-in']";
    }
    async createaccount(firstname , lastname ,email, password , confirmpassword)
    {
        await this.page.locator(this.CreateAcc_link).click();
        await this.page.locator(this.firstname).fill(firstname)
        await this.page.locator(this.lastname).fill(lastname)
        await this.page.locator(this.email_address).fill(email)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.confirm_password).fill(confirmpassword)
        await this.page.locator(this.create_button).click();
        await expect(this.page.locator(this.Verifyuser)).toBeVisible();
        await console.log("The Account is created Successfully! You can now Login to your Account!")
    }
}