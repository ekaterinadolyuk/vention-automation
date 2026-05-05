import { Page, Locator } from '@playwright/test';

export class Dashboard {

    readonly page: Page
    readonly lightTab: Locator
    readonly rollerShadesTab: Locator
    readonly wirelessAudioTab: Locator
    readonly coffeeMakerTab: Locator
    readonly humidityTab: Locator

    constructor(page: Page) {
        this.page = page
        this.lightTab = page.locator('[ng-reflect-title="Light"] nb-card')
        this.rollerShadesTab = page.locator('[ng-reflect-title="Roller Shades"] nb-card')
        this.wirelessAudioTab = page.locator('[ng-reflect-title="Wireless Audio"] nb-card')
        this.coffeeMakerTab = page.locator('[ng-reflect-title="Coffee Maker"] nb-card')
        this.humidityTab = page.locator('nb-card nb-tabset ul li').filter({ hasText: 'Humidity' })
    }

    async disableAllTabs() {
        await this.lightTab.click()
        await this.rollerShadesTab.click()
        await this.wirelessAudioTab.click()
        await this.coffeeMakerTab.click()
    }

    async selectHumidityTab() {
        await this.humidityTab.click()
    }

    async getDashboardTab(title: string) {
        return await this.page.locator(`[ng-reflect-title="${title}"] nb-card`)
    }
}
