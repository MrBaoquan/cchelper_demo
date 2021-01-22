// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node } from 'cc';
import { scene_script } from '../../cchelper/scripts/core/TypeDefinitions';
import { Managements } from '../../cchelper/scripts/facades/Managements';
import { HallUI } from './ui/HallUI';

@scene_script("SceneHallScript")
export class SceneHallScript{
   

    start () {
        Managements.UI.Show(HallUI);
    }

}
