
const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://m.cricbuzz.com/cricket-commentary/39806/sl-vs-wi-2nd-test-west-indies-tour-of-sri-lanka-2021').then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)
  const urlElems = $('#paginationList').first().first().first().first().children().first().first().children().children().children().children().children().first().text()
  console.log(urlElems)
})


//#paginationList > div > div:nth-child(4) > div > div > div > p
