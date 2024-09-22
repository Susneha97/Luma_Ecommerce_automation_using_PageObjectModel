
const { expect } = require("@playwright/test");
exports.SearchPage =
class SearchPage
{
    constructor(page)
    {
        this.page=page;
        this.searchbar=page.locator("#search")
        this.search_btn=page.locator("//button[@title='Search']");
        this.No_of_Products = "//div//strong//a";
        this.Add_to_cart_btn = page.locator("//button[@title='Add to Cart']");
        this.product_size= "//div[@class='swatch-option text']";
       // this.product_color="//div[@class='swatch-option color']";
       this.prod_add_msg=page.locator("//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']");
       this.checkout_btn=page.locator("#top-cart-btn-checkout");
    }
    async searchProduct(ProductName) {
        try {
            // Wait for the search bar to be visible and fill it
            await this.searchbar.waitFor({ state: 'visible' });
            await this.searchbar.fill(ProductName);
            // Simulate pressing Enter key
            await this.searchbar.press('Enter');
            // Optionally, wait for the search results to appear
            await this.page.waitForSelector(this.No_of_Products);
        } catch (error) {
            console.error("Error in searchProduct:", error);
        }
    }
    async Products(item)
    {
        const ProductList=await this.page.$$(this.No_of_Products)
        console.log("There are" ,await ProductList.length,"Products")
        for(const product of ProductList)
        {
            const productText = (await product.textContent()).trim();
            if (item === await productText)
            {
                await product.click()
                //console.log(await product.textContent());
                console.log("The  product selected is", item)
                break;
            }
        }
        //await ProductList[0].click();
    }
   async verify_Products()
    {
        // Verify that the product details page displays the correct information (e.g., product name, price, description)
        await this.page.waitForSelector("//span[@class='base']");
        await expect(this.page.locator("//span[@class='base']")).toHaveText("Leah Yoga Top");
        await expect(this.page.locator("//span[@id='product-price-1748']")).toBeVisible();
        await expect(this.page.locator("#tab-label-description-title")).toContainText("Details");
    }
    async addsize(size)
        {
        const productSize = await this.page.$$(this.product_size)
        console.log("The product has" ,await productSize.length, "sizes")
            for(const prodsize of productSize)
            {
            //console.log(await prodsize.textContent());
            if (size === await prodsize.textContent())
                {
                   await prodsize.click();
                   console.log("The size of the product selected is", size)
                   break;
                }
            }
         }
    async addcolour(color)
       {
            const colors =await this.page.$$("//div[@class='swatch-option color']")
            const colorname = await this.page.locator("//div[@class='title']")
            console.log("The Product has" ,await colors.length, "colors")
            for (const prodcolor of colors)
            {
                await this.page.waitForTimeout(3000)
                await prodcolor.hover()
                //console.log(await colorname.textContent())
                await this.page.waitForTimeout(3000)
                    if(color === await colorname.textContent(color))
                    {
                        await prodcolor.click();
                        console.log("The color of the product selected is", color)
                        break;
                    }
            }
        }
        async addtocart()
        {
            await this.Add_to_cart_btn.click();
            console.log(await this.prod_add_msg.textContent());
            await expect(this.prod_add_msg).toHaveText("You added Leah Yoga Top to your shopping cart.");
        }
        }