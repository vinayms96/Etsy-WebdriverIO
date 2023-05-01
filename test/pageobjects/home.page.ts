const HOMEPAGE_WELCOME_TEXT = 'main#content h1:nth-child(1)';
class HomePage {
    public get pageTitle(): Promise<string> {
        return browser.getTitle();
    }

    public get homePageWelcomeTitle(): Promise<WebdriverIO.Element> {
        return $(HOMEPAGE_WELCOME_TEXT);
    }

    public async waitLoding(): Promise<void> {
        (await this.homePageWelcomeTitle).waitForDisplayed();
    }
}

export default new HomePage();