
# traigo la imagen de node:alpine
FROM node:latest

# instalo pnpm
RUN npm install -g pnpm

# crea una carpeta /app
WORKDIR /app

# copia el package.json y el pnpm-lock.yaml
COPY package.json ./
COPY pnpm-lock.yaml ./

# instala las dependencias
RUN pnpm install

# copia el codigo fuente
COPY . .

# ejecuta pnpm run build
RUN pnpm run build

# creamos el puerto 3000
EXPOSE 3000

# ejecutamos el comando pnpm start
CMD ["pnpm", "start"]

### comandos a segir:
#postData: se necesitan instalar docker previamente

#el comando para crear la imagen es:
# docker build -t el_nombre_que_mas_quieran .

#el comando para ejecutar la imagen es:
#docker run -d -p 3000:3000 el_nombre_de_la_imagen

### en caso de que quieran compartir la imagen con otros:
#docker push el_nombre_de_la_imagen