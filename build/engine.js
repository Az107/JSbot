"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vm = __importStar(require("vm2"));
var Engine = /** @class */ (function () {
    function Engine() {
        this.EVM = new vm.VM();
    }
    /**
     * Exec
     */
    Engine.prototype.Exec = function (script) {
        var result = null;
        result = this.EVM.run(script);
        return result;
    };
    return Engine;
}());
exports.Engine = Engine;
