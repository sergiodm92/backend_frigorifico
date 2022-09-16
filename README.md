# Frigorifico backend

# Endpoints:

## Clientes

> Para acceder a dicha ruta se usa el endpoint **/clientes**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos los clientes | nada | Token Bearer (header) | /clientes/all | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /:id | Ruta para traer un cliente por su ID | query param | id | /clientes/2 | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON EL CLIENTE}` |
| POST | / | Ruta para crear un cliente | body | { nombre, telefono, email, direccion } | /clientes/ | `{ "status": "ok", "status_code": 200, "data": "Cliente creado con éxito"}` |

## Compras

> Para acceder a dicha ruta se usa el endpoint **/compras**

#### Contiene las siguientes rutas:

| Método  | Ruta | Descripción | Que se le pasa? | Data que necesita | Ejemplo de ruta | Objeto que devuelve |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /all | Ruta que trae todos los clientes | nada | Token Bearer (header) | /clientes/all | `{ "status": "ok", "status_code": 200, "data": [ARRAY CON CLIENTES] }` |
| GET | /:id | Ruta para traer un cliente por su ID | query param | id | /clientes/2 | `{ "status": "ok", "status_code": 200, "data": {OBJETO CON EL CLIENTE}` |
| POST | / | Ruta para crear un cliente | body | { nombre, telefono, email, direccion } | /clientes/ | `{ "status": "ok", "status_code": 200, "data": "Cliente creado con éxito"}` |
