import path from "path";
import readJsonData from "../actions/readJsonData.ts";
import { UserData } from "../interfaces/readJsonInterface.ts";
import homePage from "../pageobjects/home.page.ts";
import loginPage from "../pageobjects/login.page.ts";
import menu from "../pageobjects/menu.ts";

let userData: UserData;

describe('User Accounts', async () => {
    before(async () => {
        userData = readJsonData.getData('data/users.json');
    });

    it('Login to user account', async () => {
        await (await menu.signInButton).click();
        await loginPage.login(userData.user_1.username, userData.user_1.password);
        await homePage.waitLoding();
        expect(await (await homePage.homePageWelcomeTitle).getText()).toEqual('Welcome back, Test!');
    })
});