# Antônio Jefferson — portfólio

Página pessoal de produtos. Software Engineer e CEO em São Luís, MA.

**Produtos na página:** [Fominha Delivery](https://fominhadelivery.com) ·
[UtilDev](https://utildev.com.br/) · [MidArt](https://midart.com.br/) · DuFin · LavraDocs

## Como rodar

Não tem build. Abra o `index.html` no navegador, ou sirva a pasta:

```bash
python3 -m http.server 8000
```

## Estrutura

```
index.html        marcação e meta tags (SEO + Open Graph)
package.json      só fixa o Node 24.x para o deploy; o site não usa Node
css/style.css     tokens no :root, componentes abaixo
js/main.js        carrossel dos produtos (scroll-snap + setas + bolinhas)
img/eu.png        foto de perfil
img/favicon.svg   ícone
```

## Decisões

- **Sem dependência de runtime.** Ícones são SVG inline; só as fontes vêm de fora
  (Google Fonts). Nada quebra se um CDN cair.
- **Tema claro e escuro** por tokens CSS, seguindo o sistema do visitante.
- **Carrossel com scroll-snap nativo.** Arrastar funciona mesmo sem JavaScript;
  as setas e as bolinhas são um acréscimo.
- **Acessibilidade:** foco visível, rótulos nos controles e `prefers-reduced-motion`
  respeitado.
