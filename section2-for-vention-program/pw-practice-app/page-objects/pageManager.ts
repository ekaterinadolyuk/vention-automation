import { Header } from '../page-objects/header';
import { Sidebar } from '../page-objects/sidebar';
import { Dashboard } from '../page-objects/dashboard';
import { Footer } from '../page-objects/footer';
import { Page } from 'playwright-core';

export class PageManager {
    
    readonly page: Page
    readonly header: Header
    readonly sidebar: Sidebar
    readonly dashboard: Dashboard
    readonly footer: Footer

    constructor(page: Page) {
        this.page = page
        this.header = new Header(page)
        this.sidebar = new Sidebar(page)
        this.dashboard = new Dashboard(page)
        this.footer = new Footer(page)
    }
}