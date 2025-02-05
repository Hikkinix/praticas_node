import http from 'http'

http.createServer(
    (req, res) => {
        res.end("Olá mundo")
    }
).listen(8282, () => { console.log("Servidor iniciado") }) 