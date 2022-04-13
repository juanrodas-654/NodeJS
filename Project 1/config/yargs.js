const argv = require('yargs')
    .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Table Multiplication base',
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'To show or not the table',
    })
    .option('r', {
        alias: 'range',
        type: 'number',
        default: 1,
        demandOption: true,
        describe: 'List range',
    })
    .check((argv, options)=> {
        if(isNaN(argv.b)){
            throw 'Base has to be a number'
        }
        else{
            return true;
        }
    })
    .argv;

module.exports = argv;