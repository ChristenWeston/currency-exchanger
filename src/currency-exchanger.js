export default class CurrencyExchanger {
  static getConversionRate(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`)
    .then(function(response) {
      if (!response.ok) {
        //response.statusText
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }

  static convertCurrency(dollars, response) {
    let conversionRate = parseFloat(response.conversion_rate);
    let convertedAmount = parseFloat((dollars * conversionRate).toFixed(2));
    return convertedAmount;
  }
}

