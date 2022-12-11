const { describe } = require('yargs');
const yargs =require('yargs')
const note = require('./notes.js')

yargs.version("1.2.4")

yargs.command({
    command:'add',
    describe: "add a nre note",
    handler: function () {
        console.log("adding a new note dod ");
    }
})

yargs.command({
    command:"remove",
    describe:"remove an note",
    handler: function () {
        console.log("remove note doood");
    }
})
console.log(yargs.argv);