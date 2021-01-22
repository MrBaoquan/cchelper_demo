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

@ui_script("HallUI")
@ccclass('HallUI')
export class HallUI extends UIBase {
    private btnStartGame:Button;
    private btnLogout:Button;
    spawned(){
        this.btnStartGame = this.Get("btn_startGame", Button)!;
        this.btnLogout = this.Get("btn_logout", Button)!;
    }

    start () {
        this.btnStartGame.node.on("click",()=>{
            console.log("开始游戏");
        });

        this.btnLogout.node.on("click", ()=>{
            let _loadingUI:SceneLoadingUI = Managements.UI.Show(SceneLoadingUI)!;
            _loadingUI.Reset();
            Managements.Scene.Load("SceneEntry",_progress=>{
                _loadingUI.SyncProgress(_progress);
            },()=>{
                Managements.UI.Hide(SceneLoadingUI);
            });
        });
    }
    
}
