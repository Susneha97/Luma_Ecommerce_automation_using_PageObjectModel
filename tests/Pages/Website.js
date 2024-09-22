exports.Website=
class Website
{
    constructor(page)
    {
        this.page=page
    }
    async gotowebsite()
    {
        await this.page.goto("https://magento.softwaretestingboard.com/");
    }
}