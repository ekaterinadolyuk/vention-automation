import {Locator, Page} from '@playwright/test';

export class Sidebar {

    readonly page: Page
    readonly sideBar: Locator

    constructor(page: Page) {
        this.page = page
        this.sideBar = this.page.locator('nb-sidebar[tag="menu-sidebar"]')
    }

    async openSidebar() {
        await this.sideBar.click()
    }
}