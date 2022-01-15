import CurrencyExchanger from './../src/currency-exchanger.js';

describe('convertCurrency', () => {

  test('Should convert $10 USD to 8.75 Euro', () => {
    const response = {
      "result": "success",
      "documentation": "https://www.exchangerate-api.com/docs",
      "terms_of_use": "https://www.exchangerate-api.com/terms",
      "time_last_update_unix": 1642204801,
      "time_last_update_utc": "Sat, 15 Jan 2022 00:00:01 +0000",
      "time_next_update_unix": 1642291201,
      "time_next_update_utc": "Sun, 16 Jan 2022 00:00:01 +0000",
      "base_code": "USD",
      "target_code": "EUR",
      "conversion_rate": 0.8748
  };
    expect(CurrencyExchanger.convertCurrency(10, response)).toEqual(8.75);
  });
});