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

  // static getConversionRate(currency) {
  //   return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/SD/${currency}`)
  //     .then((response) => {
  //       if (response.status>=200 && response.status <=299) {
  //         return response.json();
  //       } else {
  //         console.log("We got an error");
  //         throw Error(response.statusText);
  //       }
  //     })
  //     .then((jsonResponse) => {
  //       console.log("It's all good" + jsonResponse);
  //       return jsonResponse;
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // }

  static convertCurrency(dollars, response) {
    let conversionRate = parseFloat(response.conversion_rate);
    let convertedAmount = parseFloat((dollars * conversionRate).toFixed(2));
    return convertedAmount;
  }
}

