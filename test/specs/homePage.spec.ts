import homePage from "../pageobjects/home.page.ts";
import fetch from 'node-fetch';

describe('Homepage validation', async () => {
    it('Title validation', async () => {
        expect(await homePage.pageTitle).toEqual('Etsy India - Shop for handmade, vintage, custom, and unique gifts for everyone');
    });

    it('Validate menu links', async () => {
        
    });
});