const axios = require('axios');
const countries = require('../utils/countries');

module.exports = async (message) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const country = message.content.split(' ')[1]?.toUpperCase();
  const regex = /^[A-Z]{2}$/;

  if (!regex.test(country)) {
    message.reply({
      content: 'This command format is !getholidays <country code>. For example, !getholidays US',
    });
  } else {
    const selectedCountry = countries.filter((c) => c.iso === country);
    if (selectedCountry?.length > 0) {
      const isoCountry = selectedCountry[0].iso;
      try {
       const resp = await axios.get(`https://calendarific.com/api/v2/holidays?api_key=${process.env.HOLIDAYS_API_KEY}&country=${isoCountry}&year=${currentYear}`);
       let holidays = await resp.data.response.holidays;
       holidaysArray = holidays.filter((h) => new Date(h.date.iso) > currentDate).slice(0, 10)
       holidaysString = holidaysArray.map((h) => `- ${h.name} on ${h.date.iso}`).join(' \n');
       message.reply({
         content: `The upcoming holidays for ${selectedCountry[0].country_name} are : \n${holidaysString}`,
       });
      } catch (error) {
        message.reply({
          content: 'Oops! Something went wrong. Please try again.',
        });
      }
    } else {
      message.reply({
        content: 'The country code is invalid. Please try again.',
      });
    }
  }
};