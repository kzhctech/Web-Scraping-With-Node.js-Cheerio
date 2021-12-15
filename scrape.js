
const cheerio = require('cheerio')
const axios = require('axios')


axios.get('https://m.cricbuzz.com/cricket-commentary/37026/mls-vs-sys-13th-match-big-bash-league-2021-22s').then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data);
  const urlElems = $('.list-content span:nth-child(5)').text();
  const status = $('.cbz-ui-status').text();

  const title = $('#top').find('div').find('div:nth-child(9)').find('h4').text();
  const batsman1name = $('#top table tr:nth-child(2)').first().first().find('td:nth-child(1)').text();
  const batsman2name = $('#top table tr:nth-child(3)').first().first().find('td:nth-child(1)').text();
  const bowlername = $('#top').find('div:nth-child(11)').find('div:nth-child(3)').find('tr:nth-child(2)').find('td:nth-child(1)').text();


  const batsman1run = $('#top table tr:nth-child(2)').first().first().find('td:nth-child(2)').text();
  const batsman2run = $('#top table tr:nth-child(3)').first().first().find('td:nth-child(2)').text();
  const bowlerwikwt = $('#top').find('div:nth-child(11)').find('div:nth-child(3)').find('tr:nth-child(2)').find('td:nth-child(5)').text();
  const bowlerover = $('#top').find('div:nth-child(11)').find('div:nth-child(3)').find('tr:nth-child(2)').find('td:nth-child(2)').text();


  const batTeam = $('#top h3.ui-li-heading span.miniscore-teams.ui-bat-team-scores').text();
  const bowlTeam = $('#top h3.ui-li-heading span.teamscores.ui-bowl-team-scores').text();
  const crr = $('#top .ui-match-scores-branding .crr').text();
  const commentry = $('#paginationList').first().first().first().first().children().first().first().children().children().children().children().children().first().text();
 
  console.log('Title:',title);
  console.log(' ');
  console.log('Status:',status);
  console.log(' ');
  console.log('Bat:',batTeam,'CRR:',crr);
  console.log(' ');
  console.log(batsman1name,'Run:',batsman1run);
  console.log(' ');
  console.log(batsman2name,'Run:',batsman2run);
  console.log(' ');
  console.log(bowlername,'Over',bowlerover,'Wicket',bowlerwikwt);
  console.log(' ');
  console.log(commentry);


});
