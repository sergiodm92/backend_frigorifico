# Frigorifico backend

# Endpoints:

## Clientes

> Para acceder a dicha ruta se usa el endpoint **/clientes**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos los clientes | nada | Token Bearer (header) | `/clientes/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /:id | Ruta para traer un cliente por su ID | query param + Token Bearer | id | `/clientes/2` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON EL CLIENTE}` |
| POST | / | Ruta para crear un cliente | body  + Token Bearer | `{ nombre, telefono, email, direccion }` | `/clientes/` | `{ "status": "ok", "status_code": 200, "data": "Cliente creado con éxito"}` |

## Compras
> Para acceder a dicha ruta se usa el endpoint **/compras**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos las compras | nada | Token Bearer (header) | `/compras/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /all/:proveedor | Ruta para traer un cliente por nombre de proveedor | query param  + Token Bearer | proveedor | `/compras/all/Proveedor de prueba` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON LAS COMPRAS AL PROVEEDOR]` |
| GET | /:id | Ruta para traer una compra por su ID | query param  + Token Bearer | id | `/compras/2` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON LA COMPRA}` |
| POST | / | Ruta para crear una compra | body  + Token Bearer | ![image](https://user-images.githubusercontent.com/54594663/190548645-24cb1c4b-612e-4bcb-bdb3-a024acdb0c3a.png) | `/compras/` | `{ "status": "ok", "status_code": 200, "data": "Compra creada con éxito"}` |

## Faenas

> Para acceder a dicha ruta se usa el endpoint **/faenas**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todas las faenas | nada | Token Bearer (header) | `/faenas/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON FAENAS] }` |
| GET | /:tropa | Ruta que trae todas las faenas por numero de tropa | query param  + Token Bearer | tropa | `/faenas/1231` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON FAENAS] }` |
| POST | / | Ruta para crear una faena | body  + Token Bearer | ![image](https://user-images.githubusercontent.com/54594663/190549566-e6ab76fa-94ed-4dbe-9427-d5a2c5d1959a.png) | `/faenas/` | `{ "status": "ok", "status_code": 200, "data": "Faena creada con éxito"}` |
| PUT | / | Ruta para actualizar saldo de faena | body  + Token Bearer | `{ faena_id, saldo }` | `/faenas/` | `{ "status": "ok", "status_code": 200, "data": "Saldo de faena actualizado con éxito"` |
