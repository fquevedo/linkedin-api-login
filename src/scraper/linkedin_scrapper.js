
    
const { LinkedInProfileScraper } = require('linkedin-profile-scraper');

const scraper = new LinkedInProfileScraper({
    sessionCookieValue: 'AQEDAQ2W-U4Bej36AAABfCAJRBMAAAF8RBXIE04Az332t3v7p3TdhioYGFwOtXXsTxcMTaV9JBaG-iEn50p-1yqpXVXOiViVAQ9E5DMbFvOhxBUijesfYCvb46aQdJyrl3sHTAyxKeMrsLkGOEFeNotO',
    keepAlive: false
});

// Prepare the scraper
// Loading it in memory
scraper.setup();

scraper.run('https://www.linkedin.com/in/fernquevedo/');

module.exports = scraper;