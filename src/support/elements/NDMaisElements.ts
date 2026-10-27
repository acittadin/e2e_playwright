import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class NDMaisElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getLogo(): Locator {
    // Busca o logótipo por imagem ou classe
    return this.page.locator('img[alt*="ND Mais" i], .logo, [aria-label*="ND Mais" i]').first();
  }

  getManchetePrincipal(): Locator {
    // Pega o primeiro grande título de notícia visível na tela
    return this.page.locator('h1, h2').filter({ hasText: /[A-Za-zÀ-ÿ]/ }).first();
  }

  getBotaoLupaBusca(): Locator {
    // Seletores genéricos para ícones de busca em portais de notícias
    return this.page.locator('button[aria-label*="busca" i], .icon-search, .search-toggle, button:has(i[class*="search"])').first();
  }

  getCampoBuscaInput(): Locator {
    // Padrão de caixas de pesquisa na web
    return this.page.locator('input[type="search"], input[name="s"], input[name="q"], [placeholder*="busca" i]').first();
  }
}