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

## Proveedores

> Para acceder a dicha ruta se usa el endpoint **/proveedores**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos los proveedores | nada | Token Bearer (header) | `/proveedores/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON PROVEEDORES] }` |
| GET | /:id | Ruta que trae un proveedor | query param  + Token Bearer | id | `/proveedores/5` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON EL PROVEEDOR}` |
| POST | / | Ruta para crear un proveedor | body  + Token Bearer | `{ nombre, telefono, email, direccion }` | `/proveedores/` | `{ "status": "ok", "status_code": 200, "data": "Proveedor creado con éxito"}` |
| PUT | / | Ruta para actualizar saldo de un proveedor | body  + Token Bearer | `{ proveedor_id, saldo }` | `/proveedores/` | `{ "status": "ok", "status_code": 200, "data": "Saldo de proveedor actualizado con éxito"` |

## Res

> Para acceder a dicha ruta se usa el endpoint **/res**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todas las reses | nada | Token Bearer (header) | `/res/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON RESES] }` |
| GET | /all_stock | Ruta que trae las reses en stock | query param  + Token Bearer | id | `/res/5` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON RESES EN STOCK]` |
| GET | /:correlativo | Ruta que trae res por correlativo | query param  + Token Bearer | id | `/res/521312` | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON LA RES}` |
| POST | / | Ruta para crear una res | body  + Token Bearer | ![image](https://user-images.githubusercontent.com/54594663/190550743-642962cf-686e-446b-8822-e477952256b1.png) | `/res/` | `{ "status": "ok", "status_code": 200, "data": "Res creada con éxito"}` |

## Stock

> Para acceder a dicha ruta se usa el endpoint **/stock**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todo el stock | nada | Token Bearer (header) | `/stock/all` | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON STOCK] }` |

## User

> Para acceder a dicha ruta se usa el endpoint **/res**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| POST | /login | Ruta para iniciar sesión | body  + Token Bearer | { name, password } | `/user/login` | `[HEADER] "auth-token": "TOKEN BEARER"` |
| POST | /register | Ruta para registrarse | body  + Token Bearer | { name, password } | `/user/register` | `{ "status": "ok", "status_code": 200, "data": [OBJETO CON EL USUARIO REGISTRADO] }` |
