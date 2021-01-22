import { Component, __private } from "cc";
import { ESUtils } from "../../eshelper/utils/ESUtils";
import { UIBase } from "./UIManager/UIBase";

export const PersistSceneName:string = 'Persistence';
export const StartSceneName:string = 'SceneEntry';

export type Constructor<T = {}> = new (...args: any[]) => T;

export abstract class ISceneScript{}

export class MetaData{
    private static sceneScriptClasses:Map<string,Constructor> = new Map<string,Constructor>();
    public static IsSceneScriptRegistered(scriptName:string):boolean{
        return this.sceneScriptClasses.has(scriptName);
    }
    public static GetSceneScriptConstrutor(scriptName:string):Constructor|null{
        if(!this.IsSceneScriptRegistered(scriptName)) return null;
        return this.sceneScriptClasses.get(scriptName)??null;
    }

    private static uiClassNamesMap:Map<string,string> = new Map<string,string>();
    private static uiScriptClasses:Map<string,__private.cocos_core_scene_graph_base_node_Constructor<UIBase>> = new Map<string,__private.cocos_core_scene_graph_base_node_Constructor<UIBase>>();

    public static IsUIScriptRegistered(scriptName:string):boolean;
    public static IsUIScriptRegistered<T extends UIBase>(scriptClass:__private.cocos_core_scene_graph_base_node_Constructor<T>):boolean;
    public static IsUIScriptRegistered(target:any):boolean{
        if(typeof target==="string") return this.uiScriptClasses.has(target);
        let _className = target.prototype.constructor.name;
        if(!this.uiClassNamesMap.has(_className)) return false;
        return this.uiScriptClasses.has(this.uiClassNamesMap.get(_className)!);
    }

    public static GetUIScriptConstructor(scriptName:string): __private.cocos_core_scene_graph_base_node_Constructor<UIBase>|null{
        return this.uiScriptClasses.get(scriptName)??null;
    }

    public static GetUIClassRegisteredName<T extends UIBase>(uiScriptConstructor:__private.cocos_core_scene_graph_base_node_Constructor<T>):string|null{
        return this.uiClassNamesMap.get(uiScriptConstructor.prototype.constructor.name)??null;
    }
}

export const ui_script = <T extends UIBase>(className:string)=>(target:new(...args:any[])=>T)=>{
    ESUtils.CallFunction(Reflect.get(MetaData,"uiClassNamesMap"),"set",target.prototype.constructor.name, className);
    ESUtils.CallFunction(Reflect.get(MetaData,"uiScriptClasses"),"set",className, target);
}

export const scene_script = <T extends ISceneScript>(classname:string)=>(target:new(...args:any[])=>any)=>{
    ESUtils.CallFunction(Reflect.get(MetaData,"sceneScriptClasses"), "set", classname,target);
}