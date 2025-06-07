# Bierzemy lekki obraz Nginx
FROM nginx:stable-alpine

# Kopiujemy całą zawartość projektu (HTML, JS, CSS, nginx.conf, itp.)
# do katalogu, z którego Nginx podaje pliki
COPY . /usr/share/nginx/html

# (opcjonalnie) jeśli chcesz użyć własnej konfiguracji serwera,
# usuń domyślny vhost i wklej swój nginx.conf:
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Dokumentujemy, że kontener nasłuchuje na porcie 80
EXPOSE 80

# Uruchamiamy Nginx w trybie foreground
CMD ["nginx", "-g", "daemon off;"]
