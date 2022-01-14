export default class CurrencyExchanger {
  static getConversion(usd, currency) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/EUR/${currency}`)
    .then(function(response) {
      if (!response.ok) {
        //response.statusText
        throw Error(response.error-type);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }
}