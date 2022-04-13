const createDocument = require('./close section/helper');

const argv = require('./config/yargs');




createDocument(argv.b, argv.l, argv.r)
.then((docName) => console.log(docName, 'created'))
.catch((err) => console.log(err));

