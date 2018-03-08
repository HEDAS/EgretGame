var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var AnimationPanel = (function (_super) {
    __extends(AnimationPanel, _super);
    function AnimationPanel() {
        var _this = _super.call(this) || this;
        // 设置当前面板的皮肤
        _this.skinName = skins.AnimationSkin;
        _this.createChildren();
        return _this;
    }
    /**
     * 动画组播放完成
     */
    AnimationPanel.prototype.onTweenGroupComplete = function () {
        console.log('TweenGroup play completed.');
    };
    /**
     * 动画组中的一项播放完成
     */
    AnimationPanel.prototype.onTweenItemComplete = function (event) {
        var item = event.data;
        console.log(item.target);
        console.log('TweenItem play completed.');
    };
    /**
     * 当点击按钮时播放动画
     */
    AnimationPanel.prototype.onButtonClick = function () {
        this.tweenGroup.play();
        //this.tweenGroup.play(0);从头播放
    };
    AnimationPanel.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.tweenGroup.addEventListener('complete', this.onTweenGroupComplete, this);
        this.tweenGroup.addEventListener('itemComplete', this.onTweenItemComplete, this);
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    return AnimationPanel;
}(eui.Component));
__reflect(AnimationPanel.prototype, "AnimationPanel");
//# sourceMappingURL=AnimationPanel.js.map