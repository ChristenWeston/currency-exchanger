import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyExchanger from './currency-exchanger.js';

$(document).ready(function() {
  $('#currency').click(function() {
    let dollars = parseInt($('#usd').val());
    let currency = $('#currency').val();

    CurrencyExchanger.convertDollarsToCurrency(dollars, currency)
    .then(function(response) {
      //tbd
    });
  });
});