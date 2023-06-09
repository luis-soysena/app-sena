# App Suscripciones

### Requisitos
- Node.JS 16+ ([descargar](https://nodejs.org/es/download))
- Git ([descargar](https://git-scm.com/downloads))

### Proceso de instalación de ambiente local

Para instalar localmente esta App se necesita tener instaladas las herramientas indicadas en requisitos.

Luego procedemos con:

- Abrir la terminal e ir a la carpeta donde queremos clonar el repositorio.

- Clonar este repositorio ```git clone https://github.com/luis-soysena/app-sena.git```

- Ingresar a la carpeta app-sena ```cd app-sena```

- Crear el archivo ```.env``` con la siguiente información:

  ```
  VITE_APP_NAME = "Suscripciones"
  VITE_APP_VERSION = "1.0"
  VITE_API_KEY = "c37fa19f-83d7-424f-905b-0d2209871et3"
  VITE_API_URL = "http://localhost:5007/api/v1/"
  VITE_PASSWD_HASH = "p455wdH4S5"
  VITE_COOKIE_NAME = appCookie
  ```

  Para la API KEY esta debe coincidir con la que se configure en la API.

- Ejecutar ```npm install``` y espere a que se instalen los paquetes.

- Ejecutar ```npm run dev``` y visitar la URL indicada en la terminal.
