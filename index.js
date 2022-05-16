var account = "joanna1229230@gmail.com"

//Using puppeteer for Web automation
const puppeteer = require('puppeteer-extra')

//sleep function for bypass bot detection
async function sleep(s) {
    await new Promise(r => setTimeout(r, s));
    return 0;
}

// Bypass bot detection
// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

//web browser login
(async() => {
    //open the browser
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' ,
        ignoreDefaultArgs: ['--disable-extensions'],
        headless: false
    });
    //open specific page
    const page = await browser.newPage();
    let navigationPromise = page.waitForNavigation();
    
    //go to the page
    await page.goto('https://mail.google.com/mail/u/0/?tab=rm#inbox');
    await navigationPromise;

    //fill in your information(account)
    await page.waitForSelector('input').then(
        await page.type('input', account)
    ).then(
        await page.keyboard.press('Enter')
    ).then(
        sleep(5000)
    );
    
    // await browser.close();
})();
