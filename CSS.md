# CSS
Hojas de estilo en cascada.
- [Anatomia](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#anatomia-del-css)
- [Agregar CSS a una pagina HTML](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#agregar-css-a-una-pagina-html)
- [Como escribir css](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#como-escribir-css)
- [Selectores](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#selectores)
  - [Combinacion de descendentes](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#combinacion-de-descendentes)
  - [Todos los hijos](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#todos-los-hijos)
  - [Especificidad](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#especificidad)
- [Pseudoselectores](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#pseudoselectores)
- [Unidades de medida](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#unidades-de-medida)
  - [Normalize.css](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#normalizecss)
- [Colores](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#colores-en-css)
- [Propiedades del texto: Tamanos y Tipos de fuente](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#propiedades-del-texto)
- [Posicion de Objetos](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#posicionando-objetos)
  - [Flexbox](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#posicionando-objetos)
- [Adaptar disenos a distintos dispositivos](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#responsive-web-design)

Actualmente se encuentra en la version CSS3

## Anatomia del CSS
- Va a constar de un selector. Estos pueden ser etiquetas `html`, por ejemplo `p` selecciona un parrafo, la misma etiqueta de `<html>`. 
  De este modo se puede seleccionar:
   - `div`
   - `img`
   - `seccion`
   - `header`
   - `nav`
   - `span`
   - Etc. 
  Se profundizara en [Selectores](https://github.com/facutoff/Desarrollo-Web/blob/main/css.md#selectores)
  
- Luego, el codigo a ejecutar (codigo css) se colocara dentro de unas llaves `{}`
  ```css
        p {
      
        }
  ```
- El codigo css consiste en conjuntos `propiedad: valor;`
  ```css
        p {
        color: blue;
        }
  ```
  
Se conoce como 'Hoja de estilo en cascada' ya que siempre toma el ultimo valor declarado para una propiedad y etiqueta en particular. Por ejemplo:
  ```css
        p {
        color: blue;
        }
        p {
        color: red;
        }
  ```
En el codigo de arriba la propiedad que tomara `p` es `color: red;`.

## Agregar CSS a una pagina HTML

Existen dos maneras:
- Etiqueta `<style>`: Va directamente en el codigo `<html>` dentro de la seccion `<head>`. No es muy recomendada ya que el mantenimiento es complicado y exige muchas lineas de codigo al no poderlas compartir facilmente con otros archivos `<html>`.
  ```html
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initisl-scale=1.0">
       <title>Titulo de la Pagina</title>
       
       <style>
          h1 {
              text-align: center;
              }
         nav {
              
              }
       </style>
       
     </head>
  ```
- En una hoja externa, por ej: `style.css`, donde se va a incluir el codigo css. Luego vinculas la hoja en el `<head>` del `<html>`.
  ```html
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initisl-scale=1.0">
       <title>Titulo de la Pagina</title>
       
       <link href="css/style.css" rel="stylesheet" type="text/css">
       
     </head>
  ```
  Donde:
  - `href` es la ruta del archivo, que en este caso se encuentra en `css/`; 
  - `rel` es la relacion que tiene el archivo con el `<html>` =, en este caso `stylesheet` ya que es una hoja de estilos;
  - `type` que indica el tipo (esta ultima no es necesaria.
  
  Para que carge mas rapido y agilizar el sitio se puede agregar el siguiente codigo ANTES del link a la hoja css:
  ```html
      <link rel="preload" href="css/style.css" as="style">
  ```

## Como escribir css
- BEM -> Bloques, Elementos, Modificadores
  - Bloque `.card{}` se define con la clase principal
  - Elementos `.card__titulo{}` y/o `.card__boton{}` son elementos del bloque `.card{}`
  - Modificador `.card__boton--actico{}` modifica al elemenro `.card__boton{}`
    ```css
    .card {}
    .card__titulo {}
    .card__imagen {}
    .card__boton {}
    .card__botono--activo {}
    ```
- Utility First -> Se crean clases con una sola propiedad que define lo que haria. Por ejemplo:
  ```css
  .text-center {}
  .color-red-100 {}
  .bg-primario {}
  .p-2 {}
  .m-2 {}
  ```
- Modulo -> Se selecciona una clase 'Padre' y luego seleccionas las etiquetas `<html>` que pertenezan al padre. Por ejemplo:
  ```css
  .card {}
  .card h2 {}
  .card img {}
  .card a{}
  ```
  - Pseudoclase o evento css.
    - `hover` se usa para modificar el elemento cuando se posiciona el cursor sobre el.
      ```css
      .navegacion a:hover {
      background-color: var(--primario);
      color: var(--oscuro);
      }
      ```
      Este codigo le cambia el color de fondo al elemenco a `--primario` y el color del texto a `--oscuro` cuando te posicionas sobre el.
    - `visited` se usa para cambiar de color el enlace cuando se visita
      ```css
      .navegacion a:visited {
      color: red;
      }
      ```
    - `focus`
      ```css
      .navegacion a:focus {
      color: red;
      }
      ```
    
Se puede usar mas de un modo en un solo proyecto

## Selectores
- Selector de elemento -> Selecciona un elemento en base a la etiqueta (como el explicado en la introduccion). Selecciona todos los elementos con esa etiqueta
- Selector de clase -> Son reutilizables e inician con un punto `.cliente {}`. Selecciona a todos los elementos que contengan esa clase
- Selector de ID -> Se pueden tener multiples por pagina pero no pueden repetirse. Inicia con un numeral `#cliente {}`
- Selector de Atributo -> Selecciona un elemento dependiendo el atributo que tenga. `[src="logo.jpg"] {}` Selecciona una imagen cuyo surce sea _logo.jpg_

### Combinacion de descendentes
Selecciona los elementos hijos cuyo padre sea una clase (o ID) en especifico. Ej:
```css
   .cliente .nombre {
    color: blue;
    }
```
Este aplica el css a los elementos que contengan la clase `nombre` y pertenezcan a un elemento superior de clase `cliente`

Este aplica el css a los parrafos que pertenezcan a un elemento superior de clase `cliente`

### Todos los hijos
Aplica la regla a todos los parrafos hijos de algo que tenga la clase cliente. Este puede ser un `<p>`; un `<div>`; un `<seccion>`; etc.
```css
   .cliente > p {
    color: blue;
    }
```
### Especificidad
La especificidad es como el navegador va a mostrar el css de acuerdo a que tan especifico es el selector que hemos creado.
CSS es en cascada, eso no significa que si un selector aparece despues sera tomado en cuenta sino mas bien su especificidad
Que valores seran tomado en cuenta por el navegador?
```css
  p {
  color: blue;
  }
  p {
  color: red;
  }
```
El color que se termina mostrando al ejecutar el codigo de arriba es `red` ya que ambostienen el mismo selector, por lo tanto la misma especificidad, entonces se aplica la regla de cascada.

```css
  p.parrafo {
  color: blue;
  }
  p{
  color: red;
  }
```
Aqui se va a mostrar el color azul sobre el color rojo, ya que el selector de arriba es mas especifico.

```css
  p#parrafo {
  color: blue;
  }
  p{
  color: red!important;
  }
```
Se tendra en cuenta siempre como principal aquel que tenga `!important`.
> Si un elemento tiene un selector mas especifico, no importa donde se haya declarado, CSS decidira por su especificidad.

## Pseudoselectores
Inician con dos puntos. No existen en el `<html>`. Ej `:root`:
```css
  :root {
    --blanco: #ffffff;
    --oscuro: #212121;
  }
```
No existe como tal en el html pero permite almacenar variables en el css como _Custom Propertys_. Las variables las definis vos con `--`
Para seleccionarlas despues se pone del lado del `valor;` lo siguiente: `var(--blanco)`


## Unidades de medida
- Pixeles `px`
- EM `em` - `Xem` es X veces el tamano del padre. `1em`; `2em`; etc.
- Rem `rem`- Relativo al documento.
  Para que Rem funcione debe resetearse el tamano del html y del body:"
  ```css
    html {
          font-size: 62.5%;
          }
    body {
          font-size: 16px;
          }
  ```
  Lo que realiza este codigo es convertir 1rem a 10px
  
  ### Normalize.css
  
  [Descarga](http://necolas.github.io/normalize.css/)

## Colores en CSS
  - Hexadecimal `hex`. De tres o seis digitos #000 o #000000
  - Nombre `name`. Por ejemplo `color:black;`
  - HSL `hsl()`.  Se puede usar `hsla()` para transparencia siendo a el canal aplpha 
  - RGB (Read Green Blue) `rgb()`. Se puede usar `rgba()` para transparencia siendo a el canal aplpha

## Propiedades del texto
- Fuente -> `font-family: valor, valor2, valor3;` 
  Puedes anadir fuentes externas. [GoogleFonts](https://fonts.google.com/)
- Disposicion -> `text-align:valor;`, donde `valor;` pueden ser:
  - `center;` Para centrar
  - `end;` Alineado al final
  - `justify;` Para justificarlo
  - `left;` Alineado a la izquierda _(Defult)_
  - `start;` Alineado al inicio
  - `inherit;`
  - `initial;`
  - `unset;`
- Color -> `color: valor;`. Cambia el color del texto
- Transformar -> `text-transform:valr;`. Los valores que puede tomar son:
  - `capitalize;`
  - `lowercase;`
  - `none;`
  - `uppercase;`
  - `inherit;`
  - `initial;`
  - `unset;`
- Tamano -> `font-size: valor;`. Se le asigna ese tamano a la fuente del texto. Puede ser en rem, em o px.
  Se recomienda mas usar `rem` que `px` (pixeles)
- Grosor -> `font-weight`. Le asigna el grosor de la letra. Para negrita usar `bold;`'
  ```css
  font-weight: 700;
  font-weigth: bold;
  ```

## Posicionando Objetos
### Flexbox
Modelo unidimensional para crear layouts. Corre de Izquierda a Derecha o desde Arriba hacia Abajo. Es especialmente disenado para alinear elementos en los disenos. No anade efectos de animacion, ni textos. Es una tecnologia utilizada unicamente para layouts y sustituye a los `floats` o `table-cell`

Para alinear objetos hay que aplicar el sifuiente css en el contenedor padre de dichos elementos:
```css
display: flex:
```
Esto lo que hace es habilitar flexbox en dicho contenedor.

```css
flex-direction: row;
```

Tiene 2 ejes: 
- Fila/(row) (izq -> der.) Este es aplicado por default al definir `display: flex;`
  - Los elementos hijos se colocaran de i-d uno junto al otro 
  - El codigo `justify-content: valor;` me va a permitir posicionar los elementos horizontalmente.
    ```css
       justify-content: space-betwen;
     ```
     
- Columna/(column) (arriba -> abajo)
  - Los elementos se colocaran de Arriba-Abajo similar  
  - El codigo `align-items: valor;` me va a permitir posicionar los elementos horizontalmente.
    ```css
    align-items: center;
    ```
    
#### Valores
- `space-araund;` -> Distribuye el espacio disponible equitativamente antes y despues de cada objeto | 0  0  0 |
- `space-betwen;` -> Distribuye los objetos en el espacio disponible mandando al 1ero y ultimo a las ezquinas. |0  0  0|
- `space-evenly;` -> Similar a espace araund solo que el espacio entre los enlaces y el margen es el mismo, mientras que en `araund` el espacio entre enlaces es el doble que con el margen | 0 0 0 |
- `flex-start;` -> por default. Coloca el contenido del lado izquierdo
- `center;` -> va a centrar el contenido en la pantalla
- `flex-end;` -> va a colocar el contenido del lado derecho

## Responsive Web Design
Es un enfoque que nos dice que nuestros disenos deberan adaptarse a las interacciones del usuario y la resolucion que utilizan. Los sitios deben adaptarse a:
- Celulares
- Tablets
- Laptops
- Desktop PC
- Tv
- Etc.

Esto se logra a traves de Media Queries. Su sintaxis es:
```css
  @media (min-width:768px){
  
  }
  @media (min-width:922px){
   
  }
```
Los tamanos estandar son:
- 480 Telefono
- 768 Tablet
- 1140 PC Desktop
- 1400 