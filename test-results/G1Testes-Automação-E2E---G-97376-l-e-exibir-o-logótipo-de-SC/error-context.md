# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: G1Testes.spec.ts >> Automação E2E - G1 Santa Catarina >> Teste 1: Deve carregar a página inicial e exibir o logótipo de SC
- Location: src\scenarios\G1Testes.spec.ts:13:7

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
        - link [ref=f39e2] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjsumWQWPpRookbrbyByySXXxXltuHP6ePKFhEnQJRLWVXow0mLl1WjJsPVRKUVg9LewhpH2IsMBPZ9tDdVz072BL3Z9aLrsujTChTw_sedq4IoPk4jmgKI-l_WDDuKqUCwdIRia5sXz2B5_nnMKTPrwUSZL62KlpIxWJu0TFsOXcqB1z5serZbojVSrOx6Be6XXZCpWfamStcVn_R1DkzjlAyAJE7R2hIN1OD5FSc1-uaVNcDKH2bVO6IUoSAtHgaZp-T0-hdvxh6SLgMnZBkvH9NhZoWNG-AONBDjb0nlGwM3ctotLX4tkrNJv-OjzYP_O-gwoMjfGtUFGrYcOZsUJE_Fy1Zu1tJy5NRVJT-qFMTZqSI9lwTNT25_XlzVbI69WiQDWl2Ky94LevzRrXp4rXa8aITzFcXSxUxMwkGNe14wicFcEZe2bRmUaJ3ncCKG5Du8Qy94aWDa5S&sai=AMfl-YSofs5Ug815xQqtq5lkXYZpsbv3nmQbrHymwB0hohtqkNYgY2pNNJHqS6L5x5VtVtP6jQ0iiVpW3CTaEa3o9ocK3BgZko6y0UrGm4EvclwnYbDarjIhfU8c4AVIEiIJ4qI7isQ363mBE19Wcd6uD-zsrvJISIoCmuGh4o94hVJB7zrbFHVqLOZtq2mM6ioGXZhgw_-y_RKr6_y40bmEFIWXQoPxe79w52LWFa781w3cwnvW5y951WWeLNvcG-s2K6HoKPdjl6t-JvEI-LEiUTmEgWVnZ5MM_usBVdSbJVnxm4HEcdlmeraEv6khiUtRZlQ82xbQ_7MJmqEZjfkLIUCR6b5_WeEwRkFLR9dY-uBu5EEjvGCMog&sig=Cg0ArKJSzL6C4vqtoOaJ&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://g1.globo.com/sc/santa-catarina/especial-publicitario/eisenbahn/noticia/2026/10/21/eisenhaus-reabre-em-blumenau-com-gastronomia-chope-e-programacao-especial.ghtml
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
      - generic [ref=e169]:
        - generic [ref=e174]:
          - generic [ref=e180]:
            - heading "Na TV 📺" [level=2] [ref=e182]
            - list [ref=e183]:
              - listitem [ref=e184]:
                - generic [ref=e185]:
                  - generic [ref=e186]: Bom Dia SC, JA e NSC Notícias
                  - link "Assista AO VIVO pelo g1 aos telejornais da NSC TV" [ref=e187] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/ao-vivo/assista-ao-vivo-aos-telejornais-da-nsc.ghtml
                - link [ref=e188] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/ao-vivo/assista-ao-vivo-aos-telejornais-da-nsc.ghtml
                  - 'img "Foto: (Telejornais da NSC TV / NSC TV/Arte)" [ref=e189]'
              - listitem [ref=e190]:
                - generic [ref=e191]:
                  - generic [ref=e192]: ☑️Criciúma Faz Bem
                  - link "Vote no prêmio e decida quem faz a diferença no Sul de Santa Catarina" [ref=e193] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/09/premio-criciuma-faz-bem-2026-vote-e-defina-vencedores-6-categorias.ghtml
                - link [ref=e194] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/09/premio-criciuma-faz-bem-2026-vote-e-defina-vencedores-6-categorias.ghtml
                  - 'img "Foto: (Troféu Criciúma Faz Bem / NSC TV/Divulgação)" [ref=e195]'
              - listitem [ref=e196]:
                - generic [ref=e197]:
                  - generic [ref=e198]: Informações adicionais
                  - link "Veja sites, serviços, endereços e telefones citados nas reportagens" [ref=e199] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/noticia/2023/10/06/nsc-tv-informacoes-adicionais-dos-telejornais-bom-dia-sc-jornal-do-almoco-e-nsc-noticias.ghtml
                - link [ref=e200] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2023/10/06/nsc-tv-informacoes-adicionais-dos-telejornais-bom-dia-sc-jornal-do-almoco-e-nsc-noticias.ghtml
                  - 'img "Foto: (Microfone da NSC TV / José Somensi/Agencia Somensi)" [ref=e201]'
          - generic [ref=e207]:
            - heading "Mais Lidas" [level=2] [ref=e209]
            - list [ref=e211]:
              - link "Mulher morre e outros pacientes passam mal após exames em clínica de SC, que foi interditada" [ref=e213] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mulher-morre-outros-pacientes-passam-mal-colonoscopia-clinica-interditada.ghtml
                - listitem [ref=e214]:
                  - generic [ref=e215]: Mulher morre e outros pacientes passam mal após exames em clínica de SC, que foi interditada
              - 'link "Maçarico sem trava e válvulas de gás abertas: as negligências apontadas pelo MP contra piloto de balão que caiu e matou 8 em SC" [ref=e217] [cursor=pointer]':
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/negligencias-apontadas-mp-contra-piloto-balao-caiu-matou-8-em-sc.ghtml
                - listitem [ref=e218]:
                  - generic [ref=e219]: "Maçarico sem trava e válvulas de gás abertas: as negligências apontadas pelo MP contra piloto de balão que caiu e matou 8 em SC"
              - link "Justiça manda investigar policiais que atropelaram motociclista que comemorava vitória de Lula em SC" [ref=e221] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/justica-concede-liberdade-motociclista-atropelado-viatura-pm-manda-investigar-agentes-sc.ghtml
                - listitem [ref=e222]:
                  - generic [ref=e223]: Justiça manda investigar policiais que atropelaram motociclista que comemorava vitória de Lula em SC
              - 'link "Mega-Sena 3075: sete apostas de Santa Catarina ficam a 1 número de faturar R$ 294 milhões" [ref=e225] [cursor=pointer]':
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mega-sena-3075-sete-apostas-de-santa-catarina-ficam-a-1-numero-de-faturar-r-294-milhoes.ghtml
                - listitem [ref=e226]:
                  - generic [ref=e227]: "Mega-Sena 3075: sete apostas de Santa Catarina ficam a 1 número de faturar R$ 294 milhões"
              - link "SC registra quatro feminicídios em menos de uma semana; casos crescem 21% em 2026" [ref=e229] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/sc-quatro-feminicidios-menos-uma-semana-casos-crescem-21percent-2026.ghtml
                - listitem [ref=e230]:
                  - generic [ref=e231]: SC registra quatro feminicídios em menos de uma semana; casos crescem 21% em 2026
          - generic [ref=e237]:
            - generic [ref=e238]:
              - heading "Previsão do Tempo" [level=2] [ref=e239]
              - paragraph [ref=e241]: "Oferecido por:"
            - generic [ref=e244]:
              - 'link "Criciúma Probabilidade de chuva: 0% 0mm manhã tarde noite 21ºmax 12ºmin" [ref=e246] [cursor=pointer]':
                - /url: /previsao-do-tempo/sc/criciuma.html
                - generic [ref=e247]: Criciúma
                - generic [ref=e248]: "Probabilidade de chuva: 0% 0mm"
                - generic [ref=e249]:
                  - generic [ref=e250]: manhã
                  - generic [ref=e253]: tarde
                  - generic [ref=e256]: noite
                  - generic [ref=e259]:
                    - generic [ref=e260]: 21ºmax
                    - generic [ref=e261]: 12ºmin
              - paragraph [ref=e263]: Informações meteorológicas fornecidas pelo Climatempo
            - link "Veja a previsão do Climatempo" [ref=e266] [cursor=pointer]:
              - /url: https://www.climatempo.com.br/
        - generic [ref=e277]:
          - generic [ref=e281]:
            - generic [ref=e285]:
              - generic [ref=e286]: "'Feriadão' em Santa Catarina"
              - heading [level=2] [ref=e290]:
                - link [ref=e291] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/dia-do-servidor-publico-ponto-facultativo-e-transferido-para-30-de-outubro-em-sc.ghtml
                  - paragraph [ref=e292]: "Dia do Servidor Público: ponto facultativo é transferido para sexta"
              - link [ref=e294] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/dia-do-servidor-publico-ponto-facultativo-e-transferido-para-30-de-outubro-em-sc.ghtml
              - generic [ref=e297]:
                - text: Há 5 minutos—
                - generic [ref=e298]: Em Santa Catarina
            - generic [ref=e302]:
              - generic [ref=e303]: Estabelecimento foi interditado
              - heading [level=2] [ref=e307]:
                - link [ref=e308] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mulher-morre-outros-pacientes-passam-mal-colonoscopia-clinica-interditada.ghtml
                  - paragraph [ref=e309]: Mulher morre e outros pacientes passam mal após exames em clínica
              - link [ref=e311] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mulher-morre-outros-pacientes-passam-mal-colonoscopia-clinica-interditada.ghtml
              - generic [ref=e314]:
                - text: Há 5 horas—
                - generic [ref=e315]: Em Santa Catarina
            - generic [ref=e319]:
              - generic [ref=e320]: Investigado por embriaguez e desobediência
              - heading [level=2] [ref=e324]:
                - link [ref=e325] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/justica-concede-liberdade-motociclista-atropelado-viatura-pm-manda-investigar-agentes-sc.ghtml
                  - paragraph [ref=e326]: Justiça concede liberdade a motociclista atropelado por viatura da PM
              - link [ref=e328] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/justica-concede-liberdade-motociclista-atropelado-viatura-pm-manda-investigar-agentes-sc.ghtml
              - generic [ref=e331]:
                - text: Há 10 horas—
                - generic [ref=e332]: Em Santa Catarina
              - list [ref=e334]:
                - listitem [ref=e335]:
                  - link "Viatura o atropelou durante comemoração pró-Lula" [ref=e337] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/26/carro-pm-atropela-motociclista-durante-comemoracao-vitoria-lula.ghtml
                - listitem [ref=e338]:
                  - link "Ministério da Justiça e MP pedem esclarecimentos" [ref=e340] [cursor=pointer]:
                    - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/26/ministerio-justica-pede-esclarecimentos-atropelamento-motociclista-florianopolis.ghtml
            - generic [ref=e344]:
              - generic [ref=e345]: Operação da PF
              - heading [level=2] [ref=e349]:
                - link [ref=e350] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/videos-jornal-do-almoco/video/policia-federal-investiga-esquema-de-extracao-ilegal-de-madeira-em-santa-catarina-15134593.ghtml
                  - paragraph [ref=e351]: Servidor público concedia vantagens indevidas para exploração de madeira
              - link [ref=e353] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/videos-jornal-do-almoco/video/policia-federal-investiga-esquema-de-extracao-ilegal-de-madeira-em-santa-catarina-15134593.ghtml
              - generic [ref=e356]:
                - text: Há 3 horas—
                - generic [ref=e357]: Em Jornal do Almoço - SC
            - generic [ref=e370]:
              - generic [ref=e371]:
                - link [ref=e372] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2021/02/01/videos-mais-assistidos-do-g1-sc-nos-ultimos-7-dias.ghtml
                  - paragraph [ref=e373]: Reveja os VÍDEOS mais assistidos do g1 SC...
                - generic [ref=e380] [cursor=pointer]
              - generic [ref=e385]:
                - link "57 seg Viatura da PM atinge motociclista durante comemoração de vitória de Lula em Florianópolis" [ref=e386] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2021/02/01/videos-mais-assistidos-do-g1-sc-nos-ultimos-7-dias.ghtml#video-15129850-id
                  - generic [ref=e387]:
                    - generic [ref=e388]: 57 seg
                    - generic [ref=e399]: Viatura da PM atinge motociclista durante comemoração de vitória de Lula em Florianópolis
                - link "3 min Caixa-preta não registrou áudio de voo em queda de helicóptero com Rick, diz Cenipa" [ref=e400] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2021/02/01/videos-mais-assistidos-do-g1-sc-nos-ultimos-7-dias.ghtml#video-15112829-id
                  - generic [ref=e401]:
                    - generic [ref=e402]: 3 min
                    - generic [ref=e413]: Caixa-preta não registrou áudio de voo em queda de helicóptero com Rick, diz Cenipa
                - link "2 min Piloto de balão que caiu em SC e matou 8 pessoas é denunciado por homicídio culposo" [ref=e414] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2021/02/01/videos-mais-assistidos-do-g1-sc-nos-ultimos-7-dias.ghtml#video-15130722-id
                  - generic [ref=e415]:
                    - generic [ref=e416]: 2 min
                    - generic [ref=e427]: Piloto de balão que caiu em SC e matou 8 pessoas é denunciado por homicídio culposo
            - generic [ref=e431]:
              - generic [ref=e432]: Blumenau
              - heading [level=2] [ref=e436]:
                - link [ref=e437] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/oktoberfest/noticia/2026/10/27/quem-e-a-nova-rainha-da-oktoberfest-blumenau.ghtml
                  - paragraph [ref=e438]: "Leitora e jogadora de vôlei: quem é a nova rainha da Oktoberfest"
              - link [ref=e440] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/oktoberfest/noticia/2026/10/27/quem-e-a-nova-rainha-da-oktoberfest-blumenau.ghtml
              - generic [ref=e443]:
                - text: Há 12 horas—
                - generic [ref=e444]: Em Oktoberfest
            - generic [ref=e448]:
              - generic [ref=e449]: Mega-Sena 3075
              - heading [level=2] [ref=e453]:
                - link [ref=e454] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mega-sena-3075-sete-apostas-de-santa-catarina-ficam-a-1-numero-de-faturar-r-294-milhoes.ghtml
                  - paragraph [ref=e455]: Sete apostas de SC ficam a 1 número de faturar R$ 294 milhões
              - link [ref=e457] [cursor=pointer]:
                - /url: https://g1.globo.com/sc/santa-catarina/noticia/2026/10/27/mega-sena-3075-sete-apostas-de-santa-catarina-ficam-a-1-numero-de-faturar-r-294-milhoes.ghtml
              - generic [ref=e460]:
                - text: Há 9 horas—
                - generic [ref=e461]: Em Santa Catarina
            - generic [ref=e468]:
              - generic [ref=e469]:
                - link [ref=e470] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2026/10/27/videos-jornal-do-almoco-florianopolis-de-terca-feira-27-de-outubro-de-2026.ghtml
                  - paragraph [ref=e471]: "VÍDEOS: Jornal do Almoço Florianópolis de terça-feira, 27 de outubro de 2026..."
                - generic [ref=e478] [cursor=pointer]
              - generic [ref=e483]:
                - link "2 min Catarinense entre as poderosas do Agro" [ref=e484] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2026/10/27/videos-jornal-do-almoco-florianopolis-de-terca-feira-27-de-outubro-de-2026.ghtml#video-15134709-id
                  - generic [ref=e485]:
                    - generic [ref=e486]: 2 min
                    - generic [ref=e497]: Catarinense entre as poderosas do Agro
                - link "4 min Mulher morre após exame de endoscopia em Ibirama" [ref=e498] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2026/10/27/videos-jornal-do-almoco-florianopolis-de-terca-feira-27-de-outubro-de-2026.ghtml#video-15134635-id
                  - generic [ref=e499]:
                    - generic [ref=e500]: 4 min
                    - generic [ref=e511]: Mulher morre após exame de endoscopia em Ibirama
                - link "4 min Vem aí a Taça das Favelas" [ref=e512] [cursor=pointer]:
                  - /url: https://g1.globo.com/sc/santa-catarina/edicao/2026/10/27/videos-jornal-do-almoco-florianopolis-de-terca-feira-27-de-outubro-de-2026.ghtml#video-15134699-id
                  - generic [ref=e513]:
                    - generic [ref=e514]: 4 min
                    - generic [ref=e525]: Vem aí a Taça das Favelas
          - button "Mostrar mais conteúdos" [ref=e532] [cursor=pointer]: Mostrar mais
    - contentinfo [ref=e538]:
      - generic [ref=e541]:
        - generic [ref=e542]:
          - generic [ref=e543]:
            - link [ref=e546] [cursor=pointer]:
              - /url: http://g1.globo.com
            - link "Últimas Notícias" [ref=e550] [cursor=pointer]:
              - /url: /ultimas-noticias.html
          - generic [ref=e551]: Globo Notícias
        - generic [ref=e553]:
          - generic [ref=e554]: © Copyright 2000-2026 Globo Comunicação e Participações S.A.
          - list [ref=e555]:
            - listitem [ref=e556]:
              - link "princípios editoriais" [ref=e557] [cursor=pointer]:
                - /url: https://g1.globo.com/principios-editoriais-do-grupo-globo.html
            - listitem [ref=e558]:
              - link "política de privacidade" [ref=e559] [cursor=pointer]:
                - /url: https://privacidade.globo.com/privacy-policy/
            - listitem [ref=e560]:
              - link "minha conta" [ref=e561] [cursor=pointer]:
                - /url: https://minhaconta.globo.com
            - listitem [ref=e562]:
              - link "anuncie conosco" [ref=e563] [cursor=pointer]:
                - /url: https://globoads.globo.com/
  - navigation [ref=e564]:
    - list [ref=e565]:
      - listitem [ref=e566]:
        - generic [ref=e567]: Editorias
        - list
      - listitem [ref=e570]:
        - link "Jogos" [ref=e571] [cursor=pointer]:
          - /url: https://g1.globo.com/jogos
        - list
      - listitem [ref=e574]:
        - link "Eleições 2026" [ref=e575] [cursor=pointer]:
          - /url: https://g1.globo.com/politica/eleicoes/2026/
      - listitem [ref=e577]:
        - link "Guia de Compras" [ref=e578] [cursor=pointer]:
          - /url: https://g1.globo.com/guia/guia-de-compras/
        - list
      - listitem [ref=e581]:
        - link "Carros" [ref=e582] [cursor=pointer]:
          - /url: https://g1.globo.com/carros/
      - listitem [ref=e584]:
        - generic [ref=e585]: Regiões
        - list
      - listitem [ref=e588]:
        - generic [ref=e589]: Telejornais
        - list
      - listitem [ref=e592]:
        - link "GloboNews" [ref=e593] [cursor=pointer]:
          - /url: https://g1.globo.com/globonews/
        - list
      - listitem [ref=e596]:
        - link "Blogs e Colunas" [ref=e597] [cursor=pointer]:
          - /url: https://g1.globo.com/blogs-e-colunas/
      - listitem [ref=e599]:
        - generic [ref=e600]: Podcasts
        - list
      - listitem [ref=e603]:
        - generic [ref=e604]: Serviços
        - list
      - listitem [ref=e607]:
        - link "Vídeos" [ref=e608] [cursor=pointer]:
          - /url: https://g1.globo.com/videos/
      - listitem [ref=e610]:
        - link "Webstories" [ref=e611] [cursor=pointer]:
          - /url: https://g1.globo.com/webstories/
      - listitem [ref=e613]:
        - generic [ref=e614]: Conteúdos publicitários
        - list
      - listitem [ref=e617]:
        - generic [ref=e618]: "--"
      - listitem [ref=e620]:
        - link "Princípios editoriais" [ref=e621] [cursor=pointer]:
          - /url: https://g1.globo.com/principios-editoriais-do-grupo-globo.html
      - listitem [ref=e623]:
        - link "Sobre o g1" [ref=e624] [cursor=pointer]:
          - /url: https://g1.globo.com/institucional/sobre-o-g1.ghtml
      - listitem [ref=e626]:
        - link "App g1" [ref=e627] [cursor=pointer]:
          - /url: https://especiais.g1.globo.com/app-g1/
      - listitem [ref=e629]:
        - link "Equipe" [ref=e630] [cursor=pointer]:
          - /url: https://g1.globo.com/institucional/equipe-do-g1.ghtml
      - listitem [ref=e632]:
        - link "Entre em contato" [ref=e633] [cursor=pointer]:
          - /url: https://g1.globo.com/institucional/vc-no-g1-como-entrar-em-contato-enviar-videos-fotos-e-mensagens.ghtml
      - listitem [ref=e635]:
        - link "Termos de uso do g1" [ref=e636] [cursor=pointer]:
          - /url: https://g1.globo.com/institucional/termos-de-uso-do-g1.ghtml
      - listitem [ref=e638]:
        - generic [ref=e639]: Esporte
        - list
      - listitem [ref=e642]:
        - generic [ref=e643]: Entretenimento
        - list
      - listitem [ref=e646]:
        - link "Receitas" [ref=e647] [cursor=pointer]:
          - /url: https://receitas.globo.com/
      - listitem [ref=e649]:
        - link "Globo.com" [ref=e650] [cursor=pointer]:
          - /url: https://www.globo.com/
      - listitem [ref=e652]:
        - link "Ajuda Globo" [ref=e653] [cursor=pointer]:
          - /url: https://ajuda.globo.com/
      - listitem [ref=e655]:
        - link "Carreiras Globo" [ref=e656] [cursor=pointer]:
          - /url: https://vempraglobo.g.globo
      - listitem [ref=e658]
      - listitem [ref=e659]:
        - list [ref=e660]:
          - listitem [ref=e661]
          - listitem [ref=e665]:
            - link "grupo globo" [ref=e666] [cursor=pointer]:
              - /url: http://grupoglobo.globo.com/
  - generic [ref=e675]:
    - generic [ref=e677]:
      - text: Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você está ciente dessa funcionalidade. Informamos ainda que atualizamos nosso
      - link "Aviso de Privacidade" [ref=e678] [cursor=pointer]:
        - /url: https://privacidade.globo.com/privacy-policy/
      - text: . Conheça nosso
      - link "Portal da Privacidade" [ref=e679] [cursor=pointer]:
        - /url: https://privacidade.globo.com/
      - text: e veja o nosso novo Aviso.
    - button "Prosseguir" [ref=e681] [cursor=pointer]
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