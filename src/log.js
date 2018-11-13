process.send(`log here.`)

process.on('message', data => {
    console.log('in the log file, we get message: ' + data)
})