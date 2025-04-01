FROM nginx:alpine

# Supprime la config Nginx par défaut
RUN rm -f /etc/nginx/conf.d/default.conf

# Copie ta config personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie les fichiers Angular buildés dans Nginx
COPY ./dist/calypso-front/browser /usr/share/nginx/html