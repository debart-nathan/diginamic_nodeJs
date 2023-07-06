# Note

## node

### créer un projets node

`npm init`

### note: node

reconnaissable par les fichiers  "/package-lock.json" "/package.json"

## Dep

### install local dep

`npm install dep`

### install global dep

`npm install -g dep`

### run local dep

`./node_modules/.bin/dep`

### note: dep

elles sont installer dans "/node_modules/"
elles sont lister dans le "/package.json" rubrique "dependencies"
les version dernièrement installer sont dans "/package-lock.json"

## script

### create script

ajouter la commande voulue avec un "alias" dans la section "scripts" de "/package.json"

### launch npm script

`npm run alias`

### launch nmp script with args

`npm run alias -- arg1 arg2 ...`

### note: npm script

les commande de cycle de vie n'ont pas besoin de run.
les bin des dependency local peuvent être accédé directement par les scripts

## nodejs script

## files

créer un .js qui commence par `#!/usr/bin/env node`
puis écrivez votre script.

### include in project

ajouter le binaire dans la section "bin" de "/package.json"

## multiple local project

you can create multiple local project

### add local project in another

`npm i pathToOtherProject`
(une copie du projet seras créer)

on a ainsi accès a touts les script.js et dépendance du projets lié
