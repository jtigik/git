$(document).ready(function(){

    $('#fone').mask('(00) 00000-0000', {
        placeholder: '(12)34567-8901'
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
            fone: {
                required: true
            }
        }, 
        messages: {
            nome: 'Por favor, informe o nome da forma correta',
            fone: 'Por favor, informe o telefone da forma correta',
            email: 'Por favor, informe o e-mail da forma correta',
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

    let statusButton = (e) => {
        if($('.btn-success').prop('disabled')){
            $('.btn-success').prop('disabled', false);
            $('.btn-danger').prop('disabled', false);
        }else{
            $('.btn-success').prop('disabled', true);
            $('.btn-danger').prop('disabled', true);
        }
    };

    $(document).on('click', '.form-check-input', statusButton);
})