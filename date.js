$(document).ready(function(){
  $('#dataCadastro').on('change', function(){
     var dataAtual = new Date();
     var dataCadastro = new Date($(this).val());
     if(dataCadastro < dataAtual){
        alert('A data de cadastro não pode ser anterior à data atual!');
     }
  });
});