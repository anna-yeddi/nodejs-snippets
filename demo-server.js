const http = require('http')
const fs = require('fs')

const server = http.createServer(async (req, res) => {
  res.statusCode = 200
  // res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Content-Type', 'text/html')

  try {
    const fileData = await fs.promises.readFile(
      '/Users/annakanterova/DevoMisc/NodeJS/nodejs-snippets/demo.html',
      'utf-8'
    )
    // ToDo: Setup the "cwd" in launch.json for debugger:
    // const fileData = await fs.promises.readFile('/demo.html', 'utf-8')
    res.end(fileData)
  } catch (e) {
    debugger
  }
})

server.listen(8002)
