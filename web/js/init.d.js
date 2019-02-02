(function ($) {
    $.fn.customizeForm = function () {
        this.each(function () {
            var input = $(this);
            if (!input.data('initialized')) {
                do_customInput(input);
            }
        });

        return this;
    };
    var do_customInput = function (input) {
        if (input.is('input')) {
            var type = input.attr('type');
            if (type == 'radio' || type == 'checkbox') {

                if (input.parent().is('label')) {
                    input.parent().addClass('custom_input_label');
                }
                input.addClass('custom_input');
                input.after($('<span class="custom_input custom_input_' + type + '"></span>'));
            }
        } else if (input.is('select') && !input.prop('multiple')) {
            //var span = $('<span></span>');
            return;


            var options_idx = {};
            var options_html = '';

            input.find('option').each(function (k, v) {
                options_idx[$(v).val()] = $(v).html();
                var p = '';
                var matches = /^(\s+)/.exec($(v).text());
                if (matches) {
                    p = ' style="padding-left:' + (5 + matches[0].length * 20) + 'px"';
                }
                options_html += '<div class="custom_select__option"' + p + '>' + $(v).html() + '</div>';
            });
            var inp_w = input.outerWidth();


            var inp_search = '<div class="custom_select__search"><input type="text" style="width:100%" /></div>';


            var div = $('<div class="custom_select__div"><input readonly="true" class="custom_select__input" value="' + options_idx[input.val()] +
                '" type="text" /><span class="custom_select__span"></span>' + inp_search + '<div class="custom_select__options">' + options_html + '</div></div>');
            var inp = div.find('.custom_select__input');
            var options_layer = div.find('.custom_select__options');

            options_layer.css({
                'min-width': inp_w
            })

            inp.width(input.width());


            inp.click(function () {
                div.toggleClass('custom_select__div__opened');

            });
            //$(dicument.click)

            input.before(div);
            input.css({
                'visibility': 'hidden'
            });
            //input.change();
        }
        input.data('initialized', '1')
    }
})(jQuery);

var manyPhones = {
    mask: false,
    inp: null,
    wrap: null,
    add: function(btn){
        var _this = this;
        $(btn).before(_this.temp(false, true));
        _this.wrap.find('input').focus();
        _this.btnPos();
    },
    del: function(btn){
        var _this = this;
        _this.wrap.find('input').eq($(btn).index('.many_phones_act__del')).remove();
        $(btn).remove();
        _this.update();
        _this.btnPos();
    },
    temp: function(val, btn){
        return '<input onchange="manyPhones.update();" ' + (val ? 'value="' + val + '"' : '') + ' type="text" class="many_phones_act__inp' + (this.mask ? ' phone' : '') + '" size="20" />' + (btn ? '<div class="many_phones_act__del" onclick="manyPhones.del(this);"></div>' : '');
    },
    update: function(){
        var _this = this;
        var arr = [];
        if(_this.wrap){
            _this.wrap.find('input').each(function(idx, inp){
                if($.trim(inp.value) != ''){
                    arr.push(inp.value);
                }
            });
        }
        _this.inp.val(arr.join(';'));
    },
    btnPos: function(){
        $('.many_phones_act input').each(function(idx, inp){
            $('.many_phones_act .many_phones_act__del').eq(idx).css('top', ($(inp).position().top + ($(inp).outerHeight() / 2 - 8)) + 'px');
        });
    },
    init: function () {
        var _this = this;
        var arr = [];
        var html = '';
        _this.inp = $('.many_phones');
        if(_this.inp.length > 0){
            _this.inp.hide();
            html += '<div class="many_phones_act">';
            if(_this.inp.val() != ''){
                arr = _this.inp.val().split(';');
                for(var key in arr){
                    html += _this.temp(_this.mask ? arr[key].replace(/[^0-9]*/g, '') : arr[key], true);
                }
            }
            html += _this.temp();
            html += '<div class="many_phones_act__add" onclick="manyPhones.add(this);">Добавить</div>';
            html += '</div>';
            _this.inp.after(html);
            _this.wrap = $('.many_phones_act');
            _this.btnPos();
            if(_this.mask){
                $('.phone').mask('+7 (999) 999-99-99');
            }
        }
    }
};

var aPoint = {
    inp: null,
    addressInp: null,
    rpMap: null,
    mapContent: null,
    yaInit: function() {
        var _this = this;
        var coords = _this.inp.val().trim().split(',');
        _this.mapContent = 'a_point_map';


        if (_this.rpMap != null) {
            _this.rpMap.destroy();
        }

        ymaps.ready(function() {
            var rpMap = null;
            _this.rpMap = new ymaps.Map(_this.mapContent, {
                center: [54.717489, 55.953872],
                zoom: 10,
                controls: ['searchControl', 'fullscreenControl', 'rulerControl']
            },{
                buttonMaxWidth: 300,
                suppressMapOpenBlock: true,
                searchControlProvider: 'yandex#search'
            });

            rpMap = _this.rpMap;

            if(coords != '' && coords.length == 2){
                rpMap.geoObjects.add(new ymaps.Placemark(coords));
                rpMap.setCenter(coords);
            } else {

                var geolocation = ymaps.geolocation;
                geolocation.get({
                    provider: 'yandex',
                    mapStateAutoApply: true
                }).then(function (result) {
                    rpMap.setCenter(result.geoObjects.position);
                });
            }

            rpMap.events.add('click', function (e) {
                var coords = e.get('coords');
                rpMap.geoObjects.removeAll();
                rpMap.geoObjects.add(new ymaps.Placemark(coords));
                rpMap.panTo(coords, {delay: 200});
                aPoint.inp.val(coords);
                if(aPoint.addressInp){
                    ymaps.geocode(coords).then(function (res) {
                        var firstGeoObject = res.geoObjects.get(0);
                        aPoint.addressInp.val(firstGeoObject.getAddressLine());
                    });
                }
            });

            var zoomControl = new ymaps.control.ZoomControl({
                options: {
                    float: 'right',
                    position: { top: 100, right: 10 }
                }
            });
            rpMap.controls.add(zoomControl);
        });
    }
};



$(document).ready(function(){
    $('input,select').customizeForm();
    manyPhones.init();
});