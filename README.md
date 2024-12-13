# Back-App-wines

Este es el backend para el proyecto de App vinos, que proporciona una API RESTful para manejar productos (vinos) almacenados en una base de datos. El backend está construido con Node.js y utiliza Express.js como framework de servidor. La base de datos es MySQL.

## Descripción
Este backend permite gestionar una lista de vinos mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Los usuarios pueden agregar nuevos productos, editar los existentes, eliminar productos y ver todos los productos disponibles en la tienda.

Además, las imágenes de los productos (en formato Base64) se pueden almacenar y actualizar a través de la API.

## Requisitos
### Herramientas necesarias para el backend
Antes de comenzar, asegúrate de tener las siguientes herramientas instaladas:
1. Node.js (versión 14 o superior) - Instalar Node.js
2. MySQL o MariaDB - Instalar MySQL

## Instalación
1. Clonar el repositorio:
  Abre una terminal y ejecuta el siguiente comando para clonar este repositorio:
    git clone https://github.com/VeroJuarez/Back-App-wines.git
2. Instalar las dependencias:
  Accede al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias   de Node.js:
    npm install
3. Crea una base de datos en MySQL llamada gestion_vinos. Puedes hacerlo desde la consola de MySQL con el siguiente comando:
  ```
  CREATE DATABASE vinosDB;
   ```
4. En el archivo config.js, configura las credenciales de conexión a tu base de datos MySQL:
  ```
  module.exports = {
    host: 'localhost',
    user: 'root',
    password: 'tu_contraseña',
    database: 'vinosDB'
};
```
5. Crear las tablas en la base de datos:
  Asegúrate de tener las tablas necesarias creadas en tu base de datos. Puedes usar el siguiente script SQL para crear las tablas:
  ```
  CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    precio DECIMAL(10,2),
    stock INT,
    tipo VARCHAR(50),
    imagen TEXT
  );
  ```
## Uso
1. Iniciar el servidor:
Después de configurar las credenciales de la base de datos y las tablas, puedes iniciar el servidor ejecutando el siguiente comando:
 'npm start'
Esto iniciará el servidor en http://localhost:5000. Ahora podrás realizar peticiones a la API.

2. Interactuar con la API:
La API soporta los siguientes endpoints:
  - GET /api/productos: Obtiene todos los productos (vinos).
  - GET /api/productos/:id: Obtiene un producto específico por su ID.
  - POST /api/productos: Crea un nuevo producto (vino).
  - PUT /api/productos/:id: Actualiza un producto existente.
  - DELETE /api/productos/:id: Elimina un producto por su ID.

## Estructura del Proyecto
La estructura de directorios es la siguiente:
```
/Back-App-wines
│
├── config                 # Carpeta que contiene el archivo
│   └── database.js        # Configuración de la base de datos
├── server.js              # Configuración del servidor Express
├── routes                 # Carpeta con las rutas de la API
│   └── productos.js       # Ruta para productos
├── node_modules           # Carpeta con los modelos de la base de datos
├── package.json           # Dependencias y scripts del proyecto
├── package-lock.json      # Dependencias de npm.
└── README.md              # Este archivo de documentación
```

## Dependencias
Este proyecto utiliza las siguientes dependencias:
  - express: Framework para crear el servidor HTTP.
  - mysql2: Cliente MySQL para Node.js.
  - body-parser: Middleware para procesar datos en formato JSON y URL-encoded.
Puedes ver todas las dependencias en el archivo package.json.

## Funcionalidades de la API
1. Crear producto
  - Método: POST /api/productos
  - Datos requeridos: nombre, precio, stock, tipo, imagen (Base64)
  - Ejemplo de cuerpo de la solicitud:
  ```
  Json
  {
    "nombre": "Vino Tinto",
    "precio": 20.5,
    "stock": 100,
    "tipo": "tinto",
    "imagen": "data:image/jpeg;base64,...."
  }
  ```
2. Obtener todos los productos
  - Método: GET /api/productos
  - Respuesta: Devuelve un array con todos los productos.
3. Obtener producto por ID
  - Método: GET /api/productos/:id
  - Respuesta: Devuelve el producto con el ID especificado.
4. Actualizar producto
  - Método: PUT /api/productos/:id
  - Datos requeridos: nombre, precio, stock, tipo, imagen (Base64)
  - Ejemplo de cuerpo de la solicitud:
  ```
  Json
  {
    "nombre": "Vino Blanco",
    "precio": 15.0,
    "stock": 50,
    "tipo": "blanco",
    "imagen": "data:image/jpeg;base64,...."
  }
  ```
5. Eliminar producto
  - Método: DELETE /api/productos/:id

