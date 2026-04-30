import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:4200/')
    }
)

test.describe('First UI tests', () => {
  test('Main page has title "PW-test"', async ({ page }) => {
    const titleLocator = page.locator('nb-layout-header .logo-container') 
    await expect(titleLocator).toHaveText('PW-test');
  });

  test('Disable all content dashboard tabs', async ({ page }) => {
    const lightDashboardTab = page.locator('[ng-reflect-title="Light"] nb-card')
    const rollerShadesDashboardTab = page.locator('[ng-reflect-title="Roller Shades"] nb-card')
    const wirelessAudioDashboardTab = page.locator('[ng-reflect-title="Wireless Audio"] nb-card')
    const coffeeMakerDashboardTab = page.locator('[ng-reflect-title="Coffee Maker"] nb-card')
    await lightDashboardTab.click()
    await rollerShadesDashboardTab.click()
    await wirelessAudioDashboardTab.click()
    await coffeeMakerDashboardTab.click()

    await expect(lightDashboardTab).toHaveClass("off")
    await expect(rollerShadesDashboardTab).toHaveClass("off")
    await expect(wirelessAudioDashboardTab).toHaveClass("off")
    await expect(coffeeMakerDashboardTab).toHaveClass("off")
  });

  test('Change light mode to dark one', async ({page}) => {
    const modeButton = await page.locator('nb-select.status-primary button')
    await modeButton.click()
    const darkModeButton = await page.locator('nb-option[ng-reflect-value = "dark"]')
    await darkModeButton.click()
    await expect(page.locator('body')).toHaveClass(/nb-theme-dark/)
  })

  test('Sidebar can be expanded', async ({page}) => {
    const sideBar = page.locator('nb-sidebar[tag="menu-sidebar"]')
    await sideBar.click()

    await expect(sideBar).toHaveClass(/expanded/)
  })

  test('Text can be entered into the Search field', async ({page}) => {
    const searchField = page.locator('nb-actions nb-search button')
    await searchField.click()
    
    const inputField = page.locator('nb-search-field input')
    await inputField.fill('Hello')
    await inputField.press('Enter')

    await expect(page.locator('nb-search-field')).toHaveAttribute('ng-reflect-show', 'false')
  })

  test('GitHub link leads to GitHub page', async ({page, context}) => {
    const gitHubIcon = page.locator('a.ion-social-github')
    await gitHubIcon.click()
    const gitHubPage = await context.waitForEvent('page')

    // should be failed as per current implementation href="#"
    await expect(gitHubPage).toHaveURL('https://github.com/')
  })

  test('Humidity tab has active state', async ({page}) => {
    const humidityTab = page.locator('nb-card nb-tabset ul li').filter({ hasText: 'Humidity' })
    await humidityTab.click()

    await expect(humidityTab).toHaveClass(/active/)
  })
}) 