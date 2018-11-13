const cp = require('child_process')
const { resolve } = require('path')

const logProcess = cp.fork(resolve(__dirname, './log.js'), ['child process fork.'])

logProcess.on('error', error => {
    console.error(`fork has error:${error}`)
})

logProcess.on('exit', code => {
    console.log(`fork has exit with code:${code}`)
})

logProcess.on('message', data => {
    console.log(`fork exec with result: ${data}`)
})

logProcess.send('from cp1.')