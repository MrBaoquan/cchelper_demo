import { _decorator, game, JsonAsset } from 'cc';
import { ESUtils } from '../eshelper/utils/ESUtils';
const { ccclass, property, executionOrder } = _decorator;

import { UIManager } from './core/UIManager/UIManager';
import { Managements } from './facades/Managements';
import { BaseComponent } from './utils/CCUtils';


@ccclass('CCHelperEntry')
@executionOrder(-1000)
export class CCHelperEntry extends BaseComponent {

    @property({
        type: JsonAsset,
        tooltip:"资源配置文件, 默认加载 resources/configs/res.json"
    })
    private resConfig: JsonAsset = null;

    @property({
        type: JsonAsset,
        tooltip:"UI配置文件, 默认加载 resources/configs/uis.json"
    })
    private uiConfig: JsonAsset = null;

    readonly initializeFunction:string = "initialize";
    
    onLoad(){
        game.addPersistRootNode(this.node);
        this.initialize();
    }

    initialize(){
        let _uiManager = this.Get("UIRoot")?.addComponent(UIManager);
        Reflect.set(Managements,"UI",_uiManager);
        // 初始化依赖于固有资源的管理器
        
        ESUtils.CallFunction(Managements.Resource,this.initializeFunction, this.resConfig).then(()=>{
            ESUtils.CallFunction(<UIManager>_uiManager,this.initializeFunction, this.uiConfig).then(()=>{
                ESUtils.CallFunction(Managements.Scene,this.initializeFunction);
            });
        });
    }

    start () {
        
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
