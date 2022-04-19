const {exec} = require('child_process')

const beWatch = exec ('npm run start:be')
const beProd = exec ('npm run start:be:prod')
const fe = exec ('npm run start:fe')
const admin = exec ('npm run start:admin')

beWatch.stdout.on('data', data => {
    console.log(`${data} from beWatch`)
})
beWatch.stderr.on('data', data => {
    console.log(`${data} from beWatch`)
})

beProd.stdout.on('data', data => {
    console.log(`${data} from beProd`)
})
beProd.stderr.on('data', data => {
    console.log(`${data} from beProd`)
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
