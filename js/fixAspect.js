/*
* 画像の縦横比を保って縮小するjQuery拡張 - Qiita
* https://qiita.com/ampersand/items/7513e6947ef36a3b83d1
*/
(function($) {

    $.fn.fixAspect = function(option) {

        var init = function(){
            var self = $(this);
            // 表示時の大きさ
            var _height = $(this).attr('height');
            var _width = $(this).attr('width');
            var trueHeight ,trueWidth  = 0;

            var img = new Image();
                img.onload = function(){
                trueHeight = this.height;
                trueWidth = this.width;

                // 縦またはどちらも同じの場合
                if(_height >= _width){
                    d = _height / trueHeight;
                    trueHeight = trueHeight * d;
                    trueWidth = trueWidth * d;
                    self.attr('height',trueHeight);
                    self.attr('width',trueWidth);
                }
                // 横の場合
                else{
                    d = _width / trueWidth;
                    trueHeight = trueHeight * d;
                    trueWidth = trueWidth * d;
                    self.attr('height',trueHeight);
                    self.attr('width',trueWidth);
                }

                // とどめたいサイズ内におさまっていない場合
                if(trueWidth > _width || trueHeight > _height){
                    // 縦横どちら基準で縦横比を変更するのか

                    // 縦またはどちらも同じの場合
                    if(trueHeight >= trueWidth){
                        d = _height / trueHeight;
                        trueHeight = trueHeight * d;
                        trueWidth = trueWidth * d;
                        self.attr('height',trueHeight);
                        self.attr('width',trueWidth);
                    }
                    // 横の場合
                    else{
                        d = _width / trueWidth;
                        trueHeight = trueHeight * d;
                        trueWidth = trueWidth * d;
                        self.attr('height',trueHeight);
                        self.attr('width',trueWidth);
                    }

                    if(trueWidth > _width){
                        d = _width / trueWidth;
                        trueHeight = trueHeight * d;
                        trueWidth = trueWidth * d;
                        self.attr('height',trueHeight);
                        self.attr('width',trueWidth);
                    }

                    if(trueHeight > _height){
                        d = _height / trueHeight;
                        trueHeight = trueHeight * d;
                        trueWidth = trueWidth * d;
                        self.attr('height',trueHeight);
                        self.attr('width',trueWidth);
                    }

                }

                if(option.parentFixture === true){
                    self.parent().css('height',_height);
                    self.parent().css('width',_width);
                    self.parent().css('text-align','center');
                    self.css('padding-top',(_height/2)-((trueHeight)/2)+'px');
                }
            }
            img.src = $(this).attr('src');

        }

        this.each(function(){
            init.apply($(this));
        })

        return this;
    };
})(jQuery);