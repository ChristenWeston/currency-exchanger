export default class CurrencyExchanger {
  static getConversionRate(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currency}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        else if (response.status === 404) {
          throw Error(response.statusText);
        }
        else if (response.ok && response.status === 200){
          return response.json();
        }
        else {
          throw Error (response.statusText);
        }
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