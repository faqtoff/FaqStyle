# FaqStyle

Hoja de estilos by Facundo Toffolo Pasquini

Copia la carpeta faqstyle en la raiz de tu pagina y luego agrega este codigo en la etiqueta `<header>` de tu pagina html
```html
<!-- CSS FaqStyle -->
<link rel="stylesheet" href="faqstyle/normalize.css">
<link rel="stylesheet" href="faqstyle/style.css">
```
El siguiente codigo es opcional. Sera requerido por algunas funciones como `ventana`, debes copiarlo al final de la etiqueta `<body>` junto con los demas scripts
```
<!-- JS FaqStyle -->
<script src="/css/faqstyle/style.js"></script>
```

## ROOT

Opciones editables desde js

```js
document.documentElement.style.setProperty('--colorheader', nuevovalor);
```

```css
    --main-font: 'Raleway', sans-serif;
    --color-header: #ffffff;
    --color-navbar: #ffffff;
    --color-navbar-a: #212121;
    --color-navbar-hover-a: #ffffff;
    --color-footer: #ffffff;
    --color-bg-botones: #ffffff;
    --dd-color: #000000;
```

## UTILIDADES

- `seccion` -> Otorga margenes superiores e inferiores a las secciones de la pagina
- `contenedor` -> Crea un contenedor "Fluido". Da margenes a la derecha e izquierda de la pagina
- `centrar-txt` -> Centra el texto
- `fw-300` -> Font weigth
- `alinear-derecha` -> Posiciona el contenido a la derecha de la pantalla
- `contenido-centrado` -> Posiciona el contenido al centro

## BOTONES

- `boton`
- `ddboton`
- `dd-content`


## MODAL

- `ventana`
- `ventana-dialog`
- `ventana-header`
- `ventana-footer`
