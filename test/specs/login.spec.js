import assert from 'assert';

suite('Login tests', function () {
    test('Login for valid credentials', async() => {

        browser.url('http://localhost:3001/');
        browser.pause(2000);
       // browser.maximizeWindow();
        const username = $('#username');
        username.setValue("Mamma Mia!")
        const password = $('#password');;
        password.setValue("password")

        const loginButtin = $('#submit');
        loginButtin.click();
        const header = $('#header')
        assert.strictEqual(header.getText(),'VodQA 2019 Schedule')

    });

});
