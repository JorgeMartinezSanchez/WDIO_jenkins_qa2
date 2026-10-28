import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginPage from '../../pageobjects/loginPage.js'

Given('estoy en la página de login', async () => {
    await LoginPage.open()
})

When('ingreso {string} y {string}', async (username, password) => {
    await LoginPage.login(username, password)
    await browser.takeScreenshot();
})

Then('debería ver el mensaje {string}', async (expectedMessage) => {
    const actualMessage = await LoginPage.flashMessage.getText()
    expect(actualMessage).toContain(expectedMessage)
    await browser.takeScreenshot();
})