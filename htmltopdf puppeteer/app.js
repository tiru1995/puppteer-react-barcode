const Puppeteer = require('puppeteer');


(async () => {
    const browser = await Puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto('http://www.thatjsdude.com/interview/css.html', { waitUntil: "networkidle2" });
    console.log(await page.pages())
    await page.pdf({

        path: "./screen1.pdf",
        displayHeaderFooter: true,
        headerTemplate: '<span style="font-size: 30px; width: 50px; height: 50px; background-color: black; color:black; margin: 20px;">Header</span>',
        footerTemplate: '<span style="font-size: 30px; width: 50px; height: 50px; background-color: black; color:black; margin: 20px;">Footer</span>',
        pageRanges: " ",
        format: "A4",
        // scale: .54,
        margin: {
            top: '90px',
            bottom: '150px',
            right: '30px',
            left: '30px',
        },

        printBackground: true

    })
    await browser.close();
})();