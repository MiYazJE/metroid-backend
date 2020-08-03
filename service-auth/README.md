# Servicio de Autenticacion de Metroid
Esta aplicacion es un microservicio para la aplicacion **"Metroid"**, este microservicio esta enfocado en la autenticacion de la aplicacion, tanto como registro de usuario, inicio de sesion y validacion de token.El proyecto esta basado en NodeJS con Typescript, con una base de datos en MongoDB, para la creacion de token se utilizo jsonwebtoken.

### Librerias utilizadas

- express
- bcryptjs
- dotenv
- mongoose
- jsonwebtoken
- morgan
- helmet
- cors
- compression

## Inicio de aplicacion

Para que la aplicacion inicie correctamente se tiene que declarar algunas variables de entornos


`APP_TOKEN` = Se establece la clave Token para encriptar los token


`DATABASE_HOST` = Se establece el host de la base de datos


`DATABASE_NAME` = Se establece el nombre de la base de datos


`DATABASE_PORT` = Se establece el puerto de la base de datos

Ademas de declarar las variables de entorno, la aplicacion tiene dos modo de inicio, el modo produccion y el modo desarrollo.

### Modo Produccion

Para iniciar el modo produccion se tiene que colocar el siguiente comando
`npm start` o `yarn start`

### Modo Desarrollo

Para iniciar el modo desarrollo se tiene que colocar el siguiente comando
`npm run dev` o `yarn dev`
