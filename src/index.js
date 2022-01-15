import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyExchanger from './currency-exchanger.js';

function displayResults(response) {
  if (response.base_code) {
    $('.converted-currency').text(`Converted Currency Rate: ${response.conversion_rate}`);
  } else {
    $('.error').text(`Problem!: ${Error.message} this means ${response.result}`);
  }
}

$(document).ready(function() {
  $('#currency').click(function() {
  //  let dollars = parseInt($('#usd').val());
    let currency = $('#currency').val();

    CurrencyExchanger.getConversionRate(currency)
      .then(function(response) {
     // let convertedAmount = CurrencyExchanger.convertCurrency(dollars, response);
  //    console.log("Converted Amount: " + convertedAmount);
        displayResults(response);
      });
  });
});