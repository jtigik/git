function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');

    return nomeComoArray.length >= 2;
}

const form = document.getElementById('form_dep');

form.addEventListener('submit', function(e){

    let formValido = false;

    e.preventDefault(); //Cancela a ação padrão que limpa o formulário.

    const nomeBeneficiario = document.getElementById('nome_beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');

    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}`

    formValido = validaNome(nomeBeneficiario.value);

    if(formValido){
        alert(mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    }else{
        alert("O nome não está completo!");
    }
});

console.log(form);