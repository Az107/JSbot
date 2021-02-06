import { type } from "os";
import * as vm from "vm2";

export class Engine {
    private EVM : vm.VM;
    constructor() {
        this.EVM = new vm.VM();
    }

    /**
     * Exec
     */
    public Exec(script : string) : any  {
        var result : any = null;
        try{
            result = this.EVM.run(script);

        }catch( error ){
            result = null;
        }
        return result ;

    }
}