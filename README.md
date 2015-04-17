## Instalación

Lenguajes base

* [Ruby](https://www.ruby-lang.org). Necesario para [Sass](http://sass-lang.com/) y [Compass](http://compass-style.org/)
* [Node.js](http://nodejs.org/). Necesario para [Grunt](http://gruntjs.com/) y [Bower](http://bower.io/)

En linux instalar

```sh
sudo apt-get install ruby-dev
```
### a. Instalar [Bundler](http://bundler.io/)

```ruby
gem install bundler
```
### b. Instalar Dependecias Sass y Compass

En el directorio raiz

```ruby
bundle install
```

### c. Instalar Bower y Grunt
```sh
sudo npm install -g bower
sudo npm install -g grunt-cli
```

### d. Instalar dependencias de grunt
En el directorio raiz
```sh
sudo npm install
```

### e. Instalar dependencias de bower
En el directorio raiz
```sh
bower install
```

### f. Compilar el proyecto
En el directorio raiz
```sh
grunt
```
