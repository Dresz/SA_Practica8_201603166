# Version de Mysql
FROM mysql:8

# Base de datos a utilizar
ENV MYSQL_ROOT_PASSWORD 12345
ENV MYSQL_DATABASE practica

RUN sed -Ei 's/^(bind-address|log)/#&/' /etc/mysql/my.cnf
# Archivo a cargar
ADD dump.sql /docker-entrypoint-initdb.d
