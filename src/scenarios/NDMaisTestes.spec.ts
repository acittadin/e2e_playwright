import { test } from '@playwright/test';
import NDMaisPage from '../support/pages/NDMaisPage';

test.describe('Automação E2E - Portal ND Mais (Notícias SC)', () => {
  let ndMaisPage: NDMaisPage;

  test.beforeEach(async ({ page }) => {
    ndMaisPage = new NDMaisPage(page);
    await ndMaisPage.acessarPagina();
  });

  test('Teste 1: Deve carregar a página inicial do portal e exibir o logótipo', async () => {
    await ndMaisPage.validarCarregamentoCabecalho();
  });

  test('Teste 2: Deve validar a visibilidade da manchete principal do dia', async () => {
    await ndMaisPage.validarMancheteNaTela();
  });

  test('Teste 3: Deve realizar uma pesquisa por "Criciúma" com sucesso', async () => {
    await ndMaisPage.pesquisarNoticia('Criciúma');
    await ndMaisPage.validarBusca();
  });
});