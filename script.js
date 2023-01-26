
        function ejecutar() {

           document.getElementById("texturea1").focus();
                

            function encriptar(texto) {
                return texto.replace(/e/g, "enter")                           
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
            }

            function desencriptar(texto) {
                return texto.replace(/enter/g, "e")             
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
            }
            
            document.getElementById("encriptar").addEventListener("click", function(){

                var texto = document.getElementById("texturea1").value;
                var textoEncriptado = encriptar(texto);
                document.getElementById("texturea2").value = textoEncriptado;
                document.getElementById("contenido-cuadro2").style.display = "none";
                document.getElementById("texturea2").style.display = "block";
                document.getElementById("copiar").style.display = "block";
           
            });

            document.getElementById("desencriptar").addEventListener("click", function(){

                var texto = document.getElementById("texturea1").value;
                var textoDesencriptado = desencriptar(texto);
                document.getElementById("texturea2").value = textoDesencriptado;
                document.getElementById("contenido-cuadro2").style.display = "none";
                document.getElementById("texturea2").style.display = "block";
                document.getElementById("copiar").style.display = "block";
            
            });
            


            document.getElementById("copiar").addEventListener("click", function(){
                var copia = document.getElementById("texturea2");
                copia.select();
                document.execCommand("copy");
            });
            
        } 