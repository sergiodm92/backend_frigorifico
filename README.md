# Frigorifico backend

# Endpoints:

## Clientes

> Para acceder a dicha ruta se usa el endpoint **/clientes**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos los clientes | nada | Token Bearer (header) | `/clientes/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /:id | Ruta para traer un cliente por su ID | query param | id | `/clientes/2` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON EL CLIENTE}` |
| POST | / | Ruta para crear un cliente | body | { nombre, telefono, email, direccion } | `/clientes/` | `{ "status": "ok", "status_code": 200, "data": "Cliente creado con éxito"}` |

## Compras
> Para acceder a dicha ruta se usa el endpoint **/compras**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos las compras | nada | Token Bearer (header) | `/compras/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /all/:proveedor | Ruta para traer un cliente por nombre de proveedor | query param | proveedor | `/compras/all/Proveedor de prueba` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON LAS COMPRAS AL PROVEEDOR]` |
| GET | /:id | Ruta para traer una compra por su ID | query param | id | `/compras/2` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON LA COMPRA}` |
| POST | / | Ruta para crear una compra | body | { nombre, telefono, email, direccion } | `/compras/` | `{ "status": "ok", "status_code": 200, "data": "Compra creada con éxito"}` |

## Clientes

> Para acceder a dicha ruta se usa el endpoint **/clientes**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos los clientes | nada | Token Bearer (header) | `/clientes/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /:id | Ruta para traer un cliente por su ID | query param | id | `/clientes/2` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON EL CLIENTE}` |
| POST | / | Ruta para crear un cliente | body | { nombre, telefono, email, direccion } | `/clientes/` | `{ "status": "ok", "status_code": 200, "data": "Cliente creado con éxito"}` |
