var fs = require('fs');
var colors = require('colors');

fs.readdir('katalog', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile("./Nowy zapisany plik z zawartocia folderu 'katalog'.txt", data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.yellow);
        fs.readFile("./Nowy zapisany plik z zawartocią folderu 'katalog'.txt", 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data.red);
        });
    });
});