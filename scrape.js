
const cheerio = require('cheerio')
const axios = require('axios')

axios.get('https://m.cricbuzz.com/cricket-commentary/38511/ban-vs-pak-2nd-test-pakistan-tour-of-bangladesh-2021').then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)
 //const urlElems = $('.list-content span:nth-child(5)').text()
 //const urlElems = $('.cbz-ui-status').text()
 //const urlElems = $('#top table tr:nth-child(2)').first().first().find('td:nth-child(1)').text()
 const urlElems = $('#top').find('div:nth-child(11)').find('div:nth-child(3)').find('tr:nth-child(2)').text()
 //const urlElems = $('#top h3.ui-li-heading span.miniscore-teams.ui-bat-team-scores').text()
 //const urlElems = $('#top h3.ui-li-heading span.teamscores.ui-bowl-team-scores').text()
 //const urlElems = $('#top .ui-match-scores-branding .crr').text()
 //const urlElems = $('#paginationList').first().first().first().first().children().first().first().children().children().children().children().children().first().text()
  console.log(urlElems)
})

