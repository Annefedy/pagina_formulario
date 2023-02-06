$(document).ready(function() {
  $('#add-row').click(function() {
    var numero = $('th:last').text()
    numero = parseInt(numero , 10) + 1; 
    $('#table-body').append('<tr> <th>'+numero+'</th> <td><input type="text" /></td><td><input type="text" /></td> <td><input type="text" /> <td><input type="text" /><td><input type="text" /><td><input type="text" />  <td><button>Excluir</button></td> </tr>');
  });
});

