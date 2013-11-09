var level = require('level');
var db = level(__dirname + '/data', { encoding: 'json' });

var query = process.argv.slice(2).join(' ');
db.createReadStream({ start: query, end: query + '\uffff' })
    .on('data', function (row) {
        var key = row.key.split('!')[1];
        db.get(key, function (err, res) {
            // ...
        });
    })
;
