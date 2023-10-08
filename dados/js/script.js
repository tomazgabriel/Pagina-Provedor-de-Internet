function removeSelecao(){
    $('#o-alfa').removeAttr('selected');
    $('#o-beta').removeAttr('selected');
    $('#o-gama').removeAttr('selected');
    $('#o-delta').removeAttr('selected');
    $('#o-omega').removeAttr('selected');
}

function clicar(){
    $('#assineja').attr('aria-hidden','false');
}

$(function(){

    //habilita a submissão do formulário
    $('#termos').click(function(){
        $('#assinarbtn').removeAttr('disabled');
        $('#termos').attr('disabled','');
    });

    //as funções a seguir preenchem o select com o plano que o usuário clicou
    $('#alfa').click(function(){
        removeSelecao();
        $('#o-alfa').attr('selected','');
    });
    $('#beta').click(function(){
        removeSelecao();
        $('#o-beta').attr('selected','');
    });
    $('#gama').click(function(){
        removeSelecao();
        $('#o-gama').attr('selected','');
    });
    $('#delta').click(function(){
        removeSelecao();
        $('#o-delta').attr('selected','');
    });
    $('#omega').click(function(){
        removeSelecao();
        $('#o-omega').attr('selected','');
    });
})