
const SIGNIN_BUTTON = '[class*="signin-header-action"]';

class Menu {
    get signInButton(): Promise<WebdriverIO.Element> {
        return $(SIGNIN_BUTTON);
    }
}

export default new Menu();