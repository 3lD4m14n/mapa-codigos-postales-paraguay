# mapa-codigos-postales-paraguay

Este proyecto sirve una aplicación estática utilizando NGINX como servidor web. Los archivos HTML, CSS y JavaScript se ejecutan dentro de un contenedor Docker.

## Requisitos

Asegúrate de tener Docker instalado en tu máquina. Si no lo tienes, puedes descargarlo desde el siguiente enlace:

- [Instalar Docker](https://www.docker.com/products/docker-desktop)

## Pasos para ejecutar la aplicación

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```
git clone https://github.com/3lD4m14n/mapa-codigos-postales-paraguay.git
cd mapa-codigos-postales-paraguay
```

### 2. Construir la imagen Docker

Dentro del directorio del proyecto, utiliza el siguiente comando para construir la imagen Docker:

```
docker build -t mi-nginx-app .
```

Este comando construirá la imagen con el nombre `mi-nginx-app`, utilizando el archivo `Dockerfile` proporcionado.

### 3. Ejecutar el contenedor

Una vez construida la imagen, ejecuta el contenedor con el siguiente comando:

```
docker run -d -p 8080:80 mi-nginx-app
```

- `-d`: Ejecuta el contenedor en segundo plano.
- `-p 8080:80`: Mapea el puerto 80 del contenedor al puerto 8080 de tu máquina local.

### 4. Ver la aplicación

Una vez que el contenedor esté en funcionamiento, puedes acceder a la aplicación abriendo tu navegador y visitando:

```
http://localhost:8080
```

### 5. Detener el contenedor

Si deseas detener el contenedor, puedes usar el siguiente comando:

```
docker ps
```

Esto listará todos los contenedores en ejecución. Copia el `CONTAINER ID` correspondiente al contenedor que deseas detener y ejecuta:

```
docker stop <CONTAINER_ID>
```

## Notas adicionales

- Puedes cambiar el puerto 8080 por cualquier otro disponible en tu máquina si es necesario.
- Asegúrate de que los archivos HTML, CSS y JS estén en el directorio raíz, ya que el Dockerfile copia todo el contenido al directorio predeterminado de NGINX (`/usr/share/nginx/html`).
