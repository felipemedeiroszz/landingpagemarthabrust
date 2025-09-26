# Site - Método de Cronograma Capilar

Projeto estático que replica o layout da imagem enviada: herói com título e CTA, seção "Sobre mim", bloco de "Detalhes" e seção de preço com destaque "R$ 39,90".

## Como usar
- Abra `index.html` no navegador.
- Edite textos diretamente no `index.html`.
- Ajuste estilos em `styles.css`.
- As imagens são SVGs dentro de `assets/`:
  - `assets/hero-figure.svg` – placeholder da foto à direita do herói (substitua por uma foto real se desejar).
  - `assets/illustration-large.svg` – imagem grande da seção Sobre.
  - `assets/illustration-card.svg` – ilustração usada nos 3 cards.

Para trocar por uma foto real, substitua o `src` da imagem no bloco `.hero__media` por um arquivo seu, por exemplo `assets/foto-martha.png`.

## Estrutura
```
/ (raiz)
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
└─ assets/
   ├─ hero-figure.svg
   ├─ illustration-large.svg
   └─ illustration-card.svg
```

## Customizações rápidas
- Cores principais: edite as variáveis CSS no topo do `styles.css`.
- Tipografia: fontes `Inter` e `Poppins` no `<head>` do `index.html`.
- Links dos botões: ajuste os `href` dos botões "Comprar agora" e "Compre Agora" para seu checkout.

## Licença
Uso livre para fins pessoais e comerciais. Sem garantias.
