"# TiuiPrueba" 


APIRESTful basada en TypeScript con las siguientes dependencias:

+ express: Marco web rápido, sin opiniones y minimalista para Node.js.

+ dotenv: módulo de dependencia cero que carga variables de entorno de un archivo en ..envprocess.env

+ cors: Middleware Express para habilitar CORS con varias opciones.

+ helmet: Express middleware para proteger sus aplicaciones mediante la configuración de varios encabezados HTTP, que mitigan los vectores de ataque comunes.


La API estara corriendo en el Puerto : 3000

Desde el cual se podran hacer las siguientes acciones:

 +GET 'http://localhost:3000/'
 Peticion para obtener todos los items que esten persistidos en forma de JSON
 
 +GET 'http://localhost:3000/:id'
 Peticion para obtener un item deacuerdo por el id ingresado
 
 +POST 'http://localhost:3000/crear'  
 Peticion donde se ingresan en su cuerpo el name y la description en forma JSON y se agregan a la lista de items
 
 +PUT 'http://localhost:3000/:id'  
 Peticion que con el id es seleccionado el item y es actualizado con los datos ingresados en el cuerpo de la misma
 +DELETE 'http://localhost:3000/:id'
 Peticion que con el id es seleccionado el item y es removido de los datos persistidos
 
 
 
 
 
