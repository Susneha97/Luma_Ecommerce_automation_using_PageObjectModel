exports.checkout=
class checkout
{
    constructor(page)
    {
        this.page=page;
        this.cart_btn = page.locator("//a [@class='action showcart']");
        this.checkout_btn=page.locator("#top-cart-btn-checkout");
        this.st_add= "//input[@name='street[0]']";
        this.city="//input[@name='city']";
        this.postal_code= "//input[@name='postcode']";
        this.phone_no="//input[@name='telephone']"
        this.country = "//select[@name='country_id']"
        this.state= "//select[@name='region_id']"
        this.next_btn="//button[@data-role='opc-continue']";
        this.place_order="//span[normalize-space()='Place Order']"
    }
    async checkout()
    {
        await this.cart_btn.click();
        await this.checkout_btn.click();
    }
    async Shipping(streetname,city,postacode,phoneno,country,state)
    {
        await this.page.locator(this.st_add).fill(streetname)
        await this.page.locator(this.city).fill(city)
        await this.page.locator(this.postal_code).fill(postacode)
        await this.page.locator(this.phone_no).fill(phoneno)
        await this.page.locator(this.country).selectOption({label: country})
        await this.page.locator(this.state).selectOption({label: state})
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.next_btn).click();
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.place_order).click();
    }
}