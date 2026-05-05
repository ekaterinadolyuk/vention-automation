import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager'

test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:4200/')
    }
)

test.describe('First UI tests', () => {
  test('Main page has title "PW-test"', async ({ page }) => {
    const pm = new PageManager(page)
    const titleLocator = await pm.header.getLogo()
    await expect(titleLocator).toHaveText('PW-test');
  });

  test('Disable all content dashboard tabs', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.dashboard.disableAllTabs()
    
    const lightDashboardTab = await pm.dashboard.getDashboardTab('Light')
    const rollerShadesDashboardTab = await pm.dashboard.getDashboardTab('Roller Shades')
    const wirelessAudioDashboardTab = await pm.dashboard.getDashboardTab('Wireless Audio')
    const coffeeMakerDashboardTab = await pm.dashboard.getDashboardTab('Coffee Maker')

    await expect(lightDashboardTab).toHaveClass("off")
    await expect(rollerShadesDashboardTab).toHaveClass("off")
    await expect(wirelessAudioDashboardTab).toHaveClass("off")
    await expect(coffeeMakerDashboardTab).toHaveClass("off")
  });

  test('Change light mode to dark one', async ({page}) => {
    const pm = new PageManager(page)
    await pm.header.selectMode('dark')
    await expect(page.locator('body')).toHaveClass(/nb-theme-dark/)
  })

  test('Sidebar can be expanded', async ({page}) => {
    const pm = new PageManager(page)
    await pm.sidebar.openSidebar()
    await expect(pm.sidebar.sideBar).toHaveClass(/expanded/)
  })

  test('Text can be entered into the Search field', async ({page}) => {
    const pm = new PageManager(page)
    await pm.header.openSearch()
    await pm.header.submitSearch('Hello')

    await expect(page.locator('nb-search-field')).toHaveAttribute('ng-reflect-show', 'false')
  })

  test('GitHub link leads to GitHub page', async ({page, context}) => {
    const pm = new PageManager(page)
    await pm.footer.clickGitHubLink()
    const gitHubPage = await context.waitForEvent('page')

    // should be failed as per current implementation href="#"
    await expect(gitHubPage).toHaveURL('https://github.com/')
  })

  test('Humidity tab has active state', async ({page}) => {
    const pm = new PageManager(page)
    await pm.dashboard.selectHumidityTab()

    await expect(pm.dashboard.humidityTab).toHaveClass(/active/)
  })
}) 