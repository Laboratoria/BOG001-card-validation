//Realizamos una función validar, donde primero nos va a capturar el valor que le pongamos al label creado con el id de tarjeta de credito.
function validar(){

    var tc= document.getElementById ("tarjetacredito").value;
    
    //Luego creamos un array vacio debido a que lo llenaremos con un ciclo for
    var ntc = [];
    
    //Luego de esto utilizamos el metodo split, que divide los objetos de un string en un array, también me divide números, tiene dos parametros un separador y un limite, en este caso lo estoy implementando para la variable tc
    
    cadena = (tc + '');
    
    cadena.split('');
    
    parseInt (tc);
    
    console.log (tc);
    
    //Con base en lo anterior, implementamos un ciclo for, con una expresión inicial, esa expresión me va a tomar la longitud de la variable tc, en este caso le restare 1 porque me interesa iniciar con la ultima posición.
    
    //Como siguiente le doy una condición que me dice que entre al ciclo cuando la posición i sea igual o mayor a cero
    
    //Por ultimo le damos una expresión final de decremento, ya que me interesa que revise hacia la izquierda
    
    for (var i= tc.length-1; i >= 0; i--){
    
    //El método push me añade elementos a un string, a la ultima posición, en este caso lo utilizamos para añadir todos los elementos de la variable tc e la posición i
    
    ntc.push(tc[i]);
    
    }
    
    alert (ntc);
    
    }