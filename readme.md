# Curso de NPM

`require = importa modulos`

## Modulos

### Modulo PATH

Me ayuda a poder convertir rutas que el SO pueda entender si es Windows o Linux este lo traducira para que fucione en el sistema que esta en uso.

Tambien sirve para unir direciones y trabajar con archivos:

```javascript
//importa el modulo path
const path = require("path");
const filePath = path.join("/public", "dist", "/styles", "main.css");

console.log(filePath); //salida: \public\dist\styles\main.css
console.log(path.basename(filePath)); //salida: main.css
console.log(path.dirname(filePath)); //salida: \public\dist\styles
console.log(path.parse(filePath)); //salida un objeto:
/*  {
        root: '\\',
        dir: '\\public\\dist\\styles',
        base: 'main.css',
        ext: '.css',
        name: 'main'
    } */
```

### Modulo FS (File System)

Me ayuda a trabajar con archivos

```javascript
//importa modulo fs
const fs = requiere("fs");

const first = fs.readFileSync("./data/first.txt", "utf-8"); //recibe una ruta para leer el archivo

console.log(first);

fs.writeFileSync("./data/third.txt", "este es un archivo creado"); //crea un archivo
```

### SYNC ASYNC

- **Sync:** Trabaja sincronamente, debe terminar un proceso para iniciar otro
- **Async** Trabaja de manera asincrona, mientras hacemos una tarea podemos hacer otras tareas y tiende a utilizar mucho mejor los recursos del CPU y tiende a tener un mejor rendimiento

### Modulo HTTP

- **Request** recibe datos del cliete
- **Response** envia datos al cliente

#### Response

```javascript
//importa modulo http
const http = requiere("http");
//creamos un servidor web que solo mostrara al cliente y despues terminara
http
  .createServer((request, response) => {
    response.write("Hello World");
    response.end();
  })
  .listen(); //listen se pone un numero de puerto

console.log("Servidor escuchando en el puerto 3000"); //confirma si se creo el servidor en el puerto 3000
```

#### Request

```javascript
//importa modulo http
const http = requiere("http");
//creamos un servidor web que solo mostrara al cliente y despues terminara
http
  .createServer((request, response) => {
    console.log(request.url); //muestra la direccion donde el usuario ingreso por ejemplo: /home
  })
  .listen(); //listen se pone un numero de puerto

console.log("Servidor escuchando en el puerto 3000"); //confirma si se creo el servidor en el puerto 3000
```

### NPM

Npm nos ayuda a usar modulos de terceros

`npm i [nombre del modulo]`
Para usar modulos ya instalados solo tecleamos:
`npm install`
y descarga los modulos que se muestran en las dependencias del _package.json_.

Para eliminar un modulo:
`npm remove [nombre del modulo]`

Para no reiniciar cada vez el server escribiendo usamos nodemon:

```javascript
npm i nodemon -D //el -D es para decir que es para desarrollador
npm i nodemon -g //-g instala en el modulo en el computador, se convertiria en un modulo global
```

### NPX

Nos sirve para poder ejecutar aplicaciones de consola que puedan instalarse con node, en si ejecuta un modulo sin que este instalado en el proyecto o de manera global.

### PROMISES (Promesas)

Espera una funcion para despues poder ejecutarla, esta funcion espera dos posibilidades:

- Un dato exitoso **success o resolve**.
- Un dato de error **error o reject**.
  En teoria es una función que espera la respuesta de otra función

### ASYNC AWAIT

Nos ayuda a crear funciones asincronas, el ejemplo de abajo nos muestra que despues de ejecutar _getTxet_ se pondra result con ese valor gracias a _await_ que lo vuelve en algo asincrono. Ademas de usar un try cath para controlar cualquier error

```javascript
async function read() {
  try {
    const result = await getText("./dastos/first.txt");
    const result2 = await getText("./dastos/second.txt");
    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}
read();
```
### PROMISIFY (Modulo para Promesas)

Convierte un CallBack en una promesa, esta es la maenera mas actual de crear una Promesa
```javascript
const {readFile} = require('fs')
const {promisify} = require('util')

const readFilePromise = promisify(readFile)

async function read() {
  try {
    const result = await readFilePromise("./dastos/first.txt", 'utf-8');
    const result2 = await readFilePromise("./dastos/second.txt", 'utf-8');
    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}
read();
```
### FS PROMISES

Actualmente casi todos los modulos tiene la opcion de  que ya vienen con promesas para no estar construyendo.

```javascript
const {readFile} = require('fs/promises') //aqui ponemos promises para que nos devuelva una promesa

async function read() {
  try {
    const result = await readFile("./dastos/first.txt", 'utf-8');
    const result2 = await readFile("./dastos/second.txt", 'utf-8');
    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}
read();
```
Aqui otra manera
```javascript
const {writeFile} = require('fs/promises') //aqui ponemos promises para que nos devuelva una promesa

const createBigFile = async()=>{
    await writeFile('/data/bigfile.txt', 'hello world')
}
```


### EVENTS (MODULO PARA CREAR EVENTOS)

```javascript
const EventEmitter = require('events')//importando el modulo de eventos

const customEmitter = new EventEmitter() //almaceno el objeto en una variable customEmitter

//crea el evento x
customEmitter.on('x',(data,secondata)=>{
    console.log('recibido')
    console.log(data)
    console.log(secondata)
})
//emite el evento x
customEmitter.emmit('x','hola mundo', [1,2,3])
```

### STREAMS 

Lee cierta cantidad y no lo descarga en su totalidad

```javascript
const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt','utf-8')

stream.on('data',(chunk)=>{//existen muchos tpos en data por ejemplo end , etc
    console.log(chunk)//chunk toma una porcion de los datos totales y los lee poco a poco 
})

```
### ECMASCRIPT MODULE

Es una nueva manera de importar y exportar modulos usando *import*  en vez de *require*.
Y en export se usa el default o el indvidual.
```javascript
//primera forma
import math from "./math/index.js"
console.log(math.add(10,20))
//segunda forma destructurando
import {add,subtract} from "./math/index.js"
console.log(add(10,20))

//exportar
//primera forma
export function add(x,y){...}
//segunda forma
export default{
  add,
  subtract
}

```
### FETCH API

Manera de consumir un api.
```javascript
  async function loadData1() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await res.json(); //convierte la respuesta en un json y lo guarda en una variable
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
loadData1();
```
