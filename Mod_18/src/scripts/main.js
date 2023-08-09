document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('form-sorteador').addEventListener('submit', function(evento){ 

        evento.preventDefault(); 
        let numeroMaximo = document.getElementById('numero-maximo').value; 
        numeroMaximo = parseInt(numeroMaximo);

        // let numeroAleatorio = Math.random() * numeroMaximo;
        // numeroAleatorio = Math.floor(numeroAleatorio + 1);

        // function getRndInteger(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1) ) + min;
        // }
        // let numeroAleatorio = getRndInteger(1, numeroMaximo);

        let numeroAleatorio = Math.round(Math.random() * numeroMaximo);

        while(numeroAleatorio <= 0 ){

            numeroAleatorio = Math.round(Math.random() * numeroMaximo);
    
        }
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})