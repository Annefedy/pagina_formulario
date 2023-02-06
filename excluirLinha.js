

$(document).ready(function() {
  $('.btn-delete').click(function(e){
    e.preventDefault(); 
    let confirmMessage = $(this).attr('data-confirm');
    if(confirm(confirmMessage)){
      $(this).closest('tr').remove();
    }
  });
});



