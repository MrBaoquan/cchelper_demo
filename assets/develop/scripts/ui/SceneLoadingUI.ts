import { _decorator, Component, Node, ProgressBar, random, randomRange, tween, Label } from 'cc';
import { ui_script } from '../../../cchelper/scripts/core/TypeDefinitions';
import { UIBase } from '../../../cchelper/scripts/core/UIManager/UIBase';
const { ccclass, property } = _decorator;


@ui_script("SceneLoadingUI")
@ccclass('SceneLoadingUI')
export class SceneLoadingUI extends UIBase {

    private progressBar:ProgressBar;
    private labelProgress:Label;

    protected spawned(){
        this.progressBar = this.Get("ProgressBar",ProgressBar)!;
        this.labelProgress = this.Get("label_progress",Label)!;
    }

    start () {
        // Your initialization goes here.
        console.log("SceneLoadingUI start");
    }

    public Reset(){
        this.progressBar.progress = 0;
        this.labelProgress.string = Number(0).toFixed(2).padStart(5,"0") + "%";
    }

    public SyncProgress(progress:number){
        tween(this.progressBar)
            .to(0.1,{progress:progress})
        .start();

        this.labelProgress.string = (progress*100).toFixed(2).padStart(5,"0") + "%";
        
    }

}
