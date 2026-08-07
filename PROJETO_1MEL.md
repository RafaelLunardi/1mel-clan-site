# Projeto 1-MEL Clan Site

Briefing para outra IA continuar o projeto sem perder contexto.

## Visao geral

Este projeto e um site estatico do clan 1-MEL, publicado no GitHub Pages.
O objetivo e funcionar como hub oficial do clan, com visual dark, preto e dourado, detalhes de colmeia/hexagonos e paginas para noticias, agenda e sala de trofeus.

URL publica:
https://rafaellunardi.github.io/1mel-clan-site/

Repositorio:
https://github.com/RafaelLunardi/1mel-clan-site

Grupo Steam usado como referencia:
https://steamcommunity.com/groups/1MEL

## Identidade visual

Direcao visual definida pelo usuario:

- Tema dark.
- Preto como base.
- Dourado como cor de destaque.
- Estilo de clan/gaming, com ar premium.
- Padrao de colmeia/hexagonal no fundo, falhado e discreto.
- Evitar blocos claros, cards genericos ou visual muito chapado.
- Usar imagens reais/logos dos jogos nos cards.
- O usuario valida visualmente com screenshots antes de considerar pronto.

Importante: o usuario nao quer explicacoes longas durante ajustes visuais. Ele prefere que a alteracao seja feita, publicada e validada.

## Estrutura principal

Arquivos de pagina:

- `index.html`: pagina principal.
- `agenda.html`: agenda do clan.
- `trofeus.html`: entrada geral da sala de trofeus.
- `trofeus-cs2.html`: sala de trofeus / CS2.
- `trofeus-f1.html`: sala de trofeus / F1.
- `trofeus-rocket.html`: sala de trofeus / Rocket League.

Arquivos centrais:

- `styles.css`: praticamente todo o visual do site.
- `app.js`: renderizacao dinamica de dados, membros, agenda e abas do CS2.
- `data/site-data.json`: dados gerais do clan, membros, anuncios, temporadas, estatisticas e eventos.
- `assets/`: imagens usadas no site.
- `scripts/daily-update.ps1`: script local de atualizacao diaria.
- `scripts/install-daily-task.ps1`: instalador da tarefa diaria local.

Pastas que nao devem ser commitadas:

- `work/`: prints, perfis temporarios do navegador e validacoes locais.
- `outputs/`: arquivos auxiliares/rascunhos.

## Publicacao

O site e estatico e esta sendo publicado no GitHub Pages.

Fluxo usado ate agora:

1. Fazer alteracoes locais.
2. Validar com screenshot local no Chrome headless.
3. Commitar no `main`.
4. `git push origin main`.
5. `git push origin HEAD:gh-pages --force`.
6. Aguardar o GitHub Pages atualizar.
7. Validar a URL publica com screenshot.

O usuario pediu explicitamente para sempre validar antes de finalizar uma tarefa.

## Pagina principal

A pagina principal representa o clan 1-MEL.

Membros do clan:

- Rafael, lider/founder.
- Bassa.
- Zana.
- Felbyz.
- Fer.
- Dudu.
- Gabriel.

Texto do Rafael:

> Aparece nos momentos decisivos e transforma round complicado em historia.

Jogos do clan:

- CS2.
- F1.
- Rocket League.

Contato do clan:

- Instagram.
- Discord.
- Pagina Steam.
- Agenda.
- Sala de trofeus.

O card de contatos deve mostrar so os titulos em dourado, sem subtitulos.

## Sala de trofeus

A sala de trofeus tem navegacao por jogo usando 3 cards pequenos:

- CS2.
- F1.
- Rocket League.

Os cards pequenos devem usar imagens como fundo e nao devem mostrar texto por cima quando a imagem ja contem logo/titulo.

Estado atual dos cards:

- CS2: usa `assets/counter-strike-2-logo-title.png`.
- F1: usa `assets/f1-card-formula.png`.
- Rocket League: usa `assets/rocket-league-logo-card.png`.

## Pagina CS2

Arquivo:

- `trofeus-cs2.html`

Estado atual:

- O hero mostra uma imagem limpa no titulo: `assets/cs2-title-logo-clean.png`.
- O texto "Rounds decisivos, clutches e campanhas competitivas da colmeia no Counter-Strike 2." foi removido.
- O card pequeno de CS2 usa a imagem laranja `assets/counter-strike-2-logo-title.png`.
- O card pequeno de CS2 nao deve ter texto por cima.

Funcionalidade especial:

- Existe um submenu de membros na pagina CS2.
- Abas: `All`, `Rafael`, `Bassa`, `Zana`, `Felbyz`, `Fer`, `Dudu`, `Gabriel`.
- `All` mostra uma planilha comparativa de medalhas, com nomes na esquerda e medalhas na linha.
- Cada aba individual mostra as medalhas daquele membro.
- A aba Rafael tambem mostra estatisticas somadas das 4 temporadas.

