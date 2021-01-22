import { error, log, warn } from "cc";
import { Platform } from "../../scripts/utils/Platform";
import { ESUtils } from "./ESUtils";

export namespace Logger{

    export function Log(message?: any, ...optionalParams: any[]){
        doLogger(log,message,...optionalParams);
    }

    export function Warn(message?: any, ...optionalParams: any[]){
        doLogger(console.warn,message,...optionalParams);
    }

    export function Error(message?: any, ...optionalParams: any[]){
        doLogger(error,message,...optionalParams);
    }

    /**
     * examples 
     */
    function doLogger(action:{(message?: any, ...optionalParams: any[]):void}, message?: any, ...optionalParams: any[]){
        let _timePrefix:string = moment().format("YYYY-MM-DD HH:mm:ss.SSS") + ": ";
        if(typeof message==='string')
            action(_timePrefix + message, ...optionalParams);
        else
            action(_timePrefix, message);
    }
}