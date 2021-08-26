import {desktop} from '../lib/device'
import { short,medium,long} from '../lib/timeout';
import App from '../pageobjects/pages/App'
import Base from '../pageobjects/pages/Base'
import LoginPage from '../pageobjects/pages/LoginPage'

describe('Demo-Qua Test', () => {
    
    it('Should load the webpage',()=>{
    App.openHomepage()
    browser.setWindowSize(desktop[0],desktop[1])
    var bookstoreapp = browser.$('#app > div > div > div.home-body > div > div:nth-child(6) > div > div.card-body > h5')
    bookstoreapp.scrollIntoView()
    bookstoreapp.waitForExist()
    bookstoreapp.click()
    browser.pause(short)
    })

    it('Should go to the login page', ()=> {
        browser.setWindowSize(desktop[0],desktop[1])
        
        var bookstorespan = browser.$('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(6) > span > div > div.header-text > span')  
        var loginspan = $('/html/body/div/div/div/div[2]/div[1]/div/div/div[6]/div/ul/li[1]/span')
        bookstorespan.scrollIntoView()
        bookstorespan.waitForExist()
        bookstorespan.click()
        loginspan.click()
        browser.pause(short)       
    })


    it('Should not log with invalid credentials',()=>{
        browser.setWindowSize(desktop[0],desktop[1])
        const loginWelcome = $('h5')
        expect(loginWelcome).toHaveText('Login in Book Store')
        LoginPage.formIsVisible()
        LoginPage.fillForm('linda','linda123')
        LoginPage.submitLoginForm()
        const InvalidUser =  $('#name')
        expect(InvalidUser).toHaveText('Invalid username or password!')
        browser.pause(short)
    })

    it('Should log with valid credentials',()=>{
        App.openLoginPage()
        browser.setWindowSize(desktop[0],desktop[1])
        const loginWelcome = $('h5')
        expect(loginWelcome).toHaveText('Login in Book Store')
        LoginPage.formIsVisible()
        LoginPage.fillForm('LindaVillatoro','1lindacecilia*')
        LoginPage.submitLoginForm()
        LoginPage.logoutForm()
        browser.pause(short)
    })

    it('Should create a new user', () => { 
        App.openLoginPage()
        browser.setWindowSize(desktop[0],desktop[1])
        const newUserButton = $('#newUser')
        newUserButton.waitForExist()
        newUserButton.scrollIntoView()
        newUserButton.click()
        expect(browser).toHaveUrl('https://demoqa.com/register')
        $('#userForm').waitForExist()
        const newUsertitle = $('h4')
        newUsertitle.waitForExist()
        expect(newUsertitle).toHaveText('Register to Book Store')
        $('#firstname').waitForExist()
        $('#firstname').setValue('Ana')
        $('#lastname').waitForExist()
        $('#lastname').setValue('Andino')
        $('#userName').waitForExist()
        $('#userName').setValue('AnaAndino')
        $('#password').waitForExist()
        $('#password').setValue('Anaandino123')
        //The recaptha is not available to click
        //$('#recaptcha-anchor').click()
        const registerbutton = $('#register');
        // scroll to specific element
        registerbutton.scrollIntoView();
        registerbutton.waitForExist()
        registerbutton.click()
        
        const goToLogin = $('#gotologin')
         // scroll to specific element
        goToLogin.scrollIntoView();
        goToLogin.waitForExist()
        goToLogin.click()
        browser.pause(short)
    });
 

});