const MONTHLY_RATE = 10.00
const QUARTERLY_RATE = 9.00
const YEARLY_RATE = 7.00

const RATES = {
  "monthly": 10.00,
  "quarterly": 9.00,
  "yearly": 7.00
}

function rateToPrice(rate) {
  return '$' + rate.toFixed(2) + ' /mo'
}

function getRate(installment) {
  return RATES[installment]
}

$(document).ready( function() {

  $('#clear-cart').hide()

  $('#plan').on('change', function() {

    $('#price').text(
      rateToPrice(getRate(this.value)))
  })

  $('#add').on('click', function() {
    var plan=$('#plan')
    var installment = plan.val()
    var price = $('#price').text()
    var incart = $('#in-cart')
    var data = "data-price=" + getRate(installment).toFixed(2) + " data-plan=" + installment
    incart.append('<li class="entry" ' + data + '>' + installment + ' - ' + price +  ' <button class="remove">X</button>' + '</li>')

    updateTotal()
  });

  $("#clear-cart").on('click', function(){
    $('#in-cart').empty()
    updateTotal()
  })

  function updateTotal() {
    var total = 0

    entries = $('.entry')
    if (entries.length)
      $("#clear-cart").show()
    else
      $("#clear-cart").hide()

    entries.each(function(index, entry) {


      var data = $(entry).data()
      var price = parseFloat(data.price)
      var installment = data.plan
      switch(installment) {
        case 'monthly':
          total += price
          break
        case 'quarterly':
          total += price * 4
          break
        case 'yearly':
          total += price * 12
          break
      }
    });

    $('#total').text('$' + total.toFixed(2))
  }

  $(document).on('click', '.remove', function() {
    $(this).parent('li').remove();
    updateTotal();
  });

  $('#display-cart').on('click', function() {
    var cart = $('#cart')
    var button = $(this)
    if (button.text() === 'Hide Cart')
      button.text('Show Cart')
    else
      button.text('Hide Cart')

    cart.slideToggle('slow', 'ease')
  })

  $('#purchase').on('click', () => {
    $("#complete").html('<h2>Purchase Done</h2>').css(
      {'background-color': '#bca',
        'width': '25%',
        'border': '1px solid green',
        'text-align': 'center'})
      .animate({
        width: '70%',
        opacity: 0,
        marginLeft: '0.6in',
        fontSize: "3em",
        borderWidth: '10px'
        }, 1500, "linear", () => $("#complete").empty())
      })
});

