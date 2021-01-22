// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, Button } from 'cc';
import { ui_script } from '../../../cchelper/scripts/core/TypeDefinitions';
import { UIBase } from '../../../cchelper/scripts/core/UIManager/UIBase';
import { Managements } from '../../../cchelper/scripts/facades/Managements';
import { SceneLoadingUI } from './SceneLoadingUI';
const { ccclass, property } = _decorator;

@ui_script("LoginUI")
@ccclass('LoginUI')
export class LoginUI extends UIBase {
    spawned(){
        console.log("--------- login ui spawned ------------");
    }

    onShow(){
        console.log("login on show...");
    }

    onHide(){
        console.log("login on hide");
        
    }

    start () {
        // Your initialization goes here.
        this.Get("btn_login")?.on("click",()=>{
            let _loadingUI = Managements.UI.Show(SceneLoadingUI);
            _loadingUI?.Reset();
            Managements.Scene.Load("SceneHall",_progress=>{
                _loadingUI?.SyncProgress(_progress);
            },()=>{
                Managements.UI.Hide(SceneLoadingUI);
            });
        });
    }

    onDestroy(){
        console.log("login ui destroy");
        
    }
}
