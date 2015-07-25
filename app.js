var fs = require('fs');
var path = require('path');

function findFile(filename, folder) {

	fs.readdir(folder, function (err, listFiles) {

		//console.log(listFiles);
		listFiles.forEach(function(item) {

			//console.log(item);

			var pathAbs = path.join(folder, item);

			fs.stat(pathAbs, function (err,stats) {

				if(stats.isDirectory()) {

					// if this is a folder, will call findfile() to find
					findFile(filename, path.join(pathAbs));

				}

				if (stats.isFile() && filename === item) {

					console.log('Result: ', filename, ' in ', folder);

				}

			});

		});

	});

}

var filename = process.argv[2] ? process.argv[2] : 'app.js';

var dirname = process.argv[3] ? process.argv[3] : __dirname;

findFile(filename, dirname);