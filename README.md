# Óticas Gomes

Site institucional e catálogo online da Óticas Gomes, rede de óticas do Rio Grande do Norte — vitrine de produtos, unidades e atendimento integrados em uma única plataforma.

## Stack

HTML5, CSS3 (variáveis nativas, sem framework) e JavaScript puro. Sem build step: é só abrir ou servir os arquivos estáticos.

## Estrutura

```
.
├── index.html                 # Página inicial
├── frontend/
│   ├── css/
│   │   ├── global.css         # Base compartilhada por todas as páginas (header, footer, botões, etc.)
│   │   ├── home.css           # Exclusivo da página inicial
│   │   ├── blog.css           # Cards de notícias (index + página de notícias)
│   │   ├── pages.css          # Chrome comum das subpáginas (cabeçalho de página, blocos de texto)
│   │   ├── sobre.css          # Exclusivo de sobre.html
│   │   ├── units.css          # Exclusivo de unidades.html
│   │   └── contato.css        # Exclusivo de contato.html
│   ├── js/
│   │   ├── main.js            # Comportamento comum a todas as páginas
│   │   └── home.js            # Exclusivo da página inicial (scrollspy, contadores)
│   └── html/
│       ├── sobre.html         # História, missão e valores
│       ├── unidades.html      # Lista das unidades físicas
│       ├── noticias.html      # Notícias completas
│       └── contato.html       # Canais de atendimento e horário
```

## Como rodar localmente

Qualquer servidor estático funciona. Exemplo:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Licença

Ver [LICENCE.md](LICENCE.md).
