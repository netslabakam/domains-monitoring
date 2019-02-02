var rangeSlider = {
    events: {
        liMouseUp: function (e, _this) {
            var parent = $(_this).parent();
            var html = $(_this).html();
            var selected = parent.find('.p_range_slider__select__list__selected');
            var wrap = parent.closest('.p_range_slider_wrap');
            var inp = wrap.find('.p_range_slider__select__inp');


            if (!$(_this).hasClass('p_range_slider__select__list__selected')) {
                parent.find('.p_range_slider__select__list__selected').html(html);

                if (wrap.prev().data('type') != html) {
                    wrap.prev().data('type', html);
                    if (wrap.prev().data('type') == '%') {
                        inp.val(Math.floor(parseInt(inp.val()) / (parseInt(wrap.data('max')) / 100)));
                    } else {
                        inp.val(Math.ceil(parseInt(inp.val()) * (parseInt(wrap.data('max')) / 100)));
                    }
                }
                console.log(wrap.prev().data('type'), html)
                parent.removeClass('p_range_slider__select__list_active');
            }
            ;

            e.stopPropagation();
        },

        selectedMouseUp: function (e, _this) {
            var parent = $(_this).parent();
            $('.p_range_slider__select__list_active').removeClass('p_range_slider__select__list_active');
            if (parent.hasClass('p_range_slider__select__list_active')) {
                parent.removeClass('p_range_slider__select__list_active');
            } else {
                parent.addClass('p_range_slider__select__list_active');
            }
            e.stopPropagation();
        },

        toddlerMouseDown: function (e) {
            rangeSlider.mouseDown = true;
            rangeSlider.mDownPosX = e.pageX;
            e.stopPropagation();
            return false;
        },

        all: function (e, _this) {
            rangeSlider.mouseDown = false;
            if (rangeSlider.currWrap) {
                rangeSlider.currWrap.find('.p_range_slider__select__inp').data('val', rangeSlider.toddlerPosY);
            }
            $(this).find('.p_range_slider__select__list_active').removeClass('p_range_slider__select__list_active');

            e.stopPropagation();
            return false;
        }

    },
    inEvent: function () {
        rangeSlider.mouseDown = false;
        rangeSlider.mDownPosX = 0;
        rangeSlider.mUpPosX = 0;
        rangeSlider.currWrap = 0;
        rangeSlider.toddlerPosY = 0;

        $(document)
            .on('mousemove', '.p_range_slider_wrap', function (e) {
                var toddler = $(this).find('.p_range_slider__toddler');
                var w = $(this).find('.p_range_slider').width();
                var max = $(this).data('max');
                var inpVal = null;
                var _input = $(this).find('.p_range_slider__select__inp');


                if ($(this).find('.p_range_slider__select__list__selected').text() == '%') {
                    inpVal = Math.ceil((rangeSlider.toddlerPosY / (w / max)) / (max / 100));
                } else {
                    inpVal = Math.ceil(rangeSlider.toddlerPosY / (w / max));
                }

                if (rangeSlider.mouseDown) {
                    rangeSlider.currWrap = $(this);
                    rangeSlider.toddlerPosY = parseInt(_input.data('val'));

                    rangeSlider.toddlerPosY = (rangeSlider.toddlerPosY + (e.pageX - rangeSlider.mDownPosX));

                    rangeSlider.toddlerPosY = rangeSlider.toddlerPosY < 0 ? 0 : rangeSlider.toddlerPosY;
                    rangeSlider.toddlerPosY = rangeSlider.toddlerPosY >= w ? w : rangeSlider.toddlerPosY;

                    toddler.css('left', rangeSlider.toddlerPosY);
                    _input.val(inpVal);
                    $(this).prev().val(Math.ceil(rangeSlider.toddlerPosY / (w / max)));
                }
                return false;
            })
            .on('mouseup', function (e) {
                rangeSlider.events.all(e);
            })
            .on('mouseleave', '.p_range_slider_wrap', function (e) {
                rangeSlider.events.all(e);
            });


    },
    inDom: function (input) {
        var max = input.data('max');
        var type = input.data('type');
        var _nextElem = null;
        var template = '<div data-max="' + max + '" class="p_range_slider_wrap" data-mousedown="1" onclick="rangeSlider.events.all(event);" mouseup="rangeSlider.events.all(event);">' +
            '<div class="p_range_slider">' +
            '<div class="p_range_slider__toddler" onmousedown="rangeSlider.events.toddlerMouseDown(event);"></div></div>' +
            '<div class="p_range_slider__select">' +
            '<input type="text" class="p_range_slider__select__inp" data-val="0" />' +
            '<ul class="p_range_slider__select__list">' +
            '<li class="p_range_slider__select__list__selected" onclick="rangeSlider.events.selectedMouseUp(event, $(this));">' + type + '</li>' +
            '<li onclick="rangeSlider.events.liMouseUp(event, $(this));">%</li>' +
            '<li onclick="rangeSlider.events.liMouseUp(event, $(this));">Сотрудников</li>' +
            '</ul>' +
            '</div>' +
            '</div>';
        var inpVal = null;
        var w = null;

        input.hide();
        input.after(template);

        _nextElem = input.next();
        w = _nextElem.find('.p_range_slider').width();
        inpVal = ( w / max) * input.val();


        _nextElem.find('.p_range_slider__toddler').css('left', inpVal + 'px');
        if (type == '%') {
            _nextElem.find('.p_range_slider__select__inp').val(parseInt(input.val() / (max / 100)));
        } else {
            _nextElem.find('.p_range_slider__select__inp').val(input.val());
        }

        _nextElem.find('.p_range_slider__select__inp').data('val', inpVal);
        input.data('initialized', '1');
    },

    init: function (elems) {
        var _this = this;
        elems.each(function (i, item) {
            _this.inDom($(item));
        });
        this.inEvent();
    }
};


/**
 * @description This plugin allows you to make a select box editable like a text box while keeping it's select-option features
 * @description no stylesheets or images are required to run the plugin
 *
 * @version 0.0.1
 * @author Martin Mende
 * @license Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)
 * @license For comercial use please contact me: martin.mende(at)aristech.de
 *
 * @requires jQuery 1.9+
 *
 * @class editableSelect
 * @memberOf jQuery.fn
 *
 * @example
 *
 * var selectBox = $("select").editableSelect();
 * selectBox.addOption("I am dynamically added");
 */

