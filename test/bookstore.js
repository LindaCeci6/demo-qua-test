import {desktop} from '../lib/device'
import { short,medium,long} from '../lib/timeout';
import App from '../pageobjects/pages/App'
import Base from '../pageobjects/pages/Base'
import LoginPage from '../pageobjects/pages/LoginPage'


describe('BookStore Aplication Testing -Book Store', () => {
    
    it('Should log with valid credentials',()=>{
        App.openLoginPage()
        browser.setWindowSize(desktop[0],desktop[1])
        const loginWelcome = $('h5')
        expect(loginWelcome).toHaveText('Login in Book Store')
        LoginPage.formIsVisible()
        LoginPage.fillForm('LindaVillatoro','1lindacecilia*')
        browser.pause(short)
        LoginPage.submitLoginForm()
    })


    it('Should move to book store', ()=> {
        browser.setWindowSize(desktop[0],desktop[1])
        var bookstore = browser.$('/html/body/div/div/div/div[2]/div[1]/div/div/div[6]/div/ul/li[2]/span')
        bookstore.scrollIntoView()
        bookstore.waitForExist() 
        bookstore.click()
        browser.pause(short)
       
    })

    it('Should add a book to colection', ()=> {
        $('#searchBox').waitForExist()
        $('#searchBox').setValue('Learning JavaScript Design Patterns')
        browser.keys('Enter')

        const titlecolumn = $('.rt-td')
        titlecolumn.click()
        const titlelink = $('.action-buttons')
        titlelink.waitForExist()
        const title = $('.mr-2 > a')
        expect(title).toHaveText('Learning JavaScript Design Patterns')
        //To work with text links
        const link = $('*=Learning JavaScript')
        link.click()
        const addToCollection = $('//*[@id="addNewRecordButton"]')
        //const addToCollection = $('/html/body/div/div/div/div[2]/div[2]/div[1]/div[2]/div[9]/div[2]/button')
        addToCollection.scrollIntoView()
        browser.pause(short)
        ///addToCollection.click()  
    })

    it('Should go the website by link', ()=> {
        const websitelinkName = $('//*[@id="website-wrapper"]')
        websitelinkName.click()
        const websitelink = $('//*[@id="userName-value"]') 
        websitelink.waitForExist()
        websitelink.scrollIntoView()
        browser.pause(medium)
        websitelink.click()
    })

});