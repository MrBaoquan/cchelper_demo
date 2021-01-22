exports.listeners = {
    show(){
        console.log("show");
    },

    hide(){
        console.log("hide");
    }
};

exports.template = `
<div>
    <ui-input placeholder="输入脚本名称..."></ui-input>
    <ui-button>创建脚本</ui-button>
</div>

`;

exports.$ = {
    elem:'div'
};

exports.ready = function(){
    
}

