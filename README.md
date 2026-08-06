# 1-MEL Clan Hub

Site estatico do clan 1-MEL com anuncios, temporadas, estatisticas e agenda.

## Atualizar conteudo

Edite `data/site-data.json` e rode:

```powershell
.\scripts\daily-update.ps1
```

O script faz commit e push das alteracoes para o GitHub. Com GitHub Pages ativo, o site publica a versao nova automaticamente.

## Publicacao

Este projeto foi pensado para GitHub Pages:

1. Abra o repositorio no GitHub.
2. Va em Settings > Pages.
3. Em Source, selecione `Deploy from a branch`.
4. Escolha `main` e `/root`.

