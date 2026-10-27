import { Page, expect } from '@playwright/test';
import NDMaisElements from '../elements/NDMaisElements';
import BasePage from './BasePage';

export default class NDMaisPage extends BasePage {
  readonly ndMaisElements: NDMaisElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.ndMaisElements = new NDMaisElements(page);
  }

  async acessarPagina(): Promise<void> {
    await this.page.goto('https://ndmais.com.br/', {
      waitUntil: 'domcontentloaded',
      timeout: 45000 // Tempo seguro e sem bloqueios
    });
  }

  async validarCarregamentoCabecalho(): Promise<void> {
    await expect(this.page).toHaveTitle(/ND Mais/i);
    await expect(this.ndMaisElements.getLogo()).toBeVisible();
  }

  async validarMancheteNaTela(): Promise<void> {
    await expect(this.ndMaisElements.getManchetePrincipal()).toBeVisible();
  }

  async pesquisarNoticia(termo: string): Promise<void> {
    const lupa = this.ndMaisElements.getBotaoLupaBusca();
    
// Tenta clicar na lupa primeiro (alguns sites escondem a barra de pesquisa atrás do ícone)
    if (await lupa.isVisible({ timeout: 3000 }).catch(() => false)) {
      await lupa.click({ force: true });
    }
    
    const input = this.ndMaisElements.getCampoBuscaInput();
    await input.fill(termo);
    await input.press('Enter');
  }

  async validarBusca(): Promise<void> {
    // Valida se a URL mudou para a página de resultados com sucesso
    await expect(this.page).toHaveURL(/.*(\?s=|busca|search).*/i, { timeout: 15000 });
  }
}