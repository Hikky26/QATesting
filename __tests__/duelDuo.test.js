const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Clicking the see all bots button displays all the bots", async () => {
    await driver.get("http://localhost:8000")
    const seeAllButton = await driver.findElement(By.id("see-all"));
    await seeAllButton.click();
    const allBots = await driver.findElement(By.id("bot-card outline"));
    const allBotsDisplayed = await allBots.isDisplayed();
    expect(allBotsDisplayed).toBe(true);
  });
  test("Clicking on the add to player's duo", async () => {
    await driver.get("http://localhost:8000");
    const addToDuoButton = await driver.findElement(By.className("duo-btn"));
    await addToDuoButton.click();
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    const playerDuoDivDisplayed = await playerDuoDiv.isDisplayed();
    expect(playerDuoDivDisplayed).toBe(true);
  });
  // test("", () => {

  // });
});