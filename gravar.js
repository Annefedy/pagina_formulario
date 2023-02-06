           
$(document).ready(function () {
  $('#btnGravar').click(function () {
    if ($('input, select').val() == '') {
      $('input, select').addClass('is-invalid')
    } else {
      $('input, select').removeClass('is-invalid')
    }
  });
});