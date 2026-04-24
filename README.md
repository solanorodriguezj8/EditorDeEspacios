"# EditorDeEspacios" 
"# EditorDeEspacios" 
"# EditorDeEspacios" 
# Este editor tiene 3 partes
## Parte de la pagina, el producto final
    Este tiene en su carpeta
        -Los style para el diseñador de espacios y el index
        -Index.js, que sirve para Efectos visuales en el index y eventos
        -Index.html, esta es la pagina para seleccionar el espacio
        -Carpeta de img, contiene imagenes para el proyecto
        -Carpeta de espacios, esta contiene:
            -Carpeta con nombres de espacios, los cuales contienen su base y las mascaras
            -Carpeta de materiales, que contiene todas las imagenes de materiales
            -productos.json, este archivo contiene toda la informacion de los materiales utilizados
            -espacios.json, este archivo contiene toda la informacion de los espacios utilizados
            -DiseñarEspacio.html, este contiene toda lo necesario para diseñar el espacio de manera dinamica

### Si en algun momento se desea agregar espacios:
    Lo unico que se tendria que hacer es editar la imagen de su espacio, añadirla tal y como estan los demas espacios en el espacios.json y ya estaria
### El funcionamiento es simple
    El usuario llega al index, selecciona un espacio, en el DiseñarEspacio.html, con JavaScript, se coge del espacios.json la informacion del espacio seleccionado y lo carga, es dinamico dependiendo de la informacion que contenga el espacio, al aplicar un material en una zona, con JavaScript se le aplica como background y repetiendo la imagen
## Parte de los espacios en bruto
## Parte de los espacios con las mascaras
