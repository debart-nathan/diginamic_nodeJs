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

## nodejs script binary

### files

créer un .js qui commence par `#!/usr/bin/env node`
puis écrivez votre script.

### include in project

ajouter le path du binaire directement la section "bin" de "/package.json"
le nom de l'executable seras alors le nom du projets

on peut aussi ajouter plusieurs script dans le même projet en passant par des "alias" que on utiliseras come cléf

### include in another project

dans l'autre projet
`npm i PathProjetWithScript`
(une copie du projet original seras créer)

on peu ici y accéder via les bin
