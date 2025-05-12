# Backend Expenses API

Este proyecto es un backend desarrollado con **Node.js** y **Express** para gestionar gastos. Proporciona una API RESTful para realizar operaciones CRUD sobre los datos de gastos.

## Características

- Gestión de usuarios.
- Operaciones CRUD para gastos.
- Autenticación y autorización con JWT.
- Manejo de errores centralizado.
- Configuración de variables de entorno.

## Requisitos

- **Node.js** (v14 o superior)
- **npm** (v6 o superior)
- Base de datos (por ejemplo, MongoDB)

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/backend-expenses.git
    cd backend-expenses
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno:
    Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
    ```
    PORT=3000
    DB_URI=tu_uri_de_base_de_datos
    JWT_SECRET=tu_secreto_jwt
    ```

4. Inicia el servidor:
    ```bash
    npm start
    ```

## Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar un nuevo usuario.
- `POST /api/auth/login` - Iniciar sesión.

### Gastos
- `GET /api/expenses` - Obtener todos los gastos.
- `POST /api/expenses` - Crear un nuevo gasto.
- `PUT /api/expenses/:id` - Actualizar un gasto.
- `DELETE /api/expenses/:id` - Eliminar un gasto.

## Scripts

- `npm start` - Inicia el servidor en modo producción.
- `npm run dev` - Inicia el servidor en modo desarrollo con nodemon.

## Tecnologías

- **Node.js**
- **Express**
- **MongoDB** (o cualquier base de datos que elijas)
- **JWT** para autenticación

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).