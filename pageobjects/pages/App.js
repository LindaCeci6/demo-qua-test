class App{

    openHomepage(){
        browser.url('https://demoqa.com/')
    }

    openLoginPage(){
        browser.url('https://demoqa.com/login')
    }

    openBookPage(){
        browser.url('https://demoqa.com/books')
    }


}

export default new App()