(function ($) {

    $.fn.editableSelect = function () {
        var instanceVar;

        this.each(function () {
            var originalSelect = $(this);
            //check if element is a select
            if (originalSelect[0].tagName.toUpperCase() === "SELECT") {
                //wrap the original select
                originalSelect.wrap($("<div/>"));
                var wrapper = originalSelect.parent();
                wrapper.css({display: "inline-block"});
                //place an input which will represent the editable select
                var inputSelect = $('<input type="text" />').insertBefore(originalSelect);
                //get and remove the original id
                var objID = originalSelect.attr("id");
                originalSelect.removeAttr("id");
                //add the attributes from the original select
                inputSelect.attr({
                    alt: originalSelect.attr("alt"),
                    title: originalSelect.attr("title"),
                    class: originalSelect.attr("class"),
                    name: originalSelect.attr("name"),
                    disabled: originalSelect.attr("disabled"),
                    tabindex: originalSelect.attr("tabindex"),
                    id: objID
                });
                //get the editable css properties from the select
                var rightPadding = 15;
                inputSelect.css({
                    width: originalSelect.width() - rightPadding,
                    height: originalSelect.height(),
                    fontFamily: originalSelect.css("fontFamily"),
                    fontSize: originalSelect.css("fontSize"),
                    background: originalSelect.css("background"),
                    paddingRight: rightPadding,
                    paddingLeft: '1px'
                });
                inputSelect.val(originalSelect.val());
                //add the triangle at the right
                var triangle = $("<div/>").css({
                    height: 0, width: 0,
                    borderLeft: "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop: "7px solid #999",
                    position: "relative",
                    top: -(inputSelect.height() / 2) - 7,
                    left: inputSelect.width() + rightPadding - 15,
                    marginBottom: "-7px",
                    pointerEvents: "none"
                }).insertAfter(inputSelect);
                //create the selectable list that will appear when the input gets focus
                var selectList = $("<ol/>").css({
                    display: "none",
                    listStyleType: "none",
                    width: inputSelect.outerWidth(),
                    padding: 0,
                    margin: 0,
                    border: "solid 1px #ccc",
                    fontFamily: inputSelect.css("fontFamily"),
                    fontSize: inputSelect.css("fontSize"),
                    background: "#fff",
                    position: "absolute",
                    zIndex: 1000000
                }).insertAfter(triangle);
                //add options
                originalSelect.children().each(function (index, value) {
                    prepareOption($(value).text(), wrapper);
                });
                //bind the focus handler
                inputSelect.focus(function () {
                    selectList.fadeIn(100);
                }).blur(function () {
                    selectList.fadeOut(100);
                }).keyup(function (e) {
                    if (e.which == 13)  inputSelect.trigger("blur");
                });
                //hide original element
                originalSelect.css({visibility: "hidden", display: "none"});

                //save this instance to return it
                instanceVar = inputSelect
            } else {
                //not a select
                return false;
            }
        });//-end each

        /** public methods **/

        /**
         * Adds an option to the editable select
         * @param {String} value - the options value
         * @returns {void}
         */
        instanceVar.addOption = function (value) {
            prepareOption(value, instanceVar.parent());
        };

        /**
         * Removes a specific option from the editable select
         * @param {String, Number} value - the value or the index to delete
         * @returns {void}
         */
        instanceVar.removeOption = function (value) {
            switch (typeof(value)) {
                case "number":
                    instanceVar.parent().children("ol").children(":nth(" + value + ")").remove();
                    break;
                case "string":
                    instanceVar.parent().children("ol").children().each(function (index, optionValue) {
                        if ($(optionValue).text() == value) {
                            $(optionValue).remove();
                        }
                    });
                    break;
            }
        };

        /**
         * Resets the select to it's original
         * @returns {void}
         */
        instanceVar.restoreSelect = function () {
            var originalSelect = instanceVar.parent().children("select");
            var objID = instanceVar.attr("id");
            instanceVar.parent().before(originalSelect);
            instanceVar.parent().remove();
            originalSelect.css({visibility: "visible", display: "inline-block"});
            originalSelect.attr({id: objID});
        };

        //return the instance
        return instanceVar;
    };

    /** private methods **/

    function prepareOption(value, wrapper) {
        var selectOption = $("<li>" + value + "</li>").appendTo(wrapper.children("ol"));
        var inputSelect = wrapper.children("input");
        selectOption.css({
            padding: "3px",
            textAlign: "left",
            display: 'block',
            cursor: "pointer"
        }).hover(
            function () {
                selectOption.css({backgroundColor: "#eee"});
            },
            function () {
                selectOption.css({backgroundColor: "#fff"});
            });
        //bind click on this option
        selectOption.click(function () {
            inputSelect.val(selectOption.text());
            inputSelect.trigger("change");
        });
    }

}(jQuery));


