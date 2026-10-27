# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: G1Testes.spec.ts >> Automação E2E - G1 Santa Catarina >> Teste 5: Deve clicar na categoria e navegar para a Região Sul de SC
- Location: src\scenarios\G1Testes.spec.ts:31:7

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - banner [ref=e5]:
      - link "Pular para o conteúdo" [ref=e6] [cursor=pointer]:
        - /url: "#"
      - list "Produtos Globo" [ref=e10]:
        - listitem [ref=e11]:
          - link "Ir para globo.com" [ref=e12] [cursor=pointer]:
            - /url: https://www.globo.com/
            - text: globo.com
        - listitem [ref=e13]:
          - link "Ir para G 1" [ref=e14] [cursor=pointer]:
            - /url: https://g1.globo.com/
            - text: g1
        - listitem [ref=e15]:
          - link "Ir para G E" [ref=e16] [cursor=pointer]:
            - /url: https://ge.globo.com/
            - text: ge
        - listitem [ref=e17]:
          - link "Ir para G Show" [ref=e18] [cursor=pointer]:
            - /url: https://gshow.globo.com/
            - text: gshow
        - listitem [ref=e19]:
          - link "Ir para Globoplay" [ref=e20] [cursor=pointer]:
            - /url: https://globoplay.globo.com/?origemId=92434
            - text: globoplay
        - listitem [ref=e21]:
          - link "Ir para g1 jogos" [ref=e22] [cursor=pointer]:
            - /url: https://g1.globo.com/jogos/
            - text: g1 jogos
        - listitem [ref=e23]:
          - link "Ir para GloboPop" [ref=e24] [cursor=pointer]:
            - /url: https://globopop.onelink.me/GXi1/po79jn4d
            - text: globopop
        - listitem [ref=e25]:
          - link "Ir para O Globo" [ref=e26] [cursor=pointer]:
            - /url: https://oglobo.globo.com/
            - text: o globo
        - listitem [ref=e27]:
          - link "Ir para Valor Econômico" [ref=e28] [cursor=pointer]:
            - /url: https://valor.globo.com/
            - text: valor
      - generic [ref=e31]:
        - generic [ref=e32]:
          - button "Menu" [ref=e34] [cursor=pointer]:
            - generic [ref=e36]: MENU
          - link "atalho editoria" [ref=e38] [cursor=pointer]:
            - /url: https://g1.globo.com/
        - heading [level=1] [ref=e42]:
          - generic [ref=e43]:
            - link "atalho editoria Santa Catarina" [ref=e44] [cursor=pointer]:
              - /url: https://g1.globo.com/sc/santa-catarina/
              - text: Santa Catarina
            - link "atalho editoria afiliada" [ref=e45] [cursor=pointer]:
              - /url: http://redeglobo.globo.com/sc/nsctv/
              - img "Santa Catarina" [ref=e46]
        - generic [ref=e47]:
          - generic [ref=e48]:
            - generic:
              - group:
                - searchbox "buscar" [ref=e49]
                - textbox [aria-hidden] [ref=e50]
          - generic [ref=e56]:
            - button "Botão de login Conta Globo" [ref=e57]:
              - generic [ref=e58]: Entrar com Conta Globo
            - generic:
              - generic:
                - generic:
                  - paragraph:
                    - text: Uma só conta para todos os produtos Globo.
                    - strong: É grátis!
                - generic:
                  - paragraph: Utilize o mesmo login para todos os produtos Globo e receba recomendações e ofertas exclusivas para você.
                - generic:
                  - button "Entrar"
                  - button "Criar uma conta"
      - generic [ref=e66]:
        - generic [ref=e67]:
          - button "Menu" [ref=e69] [cursor=pointer]:
            - generic [ref=e71]: MENU
          - link "atalho editoria" [ref=e73] [cursor=pointer]:
            - /url: https://g1.globo.com/
        - generic [ref=e78]:
          - link "atalho editoria Santa Catarina" [ref=e79] [cursor=pointer]:
            - /url: https://g1.globo.com/sc/santa-catarina/
            - text: Santa Catarina
          - link "atalho editoria afiliada" [ref=e80] [cursor=pointer]:
            - /url: http://redeglobo.globo.com/sc/nsctv/
            - img "Santa Catarina" [ref=e81]
        - generic [ref=e86]:
          - button "Botão de login Conta Globo" [ref=e87]:
            - generic [ref=e88]: Entrar com Conta Globo
          - generic:
            - generic:
              - generic:
                - paragraph:
                  - text: Uma só conta para todos os produtos Globo.
                  - strong: É grátis!
              - generic:
                - paragraph: Utilize o mesmo login para todos os produtos Globo e receba recomendações e ofertas exclusivas para você.
              - generic:
                - button "Entrar"
                - button "Criar uma conta"
    - list [ref=e94]:
      - listitem [ref=e95]:
        - link "eleições 2026" [ref=e96] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/eleicoes/2026/
      - listitem [ref=e97]:
        - link "últimas notícias" [ref=e98] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/ultimas-noticias/
      - listitem [ref=e99]:
        - link "bom dia sc" [ref=e100] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/videos-bom-dia-santa-catarina/
      - listitem [ref=e101]:
        - link "ja florianópolis" [ref=e102] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/videos-jornal-do-almoco/
      - listitem [ref=e103]:
        - link "ja blumenau" [ref=e104] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/cidade/blumenau/
      - listitem [ref=e105]:
        - link "ja chapecó" [ref=e106] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/cidade/chapeco/
      - listitem [ref=e107]:
        - link "ja criciúma" [ref=e108] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/cidade/criciuma/
      - listitem [ref=e109]:
        - link "ja joinville" [ref=e110] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/cidade/joinville/
      - listitem [ref=e111]:
        - link "nsc notícias" [ref=e112] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/videos-nsc-noticias/
    - generic [ref=e114]:
      - heading "Apuração" [level=3] [ref=e115]
      - button "Eleições" [ref=e116] [cursor=pointer]
    - main [ref=e119]:
      - iframe [ref=e124]:
        - link [ref=f42e2] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstxn4FuFwMCCZfwGAycP5lFgzBHFc4mFiFDaEa9-pBxN5aadVn70QwKxyaPSZZXWJXfgvcs2DDcOl-yy18XL6BCvhJJNSnEhIK0jZrOghIrvC-mllPnPxtNNxVL3S-Tax90e-EYlj97DyEqTLs1bqaI9AVjrTERbQRrk7HNHd8cUAn6_4__KYfJ-me3hhTQ3kMGkgivw4DzSeCAckklZ70d3_lQd6haZQAhHZo6RLgYR5zxR9805nE7wMZaW3xLxc7brTLHIYaV5ZFc_Zaok-dFmtZnvTmSRpkT46F9OVu15lHoXD-PBCnuyRvFdz4sVwuGNHiqxcPGqXzYXUJ-ziHwummvijM7FAAR-MhKWDbkIM8VNeLqAgmGk-lo1ViykY42UWXwGBvnwjLHGB1WHFZ24p1TzA4p1S563pNzdPBbQ9JrYDHokV2QnPZ8CArbYAbvafNjSOOj_hdC&sai=AMfl-YRhvCNgGrSFNnWFXnQciNhvsa0vN8i34nLksFL5DFdT8rfvIczA3RwBpPegBFYdpotpZSQifr4brixjQsb1Ntf5Koit9jRsFYYe0tsaf4MY50XPNnfm2LnARX7F2HWW3PRfK58JiVT3OBcO3czU-VHEvAQ9CSgTlnOqK9Q0FR7NrLDOQSnkfVkP2aZTFf18eFicxulibNVkJIAlb6sbY_GFE6mcZrRLCQ2fxuw-cf4MewjOhYtBu8gG9rtdLlnsY1M71KCN8hX5yca7Whkcz9kT98Xhl7DoM6iJHiT06GZp8Zb3uB6ueenp0CuExwm9twQZS3lonH2MN3QEehGTbCHx7-Qa66VGeUDvTS1hW6QbAEua_rIeLA&sig=Cg0ArKJSzPOwLJqG6APx&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://g1.globo.com/sc/santa-catarina/especial-publicitario/eisenbahn/noticia/2026/10/21/eisenhaus-reabre-em-blumenau-com-gastronomia-chope-e-programacao-especial.ghtml
      - generic [ref=e129]:
        - link "Escalada de violência SC registra quatro feminicídios em menos de 1 semana; casos crescem 21% em 2026" [ref=e132] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/sc-quatro-feminicidios-menos-uma-semana-casos-crescem-21percent-2026.ghtml
          - list [ref=e133]:
            - listitem [ref=e134]:
              - generic [ref=e135]: Escalada de violência
            - listitem [ref=e136]
            - listitem
            - listitem
            - listitem [ref=e137]:
              - generic [ref=e138]: SC registra quatro feminicídios em menos de 1 semana; casos crescem 21% em 2026
        - link "Em falsa carga de sardinhas Mais de 17 toneladas de barbatanas de tubarão são apreendidas em porto" [ref=e143] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mais-17-toneladas-barbatanas-tubarao-saco-sardinhas-apreendidas-porto-sc.ghtml
          - list [ref=e144]:
            - listitem [ref=e145]:
              - generic [ref=e146]: Em falsa carga de sardinhas
            - listitem [ref=e147]
            - listitem
            - listitem
            - listitem [ref=e148]:
              - generic [ref=e149]: Mais de 17 toneladas de barbatanas de tubarão são apreendidas em porto
        - link "Tragédia deixou oito mortos Quais as negligências apontadas contra piloto de balão, indiciado por homicídio Queda aconteceu em junho de 2025; relembre" [ref=e154] [cursor=pointer]:
          - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/negligencias-apontadas-mp-contra-piloto-balao-caiu-matou-8-em-sc.ghtml
          - list [ref=e155]:
            - listitem [ref=e156]:
              - generic [ref=e157]: Tragédia deixou oito mortos
            - listitem [ref=e158]
            - listitem
            - listitem
            - listitem [ref=e159]:
              - generic [ref=e160]: Quais as negligências apontadas contra piloto de balão, indiciado por homicídio
            - listitem [ref=e163]:
              - link "Queda aconteceu em junho de 2025; relembre" [ref=e164]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/26/mp-aponta-negligencia-imprudencia-denuncia-piloto-por-homicidio-queda-balao-mortes-praia-grande.ghtml
      - iframe [ref=e172]:
        - link [ref=f16e2] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjstNb8XdpKE0pLEWA-o8BQ9511Av2sJwG-jmOfjenqE9frESTyvcp1SWEyQ3lskVPiWKaUISQTsv0vT_8S_3N7j93eZpUc32fGaacArQju-8tlwBxmIsedVaaMCWnW2ltEWUm0z6nhseaH5_IMpZfLyQ-TjRCykf89A5Ro459roWn3hCbsNpHRVDmr5exytGSdHYcWCwi_H2aZnBFGa-W2whowbH9aRyLHBGIESwbuMDyNzdxnWGvLk0idYhNJSOHGCrED3jR6_Ufmu1vdf7LUISbi252pZ-XjHaFwOgWN72vUrnckhLdTcWqkEKWcMzUSK9uLlUhpoPRs6JCbY6g-V4Ro2yw0isI2-AXtN37OivcypP-McjczX1YDRfBsq_hbjL4br52Q-xVeEl1KFR1eaTN3RGaIW6YignPJhHFwrWeQ8yn7u8zqnn9WyNQrd4S8r6D_0ix2A2&sai=AMfl-YRHz8SIgdjvqw9gf6AOdEgaOe9fYzgw1grFVuLFKkW0iRxQ3Yh_LDIX_Lk7LtkaUJl_9Jc8VWC2PA2Xg2cfTrvkirzYQItTyQM9bw60qykrQYAa9SAZkBxtiIfczSdl5YYJ8qhwzHh2l0ZN2KayS_98z-mlRpG4xRJGxRCYVuSMiOurnxteA_E-bAgCH6NoP24iukkqkrEcJKi6agiqLf4bvMo07TcsLGIcFD_ETYz-pbSptCHyWZfcbbQ6p_h4dB8emo10HNVteRPcchH4hZbrj8qii9MJXfPntVjQqkyc7UlPV6xR6EaHXcNsRjdjOMoKL76Bxk4AFt3ONlzbQZxvKr61VPXBIBnpobWXKiNtlbn0-MsQGQ&sig=Cg0ArKJSzGZLJ4aRs2Zx&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://chapeco.sc.gov.br
      - generic [ref=e173]:
        - generic [ref=e178]:
          - generic [ref=e184]:
            - heading "Na TV 📺" [level=2] [ref=e186]
            - list [ref=e187]:
              - listitem [ref=e188]:
                - generic [ref=e189]:
                  - generic [ref=e190]: Bom Dia SC, JA e NSC Notícias
                  - link "Assista AO VIVO pelo g1 aos telejornais da NSC TV" [ref=e191] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/ao-vivo/assista-ao-vivo-aos-telejornais-da-nsc.ghtml
                - link [ref=e192] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/ao-vivo/assista-ao-vivo-aos-telejornais-da-nsc.ghtml
                  - 'img "Foto: (Telejornais da NSC TV / NSC TV/Arte)" [ref=e193]'
              - listitem [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: ☑️Criciúma Faz Bem
                  - link "Vote no prêmio e decida quem faz a diferença no Sul de Santa Catarina" [ref=e197] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/09/premio-criciuma-faz-bem-2026-vote-e-defina-vencedores-6-categorias.ghtml
                - link [ref=e198] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/09/premio-criciuma-faz-bem-2026-vote-e-defina-vencedores-6-categorias.ghtml
                  - 'img "Foto: (Troféu Criciúma Faz Bem / NSC TV/Divulgação)" [ref=e199]'
              - listitem [ref=e200]:
                - generic [ref=e201]:
                  - generic [ref=e202]: Informações adicionais
                  - link "Veja sites, serviços, endereços e telefones citados nas reportagens" [ref=e203] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/noticia/2023/10/06/nsc-tv-informacoes-adicionais-dos-telejornais-bom-dia-sc-jornal-do-almoco-e-nsc-noticias.ghtml
                - link [ref=e204] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2023/10/06/nsc-tv-informacoes-adicionais-dos-telejornais-bom-dia-sc-jornal-do-almoco-e-nsc-noticias.ghtml
                  - 'img "Foto: (Microfone da NSC TV / José Somensi/Agencia Somensi)" [ref=e205]'
          - generic [ref=e211]:
            - heading "Mais Lidas" [level=2] [ref=e213]
            - list [ref=e215]:
              - link "Mulher morre e outros pacientes passam mal após exames em clínica de SC, que foi interditada" [ref=e217] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mulher-morre-outros-pacientes-passam-mal-colonoscopia-clinica-interditada.ghtml
                - listitem [ref=e218]:
                  - generic [ref=e219]: Mulher morre e outros pacientes passam mal após exames em clínica de SC, que foi interditada
              - 'link "Maçarico sem trava e válvulas de gás abertas: as negligências apontadas pelo MP contra piloto de balão que caiu e matou 8 em SC" [ref=e221] [cursor=pointer]':
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/negligencias-apontadas-mp-contra-piloto-balao-caiu-matou-8-em-sc.ghtml
                - listitem [ref=e222]:
                  - generic [ref=e223]: "Maçarico sem trava e válvulas de gás abertas: as negligências apontadas pelo MP contra piloto de balão que caiu e matou 8 em SC"
              - link "Justiça manda investigar policiais que atropelaram motociclista que comemorava vitória de Lula em SC" [ref=e225] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/justica-concede-liberdade-motociclista-atropelado-viatura-pm-manda-investigar-agentes-sc.ghtml
                - listitem [ref=e226]:
                  - generic [ref=e227]: Justiça manda investigar policiais que atropelaram motociclista que comemorava vitória de Lula em SC
              - 'link "Mega-Sena 3075: sete apostas de Santa Catarina ficam a 1 número de faturar R$ 294 milhões" [ref=e229] [cursor=pointer]':
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mega-sena-3075-sete-apostas-de-santa-catarina-ficam-a-1-numero-de-faturar-r-294-milhoes.ghtml
                - listitem [ref=e230]:
                  - generic [ref=e231]: "Mega-Sena 3075: sete apostas de Santa Catarina ficam a 1 número de faturar R$ 294 milhões"
              - link "SC registra quatro feminicídios em menos de uma semana; casos crescem 21% em 2026" [ref=e233] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/sc-quatro-feminicidios-menos-uma-semana-casos-crescem-21percent-2026.ghtml
                - listitem [ref=e234]:
                  - generic [ref=e235]: SC registra quatro feminicídios em menos de uma semana; casos crescem 21% em 2026
          - generic [ref=e241]:
            - generic [ref=e242]:
              - heading "Previsão do Tempo" [level=2] [ref=e243]
              - paragraph [ref=e245]: "Oferecido por:"
            - generic [ref=e248]:
              - 'link "Criciúma Probabilidade de chuva: 0% 0mm manhã tarde noite 21ºmax 12ºmin" [ref=e250] [cursor=pointer]':
                - /url: /previsao-do-tempo/sc/criciuma.html
                - generic [ref=e251]: Criciúma
                - generic [ref=e252]: "Probabilidade de chuva: 0% 0mm"
                - generic [ref=e253]:
                  - generic [ref=e254]: manhã
                  - generic [ref=e257]: tarde
                  - generic [ref=e260]: noite
                  - generic [ref=e263]:
                    - generic [ref=e264]: 21ºmax
                    - generic [ref=e265]: 12ºmin
              - paragraph [ref=e267]: Informações meteorológicas fornecidas pelo Climatempo
            - link "Veja a previsão do Climatempo" [ref=e270] [cursor=pointer]:
              - /url: https://www.climatempo.com.br/
        - generic [ref=e281]:
          - generic [ref=e285]:
            - generic [ref=e289]:
              - generic [ref=e290]: "'Feriadão' em Santa Catarina"
              - heading [level=2] [ref=e294]:
                - link [ref=e295] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/dia-do-servidor-publico-ponto-facultativo-e-transferido-para-30-de-outubro-em-sc.ghtml
                  - paragraph [ref=e296]: "Dia do Servidor Público: ponto facultativo é transferido para sexta"
              - link [ref=e298] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/dia-do-servidor-publico-ponto-facultativo-e-transferido-para-30-de-outubro-em-sc.ghtml
              - generic [ref=e301]:
                - text: Há 8 minutos—
                - generic [ref=e302]: Em Santa Catarina
            - generic [ref=e306]:
              - generic [ref=e307]: Estabelecimento foi interditado
              - heading [level=2] [ref=e311]:
                - link [ref=e312] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mulher-morre-outros-pacientes-passam-mal-colonoscopia-clinica-interditada.ghtml
                  - paragraph [ref=e313]: Mulher morre e outros pacientes passam mal após exames em clínica
              - link [ref=e315] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mulher-morre-outros-pacientes-passam-mal-colonoscopia-clinica-interditada.ghtml
              - generic [ref=e318]:
                - text: Há 5 horas—
                - generic [ref=e319]: Em Santa Catarina
            - generic [ref=e323]:
              - generic [ref=e324]: Investigado por embriaguez e desobediência
              - heading [level=2] [ref=e328]:
                - link [ref=e329] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/justica-concede-liberdade-motociclista-atropelado-viatura-pm-manda-investigar-agentes-sc.ghtml
                  - paragraph [ref=e330]: Justiça concede liberdade a motociclista atropelado por viatura da PM
              - link [ref=e332] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/justica-concede-liberdade-motociclista-atropelado-viatura-pm-manda-investigar-agentes-sc.ghtml
              - generic [ref=e335]:
                - text: Há 10 horas—
                - generic [ref=e336]: Em Santa Catarina
              - list [ref=e338]:
                - listitem [ref=e339]:
                  - link "Viatura o atropelou durante comemoração pró-Lula" [ref=e341] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/26/carro-pm-atropela-motociclista-durante-comemoracao-vitoria-lula.ghtml
                - listitem [ref=e342]:
                  - link "Ministério da Justiça e MP pedem esclarecimentos" [ref=e344] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/26/ministerio-justica-pede-esclarecimentos-atropelamento-motociclista-florianopolis.ghtml
            - generic [ref=e348]:
              - generic [ref=e349]: Operação da PF
              - heading [level=2] [ref=e353]:
                - link [ref=e354] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/videos-jornal-do-almoco/video/policia-federal-investiga-esquema-de-extracao-ilegal-de-madeira-em-santa-catarina-15134593.ghtml
                  - paragraph [ref=e355]: Servidor público concedia vantagens indevidas para exploração de madeira
              - link [ref=e357] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/videos-jornal-do-almoco/video/policia-federal-investiga-esquema-de-extracao-ilegal-de-madeira-em-santa-catarina-15134593.ghtml
              - generic [ref=e360]:
                - text: Há 3 horas—
                - generic [ref=e361]: Em Jornal do Almoço - SC
            - generic [ref=e374]:
              - generic [ref=e375]:
                - link [ref=e376] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2021/02/01/videos-mais-assistidos-do-g1-sc-nos-ultimos-7-dias.ghtml
                  - paragraph [ref=e377]: Reveja os VÍDEOS mais assistidos do g1 SC...
                - generic [ref=e384] [cursor=pointer]
              - generic [ref=e389]:
                - link "57 seg Viatura da PM atinge motociclista durante comemoração de vitória de Lula em Florianópolis" [ref=e390] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2021/02/01/videos-mais-assistidos-do-g1-sc-nos-ultimos-7-dias.ghtml#video-15129850-id
                  - generic [ref=e391]:
                    - generic [ref=e392]: 57 seg
                    - generic [ref=e403]: Viatura da PM atinge motociclista durante comemoração de vitória de Lula em Florianópolis
                - link "3 min Caixa-preta não registrou áudio de voo em queda de helicóptero com Rick, diz Cenipa" [ref=e404] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2021/02/01/videos-mais-assistidos-do-g1-sc-nos-ultimos-7-dias.ghtml#video-15112829-id
                  - generic [ref=e405]:
                    - generic [ref=e406]: 3 min
                    - generic [ref=e417]: Caixa-preta não registrou áudio de voo em queda de helicóptero com Rick, diz Cenipa
                - link "2 min Piloto de balão que caiu em SC e matou 8 pessoas é denunciado por homicídio culposo" [ref=e418] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2021/02/01/videos-mais-assistidos-do-g1-sc-nos-ultimos-7-dias.ghtml#video-15130722-id
                  - generic [ref=e419]:
                    - generic [ref=e420]: 2 min
                    - generic [ref=e431]: Piloto de balão que caiu em SC e matou 8 pessoas é denunciado por homicídio culposo
            - generic [ref=e435]:
              - generic [ref=e436]: Blumenau
              - heading [level=2] [ref=e440]:
                - link [ref=e441] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/oktoberfest/noticia/2026/10/27/quem-e-a-nova-rainha-da-oktoberfest-blumenau.ghtml
                  - paragraph [ref=e442]: "Leitora e jogadora de vôlei: quem é a nova rainha da Oktoberfest"
              - link [ref=e444] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/oktoberfest/noticia/2026/10/27/quem-e-a-nova-rainha-da-oktoberfest-blumenau.ghtml
              - generic [ref=e447]:
                - text: Há 12 horas—
                - generic [ref=e448]: Em Oktoberfest
            - generic [ref=e452]:
              - generic [ref=e453]: Mega-Sena 3075
              - heading [level=2] [ref=e457]:
                - link [ref=e458] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mega-sena-3075-sete-apostas-de-santa-catarina-ficam-a-1-numero-de-faturar-r-294-milhoes.ghtml
                  - paragraph [ref=e459]: Sete apostas de SC ficam a 1 número de faturar R$ 294 milhões
              - link [ref=e461] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mega-sena-3075-sete-apostas-de-santa-catarina-ficam-a-1-numero-de-faturar-r-294-milhoes.ghtml
              - generic [ref=e464]:
                - text: Há 9 horas—
                - generic [ref=e465]: Em Santa Catarina
            - generic [ref=e472]:
              - generic [ref=e473]:
                - link [ref=e474] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2026/10/27/videos-jornal-do-almoco-florianopolis-de-terca-feira-27-de-outubro-de-2026.ghtml
                  - paragraph [ref=e475]: "VÍDEOS: Jornal do Almoço Florianópolis de terça-feira, 27 de outubro de 2026..."
                - generic [ref=e482] [cursor=pointer]
              - generic [ref=e487]:
                - link "2 min Catarinense entre as poderosas do Agro" [ref=e488] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2026/10/27/videos-jornal-do-almoco-florianopolis-de-terca-feira-27-de-outubro-de-2026.ghtml#video-15134709-id
                  - generic [ref=e489]:
                    - generic [ref=e490]: 2 min
                    - generic [ref=e501]: Catarinense entre as poderosas do Agro
                - link "4 min Mulher morre após exame de endoscopia em Ibirama" [ref=e502] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2026/10/27/videos-jornal-do-almoco-florianopolis-de-terca-feira-27-de-outubro-de-2026.ghtml#video-15134635-id
                  - generic [ref=e503]:
                    - generic [ref=e504]: 4 min
                    - generic [ref=e515]: Mulher morre após exame de endoscopia em Ibirama
                - link "4 min Vem aí a Taça das Favelas" [ref=e516] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2026/10/27/videos-jornal-do-almoco-florianopolis-de-terca-feira-27-de-outubro-de-2026.ghtml#video-15134699-id
                  - generic [ref=e517]:
                    - generic [ref=e518]: 4 min
                    - generic [ref=e529]: Vem aí a Taça das Favelas
          - button "Mostrar mais conteúdos" [ref=e536] [cursor=pointer]: Mostrar mais
    - contentinfo [ref=e542]:
      - generic [ref=e545]:
        - generic [ref=e546]:
          - generic [ref=e547]:
            - link [ref=e550] [cursor=pointer]:
              - /url: http://g1.globo.com
            - link "Últimas Notícias" [ref=e554] [cursor=pointer]:
              - /url: /ultimas-noticias.html
          - generic [ref=e555]: Globo Notícias
        - generic [ref=e557]:
          - generic [ref=e558]: © Copyright 2000-2026 Globo Comunicação e Participações S.A.
          - list [ref=e559]:
            - listitem [ref=e560]:
              - link "princípios editoriais" [ref=e561] [cursor=pointer]:
                - /url: https://g1.globo.com/principios-editoriais-do-grupo-globo.html
            - listitem [ref=e562]:
              - link "política de privacidade" [ref=e563] [cursor=pointer]:
                - /url: https://privacidade.globo.com/privacy-policy/
            - listitem [ref=e564]:
              - link "minha conta" [ref=e565] [cursor=pointer]:
                - /url: https://minhaconta.globo.com
            - listitem [ref=e566]:
              - link "anuncie conosco" [ref=e567] [cursor=pointer]:
                - /url: https://globoads.globo.com/
  - navigation [ref=e568]:
    - list [ref=e569]:
      - listitem [ref=e570]:
        - generic [ref=e571]: Editorias
        - list
      - listitem [ref=e574]:
        - link "Jogos" [ref=e575] [cursor=pointer]:
          - /url: https://g1.globo.com/jogos
        - list
      - listitem [ref=e578]:
        - link "Eleições 2026" [ref=e579] [cursor=pointer]:
          - /url: https://g1.globo.com/politica/eleicoes/2026/
      - listitem [ref=e581]:
        - link "Guia de Compras" [ref=e582] [cursor=pointer]:
          - /url: https://g1.globo.com/guia/guia-de-compras/
        - list
      - listitem [ref=e585]:
        - link "Carros" [ref=e586] [cursor=pointer]:
          - /url: https://g1.globo.com/carros/
      - listitem [ref=e588]:
        - generic [ref=e589]: Regiões
        - list
      - listitem [ref=e592]:
        - generic [ref=e593]: Telejornais
        - list
      - listitem [ref=e596]:
        - link "GloboNews" [ref=e597] [cursor=pointer]:
          - /url: https://g1.globo.com/globonews/
        - list
      - listitem [ref=e600]:
        - link "Blogs e Colunas" [ref=e601] [cursor=pointer]:
          - /url: https://g1.globo.com/blogs-e-colunas/
      - listitem [ref=e603]:
        - generic [ref=e604]: Podcasts
        - list
      - listitem [ref=e607]:
        - generic [ref=e608]: Serviços
        - list
      - listitem [ref=e611]:
        - link "Vídeos" [ref=e612] [cursor=pointer]:
          - /url: https://g1.globo.com/videos/
      - listitem [ref=e614]:
        - link "Webstories" [ref=e615] [cursor=pointer]:
          - /url: https://g1.globo.com/webstories/
      - listitem [ref=e617]:
        - generic [ref=e618]: Conteúdos publicitários
        - list
      - listitem [ref=e621]:
        - generic [ref=e622]: "--"
      - listitem [ref=e624]:
        - link "Princípios editoriais" [ref=e625] [cursor=pointer]:
          - /url: https://g1.globo.com/principios-editoriais-do-grupo-globo.html
      - listitem [ref=e627]:
        - link "Sobre o g1" [ref=e628] [cursor=pointer]:
          - /url: https://g1.globo.com/institucional/sobre-o-g1.ghtml
      - listitem [ref=e630]:
        - link "App g1" [ref=e631] [cursor=pointer]:
          - /url: https://especiais.g1.globo.com/app-g1/
      - listitem [ref=e633]:
        - link "Equipe" [ref=e634] [cursor=pointer]:
          - /url: https://g1.globo.com/institucional/equipe-do-g1.ghtml
      - listitem [ref=e636]:
        - link "Entre em contato" [ref=e637] [cursor=pointer]:
          - /url: https://g1.globo.com/institucional/vc-no-g1-como-entrar-em-contato-enviar-videos-fotos-e-mensagens.ghtml
      - listitem [ref=e639]:
        - link "Termos de uso do g1" [ref=e640] [cursor=pointer]:
          - /url: https://g1.globo.com/institucional/termos-de-uso-do-g1.ghtml
      - listitem [ref=e642]:
        - generic [ref=e643]: Esporte
        - list
      - listitem [ref=e646]:
        - generic [ref=e647]: Entretenimento
        - list
      - listitem [ref=e650]:
        - link "Receitas" [ref=e651] [cursor=pointer]:
          - /url: https://receitas.globo.com/
      - listitem [ref=e653]:
        - link "Globo.com" [ref=e654] [cursor=pointer]:
          - /url: https://www.globo.com/
      - listitem [ref=e656]:
        - link "Ajuda Globo" [ref=e657] [cursor=pointer]:
          - /url: https://ajuda.globo.com/
      - listitem [ref=e659]:
        - link "Carreiras Globo" [ref=e660] [cursor=pointer]:
          - /url: https://vempraglobo.g.globo
      - listitem [ref=e662]
      - listitem [ref=e663]:
        - list [ref=e664]:
          - listitem [ref=e665]
          - listitem [ref=e669]:
            - link "grupo globo" [ref=e670] [cursor=pointer]:
              - /url: http://grupoglobo.globo.com/
  - generic [ref=e679]:
    - generic [ref=e681]:
      - text: Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você está ciente dessa funcionalidade. Informamos ainda que atualizamos nosso
      - link "Aviso de Privacidade" [ref=e682] [cursor=pointer]:
        - /url: https://privacidade.globo.com/privacy-policy/
      - text: . Conheça nosso
      - link "Portal da Privacidade" [ref=e683] [cursor=pointer]:
        - /url: https://privacidade.globo.com/
      - text: e veja o nosso novo Aviso.
    - button "Prosseguir" [ref=e685] [cursor=pointer]
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import G1Page from '../support/pages/G1Page';
  3  | 
  4  | test.describe('Automação E2E - G1 Santa Catarina', () => {
  5  |   let g1Page: G1Page;
  6  | 
> 7  |   test.beforeEach(async ({ page }) => {
     |        ^ Test timeout of 60000ms exceeded while running "beforeEach" hook.
  8  |     g1Page = new G1Page(page);
  9  |     await g1Page.acessarPagina();
  10 |     await g1Page.fecharNotificacoes();
  11 |   });
  12 | 
  13 |   test('Teste 1: Deve carregar a página inicial e exibir o logótipo de SC', async () => {
  14 |     await g1Page.validarCarregamentoCabecalho();
  15 |   });
  16 | 
  17 |   test('Teste 2: Deve validar a visibilidade da manchete principal do dia', async () => {
  18 |     await g1Page.validarMancheteNaTela();
  19 |   });
  20 | 
  21 |   test('Teste 3: Deve realizar uma pesquisa por "Criciúma" com sucesso', async () => {
  22 |     await g1Page.pesquisarNoticia('Criciúma');
  23 |     await g1Page.validarBusca();
  24 |   });
  25 | 
  26 |   test('Teste 4: Deve abrir e exibir o menu de navegação lateral', async () => {
  27 |     await g1Page.abrirMenuLateral();
  28 |     await g1Page.validarMenuAberto();
  29 |   });
  30 | 
  31 |   test('Teste 5: Deve clicar na categoria e navegar para a Região Sul de SC', async () => {
  32 |     await g1Page.navegarParaRegiaoSul();
  33 |   });
  34 | });
```