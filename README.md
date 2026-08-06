# 1-MEL Clan Hub

Site estatico do clan 1-MEL com anuncios, temporadas, estatisticas e agenda.

## Atualizar conteudo

Edite `data/site-data.json` e rode:

```powershell
.\scripts\daily-update.ps1
```

O script faz commit e push das alteracoes para o GitHub. Com GitHub Pages ativo, o site publica a versao nova automaticamente.

## Publicacao

Este projeto publica pelo GitHub Pages usando o branch `gh-pages`. A branch
`main` guarda o codigo principal, e `gh-pages` recebe a versao publicada.
