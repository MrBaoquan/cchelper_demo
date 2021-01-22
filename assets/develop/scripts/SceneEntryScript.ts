import { scene_script } from "../../cchelper/scripts/core/TypeDefinitions";
import { Managements } from "../../cchelper/scripts/facades/Managements";

@scene_script("SceneEntryScript")
export class SceneEntryScript
{
    start():void{
        console.log("我是初始场景，我被初始化了");
        
        Managements.UI.Show("LoginUI",_ui=>{
            
        });
        
    }

    update():void{

    }

    destroy():void{

    }

}