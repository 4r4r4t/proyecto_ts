interface Tienda {
    id: number;
    nombre: string;
    categorias: Categoria[];
  }
  
  interface Categoria {
    nombre: string;
    productos: Producto[];
  }
  
  interface Producto {
    nombre: string;
    precio: number;
    stock: number;
    estado: boolean;
  }
  
  const tienda: Tienda[] = [
    {
      id: 1,
      nombre: "San Juan",
      categorias: [
        {
          nombre: "Electrónica",
          productos: [
            { nombre: "TV", precio: 2000000, stock: 10, estado: true },
            { nombre: "Radio", precio: 100000, stock: 25, estado: true },
            { nombre: "Teléfono", precio: 2000000, stock: 15, estado: false },
          ],
        },
        {
          nombre: "Ropa",
          productos: [
            { nombre: "Camiseta", precio: 50000, stock: 50, estado: true },
            { nombre: "Pantalón", precio: 120000, stock: 30, estado: true },
            { nombre: "Zapatos", precio: 300000, stock: 20, estado: false },
          ],
        },
      ],
    },
    {
        id: 2,
        nombre: "Santa Marta",
        categorias: [
            {
                nombre: "Electrónica",
                productos: [
                    { nombre: "TV", precio: 3000000, stock: 8, estado: true },
                    { nombre: "Radio", precio: 400000, stock: 20, estado: true },
                    { nombre: "Teléfono", precio: 4000000, stock: 12, estado: true },
                ],
            },
            {
                nombre: "Ropa",
                productos: [
                    { nombre: "Camiseta", precio: 40000, stock: 60, estado: true },
                    { nombre: "Pantalón", precio: 100000, stock: 25, estado: false },
                    { nombre: "Zapatos", precio: 200000, stock: 15, estado: true },
                ],
            },
        ],
    },
];


function mostrarTienda(tiendas: Tienda[]): void {
    tiendas.forEach((tienda) => {
      console.log(`Tienda: ${tienda.nombre} (ID: ${tienda.id})`);
      tienda.categorias.forEach((categoria) => {
        console.log(`  Categoría: ${categoria.nombre}`);
        console.table(
          categoria.productos.map((producto) => ({
            Nombre: producto.nombre,
            Precio: `$${producto.precio}`,
            Stock: producto.stock,
            Estado: producto.estado ? "Disponible" : "No disponible",
          }))
        );
      });
    });
  }
  
  mostrarTienda(tienda);
  
  function buscarProducto(tiendas: Tienda[], nombreProducto: string): void {
    let encontrado = false;
    
    tiendas.forEach((tienda) => {
      tienda.categorias.forEach((categoria) => {
        categoria.productos.forEach((producto) => {
          if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() && producto.estado) {
            console.log(`Producto encontrado en ${tienda.nombre}:`);
            console.log(`  Nombre: ${producto.nombre}`);
            console.log(`  Precio: $${producto.precio}`);
            console.log(`  Stock: ${producto.stock}`);
            console.log('-----------------------------');
            encontrado = true;
          }
        });
      });
    });
  
    if (!encontrado) {
      console.log(`Producto "${nombreProducto}" no encontrado o no disponible.`);
    }
  }
  buscarProducto(tienda, "Pantalon");
  
  
  

  
  
  
  

  