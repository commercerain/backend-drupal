# Description
Backend for Commerce Rain, base on Drupal Commerce. Provide web, API for miniprogram and Android/IOS.

## How to use?
1. Copy docker-compose-example.yml to docker-compose.yml  
`cp docker-compose-example.yml docker-compose.yml`
1. Start the docker environment.
`docker-compose up -d`
1. Install the site
`drush si demo_commerce --existing-config --db-url=mysql://root:password@commercerain-db:3306/commercerain --account-pass=abcd1234 --sites-subdir=default -y`
1. Delete shortcut link data
`drush sqlq 'truncate table shortcut; truncate table shortcut_field_data;'`
1. Update the system's uuid to the uuid in config/sync/system.site.yml
`drush cset system.site uuid 76e70d76-8a18-473d-a930-116e29b773a3`

### Notice: 
Make sure that the permission of ./etc/mysql/my.cnf is 0444
`chmod 0444 my.cnf`

### Config of settings.php
```
$settings['config_sync_directory'] = '../config/sync';
$settings['custom_translations_directory'] = '../config/translation';
```

#### Language
```
drush langexp --statuses=all
```
