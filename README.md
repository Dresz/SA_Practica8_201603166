# SA_Practica8_201603166
 
# Video de explicación[Aqui](https://youtu.be/zRjrs_ji7to)

# Servidor
para crear la imagen de servidor ese necesario correr el siguiente comando 
```
docker build -t server .
```
para crear la imagen es necesario estar en la carpeta de composetest
# Mysql
para crear la imagen de MySQL ese necesario correr el siguiente comando 
```
docker build -t msql .
```
para crear la imagen es necesario estar en la carpeta de composebd 
# Compose
por ultimo con las dos imagenes creadas debemos de correrlas con docker compose con el siguiente comando
```
docker-compose up
```
