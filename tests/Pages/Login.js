exports.Login =
class Login
{
    constructor(page)
    {
        this.page=page;
        this.loginLink = '//header/div[1]/div[1]/ul[1]/li[2]/a[1]';
        this.email = '#email';
        this.password = "//input[@name='login[password]']";
        this.SignInbutton = "//button[@class='action login primary']"
        this.userVerify="div[class='panel header'] span[class='logged-in']";
    }
    async Login(email,password)
    {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.SignInbutton).click();
    }
}