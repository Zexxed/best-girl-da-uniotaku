import http from 'http'
import micro from 'micro'
import cors from 'micro-cors'

const port = process.env.HTTP_PORT || 3000

const handlerName = process.argv[2]
if (!handlerName.match(/^[a-z\-]+$/)) {
  throw Error('Invalid handler name')
}
  
const handlerUrl = new URL(handlerName + '.js', import.meta.url)
const handlerModule = await import(handlerUrl)
const handler = handlerModule.default

if (typeof handler !== 'function') {
  throw Error('Invalid handler')
}

const server = new http.Server(micro(cors()(handler)))
server.listen(port)

console.log(`API "${handlerName}" running in http://localhost:${port}/`)
