# APP Suscripciones

### Requisitos
- Instalar Node.JS versión 16+
- Instalar GIT (en su versión mas reciente).

### Proceso de instalación de ambiente local

Para instalar localmente esta APP se necesita primero que nada tener instaladas las herramientas indicadas en requisitos.

Luego procedemos con:

- Abril la terminal e ir a la carpeta donde queremos clonar el repositorio.

- Clonar este repositorio ```git clone https://github.com/luis-soysena/app-sena.git```

- Ingresar a la carpeta api-sena ```cd app-sena```

- Crear el archivo ```.env``` con la siguiente información:

  ```
  VITE_APP_NAME = "Suscripciones"
  VITE_APP_VERSION = "1.0"
  VITE_API_KEY = "ef$4t35y$G$F34Y&%KRYTY&KU$ENwuEK"
  VITE_API_URL = "http://localhost:5007/api/v1/"
  ```

  Para la API KEY esta debe coincidir con la que se configure en la app front.

- Ejecutar ```npm install``` y espere a que se instalen los paquetes.

- Ejecutar ```npm start``` y visitar la URL indicada en la salida de la consola.
