$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12)34567-8901'
    });

    $('#sendTo').click(function(e){
        // e.preventDefault();
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculo_interesse: {
                required: false
            },

        }, 
        messages: {
            nome: 'Por favor, informe o nome da forma correta',
            telefone: 'Por favor, informe o telefone da forma correta',
            email: 'Por favor, informe o e-mail da forma correta',
            mensagem: 'Por favor, informe a mensagem     da forma correta',
        }, 
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    })

    $('.lista_veiculos button').click(function(){

        const destino = $('#formulario');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo_interesse').val(nomeVeiculo);

        // alert($(this).parent().find('h3').text())

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    // $('.container ul').click(function(){
    //     $('html').animate({
    //         scrollTop: destino.offset().top
    //     }, 1000)
    // })
})