"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const http = __importStar(require("http"));
class Status {
    constructor() {
        this.message = {
            ok: "ONLINE ✅",
            err: "ERROR ❌"
        };
        this.Server = http.createServer((req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Content-Length': Buffer.byteLength(this.message.ok, 'utf8')
            });
            //res.write("<head><meta charset='utf-8'></head>");   
            res.write(this.message.ok, "utf-8");
            res.end();
        });
    }
    Start() {
        this.Server.listen(process.env.PORT || 8080);
    }
}
exports.Status = Status;
