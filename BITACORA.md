# Carrtito de compras

Carrito de compras simple que cuenta con 3 secciones:
- Página que muestra el catálogo de productos.
- Página que muestra el detalle de cada producto.
- Página que muestra los productos que han sido añadidos para la compra.


## Instalar y Correr la aplicación

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.
4. Correr `npm run dev`
5. Al abrir `http://localhost:3000/`, debería mostrarse de la siguiente manera: 
![initial page](/initial_page.png)

## Desarrollo

La solución está implementada con ReactJS. En la carpeta de componentes se encuentra 1 archivo por cada sección descrita en el inicio. Cada sección tiene su respectivo archivo de estilos en la carpeta "styles".
El estado local se maneja mediante el uso de un context más un reducer almacenados en la carpeta "context".
