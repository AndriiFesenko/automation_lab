const { Builder, By, until } = require('selenium-webdriver');

async function checkButtonPresence() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://openai.com/');

        // Find the button element using XPath
        let button = await driver.findElement(By.xpath('//h1[@class="f-display-2 pointer-events-auto"]'));

        // Wait for the button to be displayed with a timeout of 10 seconds
        await driver.wait(until.elementIsVisible(button), 10000);
        
        console.log('The button is present on the page and visible.');
    } catch (error) {
        // If the button is not found or not visible within the timeout
        console.log('The button is not present on the page or not visible within 10 seconds.');
    } finally {
        // Quit the WebDriver session
        await driver.quit();
    }
}

// Call the function to check button presence
checkButtonPresence();
