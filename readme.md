# Note

## node

### note: node

reconnaissable par les fichiers  "/package-lock.json" "/package.json"

### créer un projets node

`npm init`

## Dep

### note: dep

elles sont installer dans "/node_modules/"
elles sont lister dans le "/package.json" rubrique "dependencies"
les version dernièrement installer sont dans "/package-lock.json"

### install local dep

`npm install dep`

### install global dep

`npm install -g dep`

### run local dep

`./node_modules/.bin/dep`

## script

### create script

add the comands wanted under an "alias" dans las section "scripts" de "/package.json"

### launch script

`npm run alias`

### launch script with args

`npm run alias -- arg1 arg2 ...`
