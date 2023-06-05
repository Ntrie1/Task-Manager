const pug = require('pug');

function pugConfiguration(app){
    app.set('view engine', 'pug');
    app.set('views', 'src/views');
}

module.exports = pugConfiguration;

