// Babak Habibi - babak.habibi20@gmail.com
// Including necessary libraries
const request = require('request');
const cheerio = require('cheerio');

// File system is inside the NodeJS
const fs = require('fs');
// Write our data in CSV file
const writeStream = fs.createWriteStream('post.csv');


// Write header for excel file
writeStream.write('Title,Description \n');

// Requesting the URL with 3 default parameters
request('https://www.huffingtonpost.com/topic/italy-travel', (error,
                                                              response,
                                                              html) => {
    if (!error && response.statusCode === 200) {
        // Use cheerio to parse and create the jQuery-like DOM
        const $ = cheerio.load(html);

        // Finding targeted elements
        $('.card__content').each((i, el) => {
            const title = $(el)
                .find('.card__headline__text')
                .text()
                .replace(/["',]/g, "")
                .trim();

            const desc = $(el).find('.card__image__src').attr('src').split('?')[0];


            // Write Row to CSV
            writeStream.write(`${title}, ${desc} \n`);

        });
        // Making sure everything is alright
        console.log('its done');
    }
});