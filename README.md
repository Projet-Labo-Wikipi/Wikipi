# Procédure d'installation

<br>

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- NPM
- PHP
- Node.js
- WANP ou XAMPP
- Composer

### 1. Installation de npm

> npm install

### 2. Installation de PHP

Pour windows aller sur le site https://windows.php.net/download#php-8.3 et télécharger PHP.

Pour MacOs ouvrez votre cli et exécuter les commandes suivantes :

> /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

> brew install php

### Installation de Node.js

Pour Windows :

> winget install Schniz.fnm

> fnm env --use-on-cd | Out-String | Invoke-Expression

> fnm use --install-if-missing 20

Pour MacOs :

> curl -fsSL https://fnm.vercel.app/install | bash

> source ~/.bashrc

> fnm use --install-if-missing 20

### Installation de WAMP Serveur

Télécharger Wamp via le site suivant https://www.wampserver.com/.

### Installation de Composer

Executer les lignes suivantes dans votre cli :

> php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"

> php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

> php composer-setup.php

> php -r "unlink('composer-setup.php');"

<br>

## Récupération du Projet via GitHub

### 1. Cloner le dépôt

Mettez vous dans le dossier souhaitez via le cli et exécuter la commande :

> git clone https://github.com/Projet-Labo-Wikipi/Wikipi.git

Puis :

> cd ProjetLABO-Wikipi

Le projet est divisé en 2 parties 
- Back-end
- Front-end

Insérer vous via cli dans le dossier correspondant pour effectuer les installations.

<br>

## Front-end

### 2. Installation React-router-dom

> npm install react-router-dom

### 3. Installation Tailwind CSS

> npm install -D tailwindcss

### 4. Installation de Material UI

> npm install @mui/material @emotion/react @emotion/styled

<br>

## Back-end

### Laravel

#### 1. Installation de Laravel

Dans votre cli effectuez les commandes suivantes :

> composer global require laravel/installer

#### 2. Configuration de l'environnement

Exécuter la commande suivante dans le terminal du projet Laravel.

> cp .env.example .env

Et modifier les lignes suivantes dans le fichier .env :

```
DB_CONNECTION=mysql
DB8HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=projetlabowikipi
DB_USERNAME=root
DB_PASSWORD=
```

Puis, générer la clé de l'application avec la commande suivante :

> php artisan key:generate

#### 3. Récupération de la base de données

Télécharger la base de données `projetlabowikipi.sql` dans le Google Drive et importez-la sur votre serveur local.

<br>

## Démarrage

Pour lancer le serveur Laravel exécuter la commande suivante :

> php artisan serve

Pour lancer le Front-end :

> npm start
