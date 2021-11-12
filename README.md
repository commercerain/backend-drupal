# Description
Backend for Commerce Rain, base on Drupal Commerce. Provide web, API for miniprogram and Android/IOS.

## How to use?
1. Copy docker-compose-example.yml to docker-compose.yml
```
cp docker-compose-example.yml docker-compose.yml
```
2. Start the docker environment.
```
docker-compose up -d
```
3. visit the site.

### Notice: 
Make sure that the permission of ./etc/mysql/my.cnf is 0444
`chmod 0444 my.cnf`
