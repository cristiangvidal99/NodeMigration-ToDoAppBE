# Usar una imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo
WORKDIR /src

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto que la aplicación usará
EXPOSE 3000

# Definir la variable de entorno del puerto
ENV PORT=3000

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]

