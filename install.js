const {exec} = require('child_process')

const be = exec ('npm run install:be')
const fe = exec ('npm run install:fe')
const admin = exec ('npm run install:admin')

be.stdout.on('data', data => {
    console.log(`${data} from be`)
})
be.stderr.on('data', data => {
    console.log(`${data} from be`)
})

fe.stdout.on('data', data => {
    console.log(`${data} from fe`)
})
fe.stderr.on('data', data => {
    console.log(`${data} from fe`)
})

admin.stdout.on('data', data => {
    console.log(`${data} from admin`)
})
admin.stderr.on('data', data => {
    console.log(`${data} from admin`)
})
