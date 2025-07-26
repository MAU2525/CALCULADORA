    function promedio() {
      var n1,n2,n3,n4, prom,msg;
      //Fase de lectura
      n1= parseFloat(document.getElementById("nota1").value);
      n2= parseFloat(document.getElementById("nota2").value);
      n3= parseFloat(document.getElementById("nota3").value);
      n4= parseFloat(document.getElementById("nota4").value);
      if(
        n1== "" || n2=="" || n3=="" || n4=="" ||
        n1 < 0 || n1 > 20 ||
        n2 < 0 || n2 > 20 ||
        n3 < 0 || n3 > 20 ||
        n4 < 0 || n4 > 20
        ) {
            alert("el campo no puede estar vacio o ingrese notas válidas entre 0 y 20.");
        }
      prom=Math.round((n1 * 0.20)+(n2 * 0.30)+(n3 * 0.25)+(n4 *0.25 )/4);
      
      if (prom>=13) {
        msg=" Aprobaste el curso";
        document.getElementById("resultado").style.color="blue";

      } else {
        msg="Desaprobaste el curso";
         document.getElementById("resultado").style.color="red";
      }

      document.getElementById("resultado").innerHTML =
        "<p>Promedio: " + prom + "</p>" +
        "<p><strong>" + msg + "</strong></p>";
    }
