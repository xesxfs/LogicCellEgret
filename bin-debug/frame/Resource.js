var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Resource = (function () {
    function Resource() {
        if (Resource.Instance)
            return Resource.Instance;
    }
    Resource.getBlockChips = function (x, y) {
        if (!this.ChipsSpriteSheet)
            this.ChipsSpriteSheet = new egret.SpriteSheet(RES.getRes("Chip_png"));
        var chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
        if (!chip) {
            this.ChipsSpriteSheet.createTexture(x + "_" + y, x, y, 44, 44);
            chip = this.ChipsSpriteSheet.getTexture(x + "_" + y);
        }
        ;
        return new eui.Image(chip);
    };
    Resource.getMusic = function () {
        if (!this.sounds) {
            this.sounds = [RES.getRes("SoundC_mp3"), RES.getRes("SoundD_mp3"), RES.getRes("SoundE_mp3"), RES.getRes("SoundF_mp3"), RES.getRes("SoundG_mp3"), RES.getRes("SoundA_mp3"), RES.getRes("SoundB_mp3"), RES.getRes("SoundCC_mp3")];
            this.sounds.forEach(function (sound) {
                sound.type = egret.Sound.EFFECT;
            });
        }
        return this.sounds;
    };
    Resource.Instance = new Resource();
    return Resource;
}());
__reflect(Resource.prototype, "Resource");
