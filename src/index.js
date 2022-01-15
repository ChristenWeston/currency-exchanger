import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './currency-exchanger.js';

function displayResults(response, convertedAmount, dollars) {
  if (response.base_code) {
    $('.dollars').text(dollars);
    $('.currency-to-convert').text(response.target_code);
    $('.converted-equals').text(convertedAmount);
    $('.converted-currency').text(`Converted Currency Rate: ${response.conversion_rate}`);
  } else {
    $('.error').text(`Problem!: ${Error.message} this means ${response.result}`);
  }
}

$(document).ready(function() {
  $('#currency').click(function() {
    let dollars = parseInt($('#usd').val());
    let currency = $('#currency').val();

    CurrencyExchanger.getConversionRate(currency)
      .then(function(response) {
      let convertedAmount = CurrencyExchanger.convertCurrency(dollars, response);
        displayResults(response, convertedAmount, dollars);
      });
  });
});