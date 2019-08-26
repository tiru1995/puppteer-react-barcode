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
        footerTemplate: '<div id="footer-template" style="font-size:10px !important; color:#808080; padding-left:10px"><span class="date"></span></span><span style= "padding-left:15px" class="pageNumber"></span>of<span class="totalPages"></span></div>',
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
