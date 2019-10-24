const username = $('#username');
const password = $('#password');;
const loginButtin = $('#submit');

let LoginPage = {
    waitForPageToLoad() {
        browser.waitUntil(() => {
            return loginButtin.waitForExist(1000);
        })
    },
    enterCredentials() {
        username.setValue("Mamma Mia!");
        password.setValue("password");
    },
    clickOnSubmit(){
        loginButtin.click();
    }
}

export default LoginPage;
