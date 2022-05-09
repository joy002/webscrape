const puppeteer = require('puppeteer');

//read in account and password from the user
(accountInfo => {
    var accountName = document.getElementById("accountName").value;
    var password = document.getElementById("password").value;
    document.writeln("Account name " + accountName+ "<br>");
    document.writeln("Password " + password);
})();

//web browser login
(async() => {
    //open the browser
    const browser = await puppeteer.launch({
        ignoreDefaultArgs: ['--disable-extensions'],
        headless: false
    });
    //open specific page
    const page = await browser.newPage();
    //go to the page
    await page.goto('https://mail.google.com/mail/u/0/?tab=rm#inbox');
    //same as sleep in python
    //await page.waitForSelector("Aa1VU")
    //wait page.waitFor("3000")

    //fill in your infromation to slides(account)
    //await page.waitForSelector("VfPpkd-vQzf8d")
    //await page.type('VfPpkd-vQzf8d', username)
    //fill in your infromation to slides(account)
    //await page.waitForSelector("VfPpkd-vQzf8d")
    //await page.type('Xb9hP', password)

    //After log in, go to spam inbox
    //await page.goto('https://mail.google.com/mail/u/0/#spam')

    //const result = await page.evaluate(() => {
    //   let allFromWebs = document.querySelectorAll();
    //    const headingList = [...allFromWebs];
    //    return headingList.map(h => h.innerText);
    //})

    //console.log(result)
    
    await browser.close();
})();

