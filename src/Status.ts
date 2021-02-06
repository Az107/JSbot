import * as http from 'http'

export class Status{
    private Server : http.Server ;
    private okMessage = "ONLINE ✅";
    constructor(){
        this.Server = http.createServer((req, res) => {
            res.writeHead(200,{
                'Content-Type': 'text/html; charset=utf-8',
                'Content-Length': Buffer.byteLength(this.okMessage, 'utf8')
            });
            //res.write("<head><meta charset='utf-8'></head>");   
            res.write(this.okMessage,"utf-8");
            res.end();
        })

    }

    public Start() {
        this.Server.listen(process.env.PORT || 8080);
    }
}
