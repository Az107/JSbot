import * as http from 'http'

export class Status{
    private Server : http.Server ;
    constructor(){
        this.Server = http.createServer((req, res) => {
            res.writeHead(200);
            res.write("ONLINE ✅")
        })

    }

    public Start() {
        this.Server.listen(process.env.PORT);
    }
}
