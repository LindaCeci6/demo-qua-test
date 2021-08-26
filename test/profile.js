import {desktop} from '../lib/device'
import { short,medium,long} from '../lib/timeout';
import App from '../pageobjects/pages/App'
import Base from '../pageobjects/pages/Base'
import LoginPage from '../pageobjects/pages/LoginPage'

describe('BookStore Aplication Testing -  Profile', () => {
    it('Should log with valid credentials',()=>{
        App.openLoginPage()
        browser.setWindowSize(desktop[0],desktop[1])
        const loginWelcome = $('h5')
        expect(loginWelcome).toHaveText('Login in Book Store')
        LoginPage.formIsVisible()
        LoginPage.fillForm('LindaVillatoro','1lindacecilia*')
        browser.pause(short)
        LoginPage.submitLoginForm()
        //LoginPage.logoutForm()
        browser.pause(short)
    })

    it('Should search your books profile', () => {
        $('#userName-value').waitForExist()
        $('#searchBox').waitForExist()
        $('#searchBox').setValue('Git Pocket Guide')
        browser.keys('Enter')
        //$('#gotoStore').waitForExist()
        $('#submit').waitForExist()
        //browser.pause(medium)

    });
    
    it('Should delete a book and add it again', () => {
        browser.url('https://demoqa.com/profile')
        const table = $('//*[@id="app"]/div/div/div[2]/div[2]/div[1]/div[2]')
        table.waitForExist()
        const deletebutton= $('#delete-record-undefined')
        deletebutton.click()
        const pieModal= $('.modal-footer')
        pieModal.waitForExist()
        const okbutton = $('#closeSmallModal-ok')
        okbutton.scrollIntoView()
        okbutton.click()
        
       
    });
});


