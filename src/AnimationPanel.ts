class AnimationPanel extends eui.Component {
    constructor() {
        super();
        // 设置当前面板的皮肤
        this.skinName = skins.AnimationSkin;
    }
    /**
     * EXML中对应id为tweenGroup的动画组对象
     */
    public tweenGroup: egret.tween.TweenGroup;
    /**
     * EXML中对应id为button的按钮对象
     */
    public button: eui.Button;
    /**
     * 动画组播放完成
     */
    private onTweenGroupComplete(): void {
        console.log('TweenGroup play completed.');
    }
    /**
     * 动画组中的一项播放完成
     */
    private onTweenItemComplete(event: egret.Event): void {
        const item = event.data as egret.tween.TweenItem;
        console.log(item.target);
        console.log('TweenItem play completed.');
    }
    /**
     * 当点击按钮时播放动画
     */
    private onButtonClick(): void {
        this.tweenGroup.play();
        //this.tweenGroup.play(0);从头播放
    }
    protected createChildren(): void {
        super.createChildren();
        this.tweenGroup.addEventListener('complete', this.onTweenGroupComplete, this);
        this.tweenGroup.addEventListener('itemComplete', this.onTweenItemComplete, this);
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
}