Roles/titulos dos membros no CS2:

- Rafael: AWPer / IGL / Suporte.
- Felbyz: Second Fragger.
- Bassa: Lurker.
- Fer: Ancora.
- Dudu: Rifler / Ancora.
- Zana: Entry Fragger / Rifler.
- Gabriel: Rifler / Entry Fragger.

Estatisticas do Rafael, soma das 4 temporadas:

- Kills: 37.624.
- Mortes: 33.333.
- K/D geral: 1,129.
- MVPs: 5.515.
- 5K: 50.
- 4K: 422.
- 3K: 2.174.

As medalhas de CS2 ficam em `assets/` com nomes por membro e temporada, por exemplo:

- `assets/cs2-season-7-medal.png`
- `assets/cs2-felbyz-season-7-medal.png`
- `assets/cs2-bassa-season-3-medal.png`
- `assets/cs2-zana-season-4-medal.png`

Os dados das abas CS2 ficam hardcoded em `app.js`, no array `cs2Members`.

## Pagina F1

Arquivo:

- `trofeus-f1.html`

Estado atual:

- A pagina usa "F1", nao "F1 26".
- O titulo grande e uma imagem limpa: `assets/formula-1-logo-title-clean.png`.
- O texto abaixo do titulo foi removido.
- O card pequeno de F1 usa `assets/f1-card-formula.png`.
- O card pequeno de F1 nao mostra texto por cima.
- A sala de trofeus esta vazia de proposito, porque o clan ainda nao tem trofeus.

Texto atual da exposicao:

> A sala ainda esta vazia, mas ja esta pronta para receber as primeiras conquistas da divisao de F1 da 1-MEL.

Observacao de requisito:

- O usuario pediu para tratar como F1 de forma geral, nao apenas F1 26.
- A ideia visual da pagina F1 e uma exposicao de trofeus/museu escuro com vitrines, spots de luz e placas reservadas.

## Pagina Rocket League

Arquivo:

- `trofeus-rocket.html`

Estado atual:

- O card pequeno de Rocket League usa `assets/rocket-league-logo-card.png`.
- O texto do card foi escondido para aparecer so a imagem.
- O hero ainda usa o titulo textual grande "Rocket League" e fundo do jogo.

## Dados do site

O arquivo `data/site-data.json` alimenta:

- Data de atualizacao.
- Dados do grupo.
- Membros da pagina principal.
- Anuncios.
- Temporadas/jogos do clan.
- Estatisticas gerais.
- Eventos da agenda.
- Estatisticas antigas/gerais da sala de trofeus.
- Trofeus genericos antigos.

Algumas partes da sala de trofeus por jogo sao HTML/CSS estatico, nao apenas JSON.
As abas de CS2 sao geradas no `app.js`.

## Cuidados importantes

- Sempre validar visualmente antes de finalizar.
- Sempre publicar no GitHub Pages quando a alteracao for para o site.
- Usar query string nova no CSS quando alterar visual, exemplo:
  `styles.css?v=nome-da-mudanca-20260807`
- Nao commitar `work/` nem `outputs/`.
- Nao reverter mudancas do usuario.
- Evitar mexer em areas nao relacionadas ao pedido.
- Se o usuario falar "card", normalmente ele esta falando dos cards pequenos de navegacao dos jogos na sala de trofeus.
- Se o usuario falar "titulo", normalmente ele esta falando do hero grande da pagina do jogo.

## Estado visual mais recente

Cards pequenos da sala de trofeus:

- CS2: imagem laranja de Counter-Strike 2, sem texto sobreposto.
- F1: imagem vermelha Formula 1, sem texto sobreposto.
- Rocket League: imagem Rocket League azul/laranja, sem texto sobreposto.

Titulos dos heroes:

- CS2: marca branca "CS" com jogador, transparente.
- F1: logo branco Formula 1, transparente.
- Rocket League: ainda texto grande normal.

Ultimos commits relevantes:

- `dd94cf5`: moveu imagem do CS2 para o card pequeno.
- `4928207`: atualizou imagem do card Rocket League.
- `c4e68f9`: colocou marca CS2 como titulo do hero.
- `5a9a7f5`: removeu texto abaixo do titulo CS2.

## Como continuar

Para uma IA continuar:

1. Leia este arquivo.
2. Leia `trofeus-cs2.html`, `trofeus-f1.html`, `trofeus-rocket.html`, `styles.css` e `app.js`.
3. Para ajustes visuais, altere HTML/CSS de forma pontual.
4. Rode validacao local com screenshot.
5. Commite so os arquivos relevantes.
6. Publique em `main` e `gh-pages`.
7. Valide o Pages antes de responder como concluido.
