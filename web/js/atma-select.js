/*
 * atmaselect
 * version 2.3.0
 * by https://atma.company
*/

var cl = function (a) {
    console.log(a);
};

var cSelect = {
    arr: [],

    ajx: {
        a: null,
        send: function (props) {
            var _ajx = this;

            if(props.url == undefined){
                return false;
            }

            if(_ajx.a != null){
                _ajx.a.abort();
            }

            _ajx.a = $.ajax({
                url: props.url  + (props.url.indexOf('?') != -1 ? '&' : '?') + 'limit=50',
                dataType: 'json',
                type: 'GET',
                success: function (data) {
                    var items = '';
                    var selectItems = '';

                    console.log(data);

                    $.each(data, function (i, item) {
                        items += cSelect.template.addLi({
                            value: item.value,
                            title: item.title,
                            selected: false
                        });

                        selectItems += cSelect.template.addOption({
                            value: item.value,
                            title: item.title,
                            selected: false
                        });
                    });


                    if(props.wrap == undefined || props.wrap.length == 0){
                        return false;
                    }

                    cSelect.updateDrop({
                        contain: props.wrap,
                        items: $(items),
                        selectItems: selectItems,
                        scroll: props.scroll
                    });
                }
            })
        }
    },

    template: {
        addOption: function (obj) {
            var temp = '<option value="' + obj.value + '">' + obj.title + '</option>';
            return temp;
        },
        addLi: function (obj) {
            var temp = '<li ' +
                'data-value="' + obj.value + '" ' +
                'class="c_select__opts__item' + (obj.selected ? ' c_select__opts__selected' : '') + '" ' +
                'title="' + obj.title + '" ' +
                'onclick="cSelect.inEvent.itemClick(event, $(this));"' +
                '>' +
                obj.title.replace("\n", "<br>") +
                '</li>';
            return temp;
        },
        addUl: function (obj) {
            var temp = '<ul class="c_select__opts" onscroll="cSelect.inEvent.dropScroll(event, $(this));" onclick="event.stopPropagation()">' + obj.li + '</ul>';
            return temp;
        },
        addInp: function () {
            var temp = '<input type="text" ' +
                'class="c_select__drop__inp" ' +
                'onkeyup="cSelect.inEvent.searchInpKeyup(event, $(this));" ' +
                'onfocus="cSelect.inEvent.searchInpFocus(event, $(this));" ' +
                'placeholder="Поиск..." />';
            return temp;
        },
        addDrop: function (obj) {
            var temp = '';
            var inp = '<div class="c_select__drop__inp_wrap">' + cSelect.template.addInp() + '</div>';
            temp = '<div class="c_select__drop"  onclick="cSelect.inEvent.stopClick(event);">' + (obj.inp ? inp : '') + obj.ul + '</div>';
            return temp;
        },
        addWrap: function (obj) {
            var temp = '<div ' +
                'class="c_select' + (obj.props.multiple != undefined ? ' c_select_multiple' : '') + (typeof obj.props.theme !== 'undefined' ? ' c_select_' + obj.props.theme : '') + (obj.props.fullVal ? ' c_select_full_val' : '') + '" ' +
                'tabIndex="' + obj.id + '" ' +
                'data-id="' + obj.id + '" ' +
                'onclick="cSelect.inEvent.selectClick(event, $(this));"' +
                'onmouseleave="cSelect.inEvent.selectMouseLeave(event, $(this));"' +
                'onmouseenter="cSelect.inEvent.selectMouseEnter(event, $(this));"' +
                obj.props.style +
                '>' +
                (obj.props.multiple != undefined ? cSelect.template.addMultiList(obj.props.multiItems) : '<div class="c_select__selected">' + obj.title + '</div>') +
                obj.drop +
                '</div>';
            return temp;
        },
        addMultiList: function (items) {
            var temp = '<ul class="c_select_multi">' +
                (items != null ? items : '') +
                '<li class="c_select_multi__search" onclick="event.stopPropagation();">' +
                    cSelect.template.addInp() +
                '</li>' +
                '</ul>';
            return temp;
        },

        addMultiListLi: function (obj) {
            var temp = '<li class="c_select_multi__item" data-value="' + obj.value + '" onclick="event.stopPropagation();">' +
                    '<span>' + obj.title + '</span>' +
                    '<span class="c_select_multi__item__del" onclick="cSelect.inEvent.multiLiDelete(event, $(this))">×</span>' +
                '</li>';
            return temp;
        }
    },

    inEvent: {
        selectMouseLeave: function (e, el) {
            el.data('hover', 'false');
        },

        selectMouseEnter: function (e, el) {
            el.data('hover', 'true')
        },

        selectClick: function (e, el) {
            var input = el.find('.c_select__drop__inp');


            if (el.hasClass('c_select_active')) {
                el.removeClass('c_select_active');
            } else {
                el.addClass('c_select_active');
                if (input.length) {
                    input.focus();
                }
            }
            e.stopPropagation();
        },
        itemClick: function (e, el) {
            var parent = el.parent();
            var val = el.data('value');
            var text = el.text();
            var wrap = el.closest('.c_select');
            var select = wrap.prev();
            var multiUl = wrap.find('.c_select_multi__search');
            var multiLi = null;
            var selectVal = '';

            if(select.attr('multiple') != undefined){
                if(!el.hasClass('c_select__opts__selected')){
                    multiLi = cSelect.template.addMultiListLi({
                        title: text,
                        value: val
                    });
                    multiUl.before(multiLi);
                }
            }else{
                parent.find('.c_select__opts__selected').removeClass('c_select__opts__selected');
            }

            el.addClass('c_select__opts__selected');

            selectVal = (select.data('old') === null || select.data('old') === undefined ? '' : select.data('old'));

            select.find('option[value="' + val + '"]').prop('selected', 'true');
            wrap.find('.c_select__selected').html(text);
            wrap.removeClass('c_select_active');

            if(selectVal != val){
                select.change();
            }

            if(select.val() == ''){
                wrap.removeClass('c_select_full_val');
            }else{
                wrap.addClass('c_select_full_val');
            }

            select.data('old', val);
        },

        multiLiDelete: function (e, el) {
            var wrap = el.closest('.c_select');
            var item = el.closest('.c_select_multi__item');
            var select = wrap.prev();
            var drop = wrap.find('.c_select__opts');

            select.find('option[value="' + item.data('value') + '"]').removeAttr('selected');
            drop.find('.c_select__opts__selected[data-value="' + item.data('value') + '"]').removeClass('c_select__opts__selected');
            item.remove();
        },

        searchInpKeyup: function (e, el) {
            var val = el.val().toLowerCase().trim();
            var wrap = el.closest('.c_select');
            var drop = wrap.find('.c_select__opts');
            var id = wrap.data('id');
            var _arr = [];
            var select = wrap.prev();
            var url = '';

            if(select.data('ajx-url') != undefined){
                url = select.data('ajx-url') + (select.data('ajx-url').indexOf('?') != -1 ? '&' : '?') + 'q=' + encodeURIComponent(val);
                cSelect.ajx.send({
                    url: url,
                    wrap: wrap
                });
            }else{


                console.log(id);


                _arr = cSelect.arr[id].filter(function (i, elem) {
                    if ($(elem).text().trim().toLowerCase().indexOf(val) >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                });


                cSelect.updateDrop({
                    contain: wrap,
                    items: _arr
                });
            }
            // e.stopPropagation();
        },
        searchInpFocus: function (e, el) {
            var wrap = el.closest('.c_select');


            // if(e.relatedTarget == null && e.sourceCapabilities == null){
            //     e.stopPropagation();
            //     return false;
            // }


            if(wrap.data('hover') == 'true'){
                wrap.addClass('c_select_active');
            }


            e.stopPropagation();
        },
        stopClick: function (e, el) {
            e.stopPropagation();
        },
        dropScroll: function (e, el) {
            var wrap = el.closest('.c_select');
            var select = wrap.prev();
            var searchInp = wrap.find('.c_select__drop__inp');
            var val = function(){
                return encodeURIComponent(searchInp.val().toLowerCase().trim());
            };
            var lastItem = el.find('li').last();
            var h = el.outerHeight();
            var lastItemIndex = lastItem.index() + 1;
            var p = null;
            var lastItemPos = (lastItem.position().top - h - lastItem.outerHeight() < 0 ? 0 : lastItem.position().top - h - lastItem.outerHeight());

            if(searchInp.length == 0 || select.data('ajx-url') == undefined){
                return false;
            }

            if(lastItemPos <= 0){
                lastItemIndex -= select.find('option[selected]').length;
                p = parseInt((lastItemIndex / 50) + 1);
                if(lastItemIndex % 50 > 0){
                    ++p;
                }
                url = select.data('ajx-url') + (select.data('ajx-url').indexOf('?') != -1 ? '&' : '?') + 'q=' + val() + (p == null || p == 1 ? '' : '&page=' + p);
                cSelect.ajx.send({
                    url: url,
                    wrap: wrap,
                    scroll: true
                });
            }
        }
    },

    updateMultiUl: function () {

    },

    updateDrop: function (props) {
        var drop = null;
        var select = null;

        if(props.contain == undefined || props.contain.length == 0){
            return false;
        }

        drop = props.contain.find('.c_select__opts');
        select = props.contain.prev();

        if(props.scroll == true){
            drop.append(props.items);
            select.append(props.selectItems);
            return false;
        }

        if(props.selectItems != undefined){
            select.empty().html(props.selectItems);
        }

        if (props.items.length == 0) {
            props.items = '<li class="c_select__opts__item">Ничего не найдено</li>';
        }

        drop.empty().html(props.items);
    },

    getSelect: function (el) {
        return el.closest('.c_select').prev();
    },

    init: function (selects) {
        if(typeof selects === 'undefined'){
            selects = $('select.custom_select');
        }
        var ct = this.template;

        selects.hide();

        selects.each(function (i, select) {
            var li = '';
            var ul = '';
            var drop = '';
            var wrap = '';
            var textLi = '';
            var $select = $(select);
            var multiItems = '';
            var width = $select.data('width');
            var fullVal = false;

            $select.data('old', $select.val());

            $select.find('option').each(function (j, option) {
                var val = $(option).val();
                var title = $(option).text();
                var state = $(option).prop('selected');

                if (state) {
                    textLi = title;
                    if(val != ''){
                        fullVal = true;
                        multiItems += cSelect.template.addMultiListLi({
                            title: title,
                            value: val
                        })
                    }
                }

                li += ct.addLi({
                    value: val,
                    title: title,
                    selected: state
                });
            });

            if (textLi == '') {
                textLi = ($select.data('placeholder') != undefined ? $select.data('placeholder') : '&nbsp;');
            }

            ul = ct.addUl({
                li: li
            });

            drop = ct.addDrop({
                ul: ul,
                inp: (typeof $select.data('search') != 'undefined' && $select.attr('multiple') == undefined ? true : false)
            });

            wrap = ct.addWrap({
                id: $('.c_select').length,
                drop: drop,
                title: textLi,
                props: {
                    dataAjxUrl: $select.data('ajx-url') != undefined ? $select.data('ajx-url') : null,
                    multiple: $select.attr('multiple'),
                    multiItems: multiItems == '' ? null : multiItems,
                    style: 'style="width:' + (width == undefined ? ($select.outerWidth() + 4) + 'px' : width) + ';"',
                    fullVal: fullVal,
                    theme: $select.data('theme')
                }
            });
            $select.after(wrap);
        });

        $('.c_select').each(function (i, _select) {
            cSelect.arr[i] = $(_select).find('.c_select__opts__item');
        });

        $(document)
            .on('blur', '.c_select', function () {
                var wrap = $(this);

                if(wrap.data('hover') == 'true'){
                    return false;
                }else{
                    if (wrap.find('.c_select__drop__inp').length > 0) {
                        // $(this).removeClass('c_select_active');

                        setTimeout(function () {
                            if (wrap.hasClass('c_select_active')) {
                                wrap.removeClass('c_select_active');
                            }
                        }, 150);

                    }else{
                        wrap.removeClass('c_select_active');
                    }

                }

            })
            // .on('blur', '.c_select__drop__inp', function () {
            //     var wrap = $(this).closest('.c_select');
            //     console.log('blur', 'drop');
            //     setTimeout(function () {
            //         if (wrap.hasClass('c_select_active') && wrap.data('hover') != true) {
            //             wrap.removeClass('c_select_active');
            //             console.log('focuout');
            //         }
            //     }, 150);
            // });


            .on('wheel', '.c_select__opts', function (e) {
                var el = $(this);
                var dy = e.originalEvent.deltaY > 0 ? 60 : -60;
                el.scrollTop(el.scrollTop() + dy);
                return false;
                // if (el.length > 0) {
                //     el.scrollTop(el.scrollTop() + e.deltaY);
                //     return false
                // }
            })

        // document.onwheel = function(e) {
        //     var el = $(e.target).closest('.c_select__opts');
        //
        //     if (el.length > 0) {
        //         el.scrollTop(el.scrollTop() + e.deltaY);
        //         return false
        //     }
        // }

    }

};