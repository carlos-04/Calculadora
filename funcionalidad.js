
function init() {
	//variables
	var a;
	var b;
	var c;
	var resultado = document.getElementById("resultado");
	var clear = document.getElementById("clear");
	var sumar = document.getElementById("sumar");
	var restar = document.getElementById("restar");
	var multiplicacion = document.getElementById("multiplicacion");
	var division = document.getElementById("division");
	var igual = document.getElementById("igual");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var cero = document.getElementById("cero");
  }
  
	//eventos
  
	uno.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "1";
  
	}
	dos.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function(e) {
  
	  resultado.textContent = resultado.textContent + "0";
	}
  
	clear.onclick = function(e) {
	  resetear();
  
	}
  
	sumar.onclick = function(e) {
  
	  a = resultado.textContent;
	  c = "+";
	  limp();
	}
  
	restar.onclick = function(e) {
  
	  a = resultado.textContent;
	  c = "-";
	  limp();
	}
	multiplicacion.onclick = function(e) {
  
	  a = resultado.textContent;
	  c = "*";
	  limp();
	}
  
	division.onclick = function(e) {
  
	  a = resultado.textContent;
	  c = "/";
	  limp();
  
  }
  
  igual.onclick = function(e) {
  
  
	b = resultado.textContent;
	resolver();
  
  }
  
  function limp(){
	resultado.textContent = "";
  }
  
  function resetear() {
  
	resultado.textContent = "";
	a = 0;
	b = 0;
	c = "";
  }
  
  
  function resolver() {
  
  
	var res = 0;
  
	switch (c) {
  
	  case "+":
		res = parseFloat(a) + parseFloat(b);
		break;
  
	  case "-":
		res = parseFloat(a) - parseFloat(b);
		break;
  
	  case "*":
		res = parseFloat(a) * parseFloat(b);
		break;
  
  
	  case "/":
		res = parseFloat(a) / parseFloat(b);
		break;
  
  
	}
  
	resetear();
	resultado.textContent = res;
  
  }
  