# Utilise une image Node.js comme base
FROM node:18-alpine

# Crée le répertoire de travail dans l'image Docker
WORKDIR /app

# Copie le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Expose le port 4000 sur le conteneur
EXPOSE 4000

# Démarre le serveur Node.js avec la commande 'npm start'
CMD ["npm", "start"]
