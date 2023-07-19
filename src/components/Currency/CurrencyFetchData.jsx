const getCurrencyData = () => {
  const hour = 60 * 60 * 1000;
  const time = Date.now();

  // Checks if data is saved in localStorage
  const oldCurrencyData = JSON.parse(localStorage.getItem('currency'));

  if (oldCurrencyData) {
    // Checks if data is saved in localStorage less than an hour ago.
    const oldTime = oldCurrencyData.find(item => item.timestamp)?.timestamp;
    const isMoreThanHourAge = time - oldTime < hour;

    // If data is saved less than an hour ago, filter the old data, remove the timestamp, and then return the data.
    if (isMoreThanHourAge) {
      const dataWithoutTimestamp = oldCurrencyData.filter(item => item.currency);
      return dataWithoutTimestamp;
    }
  }

  // // Fetch data from backend
  const currencyData = [
    { currency: 'USD', purchase: 27.55, sale: 27.65 },
    { currency: 'EUR', purchase: 27.55, sale: 27.65 },
  ];

  // Add a timestamp and save the data in localStorage.
  const forLocalStorage = [{ timestamp: time }, ...currencyData];
  localStorage.setItem('currency', JSON.stringify(forLocalStorage));

  // Return data
  return currencyData;
};

export default getCurrencyData;
