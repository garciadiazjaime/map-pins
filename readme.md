MAP API
==============

Installation Steps
------

This project has 2 tiers: BE(django) and FE(node)

BE

* [Create a virtual environment](http://desarrolloweblibre.com/por-que-usar-virtualenv/) and activate it (`$ . bin/activate` or `$ source bin/activate`)
* Clone project
* Checkout to **dev** branch
* Create your branch (**topics/feature**)
* move to be folder ($ cd be)
* Install python packages (`$ pip install -r requirements.txt`)
* If you don't have postgres installed, [install postgres with homebrew, follow full tutorial](http://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/), if you are not sure if you have homebrew type `$ brew`, if you don't get a *"command not found"* you have it installed already.
* Check your current users with `$ psql` and start a session with '$psql postgres',then `$ SELECT u.usename AS "User name", u.usesysid AS "User ID", CASE WHEN u.usesuper AND u.usecreatedb THEN CAST('superuser, create database' AS pg_catalog.text) WHEN u.usesuper THEN CAST('superuser' AS pg_catalog.text) WHEN u.usecreatedb THEN CAST('create database' AS pg_catalog.text) ELSE CAST('' AS pg_catalog.text) END AS "Attributes" FROM pg_catalog.pg_user u ORDER BY 1;`
* Create your settings file, use "settings/dev_vagui.py" as example.
* Replace the user in **your_settings.py**  (*DATABASES -> USER*)
* Create a database (`$ createdb mappromo`), the name is the one listed in **settings.py** (*DATABASES -> NAME *) 
* Check if there are errors (`$ python manage.py check`)
* Synch (`$ python manage.py syncdb`) the database. You'll be asked for a user name (always **admin**) and a password (always **1234**). Use any email.
* Migrate (`$ python manage.py migrate --settings=settings.dev_alex`) (If there are no applicable migrations the console will return a red message and this is normal).
* Populate DB (`$ python manage.py loaddata promo/fixtures.json --settings=settings.dev_alex`)
* Run BE server using your settings file (`$ python manage.py runserver --settings=settings.dev_alex`)
* Go to **/admin** you should be able to log with the user and password
* Move to FE folder (`$ cd ../fe`)
* Verify that npm and bower are installed.
* build gulp in another tab (`$ gulp watch`)
* Run FE server in another tab (`$ npm run dev`)
* Run gulp in another tab (`$ gulp watch`)

### NOTES:
* In case of using Osx you might need to install Xcode
* To improve speed when generating sprites, install oily (gem install oily_png) (http://compass-style.org/help/tutorials/spriting/)
* In case you want to use 'graph_models' from 'django-extensions' you need to install: http://www.graphviz.org/


PROMO_API_URL = http://127.0.0.1:8000/api/promo/