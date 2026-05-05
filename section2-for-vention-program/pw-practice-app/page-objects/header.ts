import {Page} from '@playwright/test';

export class Header {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async getLogo() {
        return await this.page.locator('nb-layout-header .logo-container')
    }

    async selectMode(mode: string) {
        const modeButton = await this.page.locator('nb-select.status-primary button').click()
        const modeOption = await this.page.locator(`nb-option[ng-reflect-value = "${mode}"]`).click()
    }

    async openSearch() {
        const searchField = await this.page.locator('nb-actions nb-search button').click()
    }

    async submitSearch(text: string) {
        const inputField = await this.page.locator('nb-search-field input')
        await inputField.fill(text)
        await inputField.press('Enter')
    }
}