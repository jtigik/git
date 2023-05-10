const form = document.getElementById('form_dep');
const nomeBeneficiario = document.getElementById('nome_beneficiario');
let formValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');

    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){

    //let formValido = false;
    //Elevando a variável 'formValido' à global

    e.preventDefault(); //Cancela a ação padrão que limpa o formulário.

    //Elevando o campo nome_beneficiario à global
    const numeroContaBeneficiario = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');

    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`

    formValido = validaNome(nomeBeneficiario.value);

    if(formValido){
        // alert(mensagemSucesso);
        //Escrevendo a mensagem de sucesso no HTML;
        //Construir primeiro: document.querySelector('.success_message').innerHTML = mensagemSucesso;
        //Editando elementos CSS com o JS

        const containerMensagemSucesso = document.querySelector('.success_message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';


        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    }else{
        // alert("O nome não está completo!");
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error_message').style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup', function(e) {
    //console.log(e); - Exibindo todos os atributos do elemento.
    console.log(e.target.value);

    //A cada digitação do usuário, verifica se o nome é válido.

    formValido = validaNome(e.target.value);

    if(!formValido){
        //nomeBeneficiario.style.border = '1px solid red';
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error_message').style.display = 'block';
    }else{
        //nomeBeneficiario.style = '';
        nomeBeneficiario.classList.remove('error');
        //Removendo a Class Style de erro
        document.querySelector('.error_message').style.display = 'none';
    }
})