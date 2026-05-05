import {Page} from '@playwright/test';

export class Footer {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async getFooterGitHubLink() {
        return await this.page.locator('a.ion-social-github')
    }

    async clickGitHubLink() {
        const gitHubLink = await this.getFooterGitHubLink()
        await gitHubLink.click()
    }
}