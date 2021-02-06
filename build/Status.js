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
var http = __importStar(require("http"));
var Status = /** @class */ (function () {
    function Status() {
        var _this = this;
        this.okMessage = "ONLINE ✅";
        this.Server = http.createServer(function (req, res) {
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
                'Content-Length': Buffer.byteLength(_this.okMessage, 'utf8')
            });
            //res.write("<head><meta charset='utf-8'></head>");   
            res.write(_this.okMessage, "utf-8");
            res.end();
        });
    }
    Status.prototype.Start = function () {
        this.Server.listen(process.env.PORT || 8080);
    };
    return Status;
}());
exports.Status = Status;
