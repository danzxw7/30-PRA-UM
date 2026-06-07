const formulario = document.getElementById("contatoform");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
        "Sua mensagem foi enviada com sucesso!"
    );

    formulario.reset();

});