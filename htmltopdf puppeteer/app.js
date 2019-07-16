const Puppeteer= require('puppeteer');


(async ()=>{
    const browser= await Puppeteer.launch();
    const page= await browser.newPage();
    await page.setViewport({width:1440,height:900,deviceScaleFactor:1});
    await page.goto('https://medium.com/swlh/an-introduction-to-web-scraping-with-puppeteer-3d35a51fdca0', {waitUntil: 'networkidle2'});
    await page.pdf({
       
        path:"./screen1.pdf",
        pageRanges:"2",
        format:"A4",
        printBackground:true
    
    })
    await browser.close();
})();