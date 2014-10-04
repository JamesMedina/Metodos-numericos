document.write("<"+"script type='text/javascript' src='math.js'><"+"/script>")

var parser = math.parser();
var funcion = "f(x)=(x-cos(x))";
var a = 0;
var b = 1;

function evaluarFuncion(funcion, a, b) {
	var parser = math.parser();
	parser.set('a', a);
	parser.set('b', b);
	parser.eval(funcion);
	var paraA = parser.eval('f(a)');
	var paraB = parser.eval('f(b)');
	var resultado = paraA * paraB;
	return resultado;
}

var resultado = evaluarFuncion(funcion,a,b);
alert(resultado);
var error = 1;
var xr = a; 
	
	if (resultado< 0) {
		
		while (error > 0.00000001) {                
    		var xa = xr;
    		xr = (a + b)/2;
    		error = Math.abs(((xr-xa)/xr)*100);
    		if(evaluarFuncion(funcion, a, xr)<0){
        		b = xr;
    		}else{
        		a = xr;
    		}
		}
    }else{
        alert("no es menor");
    }

    alert("sas");