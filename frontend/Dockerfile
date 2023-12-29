# Utilise une image Node.js comme base
FROM node:14-alpine

# Crée le répertoire de travail dans l'image Docker
WORKDIR /app

# Copie le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Expose le port 3210 sur le conteneur
EXPOSE 3210

# Démarre l'application quand le conteneur est lancé
CMD ["npm", "run", "dev"]
