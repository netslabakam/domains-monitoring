/*
 * atmastruct
 * version 1.1.0
 * by https://atma.company

response json = [
    {
        "items":[
            {
                "id":"mybranch_2",
                "title":"Улица Комсомольская, 106, Уфа",
                "type":"folder" | "file",
                "url-delete":"url"
            },
            {
                "id":"mybranch_1",
                "title":"Уфа, Уфа",
                "type":"folder"
            }
        ],
        "props":{
            "parentId":0,
            "title":"Филиалы"
        },
        "menu":[
            {
                "title":"Филиал",
                "type":"folder",
                "url":"/arm/my_branch/new"
            }
        ]
    }
]
*/

var aStruct = {

    modulesStruct: {},

    template: {
        block: function (o) {
            var _o = $.extend({
                class: 'aStruct__block'
            }, o);
            var temp = $('<div />', _o);

            return temp;
        },

        blockScroll: function (o) {
            var _o = $.extend({
                class: 'aStruct__block__scroll'
            }, o);


            var temp = $('<div />', _o);

            return temp;
        },

        blockItems: function (o) {
            var appendElems = [$('<span />', { html: o.text })];
            var _o = null;

            if(o['data-type'] == 'folder' && !o['data-url-delete']){
                appendElems.push(
                    $('<span />', {
                        class: 'aStruct__bi__edit',
                        title: 'Редактировать',
                        onclick: 'aStruct.events.blockItemEditClick(event, this);'
                    })
                );
            }else if(o['data-url-delete']){
                appendElems.push(
                    $('<span />', {
                        class: 'aStruct__bi__delete',
                        title: 'Удалить',
                        onclick: 'aStruct.events.blockItemDelClick(event, this);'
                    })
                );
            }

            _o = $.extend({
                class: 'aStruct__block__item',
                onclick: 'aStruct.events.blockItemClick(event, this);',
                append: appendElems
            }, o);

            _o.title = _o.text;

            with(_o) {
                delete text;
            }

            var temp = $('<div />', _o);

            return temp;
        },

        form: function (o) {
            var _o = $.extend({
                class: 'aStruct__form' + (o == undefined ? ' aStruct__form_empty' : '')
            }, o);
            var temp = $('<div />', _o);

            return temp;
        },

        blockProps: function (items, props) {
            var getItems = function (items) {
                var _items = [];

                $.each(items, function (i, el) {
                    _items.push($('<li />', {
                        text: el.title,
                        onclick: 'aStruct.events.blockItemPropClick(event, this);',
                        'data-stype': el._type,
                        'data-url': el.url,
                    }))
                });

                return _items;
            };

            var drop = [

                $('<b />', {
                    class: 'aStruct__block__menu__title',
                    text: (props.title == undefined ? '' : props.title),
                })

            ];

            if(items.length > 0){

                drop.push(
                    $('<ul />', {
                        class: 'aStruct__block__menu__drop',
                        append: getItems(items)
                    })
                )

            }

            var temp = $('<div />', {
                class: 'aStruct__block__menu' + (items.length > 0 ? '' : ' aStruct__block__menu_nodrop'),
                on: {
                    click: function () {
                        var block = $(this).closest('.aStruct__block')
                        if(block.hasClass('aStruct__block_min')){
                            block.find('.aStruct__block__item_active').click();
                        }
                        if(!$(this).hasClass('aStruct__block__menu_nodrop')){
                            $(this).toggleClass('aStruct__block__menu_active');
                        }
                    }
                },

                append: drop
            });

            return temp;
        },

        preloader: function (o, text = 'Пожалуйста, подождите...') {
            var _o = $.extend({
                class: 'aStruct__preloader',
                append: $('<span />', {
                    text: text
                })
            }, o);
            var temp = $('<div />', _o);

            return temp;
        },
    },

    addBlock: function (o, path) {
        var block = [];
        var blockScroll, blockMenu = null;
        var blockItems = [];
        var pathArray = (path != '' && path != undefined ? path.split(',') : []);

        var checkIdInPath = function (itemId) {
            var fItem = pathArray.filter(function (v, i) {
                var _v = v.split(':');
                if(_v[0] == itemId){
                    return true;
                }
                return false;
            })
            if(fItem.length > 0){
                return true
            }
            return false;
        }

        $.each(o.items, function (i, item) {
            var clName = 'aStruct__block__item aStruct__bi_type_' + item.type;

            if(path != '' && path != undefined && checkIdInPath(item.id) === true){
                clName += ' aStruct__block__item_active';
            }

            blockItems.push(aStruct.template.blockItems({
                text: item.title,
                class: clName,
                'data-id': item.id,
                'data-stype': item._type,
                'data-type': item.type,
                'data-url-delete': (typeof item.urlDelete != 'undefined' ? item.urlDelete : false)
            }));
        });

        blockScroll = aStruct.template.blockScroll({
            append: blockItems
        });

        if(o.menu != undefined){
            blockMenu = aStruct.template.blockProps(o.menu, o.props);
        }

        block = aStruct.template.block({
            'data-pid': o.props.parentId,
            'data-url': (o.props.url != undefined ? o.props.url : ''),
            'data-parent-url': (o.props.parentUrl != undefined ? o.props.parentUrl : ''),
            'data-url-file': (o.props.urlFile != undefined ? o.props.urlFile : ''),
            'data-url-delete': (o.props.urlDelete != undefined ? o.props.urlDelete : ''),
            append: [blockMenu, blockScroll]
        });

        return block;
    },

    events: {

        blockItemClick: function (e, el) {
            var $el = $(el);
            var id = $el.data('id');
            var block = $el.closest('.aStruct__block');
            var struct = block.closest('.aStruct');
            var url = aStruct.buildUrl(block.data('url'), { pid: id });
            var dataType = 'JSON';

            if($(e.target).hasClass('aStruct__bi__edit')){
                return false;
            }

            if($el.hasClass('aStruct__bi_type_file')){
                dataType = 'HTML';
            }

            aStruct.send(url, function (data) {
                var afterHtml = [];
                var nextBlock = block.next();
                var formBox = struct.find('.aStruct__form');

                if(nextBlock.hasClass('aStruct__block')){
                    struct.find('.aStruct__block').slice(nextBlock.index()).remove();
                }
                if(dataType == 'HTML'){
                    formBox.html(data);
                    formBox.removeClass('aStruct__form_empty');
                    aStruct.form.init(formBox.find('form'));
                }else{
                    $.each(data, function (i, params) {
                        params.props.parentUrl = block.data('url');
                        afterHtml.push(aStruct.addBlock(params));
                    });
                    aStruct.form.clear(formBox);
                    block.after(afterHtml);
                }
                block.find('.aStruct__block__item_active').removeClass('aStruct__block__item_active');
                block.find('.aStruct__bi__edit_active').removeClass('aStruct__bi__edit_active');

                $el.addClass('aStruct__block__item_active');
                aStruct.historyPush(struct);
            }, dataType);
        },

        blockItemPropClick: function (e, el) {
            var $el = $(el);
            var block = $el.closest('.aStruct__block');
            var struct = block.closest('.aStruct');
            var url = $el.data('url');
            var prevBlock = block.prev();
            var parentId = null;
            var prefix = '?';

            if(prevBlock.length > 0 && prevBlock.hasClass('aStruct__block')){
                parentId = prevBlock.find('.aStruct__block__item_active').data('id');
            }

            if(url.indexOf('?') != -1){
                prefix = '&';
            }

            aStruct.send(url + (parentId == null ? '' : prefix + 'pid=' + parentId), function (data) {
                var afterHtml = [];
                var nextBlock = block.next();
                var formBox = struct.find('.aStruct__form');

                if(nextBlock.hasClass('aStruct__block')){
                    struct.find('.aStruct__block').slice(nextBlock.index()).remove();
                }

                block.find('.aStruct__block__item_active').removeClass('aStruct__block__item_active');
                block.find('.aStruct__bi__edit_active').removeClass('aStruct__bi__edit_active');

                if(block.data('url-delete') != '' && block.prev().length > 0){
                    block.prev().find('.aStruct__block__item_active').click();
                }else{
                    formBox.html(data);
                    formBox.removeClass('aStruct__form_empty');
                    aStruct.form.init(formBox.find('form'));
                }

                aStruct.send(block.data('parent-url') + (block.data('pid') ? '?pid=' + block.data('pid') : ''), function (data) {
                    var bl = data[0];
                    var _block = null;
                    var itemsId = $(data).find('form[data-id]').data('id');

                    bl.props.parentUrl = block.data('parent-url');
                    _block = aStruct.addBlock(bl);
                    if(itemsId){
                        _block.find('.aStruct__block__item[data-id="' + itemsId + '"]').addClass('aStruct__block__item_active');
                    }
                    block.replaceWith(_block);
                }, 'JSON');
                aStruct.historyPush(struct);
            }, 'HTML');
        },

        blockItemEditClick: function (e, el) {
            var $el = $(el);
            var id = $el.parent().data('id');
            var block = $el.closest('.aStruct__block');
            var struct = block.closest('.aStruct');
            var url = aStruct.buildUrl(block.data('url-file'), { id: id });
            aStruct.send(url, function (data) {
                var nextBlock = block.next();
                var formBox = struct.find('.aStruct__form');

                if(nextBlock.hasClass('aStruct__block')){
                    struct.find('.aStruct__block').slice(nextBlock.index()).remove();
                }

                formBox.html(data);
                formBox.removeClass('aStruct__form_empty');
                aStruct.form.init(formBox.find('form'));

                block.find('.aStruct__block__item_active').removeClass('aStruct__block__item_active');
                block.find('.aStruct__bi__edit_active').removeClass('aStruct__bi__edit_active');
                $el.parent().addClass('aStruct__block__item_active');
                $el.addClass('aStruct__bi__edit_active');
                aStruct.historyPush(struct);
            }, 'HTML');
            e.stopPropagation();
        },

        blockItemDelClick: function (e, el) {
            var $el = $(el);
            var id = $el.parent().data('id').replace(/\D/g, '');
            var block = $el.closest('.aStruct__block');
            var struct = block.closest('.aStruct');
            var url = $el.parent().data('url-delete');
            if(confirm('Вы уверены что хотите удалить?')){
                aStruct.send(url, function (response) {
                    if(response.state == 'success'){
                        aStruct.flash.add('notice', response.message);
                        if(block.prev().length > 0){
                            block.prev().find('.aStruct__block__item_active').click();
                            aStruct.historyPush(struct);
                        }
                    }else if(response.state == 'error'){
                        aStruct.flash.add('error', response.message);
                    }
                }, 'JSON', 'POST');
            }

            e.stopPropagation();
        }
    },

    flash: {
        time: null,
        add: function(type, message){
            if(aStruct.flash.time != null){
                clearTimeout(aStruct.flash.time);
            }
            $('.lui__notice, .lui__error').remove();
            $('.lui__desktop_right__wrapper').after('<i class="' + (type == 'notice' ? 'lui__notice lui__notice__no_ajax' : 'lui__error lui__error__no_ajax') + '">' + message + '</i>');
            aStruct.flash.time = setTimeout(function () {
                $('.lui__notice, .lui__error').remove();
            }, 10000);
        }
    },

    urlParser: {
        getParam: function (p) {
            var params = window.location.search.split('&');
            var result = params.filter(function (str, i) {
                if(str.indexOf(p + '=') == -1){
                    return false;
                }
                return true;
            });

            result = result[0].split('=');

            return result[1].split(',');
        }
    },

    form: {
        init: function ($forms) {
            $forms.each(function (i, form) {
                var $form = $(form);
                var responseType = 'JSON';

                if($form.data('init') == 'true'){
                    return false;
                }

                if($form.data('response-type') == undefined || $form.data('response-type') == ''){
                    responseType = 'HTML';
                }


                $form.data('init', true);

                $form.find('.aStruct__form__btn_act').attr('onclick', 'aStruct.form.additionalBtnSend(this);return false');

                $form.submit(function(){
                    var preloader = aStruct.template.preloader();
                    $('.aStruct__form').append(preloader);
                    $.ajax({
                        url: $form.attr("action"),
                        type: 'POST',
                        dataType: responseType,
                        data: $form.serialize(),
                        success: function (response) {
                            preloader.remove();
                            var formBox = $form.closest('.aStruct__form');
                            var struct = formBox.closest('.aStruct');
                            var lastBlock = formBox.prev();
                            var lastBlockUrl = lastBlock.data('parent-url') + (lastBlock.data('pid') ? '?pid=' + lastBlock.data('pid') : '');
                            if(responseType == 'JSON'){
                                if(response.state == 'success'){
                                    aStruct.flash.add('notice', response.message);
                                    lastBlock.find('.aStruct__block__item[data-id="' + response.id + '"]').remove();
                                    aStruct.form.clear(formBox);
                                    aStruct.historyPush(struct);
                                }
                                if(response.state == 'error'){
                                    aStruct.flash.add('error', response.message);
                                }
                                return false;
                            }

                            if(responseType == 'HTML'){
                                formBox.html(response);
                                aStruct.form.init(formBox.find('form'));
                            }
                            aStruct.send(lastBlockUrl, function (data) {
                                var block = data[0];
                                var _block = null;
                                var itemsId = $(response).find('form[data-id]').data('id');

                                block.props.parentUrl = lastBlock.data('parent-url');
                                _block = aStruct.addBlock(block);
                                if(itemsId){
                                    _block.find('.aStruct__block__item[data-id="' + itemsId + '"]').addClass('aStruct__block__item_active');
                                }
                                lastBlock.remove();
                                formBox.before(_block);
                                aStruct.historyPush(struct);
                            }, 'JSON');

                            aStruct.resize();
                        },complete: aStruct.ajaxComplete
                    });
                    return false;
                });
            })
        },

        clear: function (formBox) {
            if(formBox.length > 0){
                formBox.empty().addClass('aStruct__form_empty');
            }
        },

        additionalBtnSend: function (el) {
            var $el = $(el);
            var urlArray = $el.data('url').split('?');
            var method = ($el.data('method') == undefined ? 'GET' : $el.data('method'));

            if($el.data('confirm') != undefined && $el.data('confirm') != ''){
                if(!confirm($el.data('confirm'))){
                    return false;
                }
            }
            $.ajax({
                url: urlArray[0],
                type: method,
                dataType: 'json',
                data: urlArray[1],
                success: function (response) {
                    var formBox = $el.closest('.aStruct__form');
                    var struct = formBox.closest('.aStruct');
                    var lastBlock = formBox.prev();

                    if(response.state == 'success'){
                        aStruct.flash.add('notice', response.message);
                        lastBlock.find('.aStruct__block__item[data-id="' + response.id + '"]').remove();
                        aStruct.form.clear(formBox);
                        if(response.lastBlockUpdate != undefined && lastBlock.prev().length > 0){
                            lastBlock.prev().find('.aStruct__block__item_active').click();
                        }
                        aStruct.historyPush(struct);
                    }
                    if(response.state == 'error'){
                        aStruct.flash.add('error', response.message);
                    }
                },complete: aStruct.ajaxComplete
            })
        }

    },

    historyPush: function (struct) {
        var path = [];

        struct.find('.aStruct__block__item_active').each(function(i, active){
            var $active = $(active);
            var $activeEdit = $active.find('.aStruct__bi__edit_active');
            var str = $active.data('id') + ($activeEdit.length > 0 ? ':1' : ':0');
            path.push(str);
        });
        history.pushState('', '', '?path=' + path.join(','));
    },

    buildUrl: function (prefix = '', objs = {}) {
        return prefix + '?' + $.param(objs);
    },

    send: function (url = null, success = function(){}, dataType = 'JSON', type = 'GET') {
        var p = aStruct.template.preloader();
        $('.aStruct__form').append(p);
        $.ajax({
            url: url,
            dataType: dataType,
            type: type,
            success: function (data) {
                success(data);
                aStruct.resize();
                p.remove();
            },complete: aStruct.ajaxComplete
        });

    },

    init: function () {
        $('.aStruct').each(function (i, struct) {
            var $struct = $(struct);
            var module = $struct.data('module');
            var urlStart = $struct.data('url-start');
            var urlPath = $struct.data('url-path') == undefined ? '' : $struct.data('url-path');
            var html = [];
            var urlPathArr = [];

            if($struct.data('init') == 'true'){
                return false;
            }

            aStruct.modulesStruct[module] = {
                contain: $struct,
                urlStart: urlStart
            };

            aStruct.send(urlStart + (urlStart.indexOf('?') == -1 ? '?': '&') + (urlPath == '' ? '' : 'path=' + urlPath), function (data) {
                $.each(data, function (i, params) {
                    var parentUrl = urlStart;
                    if(data[i-1] != undefined){
                        parentUrl = data[i-1].props.url;
                    }
                    params.props.parentUrl = parentUrl;
                    html.push(aStruct.addBlock(params, urlPath));
                });

                html.push(aStruct.template.form());
                $struct.data('init', true);
                $struct.html(html);
            });

            urlPathArr = urlPath.split(',');

            setTimeout(function () {
                var lastElem = urlPathArr[urlPathArr.length - 1];
                var type = lastElem.split(':')[1];
                var id = lastElem.split(':')[0];
                var activeItem = $struct.find('.aStruct__block__item[data-id="' + id + '"]');

                if(activeItem.length > 0){

                    if(activeItem.data('type') == 'file'){
                        activeItem.click();
                    }else{
                        if(type == '1'){
                            activeItem.find('.aStruct__bi__edit').click();
                        }
                    }
                }
            }, 150);
        });

        $(window).resize(function () {
            aStruct.resize();
        });
    },

    resize: function () {

        clearTimeout(aStruct.timerResize);

        aStruct.timerResize = setTimeout(function () {
            var wHeight = $(window).height();
            var $aStruct = $('.aStruct');
            var aStructWidth = $aStruct.outerWidth();
            var formMinWidth = 900;
            var _w = aStructWidth - (($('.aStruct__block').length * 50) + formMinWidth);
            var count = 0;
            var notFit = false;

            $aStruct.css('visibility', 'hidden');
            $('.aStruct__block').removeClass('aStruct__block_min');

            $aStruct.each(function (i, elem) {
                elem = $(elem);
                elem.height(wHeight - elem.position().top);
            });

            if($('.aStruct__form__body').length > 0){

                $('.aStruct__form__body').each(function (i, b) {
                    var $b = $(b);
                    $b.outerHeight(wHeight - $b.offset().top);
                });

                $('.aStruct__form__body').css('visibility', 'visible');
            }

            for(var i = 1; i <= $('.aStruct__block').length; ++i){
                var sAll =_w - (i * 170);
                var sizeBlocks = sAll + formMinWidth;
                if(sAll > 0){
                    ++count;
                }
                if(sizeBlocks <= 0){
                    notFit = true;
                }
            }

            if(!$('.aStruct__form').hasClass('aStruct__form_empty')){
                $('.aStruct__block').slice(0, $('.aStruct__block').length - count).addClass('aStruct__block_min');
            }else if(notFit == true){
                $('.aStruct__block').slice(0, $('.aStruct__block').length - count - 1).addClass('aStruct__block_min');
            }


            $aStruct.css('visibility', 'visible');
        }, 100);
    },
    ajaxComplete: function (jqXHR, textStatus) {
        var mess = 'Техническая ошибка. Обновите страницу';
        if(textStatus !== 'success'){
            if(jqXHR.status === 403){
                mess = 'У вас нет необходимых разрешений для доступа';
            }else if(jqXHR.status === 401){
                mess = 'Необходима авторизация. Вы будете перенаправлены на страницу входа';
            }
            alert(mess);
            if(jqXHR.status === 401){
                window.location.reload();
            }
        }
    }
};