# Curso de NPM

`require = importa modulos`

## Modulos

#### Modulo PATH

Me ayuda a poder convertir rutas que el SO pueda entender si es Windows o Linux este lo traducira para que fucione en el sistema que esta en uso.

Tambien sirve para unir direciones y trabajar con archivos:

```javascript
    //importa el modulo path
    const path = require('path')
    const filePath = path.join('/public','dist','/styles','main.css')

    console.log(filePath)//salida: \public\dist\styles\main.css
    console.log(path.basename(filePath))//salida: main.css
    console.log(path.dirname(filePath))//salida: \public\dist\styles
    console.log(path.parse(filePath))//salida un objeto:
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
    const fs = requiere('fs')

    const first = fs.readFileSync('./data/first.txt', 'utf-8') //recibe una ruta para leer el archivo

    console.log(first)

    fs.writeFileSync('./data/third.txt','este es un archivo creado')//crea un archivo

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
    const http = requiere('http')
    //creamos un servidor web que solo mostrara al cliente y despues terminara 
    http.createServer((request,response)=>{
        response.write('Hello World')
        response.end()
    }).listen() //listen se pone un numero de puerto

    console.log('Servidor escuchando en el puerto 3000')//confirma si se creo el servidor en el puerto 3000
```

#### Request
```javascript
    //importa modulo http
    const http = requiere('http')
    //creamos un servidor web que solo mostrara al cliente y despues terminara 
    http.createServer((request,response)=>{
        console.log(request.url)//muestra la direccion donde el usuario ingreso por ejemplo: /home
    }).listen() //listen se pone un numero de puerto

    console.log('Servidor escuchando en el puerto 3000')//confirma si se creo el servidor en el puerto 3000
```

### NPM

Npm nos ayuda a usar modulos de terceros

```npm i [nombre del modulo]```
Para usar modulos ya instalados solo tecleamos:
```npm install```
y descarga los modulos que se muestran en las dependencias del *package.json*.

Para eliminar un modulo:
```npm remove [nombre del modulo]```

Para no reiniciar cada vez el server escribiendo usamos nodemon:
```javascript
npm i nodemon -D //el -D es para decir que es para desarrollador
npm i nodemon -g //-g instala en el modulo en el computador, se convertiria en un modulo global
```

### NPX

Nos sirve para poder ejecutar aplicaciones de consola que puedan instalarse con node, en  si ejecuta un modulo sin que este instalado en el proyecto o de manera global.

### PROMISES (Promesas)

Espera una funcion para despues poder ejecutarla, esta funcion espera dos posibilidades:
- Un dato exitoso **success o resolve**.
- Un dato de error **error o reject**.
En teoria es una función que espera la respuesta de otra función
