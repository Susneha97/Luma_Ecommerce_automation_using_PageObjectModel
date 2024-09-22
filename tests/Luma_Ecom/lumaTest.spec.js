const{test,expect}=require ("@playwright/test")
import { Website } from "../Pages/website"
import { CreateAccount } from "../Pages/CreateAccountPage"
import { Login } from "../Pages/Login"
import { SearchPage } from "../Pages/SearchPage"
import{checkout} from "../Pages/CheckoutPage"
import { Logout } from "../Pages/Logout"


test.skip("Create Account", async({page})=>{
    //Create Account
    const website = new Website(page)
    await website.gotowebsite()
    const Createaccount= new CreateAccount(page)
    await Createaccount.createaccount("sneha" ,"jadar", "Magento201@yopmail.com","Test@123","Test@123")
    await page.waitForTimeout(5000);
  })



test("Launch Website", async({page})=>{
const website=new Website(page)
await website.gotowebsite()
/*const account=new CreateAccount(page)
await account.createaccount("shanks" , "Hiremath" ,"test1002@yopmail.com", "Test@123" , "Test@123")
await page.waitForTimeout(3000)
const logout = new Logout()
await logout.Signout()
await page.waitForTimeout(3000)*/
const login=new Login(page)
await login.Login("testuser001@gmail.com","Test@123")
const search=new SearchPage(page)
await search.searchProduct("tops")
await page.waitForTimeout(5000)
await search.Products("Leah Yoga Top")
await search.verify_Products();
await page.waitForTimeout(5000)
await search.addsize("XS")
await page.waitForTimeout(5000)
await search.addcolour("Purple")
await page.waitForTimeout(5000)
await search.addtocart()
await page.waitForTimeout(3000)


const checkout_product=new checkout(page)
    await checkout_product.checkout()
    await checkout_product.Shipping("Shiavgiri","Dharwad","12345","9008587556","India","Karnataka")
    await page.waitForTimeout(3000)
})
