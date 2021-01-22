"use strict";

const path = require("path");

exports.methods={
    activatedAssetDir:Editor.Project.path,
    log(){
        Editor.Panel.open('cchelper.create-file');
    },
    updateActivatedDir(arg1,arg2){
        if(arg1!=='asset') return;
        if(arg2.length<=0){
            this.activatedAssetDir = Editor.Project.path;
            return;
        } 
        Editor.Message.request("asset-db", "query-path", arg2[0]).then(InRes=>{
            this.activatedAssetDir = path.dirname(InRes);
        });
    }
},exports.load=function(){
},exports.unload=function(){
};

