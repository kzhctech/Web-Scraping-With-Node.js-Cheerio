
const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://m.cricbuzz.com/cricket-commentary/38587/ind-vs-nz-2nd-test-new-zealand-tour-of-india-2021').then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)
  //const urlElems = $('.list-content span:nth-child(5)').text()
  //const urlElems = $('.cbz-ui-status').text()
 // const urlElems = $('#top table tr:nth-child(3)').first().first().find('td:nth-child(2)').text()
 const urlElems = $('#top h3.ui-li-heading span.miniscore-teams.ui-bat-team-scores').text()
 //const urlElems = $('#top h3.ui-li-heading span.teamscores.ui-bowl-team-scores').text()
 //const urlElems = $('#top .ui-match-scores-branding .crr').text()
  //const urlElems = $('#paginationList').first().first().first().first().children().first().first().children().children().children().children().children().first().text()
  console.log(urlElems)
})


//#paginationList > div > div:nth-child(4) > div > div > div > p
//#top > div > div:nth-child(11) > div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(5)
//#top > div > div:nth-child(10) > div > div > h3 > div
//#top > div > div:nth-child(11) > div.cb-list-item.miniscore-data.ui-branding-style.ui-branding-style-partner > div > div > div > span:nth-child(5)