function number_format(number, decimals, dec_point, thousands_sep) {  // Format a number with grouped thousands
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfix by: Michael White (http://crestidg.com)

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


    return km + kw + kd;
}


var cl = function (m) {
    console.log(m);
}
var f = {
    niceRusEnds: function (c, e1, e2, e3) {
        var s = (c + '').substr(-1);
        var s2 = (c + '').substr(-2);

        var e = '';
        if (c == 0) {
            return '';
        }
        else if (s2 == '11' || s2 == '12' || s2 == '13' || s2 == '14') {
            e = e3;
        }
        else if (s == '1') {
            e = e1;
        }
        else if (s == '2' || s == '3' || s == '4') {
            e = e2;
        }
        else {
            e = e3;
        }
        return e;

    },
    checkBatch: function () {
        $(".lui__list_table").each(function (k, t) {
            var $t = $(t);
            var $p = $(t).closest(".batch_form__class");



            var l = $t.find('input:checked').length;



            if ($p.find('.batch_actions_wrapper').length) {
                var checkBatchOverlay = $p.find('.batch_actions_wrapper .sOverlay_white');

                if (checkBatchOverlay.length == 0) {
                    checkBatchOverlay = sOverlay($p.find('.batch_actions_wrapper'), 'sOverlay_white', $p.find('.batch_actions_wrapper'));
                }

                checkBatchOverlay.css('visibility', l > 0 ? 'hidden' : 'visible');
            }


            if ($p.find('#list_checked').length) {
                $p.find('#list_checked').html(l);
            }

        });

    },
    updateShowedCount: function () {
        $('.lui__list_count_from_to').html($('.sf_admin_batch_checkbox').length + ' из');
    },
    calcModal: function (modal) {
        $(modal).css({
            'margin-top': Math.round($(modal).innerHeight() / 2) * -1,
            'margin-left': Math.round($(modal).innerWidth() / 2) * -1
        });
    },
    ajax_eval: function (selector) {
        $(selector).each(function (k, code) {
            if (!$(code).data('initialized')) {
                eval($(code).html());
                $(code).data('initialized', '1');
            }
        });
    },
    createHiddenFormAndSubmit: function (action, fields) {
        var form = $('<form method="post" action="' + action + '"></form>');
        $.each(fields, function (k, v) {
            form.append('<input type="hidden" name="' + k + '" value="' + v + '" />');
        });
        $('body').append(form);
        form.submit();
    }
};
(function ($) {
    $.fn.customizeForm = function () {
        this.each(function () {
            var input = $(this);
            if (!input.data('customize_form_initialized') && input.is(':visible')) {
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
        } else if (input.is('select')) {
            // cSelect.init(input);
        }
        input.data('customize_form_initialized', '1')
    }
})(jQuery);

function sOverlay(el, className, append, close) {
    var div = $('<div class="sOverlay' + (className ? ' ' + className : '') + '"' + (close ? ' onclick="$(this).remove();"' : '') + '></div>');
    $((append ? append : 'body')).append(div);
    div.width(el.outerWidth());
    div.height(el.outerHeight());
    div.offset(el.offset());
    return div;
}

var translit = function (str) {
    var s = {
        'а': 'a',   'б': 'b',   'в': 'v',
        'г': 'g',   'д': 'd',   'е': 'e',
        'ё': 'e',   'ж': 'zh',  'з': 'z',
        'и': 'i',   'й': 'y',   'к': 'k',

        'л': 'l',   'м': 'm',   'н': 'n',
        'о': 'o',   'п': 'p',   'р': 'r',
        'с': 's',   'т': 't',   'у': 'u',

        'ф': 'f',   'х': 'h',   'ц': 'c',
        'ч': 'ch',  'ш': 'sh',  'щ': 'sch',
        'ь': '',    'ы': 'y',   'ъ': '',
        'э': 'e',   'ю': 'yu',  'я': 'ya',

        'А': 'A',   'Б': 'B',   'В': 'V',
        'Г': 'G',   'Д': 'D',   'Е': 'E',

        'Ё': 'E',   'Ж': 'Zh',  'З': 'Z',
        'И': 'I',   'Й': 'Y',   'К': 'K',
        'Л': 'L',   'М': 'M',   'Н': 'N',

        'О': 'O',   'П': 'P',   'Р': 'R',
        'С': 'S',   'Т': 'T',   'У': 'U',
        'Ф': 'F',   'Х': 'H',   'Ц': 'C',

        'Ч': 'Ch',  'Ш': 'Sh',  'Щ': 'Sch',
        'Ь': '',    'Ы': 'Y',   'Ъ': '',
        'Э': 'E',   'Ю': 'Yu',  'Я': 'Ya',

        ' ': '-',   '#': '',    '"': '',
        '\\.': '',    '\\+': '-',   ',': '',
        '\\!': '',    '\\?': '',    '\\/': '-',
        '\\\\':'',    '\'': '',   '&': '_',
        '\\(': '',    '\\)': ''};

    str = $.trim(str);
    for (var key in s) {
        str = str.replace(new RegExp(key, 'g'), s[key]);
    }
    return str.toLowerCase();
}

function ya_translate(el, from, notlower) {
    if (from.val().trim() == '') {
        return;
    }
    el.attr('disabled', true);
    $.ajax({
        url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20130902T144345Z.5863936671655044.0537dfa3017a4bba694fb9cac72e8e9bc7cf2800&lang=ru-en&text=' + from.val().trim(),
        dataType: 'json',
        success: function (json) {
            alert(json);
            var s = json.text[0];
            if (notlower) {
                el.val(s);
            } else {

                s = s.replace(/ /gi, '-');
                s = s.replace(/[^a-z0-9\-]/gi, '');
                s = s.replace(/\-{2,}/gi, '-');
                s = s.replace(/^\-/gi, '');
                s = s.replace(/\-$/gi, '');
                el.val(s.toLowerCase());
            }
            el.attr('disabled', false);
        }
    });
}



(function ($) {
    $.fn.luiManaged = function () {
        this.each(function () {
            var select = $(this);
            if (!select.data('initialized')) {
                do_luiManaged(select);
                select.data('initialized', '1');
            }
        });
        return this;
    };
    var bodyo = false;
    var id = '';
    var do_luiManaged = function (select) {


        var parent = select.parent();
        var form = create_form(select.data('managed_type') == 'modal' ? 'modal' : 'inline');
        var add = $('<span class="managed_add" title="Добавить">+</span>');
        var edit = $('<span class="managed_edit" title="Редактировать">/</span>');
        var remove = $('<span class="managed_remove" title="Удалить">-</span>');
        if (select.data('managed_type') == 'modal') {
            $('body').append(form);
            add.insertAfter(select.next().hasClass('c_select') ? select.next() : select);
        } else {
            form.insertAfter(select.next().hasClass('c_select') ? select.next() : select);
            add.insertAfter(form);
        }
        edit.insertAfter(add);
        remove.insertAfter(edit);
        form.css('visibility', 'hidden');
        select.change(function () {
            if ($(this).val()) {
                edit.show();
                remove.show();
            } else {
                edit.hide();
                remove.hide();
            }
        }).change();

        add.click(function () {
            get_form(sf_prefix + '/' + select.data('managed_module') + '/new', parent.parent(), form, 'GET',  (select.data('managed_params') ? select.data('managed_params')  : {}), 'add', select);
        });
        edit.click(function () {
            get_form(sf_prefix + '/' + select.data('managed_module') + '/' + select.val() + '/edit', parent.parent(), form, 'GET', (select.data('managed_params') ? select.data('managed_params')  : {}), 'edit', select);
        });
        remove.click(function () {
            form.empty();
            var warning = $('<b style="color:#FF0000">Вы действительно хотите удалить обьект?</b><span class="br15"></span>');
            var submit = $('<button>Удалить</button>');
            var cancel = $('<button style="margin-left:10px !important">Отмена</button>');
            form.append(warning);
            form.append(submit);
            form.append(cancel);
            form.css('visibility', 'visible');
            submit.click(function () {
                var tmp_form = $('<form><input type="hidden" name="sf_method" value="delete" /></form>');
                get_form(sf_prefix + '/' + select.data('managed_module') + '/' + select.val(), form, form, 'POST', $(tmp_form).serialize(), 'remove', select);
                return false;
            });
            cancel.click(function () {
                form.css('visibility', 'hidden');
                return false;
            });
        });
    }

    var create_form = function (type) {
        var form = $('<div class="managed_form managed_form_' + type + '"></div>');
        if (type == 'modal') {
            $(window).resize(function () {
                f.calcModal(form);
            });
        }
        form.data('form_type', type);
        return form;
    }

    var update_select = function (select, type, uid) {

        var o = sOverlay(select.parent().parent());
        if (select.data('managed_type') == 'modal') {
            if (bodyo) {
                bodyo.remove();
            }
        }
        var url = window.location;
        if(select.data('update_list')){
            url = sf_prefix + '/' + select.data('update_list');
        }else if(select.prop('name')){
            var ex = select.prop('name').split('[');
            var id = $('#' + ex[0] + '_id').val();
            url = (id != '' ? sf_prefix + '/' + ex[0] + '/' + id + '/edit' : '/arm/' + ex[0] + '/new') + (select.data('managed_params') ? '?' + select.data('managed_params')  : '');
        }
        $.ajax({
            url: url,
            dataType: 'html',
            success: function (html) {
                if (select.data('managed_update')) {
                    var selector = select.data('managed_update');
                    $(selector).html($(html).find(selector).html());
                } else {
                    var options = $(html).attr('id') === select.attr('id') ? $(html) : $(html).find('#' + select.attr('id'));
                    //var val = type == 'add' ? options.children().last().prop('value') : select.val();
                    select.html(options.html());
                    select.val(uid);
                }
                select.change();
                o.remove();
                if(select.hasClass('custom_select')){
                    if(select.next().hasClass('c_select')){
                        select.next().remove();
                    }
                    cSelect.init(select);
                }
            }
        });
    }

    var get_form = function (url, layer, form, method, data, type, select) {
        var o = sOverlay(layer);
        $.ajax({
            url: url,
            type: method,
            dataType: 'html',
            data: data,
            headers: {
                'X-Requested-With' : 'custom'
            },
            complete: function (jqXHR, textStatus) {
                var html = jqXHR.responseText;
                o.remove();
                if (method == 'POST' && !jqXHR.getResponseHeader('Sf-Form-Error')) {
                    form.css('visibility', 'hidden');
                    var exp = url.split('/');
                    update_select(select, type, $(html).find('#' + exp[2] + '_id').val());
                } else {
                    if (type == 'remove') {
                        var append = $(html).find('.sf_admin_action_delete').html();
                        form.html(append);
                        form.css('visibility', 'visible');
                    } else {
                        var append = '<form>' + (type == 'edit' ? '<input type="hidden" name="sf_method" value="put" />' : '') + $(html).find('fieldset').html() + '<i class="br10"></i></form>';
                        form.html(append);

                        var submit = $('<button>Сохранить</button>');
                        var cancel = $('<button style="margin-left:10px !important">Отмена</button>');
                        form.css('visibility', 'visible');
                        form.append(submit);
                        form.append(cancel);
                        form.show();
                        $('input,select').customizeForm();

                        f.ajax_eval($('<div>' + html + '</div>').find('.ajax_eval'));

                        //$('.managed').luiManaged();


                        submit.click(function () {
                            var surl = url.replace('/new', '').replace('/edit', '');

                            var fform = $('<form>' + (type == 'edit' ? '<input type="hidden" name="sf_method" value="put" />' : '') + '</form>');

                            fform.append($(form).clone());


                            get_form(surl, form, form, 'POST', fform.serialize(), type, select);
                            return false;

                        });
                        cancel.click(function () {
                            form.css('visibility', 'hidden');
                            if (form.data('form_type') == 'modal') {
                                if (bodyo) {
                                    bodyo.remove();
                                }
                            }
                            return false;
                        });
                        if (form.data('form_type') == 'modal') {
                            $(window).resize();
                            if (bodyo) {
                                bodyo.remove();
                            }
                            bodyo = sOverlay($('body'), 'sOverlay_black');
                        }
                    }
                }
            }
        });
    }


})(jQuery);
var bid_ok = function () {
    $(".ierch__layer__shadowed__wrapper .xs__button").val("Заявка сформирована");
    $.get($('.ierch__layer__shadowed__wrapper form').data('r'), function (html) {
        $('.ierch__layer__shadowed__wrapper').html(html);
    });

};


var create_custom_table_head_recalc = function () {
    $('.lui__list_table__sourse').each(function (k, table) {
        if ($(table).data('initialized')) {
            var donor = $(table).find('thead tr th');

            donor.css('visibility', 'hidden');

            var summ = 0;
            var th_w = 0;
            var tf = $(table).parent().find('.lui__list_table_fixed');

            var offset = $('.lui_scroller').offset();
            tf.css('top', offset.top);
            tf.find('th').width('auto');
            tf.find('th').each(function (k, th) {
                if (!$(th).hasClass('last')) {
                    th_w = $(donor[k]).outerWidth();
                    $(th).outerWidth(th_w);
                    summ += th_w;
                }
            });
            var diff = $(table).parent().outerWidth() - $(table).outerWidth();
            tf.find('.last').outerWidth(diff);
            if (diff > 0) {
                $(table).find('thead th:last-child').width(diff + 30);
            }

        }
    });
};

var create_custom_table_head = function () {
    f.checkBatch();
    $('.lui__list_table__sourse').each(function (k, table) {
        if (!$(table).data('initialized')) {
            $(table).data('initialized', '1');
            var clone = $(table).find('thead tr').clone();
            var tf = $('<table cellspacing="0" cellpadding="3" style="z-index:100" border="0" id="lui__list_table_fixed" class="lui__list_table lui__list_table_fixed"><thead>' + clone.html() + '<th class="last" style="padding:0;"></th></thead></table>');
            tf.insertBefore(table);


            var offset = $('.lui_scroller').offset();
            tf.css('top', offset.top);


            $(document).on('click', '.lui__list_table input[type="checkbox"]', function () {
                f.checkBatch();
            });

            /*var tfw = tf.outerWidth();
             tf.outerWidth(tfw - 17);
             */
            var ls = $('.lui_scroller');

            var offset = ls.offset();
            ls.height($(window).height() - offset.top);
            $(window).resize(function () {
                var offset = ls.offset();
                ls.height($(window).height() - offset.top);
                $('.lui__scroller_wrapper_shadow').width($('.lui__scroller_wrapper').width());
                if (typeof resChart == 'function') {
                    resChart();
                }
            });
            var offset = ls.offset();
            $('.lui__scroller_wrapper_shadow').css('top', offset.top);
            ls.on('scroll', function () {
                if ($(this).scrollTop() > 0) {
                    $(this).addClass('scrolled');

                } else {
                    $(this).removeClass('scrolled');
                }
            });
        }

        f.updateShowedCount();

    });

    if ($('.lui__list_table__sourse').length == 0 && $('.lui_scroller').length > 0) {
        var ls = $('.lui_scroller');
        var stupedfunction = function () {
            var offset = ls.offset();
            ls.height($(window).height() - offset.top);
        }
        $(window).resize(stupedfunction);
        stupedfunction();
    }
};


(function ($) {
    $.fn.formTabs = function () {
        this.each(function () {
            var form = $(this);
            if (!form.data('initialized')) {
                do_formTabs(form);
            }
        });
        return this;
    };
    var do_formTabs = function (form) {
        //return;
        var tabs = 0;
        var tabs_c = [];
        if (form.is('form')) {
            if (form.prop('action').indexOf('/protocol/') != -1) {
                return;
            }
            /*
             $('input,textarea,select,div.force_tab,ul.radio_list').each(function(k, v){
             if($(v).data('tab')){
             tabs++;
             tabs_c.push('<div data-tab_id="' + tabs + '" data-tab_order="' + ($(v).data('tab_order') ? $(v).data('tab_order') : tabs) + '" class="lui__form_tab' + (tabs == 1 ? ' lui__form_tab__current' : '') + '">' + $(v).data('tab') + '</div>');
             }
             if($(v).parent().hasClass('content')){
             var parent = $(v).parent().parent().parent();
             parent.addClass('tabbed_div');
             parent.data('tab_id', tabs);
             }
             if($(v).parent().parent().hasClass('content')){
             var parent = $(v).parent().parent().parent().parent();
             parent.addClass('tabbed_div');
             parent.data('tab_id', tabs);
             }
             });
             */
        }
        if (tabs > 1) {
            tabs_c.sort(function (a, b) {
                if ($(a).data('tab_order') == $(b).data('tab_order')) {
                    return 0;
                }
                return $(a).data('tab_order') > $(b).data('tab_order') ? 1 : -1;
            });
            var tabs_ce = $('<div class="lui__form_tabs">' + tabs_c.join('') + '</div>');
            form.find('.lui__scroller_wrapper').prepend(tabs_ce);
            check_formTabs(form);
            tabs_ce.find('.lui__form_tab').click(function () {
                $('.lui__form_tab').removeClass('lui__form_tab__current');
                $(this).addClass('lui__form_tab__current');
                check_formTabs(form);
            });
            /*
             form.find('.content textarea,.content input[type=text]').first().keyup(function(){
             var h = form.parent().find('span.lui__h1');
             h.find('b').remove();
             if($(this).val() != ''){
             h.append('<b style="font-size:12px">&nbsp;—&nbsp;«' + $(this).val() + '»</b>');
             }
             }).keyup();
             */
        }
        form.data('initialized', '1');
    };
    var check_formTabs = function (form) {
        var tab_idx = form.find('.lui__form_tab__current').first().data('tab_id');
        form.find('.tabbed_div').each(function (k, v) {
            if ($(v).data('tab_id')) {
                if ($(v).data('tab_id') == tab_idx) {
                    $(v).show();
                } else {
                    $(v).hide();
                }
                //$(v).css('display', ($(v).data('tab_id') == tab_idx ? 'block' : 'none'));
            }
        });
    };
})(jQuery);


/*!
 * jQuery Plugin: Are-You-Sure (Dirty Form Detection)
 * https://github.com/codedance/jquery.AreYouSure/
 *
 * Copyright (c) 2012-2014, Chris Dance and PaperCut Software http://www.papercut.com/
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Author:  chris.dance@papercut.com
 * Version: 1.9.0
 * Date:    13th August 2014
 */
(function ($) {

    $.fn.areYouSure = function (options) {

        var settings = $.extend(
            {
                'message': 'You have unsaved changes!',
                'dirtyClass': 'dirty',
                'change': null,
                'silent': false,
                'addRemoveFieldsMarksDirty': false,
                'fieldEvents': 'change keyup propertychange input',
                'fieldSelector': ":input:not(input[type=submit]):not(input[type=button])"
            }, options);

        var getValue = function ($field) {
            if ($field.hasClass('ays-ignore')
                || $field.hasClass('aysIgnore')
                || $field.attr('data-ays-ignore')
                || $field.attr('name') === undefined) {
                return null;
            }

            if ($field.is(':disabled')) {
                return 'ays-disabled';
            }

            var val;
            var type = $field.attr('type');
            if ($field.is('select')) {
                type = 'select';
            }

            switch (type) {
                case 'checkbox':
                case 'radio':
                    cl($field.attr('name') + ':' + $field.is(':checked'));
                    val = $field.prop('checked') !== undefined && $field.is(':checked') ? true : false;

                    break;
                case 'select':
                    val = '';
                    $field.find('option').each(function (o) {
                        var $option = $(this);
                        if ($option.is(':selected')) {
                            val += $option.val();
                        }
                    });
                    break;
                default:
                    val = $field.val();
            }

            return val;
        };

        var storeOrigValue = function ($field) {
            if ($field.data('ays-orig') !== undefined) {
                return;
            }
            $field.data('ays-orig', getValue($field));
            cl('orig^' + $field.data('ays-orig'));
        };

        var checkForm = function (evt) {

            var isFieldDirty = function ($field) {
                var origValue = $field.data('ays-orig');
                if ($field.attr('type') == 'checkbox') {

                }


                if (undefined === origValue) {
                    return false;
                }
                return (getValue($field) != origValue);
            };

            var $form = ($(this).is('form'))
                ? $(this)
                : $(this).parents('form');

            // Test on the target first as it's the most likely to be dirty
            if (isFieldDirty($(evt.target))) {
                setDirtyStatus($form, true);
                return;
            }

            $fields = $form.find(settings.fieldSelector);

            if (settings.addRemoveFieldsMarksDirty) {
                // Check if field count has changed
                var origCount = $form.data("ays-orig-field-count");
                if (origCount != $fields.length) {
                    setDirtyStatus($form, true);
                    return;
                }
            }

            // Brute force - check each field
            var isDirty = false;
            $fields.each(function () {
                $field = $(this);
                if (isFieldDirty($field)) {

                    $field.addClass('dirty_field');
                    isDirty = true;
                    //return false; // break
                } else {
                    $field.removeClass('dirty_field');
                }
            });

            setDirtyStatus($form, isDirty);
        };

        var initForm = function ($form) {
            var fields = $form.find(settings.fieldSelector);
            $(fields).each(function () {
                storeOrigValue($(this));
            });
            $(fields).unbind(settings.fieldEvents, checkForm);
            $(fields).bind(settings.fieldEvents, checkForm);
            $form.data("ays-orig-field-count", $(fields).length);
            setDirtyStatus($form, false);
        };

        var setDirtyStatus = function ($form, isDirty) {
            var changed = isDirty != $form.hasClass(settings.dirtyClass);
            $form.toggleClass(settings.dirtyClass, isDirty);

            // Fire change event if required
            if (changed) {
                if (settings.change) settings.change.call($form, $form);

                if (isDirty) $form.trigger('dirty.areYouSure', [$form]);
                if (!isDirty) $form.trigger('clean.areYouSure', [$form]);
                $form.trigger('change.areYouSure', [$form]);
            }
        };

        var rescan = function () {
            var $form = $(this);
            var fields = $form.find(settings.fieldSelector);
            $(fields).each(function () {
                var $field = $(this);
                if (!$field.data('ays-orig')) {
                    storeOrigValue($field);
                    $field.bind(settings.fieldEvents, checkForm);
                }
            });
            // Check for changes while we're here
            $form.trigger('checkform.areYouSure');
        };

        var reinitialize = function () {
            initForm($(this));
        }

        if (!settings.silent && !window.aysUnloadSet) {
            window.aysUnloadSet = true;
            $(window).bind('beforeunload', function () {
                $dirtyForms = $("form").filter('.' + settings.dirtyClass);
                if ($dirtyForms.length == 0) {
                    return;
                }
                // Prevent multiple prompts - seen on Chrome and IE
                if (navigator.userAgent.toLowerCase().match(/msie|chrome/)) {
                    if (window.aysHasPrompted) {
                        return;
                    }
                    window.aysHasPrompted = true;
                    window.setTimeout(function () {
                        window.aysHasPrompted = false;
                    }, 900);
                }
                return settings.message;
            });
        }

        return this.each(function (elem) {
            if (!$(this).is('form')) {
                return;
            }
            var $form = $(this);

            $form.submit(function () {
                $form.removeClass(settings.dirtyClass);
            });
            $form.bind('reset', function () {
                setDirtyStatus($form, false);
            });
            // Add a custom events
            $form.bind('rescan.areYouSure', rescan);
            $form.bind('reinitialize.areYouSure', reinitialize);
            $form.bind('checkform.areYouSure', checkForm);
            initForm($form);
        });
    };
})(jQuery);


$(document).ajaxError(function (event, jqXHR, ajaxSettings, thrownError) {
    //cl(thrownError);
});

$(document).ajaxSend(function (event, xhr, settings) {


    //settings.url += (settings.url.indexOf('?') == -1 ? '?' : '&') + 'decorator=0';
    //settings.url = encodeURI(settings.url);
});

var redactors = {};

$(document).ajaxSuccess(function (event, xhr, settings) {
    if (settings.url == sf_prefix + '/main/event' || settings.url == sf_prefix + '/purpose/rels') {
        return;
    }

    arm.init();
    $('input,select').customizeForm();
    $('form').formTabs();

    $('select.chosen').chosen({disable_search_threshold: 10});
    $('.managed').luiManaged();

    $('.set_readonly input, .set_readonly select').prop('readonly', 'true');
    $('.set_readonly input, .set_readonly select').prop('disabled', 'true');

    $('textarea.rich').each(function () {
        if ($(this).data('redactor') != '1') {
            $(this).data('redactor', '1');
            var id = $(this).prop('id');
            redactors[id] = $(this).redactor();
        }
    });
    $('.tabs_item').hide();
    if ($('.tabs_item').length < 2) {
        $('.tabs_item').show();
    }
    if ($.cookie('ierch__layer__tabs__item') && $('.ierch__layer__tabs__item[data-tab="' + $.cookie('ierch__layer__tabs__item') + '"]').length > 0) {
        $('.ierch__layer__tabs__item[data-tab="' + $.cookie('ierch__layer__tabs__item') + '"]').trigger('click');
    } else {
        $('.ierch__layer__tabs__item').first().click();
    }

    $(window).resize();
    create_custom_table_head_recalc();

});


var qFns = {
    requestAndRefresh: function (url, de) {
        var cururi = $.url();
        $.get(url, function () {
            a_infomat.updateMonitor();
        });
    }

};


var wsObjectBusy = false;
var wsObject = null;
var wsObjectChannel = null;
var wsObjectInit = function (channel) {
    wsObjectBusy = true;
    wsObjectChannel = channel;
    if (wsObject != null) {
        wsObject.close();
        wsObject = null;
    }
    wsObject = new WebSocket('ws' + (window.location.protocol == 'https:' ? 's' : '') + '://' + window.location.host + '/ws/?channel=common/user_' + sf_user + (wsObjectChannel != '' ? '/' + wsObjectChannel : ''));
    wsObject.onopen = function (evt) {
        cl('open');
        wsObjectBusy = false;
    };
    wsObject.onerror = function () {
        cl('error');

        var pushstream = new PushStream({
            host: window.location.hostname,
            port: window.location.port,
            modes: "longpolling",
            channelsByArgument: true,
            channelsArgument: 'channel'
        });
        pushstream.onmessage = wsFunctions.msg;
        pushstream.addChannel('common');
        pushstream.addChannel(sf_user);
        if (wsObjectChannel != '') {
            pushstream.addChannel(wsObjectChannel);
        }
        pushstream.connect();

    };
    wsObject.onclose = function () {
        cl('close');
        wsObjectBusy = false;
    };
    wsObject.onmessage = wsFunctions.msg;
};


var wsFunctions = {
    msg: function (evt) {
        var json = JSON.parse(evt.data);
        if (json.text.state == 'fn' && typeof wsFunctions[json.text.fn_name] == 'function') {
            wsFunctions[json.text.fn_name](json.text.fn_args);
        }
    },
    follow: function (url) {
        window.location = sf_prefix + url;
    },
    reload: function () {
        window.location.reload();
    },
    menu: function () {
        $.ajax({
            url: sf_prefix + '/main/event',
            headers: {
                'X-Requested-With': '0'
            }
        }).done(function (html) {
            var lui__nav_menu__count_now = $('.lui__nav_menu__count');
            var lui__nav_menu__count_new = $(html).find('.lui__nav_menu__count');
            lui__nav_menu__count_now.each(function (i, el) {
                var el_new = $(lui__nav_menu__count_new[i]);
                if (parseInt(el_new.text()) > parseInt($(el).text()) || ($(el).text() == '' && el_new.text() != '')) {
                    $(el).addClass('lui__nav_menu__count__jump');
                } else if (parseInt(el_new.text()) < parseInt($(el).text())) {
                    $(el).removeClass('lui__nav_menu__count__jump');
                }
                $(el).html(el_new.html());
            });
        });
    }
};

if (sf_user) {
    /*
    wsObjectInit('');
    setInterval(function () {
        if (wsObjectBusy) {
            return;
        }
        if (wsObject.readyState != 1) {
            wsObjectInit(wsObjectChannel);
        }
    }, 1000);
    */
    if(sf_user_root){
        setInterval(function () {
            wsFunctions.menu();
        }, 60000);
    }
}

$(document).ready(function () {
    var suri = $.url();
    var sget = suri.attr('query').split('&');
    $.each(sget, function (qk, qv) {
        var svar = qv.split('=');
        var sid = svar[0].replace(']', '').replace('[', '_');
        if ($('#' + sid).length == 1) {
            $('#' + sid).val(svar[1]);
        }
    });


    $('.managed').luiManaged();

    genPass.init();

    create_custom_table_head();

    arm.init();

    $('input,select').customizeForm();
    $('form').formTabs();

    $(window).resize(function () {
        $('#lui__desktop_right__inner').outerHeight($(window).height());

        $('.ierch__layers__wrapper').outerHeight($('.ierch__layers__wrapper').parent().outerHeight());

        var summ = 0;
        var mw = $(window).width() - $('.lui__desktop_left').width();

        $('.ierch__layer__props').outerWidth(mw - (($('.ierch__layer').length - 1) * 220));

        $('.ierch__layer').each(function (ik, iel) {
            summ += $(iel).outerWidth();
        });


        var root = $('.ierch__layers');
        root.width(summ);


        $('.ierch__layers__wrapper').width(mw >= 660 ? mw : 660);
        var h = $('.ierch__layers').outerHeight();
        $('.ierch__layer__overlay').outerHeight(h);
        var lw = $('.ierch__layers').width();
        var llf = lw - mw;
        if (llf > 0) {
            $('.ierch__layers').css('left', llf * -1);
            $('.lui__desktop_left').addClass('ierch__layers__shadow');
        } else {
            $('.ierch__layers').css('left', 0);
            $('.lui__desktop_left').removeClass('ierch__layers__shadow');
            if ($('.ierch__layer__props').length > 0) {
                $('.ierch__layer__props').outerWidth(mw - (($('.ierch__layer').length - 1) * 220));
                $('.ierch__layer__props .ierch__layer__shadowed').outerWidth($('.ierch__layer__props').outerWidth() - 20);
                $('.ierch__layer__props').outerHeight(h - 16);
            }
            if ($('.ierch__layer__worker').length > 0) {
                $('.ierch__layer__worker').outerWidth(mw - (($('.ierch__layer').length - 1) * 220));
                $('.ierch__layer__worker .ierch__layer__shadowed').outerWidth($('.ierch__layer__props').outerWidth() - 20);
                $('.ierch__layer__worker').outerHeight(h - 16);
            }

        }


        $('.ierch__layer__items').each(function (ik, iel) {
            //$(iel).height( - $(iel).parent().find('.ierch__layer__actions_f').height() - 20);
            $(iel).outerHeight(h - 16);
            $(iel).perfectScrollbar('update');
        });


        if ($('.tabs_item').length > 0) {
            $('.tabs_item').each(function (i, ti) {
                var posY = $(ti).position().top;
                var h = $('.ierch__layer__props').outerHeight() - posY;
                if (h < $('.ierch__layer__props').outerHeight()) {
                    $(ti).outerHeight(h, true);
                }
            });
        }
        ;

    });


    var lui__desktop_left__wrapper = $('.lui__desktop_left__wrapper');
    var lui__desktop_left__wrapper_started_width = lui__desktop_left__wrapper.width();
    lui__desktop_left__wrapper.width(lui__desktop_left__wrapper_started_width);
    if ($.cookie('lui__desktop_left_hider__hidded') == 1) {
        $('.lui__desktop_left_hider').addClass('lui__desktop_left_hider__hidded');
        lui__desktop_left__wrapper.addClass('lui__desktop_left__wrapper__closed');
        $('.lui__desktop_left_hider').prop('title', 'Развернуть');
    }
    var lui__desktop_left_hider__click = function (el) {
        if (lui__desktop_left__wrapper.hasClass('lui__desktop_left__wrapper__closed')) {
            lui__desktop_left__wrapper.width(lui__desktop_left__wrapper_started_width);
            lui__desktop_left__wrapper.removeClass('lui__desktop_left__wrapper__closed');
            $(el).removeClass('lui__desktop_left_hider__hidded');
            $(el).prop('title', 'Свернуть');
            $.cookie('lui__desktop_left_hider__hidded', 0);
        } else {
            $(el).addClass('lui__desktop_left_hider__hidded');
            lui__desktop_left__wrapper.addClass('lui__desktop_left__wrapper__closed');
            $(el).prop('title', 'Развернуть');
            $.cookie('lui__desktop_left_hider__hidded', 1);
        }
        setTimeout(function () {
            $(window).resize();
        }, 200);
    };
    $('.lui__desktop_left_hider').click(function () {
        lui__desktop_left_hider__click($(this));
    });


    $(document).on('click', '.sf_admin_row td, .sf_admin_action_new a, .sf_admin_action_new_rel a, .custom_stuped_window', function () {
        if ($(this).find('.sf_admin_batch_checkbox,.sf_admin_td_actions,.sf_admin_td_stop,.ftm_used_image').length > 0 || $(this).hasClass('.sf_admin_td_stop') || $(this).parent().hasClass('sf_admin_tr_stop')) {
            return;
        }

        var tr = $(this).parent().hasClass('sf_admin_row') ? $(this).parent() : $(this).parent().parent();
        var before_top = $(this).offset().top - 22;

        var href = '';
        if ($(this).parent().hasClass('sf_admin_row')) {
            href = $(this).parent().data('href');
        } else if ($(this).hasClass('custom_stuped_window')) {
            href = $(this).data('href') || $(this).prop('href');
        } else {
            href = $(this).prop('href')
        }

        window.location = href;
        return false;

        $('.lui__desktop_right__wrapper .lui_form_layer').remove();

        //tr.removeClass('sf_admin_row__unread');

        $('.sOverlay_fix').remove();

        var o = sOverlay($('.lui__desktop_right__wrapper'), 'sOverlay_fix', $('.lui__desktop_right__wrapper'));




        $.get(href, function (html) {
            var $html = $(html);

            var cururi = $.url();

            var return_path = cururi.attr('path') + (cururi.attr('query') ? '?' + cururi.attr('query') : '');

            var state = {
                title: $('title').html(),
                url: href
            }
            history.pushState(state, state.title, state.url);


            var layout = $('<div class="lui_form_layer"><span class="lui_form_layer__close"></span>' + html + '</div>');
            $('.lui__desktop_right__wrapper').append(layout);

            var $form = layout.find('form');

            $(window).resize();


            $(layout).on('click', '.lui_form_layer__close', function () {

                //wsObjectInit('');

                /*
                 if($(this).data('disabled') != '1'){
                 if(!confirm('Закрыть не сохранив измения?')){
                 return false;
                 }
                 }
                 */


                var state = {
                    title: $('title').html(),
                    url: return_path
                }


                history.pushState(state, state.title, state.url);


                if (typeof global_form_interval != 'undefined') {
                    clearInterval(global_form_interval);
                }
                layout.remove();
                //tr.css('background-color', '');
                if ($('.lui_form_layer__close').data('need_reload')) {

                    var jqxhr = $.ajax(return_path).done(function (html) {

                        var new_html = $(html);

                        $('.lui_pager').html(new_html.find('.lui_pager').length > 0 ? new_html.find('.lui_pager').html() : '');
                        $('.lui__scroller_wrapper').html(new_html.find('.lui__scroller_wrapper').html());

                        create_custom_table_head();
                        create_custom_table_head_recalc();

                        $('.lui__list_count').html('&nbsp;' + ($('.type_search').val() != '' ? 'найдено:&nbsp;' : '') + new_html.data('count'));
                        if ($('.type_search').val() != '') {
                            $('.lui__list_table__sourse').removeHighlight().highlight($('.type_search').val());
                        }
                        $('.export_excel').prop('href', cururi.attr('query') + '&export');
                        if (new_html.data('count') == '0') {
                            $('.export_excel').hide();
                        } else {
                            $('.export_excel').show();
                        }
                        $('.lui_scroller').scrollTop(lui_scroller_s);
                        o.remove();

                    });

                } else {
                    o.remove();
                }
                $('.sOverlay_fix').remove();
            });

            $(layout).on('click', '.sf_admin_action_save input,.other_save', function () {
                var ol = sOverlay(layout, 'more_index2');
                $form.find('textarea.rich').each(function () {
                    if ($(this).data('redactor') == '1') {
                        var id = $(this).prop('id');
                        var _this = redactors[id];
                        if (_this && _this.opts.visual !== false) {
                            _this.clean(false);
                            _this.syncCodeToTextarea();
                        }
                    }
                });
                $.post($form.prop('action'), $form.serialize(), function (html_post) {
                    var module = $(html_post).find('input[id$="_id"]').first().prop('id').replace('_id', '');
                    ol.remove();
                    if ($(html_post).find('.error_list').length > 0) {
                        layout.html('<span class="lui_form_layer__close"></span><span class="lui_form_layer__close"></span>' + html_post);
                        $form = layout.find('form');
                        var lui__scroller_class = layout.find('.lui__scroller_class');
                        lui__scroller_class.outerHeight(layout.outerHeight() - lui__scroller_class.offset().top + 20);
                    } else {
                        var lui_scroller_s = $('.lui_scroller').scrollTop();

                        if ($('.lui_form_layer__close').data('post_action')) {
                            window.open($('.lui_form_layer__close').data('post_action'));
                        }

                        layout.remove();


                        var jqxhr = $.ajax(return_path).done(function (html) {

                            var state = {
                                title: $('title').html(),
                                url: return_path
                            }


                            history.pushState(state, state.title, state.url);

                            var new_html = $(html);

                            $('.lui_pager').html(new_html.find('.lui_pager').length > 0 ? new_html.find('.lui_pager').html() : '');
                            $('.lui__scroller_wrapper').html(new_html.find('.lui__scroller_wrapper').html());

                            create_custom_table_head();
                            create_custom_table_head_recalc();

                            $('.lui__list_count').html('&nbsp;' + ($('.type_search').val() != '' ? 'найдено:&nbsp;' : '') + new_html.data('count'));
                            if ($('.type_search').val() != '') {
                                $('.lui__list_table__sourse').removeHighlight().highlight($('.type_search').val());
                            }
                            $('.export_excel').prop('href', cururi.attr('query') + '&export');
                            if (new_html.data('count') == '0') {
                                $('.export_excel').hide();
                            } else {
                                $('.export_excel').show();
                            }
                            $('.lui_scroller').scrollTop(lui_scroller_s);
                            o.remove();

                        });

                    }
                });
                return false;
            });


        });
        return false;
    });

    $('.make__toggle').each(function (k, v) {
        var options = $(v).find('option');
        if (options.length == 2 && !$(v).data('initialized')) {
            var html = '<div class="lui__toggler lui__toggler__o' + ($(options[1]).is(':selected') ? 'n' : 'ff') + '">';
            html += '<div class="lui__toggler__item lui__toggler__item__off" data-val="' + $(options[0]).prop('value') + '" data-state="off">' + $(options[0]).html() + '</div>';
            html += '<div class="lui__toggler__content"><div class="lui__toggler__content__switcher"></div></div>';
            html += '<div class="lui__toggler__item lui__toggler__item__on" data-val="' + $(options[1]).prop('value') + '" data-state="on">' + $(options[1]).html() + '</div>';
            html += '</div>';
            $(v).parent().append(html);
            $(v).parent().find('.lui__toggler__item').click(function () {
                $(this).parent().removeClass('lui__toggler__' + ($(this).data('state') == 'off' ? 'on' : 'off'));
                $(this).parent().addClass('lui__toggler__' + ($(this).data('state') == 'off' ? 'off' : 'on'));
                $(options).removeAttr('selected');
                $(v).val($(this).data('val'));
                $(v).find('option[value=' + $(this).data('val') + ']').attr('selected', 'selected');
                $(v).change();
            });
            $(v).data('initialized', 1);
            $(v).hide();
        }
    });

    $('select.chosen').chosen({disable_search_threshold: 10});


    $('textarea.rich').each(function () {
        if ($(this).data('redactor') != '1') {
            $(this).data('redactor', '1');
            $(this).redactor();
        }
    });


    $('.another_tabs').each(function (k, tabs) {
        var another_tabs_items = $(tabs).find('.another_tabs__item');

        another_tabs_items.click(function () {
            $(another_tabs_items).removeClass('another_tabs__item__active');
            $(this).addClass('another_tabs__item__active');
        });

    });


    $(document).on('click', '.ierch__layer__tabs__item', function () {
        var tab = $(this).data('tab'),
            parent = $(this).parent().parent();
        parent.find('.ierch__layer__tabs__item').removeClass('ierch__layer__tabs__active');
        $(this).addClass('ierch__layer__tabs__active');
        parent.find('.tabs_item').hide();
        parent.find('.tabs_item[data-tab="' + tab + '"]').show();
        console.log(tab);

        $.cookie('ierch__layer__tabs__item', tab);

        $(window).resize();
    });


    $('.input_with_erase').each(function (k, el) {
        var eraser = $('<div class="input_with_erase__eraser"></div>');
        $(el).after(eraser);
        eraser.click(function () {
            $(el).val('');
            $(el).keyup();
        });
        $(el).keyup(function () {
            if ($(this).val() != '') {
                eraser.css('visibility', 'visible');
            } else {
                eraser.css('visibility', 'hidden');
            }
        });
        $(el).keyup();
    });


    try {
        $('.spinpicker_input').spinpicker({lang: 'ru'});
    } catch (e) {

    }

    $(window).resize(function () {
        $('.lui_form_layer').each(function (k, layout) {
            layout = $(layout);
            var lui__scroller_class = layout.find('.lui__scroller_class');
            if (lui__scroller_class.length) {
                lui__scroller_class.outerHeight(layout.outerHeight() - lui__scroller_class.offset().top + 0 - ($('.test_item_edit__footer').length > 0 ? $('.test_item_edit__footer').outerHeight() : 0));
            }

        });
        create_custom_table_head_recalc();
    }).resize();
    aCharts.init();
});

var checkboxListGroups = {
    change: function (inp) {
        inp = $(inp);
        var groups = inp.closest('.checkbox_list_groups');
        var checked = inp.is(':checked');
        var idx = groups.find('li').index(inp.closest('li'));
        groups.find('input[type="checkbox"]').each(function(i, elem){
            elem = $(elem);
            if(i > idx){
                if(inp.data('level') < elem.data('level')){
                    if(checked){
                        elem.prop('checked', 'checked');
                    }else{
                        elem.removeAttr('checked');
                    }
                }else{
                    return false;
                }
            }
        });
    }
};

var ftm = {
    adId: null,
    elem: null,
    rotateActive: false,
    rotate: function(btn){
        if(!ftm.rotateActive){
            ftm.rotateActive = true;
            btn.title = '';
            btn.className = 'ftm__rotate ftm__rotate_active';
            var src = null;
            var path = null;
            var pathS = null;
            var uplItem = null;
            if(ftm.elem){
                src = ftm.elem.activeFrame.img.replace(/\?u=.*/, '');
                path = $.trim(src).substr(5);
                pathS = path.replace('-XL.', '-S.');
                path = $.trim(src.replace('-XL.', '.').substr(5));

                if(path != ''){
                    $.post('/arm/rotate-image/', 'path=' + path, function(data){
                        if(data == 'ok'){
                            src = ftm.addParam(src);
                            ftm.elem.splice(ftm.elem.activeIndex, 1, {img: src});
                            if(ftm.adId){
                                $('.ftm_used_image_' + ftm.adId).each(function(_idx, _img){
                                    if(_img.src.indexOf(pathS) != -1){
                                        _img.src = ftm.addParam(_img.src);
                                        return false;
                                    }
                                });
                            }
                            uplItem = $('.uploader_preview__item');
                            if(uplItem.length > 0){
                                uplItem.each(function (_idx, _item) {
                                    var _itemImg = $(_item).find('img');
                                    if(_itemImg.length > 0 && _itemImg.attr('src').indexOf(pathS) != -1){
                                        _itemImg.attr('src', ftm.addParam(_itemImg.attr('src')));
                                        return false;
                                    }
                                });
                            }
                        }else{
                            alert('Ошибка. Обновите страницу.');
                        }
                        btn.className = 'ftm__rotate';
                        btn.title = 'Повернуть по часовой стрелке';
                        ftm.rotateActive = false;
                    });
                }else{
                    alert('Ошибка. Обновите страницу.');
                }
            }
        }
    },
    addParam: function(str){
        str = $.trim(str);
        if(str != ''){
            str = str.replace(/\?u=.*/, '');
            str += '?u=' + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
            return str;
        }
        return '';
    },
    init: function (type, _this) {
        _this = $(_this);
        var src = null;
        var images = [];
        var p = _this.parent();
        if(type == 'item'){
            p = p.parent();
        }
        p = p.find('img');
        var idx = p.index(_this);
        p.each(function (_idx, _elem) {
            _elem = $(_elem);
            src = (typeof _elem.data('src') !== 'undefined' ? _elem.data('src') : _elem.attr('src'));
            src = src.replace(/-S\.(jpg|jpeg|png)/g, '.$1');
            images.push({img: src});
        });
        $('.fotorama').html();
        $('.ftm_wrap').show();
        var $fotoramaDiv = $('.fotorama').fotorama({
            nav: "thumbs",
            width: "100%",
            thumbwidth: "70",
            thumbheight: "60",
            maxheight: "500",
            data: images
        });

        ftm.elem = $fotoramaDiv.data('fotorama');
        ftm.elem.load(images);

        ftm.adId = _this.data('ad_id');
        /*
         if(ftm.adId != _this.data('ad_id') || _this.data('ad_id') == undefined){
         ftm.elem.load(images);
         ftm.adId = _this.data('ad_id');
         }
         */

        ftm.elem.show({index: idx, time: 0});
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

var tabs = {
    init: function(){
        var tabs = $('.a_tabs');

        $.each(tabs, function(i, tab){
            tab = $(tab);
            tab.attr('onclick', 'tabs.onClick(event);');
            if(tab.find('.a_tab_selector_active').length == 0){
                tab.find('.a_tab_selector').eq(0).addClass('a_tab_selector_active');
            }
            $('.a_tab_item_' + tab.data('id') + '_' + (tab.find('.a_tab_selector_active').index() + 1)).addClass('a_tab_item_active');
        });
    },

    onClick: function(e){
        var target = $(e.target);
        var tabId = target.closest('.a_tabs').data('id');
        var id = target.index() + 1;

        if($('.a_tab_item_' + tabId + '_' + id).length > 0 && target.hasClass('a_tab_selector')){
            $.cookie('a_tabs_' + tabId, id);
            target.closest('.a_tabs').find('.a_tab_selector').removeClass('a_tab_selector_active');
            target.addClass('a_tab_selector_active');

            $('.a_tab_item').removeClass('a_tab_item_active');
            $('.a_tab_item_' + tabId + '_' + id).addClass('a_tab_item_active');
            $('.a_tab_item_' + tabId + '_' + id + ' input[type="checkbox"],.a_tab_item_' + tabId + '_' + id + ' select').customizeForm();

            $(window).resize();
        }
        $('input, select').customizeForm();
    }
};

var genPass = {
    pass: null,
    btn: $('<button class="gen_pass_btn">Сгенерировать</button>'),
    checkPasswordScore: function () {
        var _this = this;
        var score = PassGenJS.getScore(_this.pass.val());
        if (score.score == 1) {
            _this.pass.css('border-color', '#FF0000');
        } else if (score.score >= 2) {
            _this.pass.css('border-color', '#008000');
        }
    },
    init: function(){
        var _this = this;
        _this.pass = $('.gen_pass');
        if(_this.pass.length > 0){
            if (_this.pass.val() != '') {
                _this.pass
                    .val('')
                    .prop('placeholder', 'Скрыт');
            }
            _this.pass.after(_this.btn);
            _this.pass.keyup(genPass.checkPasswordScore());
            _this.btn.click(function () {
                _this.pass.val(PassGenJS.getPassword({letters: 2, lettersUpper: 2, numbers: 4}));
                genPass.checkPasswordScore();
                return false;
            });
        }
    }
};