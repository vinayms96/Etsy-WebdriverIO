const SIGNIN_TITLE = '#join-neu-form h1';
const EMAIL_ID = '#join_neu_email_field';
const PASSWORD = '#join_neu_password_field';
const SIGNIN_SUBMIT = '[name="submit_attempt"]';
const SIGNIN_CLOSE_BUTTON = '#join-neu-overlay [class*="wt-overlay__close-icon"]';
const REGISTER_BUTTON = '#join-neu-overlay [class*="select-register"]';

class LoginPage {

    public get signInTitle(): Promise<string> {
        return $(SIGNIN_TITLE).getText();
    }

    public get inputUsername() {
        return $(EMAIL_ID);
    }

    public get inputPassword() {
        return $(PASSWORD);
    }

    public get btnSubmit() {
        return $(SIGNIN_SUBMIT);
    }

    public get closeButton(): Promise<WebdriverIO.Element> {
        return $(SIGNIN_CLOSE_BUTTON);
    }

    public get registerButton(): Promise<WebdriverIO.Element> {
        return $(REGISTER_BUTTON);
    }

    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
