// 模块加载的时候触发的函数
exports.load = function() {
    console.log('abcdefg')
};
// 模块卸载的时候触发的函数
exports.unload = function() {
    console.log('abcdefg')
};

// 模块内定义的方法
exports.methods = {
    log() {
        const scene = cc.director.getScene();
        if (scene) {
            scene.walk(target => console.log(target.name));
        } else {
            console.warn('Scene not found');
        }
    }
};