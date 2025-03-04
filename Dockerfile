# Étape 1 : Utiliser Node.js pour le développement Angular
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet
COPY . ./
RUN npm install


# Exposer le port utilisé par Angular CLI (par défaut 4200)
EXPOSE 4200

# Commande pour démarrer l'application Angular en mode développement
CMD ["npm", "start"]
