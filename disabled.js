// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', function () {
  // Attach `change` event listener to checkbox
  //document.getElementById('checkbox').onchange = toggleBilling;
}, false);

function toggleBilling() {
  // Select the billing text fields
  var billingItems = document.querySelectorAll('#billing input[type="text, checkbox"]');

  // Toggle the billing text fields
  for (var i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
} 

$().ready(function() {
  
  $('#billing-checkbox').click(function(e) {
    
      if($(this).is( ":checked")) {
          $('input, select').not('#billing-checkbox').attr('disabled', true);
      } else {
          $('input, select').not('#billing-checkbox').removeAttr('disabled');             
      }
  });

  $('#marca').change(function(e) {
    $('#inputmodel4').val('')
  });

  $('#inputState').change(function(e) {
    $('#inputCity, #inputCep').val('')
  });

  $('#confirmar').click(function(e) {
    $('input, select').val('')  
  });



});



