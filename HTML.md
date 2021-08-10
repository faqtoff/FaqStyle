# HTML  

HTML -> Lenguaje Marcado de Hipertexto. Esta compuesto de _etiquetas_ y _atributos_, quienes a su vez forman _elementos_.

Extension .html -> Es recomendable evitar caracteres especiales, tildes o espacios en el nombre del archivo. Por lo general el archivo principal se llama _index.html_

## Sintaxis de Etiqueta

Cada elemento en la web esta representado por una etiqueta HTML. 

Las etiquetas tienen una determinada forma de escritura, pero la mayoria tienen una apertura y un cierre.
Ejemplo:
```html
<etiqueta atributo="valor"> contenido </etiqueta>
```
- `<etiqueta>` seria la apertura
- `</etiqueta>` el cierre
- `atributo` le da una caracteristica a la etiqueta

Hay etiquetas que tienen la apertura y el cierre en si mismas. Basicamente son etiquetas que no tienen contenido. Ejemplo:
```html
<etiqueta atributo="valor" />
```

Una etiqueta puede contener varias otras dentro. Por ejemplo:
```html
<etiqueta atributo="valor"> 
  <etiqueta atributo="valor" />
  <etiqueta atributo="valor" />
  <etiqueta atributo="valor" />
</etiqueta>
```

## Estructura Inicial
El codigo HTML se basa en etiquetas. La estructura inicial son las etiquetas basicas que siempre iran en el codigo:
```html
<!-- No es una etiqueta
     Le informa al navegador que version de HTML se esta usando
-->
<!DOCTYPE html>

<!-- Contiene todas las etiquetas -->
<html lang="en">
  
<!-- Contenido de caracteristicas de la pagina. No se muestra por pantalla -->
<head>
  <!-- Esta etiqueta es necesaria para escribir con tildes -->
    <meta charset="UTF-8"> 
  <!-- Optimiza la escala del sitio web en dispositivos moviles -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <!-- Titulo del sitio -->
    <title>Document</tit
      
<!-- Todo el resto de la pagina (NavBar, Cards, etc) -->
<body>
    
</body>
</html>
```
### Etiquetas de Texto

- Etiquetas `<h#>`. Para contener TITULOS. Tienen cierta jerarquia en el sitio web. La etiqueta `<h1>` solo debe ser usada una vez por pagina ya que es la mas importante jerarquicamente:
  ```html
  <h1> Contenido </h1>
  <h2> Contenido </h2>
  <h3> Contenido </h3>
  <h4> Contenido </h4>
  <h5> Contenido </h5>
  <h6> Contenido </h6>
  ```
- Etiqueta `<p>`. Para contener PARRAFOS.
  ```html
  <p> contenido descriptivo </p>
  ```
### Etiquetas de Lista
Funciona de manera compuesta. Esto quiere decir que si no se forma la estructura completa puede no funcionar correctamente. 
Estas etiquetas funcionan con un conjunto de dos etiquetas. 
Tipos de lista:
- Ordenada
  ```html
  <ol> <!-- Order List -->
    <li>contenido</li> <!-- Items. Siempre cn etiquetas <li> de list item -->
    <li>contenido</li>
    <li>contenido</li>
  </ol>
  ```
- Sin Orden
    ```html
    <ul> <!-- Unorder List -->
      <li>contenido</li>
      <li>contenido</li>
      <li>contenido</li>
    </ul>
  ```
- DL - Nos permite representar una lista de elementos con un titulo y una descripcion asociada
  ```html
  <dl>
    <dt>titulo 01</dt>
    <dd>respuesta</dd>

    <dt>titulo 02</dt>
    <dd>respuesta</dd>
  </dl>
  ```
Se pueden tener listas anidadas. Ejemplo:
```html
<ol> 
  <li>contenido</li> 
  <li>contenido</li>
  <li>
    <ol> <!-- Order List -->
      <li>contenido</li> 
      <li>contenido</li>
      <li>contenido</li>
    </ol>
  </li>
  <li>
    <ul> <!-- Unorder List -->
      <li>contenido</li> 
      <li>contenido</li>
      <li>contenido</li>
    </ul>
  </li>
</ol>
```
### Etiquetas Link
Nos permite crear un enlace a otro recurso o sitio webtanto interno como externo. Se escribe con `<a>`. Tiene un atributo que debe estar si o si (_`href`_)
que sera la referencia de hacia donde se va a dirigir o que accion sucedera al clickear la etiqueta.
```html
<!-- Navegar a otra pagina -->
<a href="https://www.netflix.com">Netflix</a>
<a href="nosotros.html">Nosotros</a>
<!-- Navegar a travez del index -->
<a href="#precios">Ver Precios</a>
<h2 id="precios"> Lista de precios </h2>
<!-- Enviar un mail -->
<a href="mailto:info@faqtoff.com.ar">Contactanos</a>
<!-- Hacer una llamada -->
<a href="tel:115458965"Llamanos</a>
```
### Contenedores 