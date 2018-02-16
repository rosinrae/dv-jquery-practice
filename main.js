$(document).ready( function() {

  $('#plan').on('change', function() {
    var priceText

    switch(this.value) {
      case 'monthly':
        priceText = '$10.00 /mo'
        break;
      case 'quarterly':
        priceText = '$9.00 /mo'
        break;
      case 'yearly':
        priceText = '$7.00 /mo'
        break;
    }
    $('#price').text(priceText)
  })

  $('#add').on('click', function() {
    var plan =$('#plan')
    var installment = plan.val()
    var price = $('#price').text()
    var incart = $('#in-cart')
    incart.append('<li class="entry">' + installment + ' - ' + price + '</li>')
  });

});

