export default class CurrencyExchanger {
  static getConversionRate(currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/UD/${currency}`)
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


}

