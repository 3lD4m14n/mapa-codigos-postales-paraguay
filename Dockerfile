# Usa una imagen base ligera de NGINX
FROM nginx:alpine

# Copia los archivos HTML, CSS y JS a la ubicación predeterminada de NGINX
COPY . /usr/share/nginx/html

# Expone el puerto 80 para acceder al sitio web
EXPOSE 80

# Comando para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
