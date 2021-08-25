import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

test('add a movie',  async () => {
    let searchBar = await driver.findElement(By.name('movieInput'))

    await searchBar.sendKeys('Get Out\n')

    await driver.sleep(3000)

    await driver.findElement(By.xpath("/html/body/main/ul/li/span")).click()

    await driver.sleep(3000) 
    
    await driver.findElement(By.xpath('//*[@id="GetOut"]')).click()

    await driver.sleep(3000)
}) 