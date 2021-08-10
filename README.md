# FaqStyle

Hoja de estilos by [@FaqToff](https://faqtoff.com)

## Indice
- [Importar](https://github.com/faqtoff/FaqStyle/blob/main/README.md#importar-todos-los-modulos)
- Modulos
  - Alerts
  - Banner
  - Card
  - -Forms
  - Modal
  - Navbar
  - NavbarAside
  - Progressbar
- Utilidades
  - Colors
  - Conteiners
  - Display
  - Grid
  - Text
  - Margin
  - Padding
## Importar todos los modulos:
- Copia el siguiente codigo en tu `index.css` para importar los diferentes modulos
- Recomendamos importar **SOLO** los modulos que necesites y el Core
```css
/* Componentes */
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Alert/Alert.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Banner/BannerFullScreen.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Button/Button.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Card/Card.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Forms/Forms.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/FaqFooter/FaqFooter.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Modal/Modal.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Navbar/Navbar.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Navbar/NavbarAside.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Progressbar/Progressbar.css");

/* Utilidades */
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Colors/Colors.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Conteiners.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Display.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Grid.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Size.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Text.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Margin.css");
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Padding.css");

/* CORE */
@import url("https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/FaqStyle.css");
```
- Tambien se pueden agregar en la etiqueta `<header>` del html de la siguiente manera
```html
<!-- Componentes-->
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Alert/Alert.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Banner/BannerFullScreen.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Button/Button.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Card/Card.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Forms/Forms.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/FaqFooter/FaqFooter.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Modal/Modal.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Navbar/Navbar.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Navbar/NavbarAside.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Progressbar/Progressbar.css">
<!-- Utilidades-->
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Colors/Colors.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Conteiners.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Display.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Grid.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Size.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Text.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Margin.css">
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/Padding.css">
<!-- CORE-->
<link rel="stylesheet" href="https://gitcdn.link/repo/faqtoff/FaqStyle/main/src/FaqStyle/FaqStyle.css">
```
