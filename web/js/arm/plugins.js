


/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '; path=/';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/*
 * JQuery URL Parser plugin
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */ 
;(function($, undefined) {
    
    var tag2attr = {
        a       : 'href',
        img     : 'src',
        form    : 'action',
        base    : 'href',
        script  : 'src',
        iframe  : 'src',
        link    : 'href'
    },
    
  key = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"], // keys available to query
  
  aliases = { "anchor" : "fragment" }, 

  parser = {
    strict  : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  
    loose   :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ 
  },
  
  querystring_parser = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g, 
  
  fragment_parser = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g; 
  
  function parseUri( url, strictMode )
  {
    var str = decodeURI( url ),
        res   = parser[ strictMode || false ? "strict" : "loose" ].exec( str ),
        uri = { attr : {}, param : {}, seg : {} },
        i   = 14;
    
    while ( i-- )
    {
      uri.attr[ key[i] ] = res[i] || "";
    }

    
    uri.param['query'] = {};
    uri.param['fragment'] = {};
    
    uri.attr['query'].replace( querystring_parser, function ( $0, $1, $2 ){
      if ($1)
      {
        uri.param['query'][$1] = $2;
      }
    });
    
    uri.attr['fragment'].replace( fragment_parser, function ( $0, $1, $2 ){
      if ($1)
      {
        uri.param['fragment'][$1] = $2;
      }
    });

    
        uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g,'').split('/');
        
        uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g,'').split('/');

        
        uri.attr['base'] = uri.attr.host ? uri.attr.protocol+"://"+uri.attr.host + (uri.attr.port ? ":"+uri.attr.port : '') : '';
        
    return uri;
  };
  
  function getAttrName( elm )
  {
    var tn = elm.tagName;
    if ( tn !== undefined ) return tag2attr[tn.toLowerCase()];
    return tn;
  }
  
  $.fn.url = function( strictMode )
  {
      var url = '';
      
      if ( this.length )
      {
          url = $(this).attr( getAttrName(this[0]) ) || '';
      }
      
        return $.url( url, strictMode );
  };
  
  $.url = function( url, strictMode )
  {
      if ( arguments.length === 1 && url === true )
        {
            strictMode = true;
            url = undefined;
        }
        strictMode = strictMode || false;
        url = url || window.location.toString();
        return {
            data : parseUri(url, strictMode),
            attr : function( attr )
            {
                attr = aliases[attr] || attr;
                return attr !== undefined ? this.data.attr[attr] : this.data.attr;
            },
            param : function( param )
            {
                return param !== undefined ? this.data.param.query[param] : this.data.param.query;
            },
            fparam : function( param )
            {
                return param !== undefined ? this.data.param.fragment[param] : this.data.param.fragment;
            },
            segment : function( seg )
            {
                if ( seg === undefined )
                {
                    return this.data.seg.path;                    
                }
                else
                {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.path[seg];                    
                }
            },
            fsegment : function( seg )
            {
                if ( seg === undefined )
                {
                    return this.data.seg.fragment;                    
                }
                else
                {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.fragment[seg];                    
                }
            }
            
        };
        
  };
  
})(jQuery);






/**контроль за формой
 *
 */
(function($) {
  var methods = {
    /**
     *initialization
     * @param {Object} options
     * @returns {jQuery}
     */
    init: function(options) {
      var settings = $.extend({
        insert_in_form: 1,
        input_name: 'changed_state',
        exclude: [],
        debug_mode: 0,
        ignore: null,
        if_changed: function() {
          return true;
        },
        save_state_history: 1,
        state_history_length: 10,
        controlling_attr: 'name',
        onAddField: null,
        onChange: null
      }, options);

      this.state_form('init_state', settings);

      return this;
    },
    /**
     * initialization first states
     * @param {Object} settings
     */
    init_state: function(settings) {
      this.each(function() {
        var $this = $(this);
        $this.submit($this.state_form('on_submit', settings));
        $this.data({
          settings: settings
        });

        var els = $(':input', $this).not('[type="button"],[type="submit"]');
        if(settings.ignore)
        {
          els = els.not(settings.ignore);
        }

        els.each(function() {
          var $$this = $(this);
          $this.state_form('add_field', $$this, settings);
        });
      });
    },
    /**
     * add field to controlling set
     * @param {string|object} field jquery selector or jquery object or html object
     * @param {type} settings object or undefined
     * @returns {undefined}
     */
    add_field: function(field, settings){

      var $this = $(field);
      settings = settings || this.state_form('get_settings');

      if(!settings || $this.data('state'))
      {
        return;
      }

      var tmp = {
        state: {
          element_name: null,
          first_val: null,
          raw_text_first: null,
          curent_val: null,
          raw_text_last: null,
          selected: false
        }
      };

      $this.state_form('set_value', tmp, settings);
      $this.state_form('set_name', tmp, settings);
      /**@todo какая-то магия вешать обработчик на change, что бы вызвать свой триггер,
       * надо подумать как от этого уйти*/
      $this.change($this.state_form('call_change'));
      $this.on('state_form.change', $this.state_form('change_state'));
      if(settings.onChange)
      {
        //биндим контекст
        $this.on('state_form.change', settings.onChange.bind($this));
      }

      $this.data(tmp);

      if(settings.onAddField)
      {
        settings.onAddField($this);
      }
    },
    /**
     * remove field from controlling set
     * @param {string|object} field jquery selector or jquery object or html object
     * @returns {undefined}
     */
    remove_field: function(field){
      var $this = $(field);
      $this.removeData('state');
      $this.off('state_form.change');
      /**@todo  удалить только назначенный плагином обработчик не получается ни одним из способов
       * $this.off('change', '**', $this.state_form('call_change'));
       * $this.unbind('change', $this.state_form('call_change'));
       * никакого эффекта не дают поэтому пойдём тёмным путём*/
      var ev = $._data($this[0], "events");
      var h = $this.state_form('call_change').toString();
      if(ev.change)
      {
        for(var i in ev.change)
        {
          if(isNaN(i))
          {
            continue;
          }
          if(ev.change[i].handler.toString() === h)
          {
            delete ev.change[i];
            ev.change.length--;
            break;
          }
        }
      }

      $this.removeAttr('data-state-is_changed');
    },
    /**
     * set name for field
     * @param {Object} tmp
     * @param {Object} settings
     * @returns {void}
     */
    set_name: function(tmp, settings) {
      if(void 0 !== this.attr(settings.controlling_attr))
      {
        if(settings.debug_mode)
        {
          var count = $('[' + settings.controlling_attr + '="' + this.attr(settings.controlling_attr) + '"]').size();
          if(count > 1)
          {
            window.console.warn('Внимание: атрибут ' + settings.controlling_attr + ' найден у более чем одного элемента');
            window.console.debug(this);
          }
        }

        tmp.state.element_name = this.attr(settings.controlling_attr);
      }
      else if(void 0 !== this.attr('id'))
      {
        tmp.state.element_name = this.attr('id');
      }
      else
      {
        if(settings.debug_mode)
        {
          window.console.warn('Внимание: у элемента нет имени! (WARNING: element has no name!)');
          window.console.debug(this);
        }
      }
    },
    /**
     * set value for field
     * @param {Object} tmp
     * @param {Object} settings
     * @returns {void}
     */
    set_value: function(tmp, settings) {
      var _this = this[0];
      switch(_this.tagName)
      {
        case 'INPUT':
          if(_this.type == 'checkbox' || _this.type == 'radio')
          {
            if(void 0 !== this.attr('value'))
            {
              if(_this.type != 'radio')
              {
                if(this.is(':checked'))
                {
                  tmp.state.first_val = this.val();
                }
              }
              else
              {
                if(this.is(':checked'))
                {
                  tmp.state.selected = true;
                }
                tmp.state.first_val = this.val();
              }
            }
            else
            {
              tmp.state.first_val = this.is(':checked');
            }
          }
          else if (void 0 === this.attr('value'))
          {
            if(settings.debug_mode)
            {
              window.console.warn('Внимание: у элемента нет атрибута value! (WARNING: element has no attr value!)');
              window.console.debug(_this);
            }
          }
          else
          {
            tmp.state.first_val = this.val();
          }

          break;
        case 'TEXTAREA':
          tmp.state.first_val = this.val();
          break;
        case 'SELECT':
          tmp.state.first_val = this.val();
          tmp.state.raw_text_first = this.find('option:selected').text();
          break;
      }
    },
    /**
     * call on form submit
     * @param {Object} settings
     * @returns {Function}
     */
    on_submit: function(settings) {
      return function() {
        var $this = $(this);
        if($this.state_form('is_changed'))
        {
          if(settings.insert_in_form)
          {
            var input = $('<input type="hidden" name="' + settings.input_name + '">');
            $this.append(input);
            input.val(JSON.stringify($this.state_form('get_changes')));
          }
          else
          {
            $('input[name="changed_state"]', $this).remove();
          }

          return settings.if_changed.call($this);
        }

        return true;
      };
    },
    /**
     * check changes
     * @returns {Boolean}
     */
    is_changed: function() {
      return (this.state_form('get_changes').length ? true : false);
    },
    /**
     * returns changes array
     * @returns {Array}
     */
    get_changes: function() {
      var changes = [];
      var opt = this.data().settings;
      if(opt)
      {
        $('[data-state-is_changed]', this).each(function() {
          var d = $(this).data().state;
          if($.inArray(d.element_name, opt.exclude) === -1)
          {
            changes.push(d);
          }
        });

        //отдельно обрабатываем скрытые поля
        //так как change у них не произойдёт
        //и исключаем те, у которых он вызван руками
        $('input[type="hidden"]', this).not('[data-state-is_changed]').each(function() {
          var $this = $(this);
          var d = $this.data();
          if(typeof d === 'object' && d.hasOwnProperty('state'))
          {
            var data = d.state;
            if($.inArray(data.element_name, opt.exclude) === -1)
            {
              if(data.first_val != $this.val())
              {
                changes.push(data);
              }
            }
          }
        });
      }

      return changes;
    },
    call_change: function(){
      return function(){
        $(this).trigger('state_form.change');
      };
    },
    /**
     * call on event change control
     * @returns {Function}
     */
    change_state: function() {
      return function() {
        var $this = $(this);
        var data = $this.data();
        var val = $this.val();

        if(this.type == 'checkbox' || this.type == 'radio')
        {
          if($this.is(':checked') && void 0 !== $this.attr('value'))
          {
            data.state.curent_val = val;
          }
          else
          {
            data.state.curent_val = val =  $this.is(':checked');
          }
        }
        else
        {
          data.state.curent_val = val;
          if(this.tagName == 'SELECT')
          {
            data.state.raw_text_last = $this.find('option:selected').text();
          }
        }

        if(val === null)
        {
          val = '';
        }

        if(data.state.first_val === null)
        {
          data.state.first_val = '';
        }

        if(val != data.state.first_val)
        {
          $this.attr('data-state-is_changed', '1');
        }
        else if(this.type == 'radio')
        {
          if($this.is(':checked') && !data.state.selected)
          {
            $this.attr('data-state-is_changed', '1');
          }
          else
          {
            var $this = $(this);
            var settings = $this.parents('form').state_form('get_settings');
            var context = $this.parents('form');
            $('[' + settings.controlling_attr + '="' + $this.attr(settings.controlling_attr) + '"]', context).removeAttr('data-state-is_changed');
          }
        }
        else
        {
          $this.removeAttr('data-state-is_changed');
        }
      };
    },
    /**
     * save state for field(s) or form
     * @param {String} key key for state
     * @returns {jQuery}
     */
    save_state: function(key) {

      var field = false;
      var settings = this.state_form('get_settings');

      //если функция вызвана в контексте поля формы
      if(this[0].tagName != 'FORM')
      {
        field = this;
      }

      if(settings.save_state_history)
      {
        this.state_form('create_snapshot', key);
      }

      if(field )
      {
        var data = field.data();
        if(typeof data === 'object' && data.hasOwnProperty('state'))
        {
          data.state.first_val = field.val();
          field.state_form('set_value', data, settings);
          field.removeAttr('data-state-is_changed');
        }
      }
      else
      {
        $(':input', this).not('[type="button"],[type="submit"]').each(function() {
          var $$this = $(this);
          var data = $$this.data();
          if(typeof data === 'object' && data.hasOwnProperty('state'))
          {
            data.state.first_val = $$this.val();
            $$this.state_form('set_value', data, settings);
            $$this.removeAttr('data-state-is_changed');
          }
        });

      }

      return this;
    },
    /**
     * return init form settings
     * @returns {Object}
     */
    get_settings: function() {
      var settings = {};

      if(this[0].tagName != 'FORM')
      {
        settings = $(this[0].form).data().settings;
      }
      else
      {
        settings = this.data().settings;
      }

      return settings;
    },
    /**
     * create snapshot for elements
     * @param {string} key
     * @returns {void}
     */
    create_snapshot: function(key) {
      var curent_state = {};
      var hist = [];

      if(typeof window.localStorage.form_state_snapshot !== 'undefined')
      {
        hist = JSON.parse(window.localStorage.form_state_snapshot);
      }

      key = key || hist.length;

      var fields = [];
      var context = null;
      var max_length = 0;
      var settings = this.state_form('get_settings');

      if(this[0].tagName == 'FORM')
      {
        context = $(':input', this).not('[type="button"],[type="submit"]');
        max_length = settings.state_history_length;
      }
      else
      {
        context = this;
        max_length = settings.state_history_length;
      }
      $(context).not('[type="button"],[type="submit"]').each(function() {
        var data = $(this).data();
        if(typeof data === 'object' && data.hasOwnProperty('state'))
        {
          fields.push(data.state);
        }
      });

      curent_state[key] = fields;
      var ex = false;
      for(var i in hist)
      {
        if(hist[i].hasOwnProperty(key))
        {
          hist[i] = curent_state;
          ex = true;
          break;
        }
      }
      if(!ex)
      {
        if(hist.length >= max_length)
        {
          hist.shift();
        }
        hist.push(curent_state);
      }

      window.localStorage.form_state_snapshot = JSON.stringify(hist);
      if(this[0].tagName == 'FORM')
      {
        window.localStorage.form_state_last_form_snapshot = JSON.stringify(curent_state);
      }
    },
    /**
     * restore form state by key or last saved state
     * @param {String} key key for restore
     * @returns {jQuery}
     */
    restore_state: function(key) {
      var hist = null;

      if(key)
      {
        hist = this.state_form('get_history', key);
      }
      else
      {
        if(this[0].tagName == 'FORM')
        {
          if(typeof window.localStorage.form_state_snapshot !== 'undefined')
          {
            hist = JSON.parse(window.localStorage.form_state_last_form_snapshot);
          }
        }
        else
        {
          hist = this.state_form('find_state');
        }
      }

      if(hist)
      {
        var settings = this.state_form('get_settings');

        for(var k in hist)
        {
          for(var i in hist[k])
          {
            var old = hist[k][i];
            var el_name = old.element_name;
            var el = null;
            if($('[' + settings.controlling_attr + '="' + el_name + '"]').size())
            {
              el = $('[' + settings.controlling_attr + '="' + el_name + '"]');
            }
            else if($('#' + el_name).size())
            {
              el = $('#' + el_name);
            }
            else
            {
              if(settings.debug_mode)
              {
                window.console.warn('Внимание: поле не найдено в форме! (WARNING: field not found in the form!)');
                window.console.debug(this);
              }
            }

            var data  = el.data().state;
            data.curent_val = old.curent_val;
            //@todo не понятно какое поведение правильное
            //с одной стороны при восстановлении состояния
            //должны восстанавливаться и изменения с другой
            //можем иметь дело с формой после обновления страницы,
            //тогда изменений быть не должно
            data.first_val = old.curent_val;
            //data.first_val = old.first_val;
            data.raw_text_first = old.raw_text_first;
            data.raw_text_last = old.raw_text_last;
            data.selected = old.selected;
            if(el[0].type === 'radio')
            {
              el.each(function() {
                var $this = $(this);
                var val = $this.val();

                if(void 0 !== this.value)
                {
                  if(old.curent_val !== null && val == old.curent_val)
                  {
                    if(old.selected)
                    {
                      $this.attr('checked', 'cheked').change();
                    }

                    $this.data().state.first_val = old.curent_val;
                    $this.data().state.curent_val = old.curent_val;
                  }
                }

              });
            }
            else if(el[0].type === 'checkbox')
            {
              if(old.curent_val === false)
              {
                el.removeAttr('checked').change();
              }
              else
              {
                el.attr('checked', 'cheked').change();
              }
            }
            else
            {
              if(old.curent_val !== null)
              {
                el.val(old.curent_val).change();
              }
            }
          }
        }
      }
      return this;
    },
    /**
     * returns history by key, context
     * or all history if key == state_form_all
     * @param {String} key
     * @returns {Array|Object}
     */
    get_history: function(key) {
      key = key || false;
      var hist = [];
      var state = {};

      if(typeof window.localStorage.form_state_snapshot !== 'undefined')
      {
        hist = JSON.parse(window.localStorage.form_state_snapshot);
      }

      if(key)
      {
        if(key == 'state_form_all')
        {
          state = hist;
        }
        else
        {
          for(var i in hist)
          {
            if(hist[i].hasOwnProperty(key))
            {
              state = hist[i];
              break;
            }
          }
        }
      }
      else
      {
        state = hist.pop();
      }

      return state;
    },
    /**
     * find last state by context
     * @returns {Object}
     */
    find_state: function() {
      var names = [];
      var state = {};
      var settings = this.parents('form').state_form('get_settings');
      this.not('[type="button"],[type="submit"]').each(function() {
        var $this = $(this);
        if(void 0 !== $this.attr(settings.controlling_attr))
        {
          names.push(this.attr(settings.controlling_attr));
        }
        else if(void 0 !== this.id)
        {
          names.push(this.id);
        }

      });

      names = names.join(',');
      var hist = this.state_form('get_history', 'state_form_all');
      hist.reverse();

      top:
      for(var i in hist)
      {
        for(var j in hist[i])
        {
          var hist_names = [];
          for(var k in hist[i][j])
          {
            hist_names.push(hist[i][j][k]['element_name']);
          }

          hist_names = hist_names.join(',');

          if(hist_names == names)
          {
            state = hist[i];
            break top;
          }
        }
      }

      return state;

    },
    /**
     * return true if object is jQuery
     * @param {Object} obj
     * @returns {Boolean}
     */
    is_jQuery : function(obj) {
      return obj!=null && obj.constructor === jQuery;
    }
  };

  $.fn.state_form = function(method) {

    if (methods[method])
    {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    else if (typeof method === 'object' || !method)
    {
      return methods.init.apply(this, arguments);
    }
    else
    {
      $.error('Метод с именем ' + method + ' не существует для jQuery');
    }

  };
})(jQuery);







































/*!
* SortedList - jQuery Plugin
* SortedList is a jQuery plugin to sort list the way you want
*
* Examples and documentation at: https://github.com/Lutrasoft/SortedList
*
* Copyright (c) 2010-2013 - Lutrasoft
*
* Version: 0.0.3
* Requires: jQuery v1.3.4+
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/
function SortedList( domUL, s )
{
    var _me = this,
        _ul = $( domUL);
    
  _me.settings = s;

    _me.init = function () {
        // Set LI index
        _ul.children( _me.settings.selector ).each( function () {
      var t = $( this );
            t.data( "al-index", t.index() );
        });
    
    // Order now
    _me.order();
    }

    _me.order = function () {
        _ul.append(
            _ul.find( _me.settings.selector ).sort(function (a, b) {
        var i, r;
                for( i=0 ; i<_me.settings.sort.length ; i++ )
        {
          r = _me.handleSort( i, $(a), $(b) )
          if( r ) { return r; }
        }
        
        return 0;
            })
        );
    }
  
  _me.handleSort = function( index, a, b )
  {
    var item = _me.settings.sort[ index ], k, r, ar, br;
    switch( typeof item )
    {
      case "function":
        ar = item( a );
        br = item( b );
        
        return typeof ar == "object" ? _me.handle( ar.data, br.data, ar.order  ) : _me.handle( ar, br  );
        
      case "object":
        var keys = _me.getKeys( item ),
          sort = keys[ 0 ],
          item = item[ sort ];
        for( k in item )
        {
          if( typeof a[ k ] == "function" )
          {
            // javascrip
            r = _me.handle( a[ k ]( item[ k ] ), b[ k ]( item[ k ] ), sort );            
            if( r ){ return r; }
          }
        }
        break;
    }
  }
  
  _me.handle = function( a, b, s )
  {
    return (a == b ? 0 : a > b ? -1 : 1) * (s == "desc" ? 1 : -1);
  }

  _me.getKeys = function( o )
  {  
    var k = [], i;
    for( i in o ) k.push( i );
    return k;
  }
    _me.init();
}
$.sortedList = {
  defaults : {
    selector : "li",
    sort : [
      { asc : { data : "al-index" } }
    ]
  }
};

$.fn.sortedList = function( settings, value ){
    return this.each( function(){
    var _this = this,
      _$this = $( _this ),
      t, sl;
      
    if( _$this.data( "al" ) )
    {
      sl = _$this.data("al");
      if( value )
      {
        sl.settings[ settings ] = value;
      }
      else
      {
        // Call function or return setting
        t = sl[ settings ];
        return typeof t == "function" ? t( ) : sl.settings[ settings ];
      }
    }
    else
    {
      _$this.data( "al", new SortedList( _this, $.extend( { }, $.sortedList.defaults, settings ) ) );
    }
    } );
};






/*!
 PowerTip - v1.2.0 - 2013-04-03
 http://stevenbenner.github.com/jquery-powertip/
 Copyright (c) 2013 Steven Benner (http://stevenbenner.com/).
 Released under MIT license.
 https://raw.github.com/stevenbenner/jquery-powertip/master/LICENSE.txt
*/
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(){var t=this;t.top="auto",t.left="auto",t.right="auto",t.bottom="auto",t.set=function(o,n){e.isNumeric(n)&&(t[o]=Math.round(n))}}function o(e,t,o){function n(n,i){r(),e.data(v)||(n?(i&&e.data(m,!0),o.showTip(e)):(P.tipOpenImminent=!0,l=setTimeout(function(){l=null,s()},t.intentPollInterval)))}function i(n){r(),P.tipOpenImminent=!1,e.data(v)&&(e.data(m,!1),n?o.hideTip(e):(P.delayInProgress=!0,l=setTimeout(function(){l=null,o.hideTip(e),P.delayInProgress=!1},t.closeDelay)))}function s(){var i=Math.abs(P.previousX-P.currentX),s=Math.abs(P.previousY-P.currentY),r=i+s;t.intentSensitivity>r?o.showTip(e):(P.previousX=P.currentX,P.previousY=P.currentY,n())}function r(){l=clearTimeout(l),P.delayInProgress=!1}function a(){o.resetPosition(e)}var l=null;this.show=n,this.hide=i,this.cancel=r,this.resetPosition=a}function n(){function e(e,i,r,a,l){var p,c=i.split("-")[0],u=new t;switch(p=s(e)?n(e,c):o(e,c),i){case"n":u.set("left",p.left-r/2),u.set("bottom",P.windowHeight-p.top+l);break;case"e":u.set("left",p.left+l),u.set("top",p.top-a/2);break;case"s":u.set("left",p.left-r/2),u.set("top",p.top+l);break;case"w":u.set("top",p.top-a/2),u.set("right",P.windowWidth-p.left+l);break;case"nw":u.set("bottom",P.windowHeight-p.top+l),u.set("right",P.windowWidth-p.left-20);break;case"nw-alt":u.set("left",p.left),u.set("bottom",P.windowHeight-p.top+l);break;case"ne":u.set("left",p.left-20),u.set("bottom",P.windowHeight-p.top+l);break;case"ne-alt":u.set("bottom",P.windowHeight-p.top+l),u.set("right",P.windowWidth-p.left);break;case"sw":u.set("top",p.top+l),u.set("right",P.windowWidth-p.left-20);break;case"sw-alt":u.set("left",p.left),u.set("top",p.top+l);break;case"se":u.set("left",p.left-20),u.set("top",p.top+l);break;case"se-alt":u.set("top",p.top+l),u.set("right",P.windowWidth-p.left)}return u}function o(e,t){var o,n,i=e.offset(),s=e.outerWidth(),r=e.outerHeight();switch(t){case"n":o=i.left+s/2,n=i.top;break;case"e":o=i.left+s,n=i.top+r/2;break;case"s":o=i.left+s/2,n=i.top+r;break;case"w":o=i.left,n=i.top+r/2;break;case"nw":o=i.left,n=i.top;break;case"ne":o=i.left+s,n=i.top;break;case"sw":o=i.left,n=i.top+r;break;case"se":o=i.left+s,n=i.top+r}return{top:n,left:o}}function n(e,t){function o(){d.push(p.matrixTransform(u))}var n,i,s,r,a=e.closest("svg")[0],l=e[0],p=a.createSVGPoint(),c=l.getBBox(),u=l.getScreenCTM(),f=c.width/2,w=c.height/2,d=[],h=["nw","n","ne","e","se","s","sw","w"];if(p.x=c.x,p.y=c.y,o(),p.x+=f,o(),p.x+=f,o(),p.y+=w,o(),p.y+=w,o(),p.x-=f,o(),p.x-=f,o(),p.y-=w,o(),d[0].y!==d[1].y||d[0].x!==d[7].x)for(i=Math.atan2(u.b,u.a)*O,s=Math.ceil((i%360-22.5)/45),1>s&&(s+=8);s--;)h.push(h.shift());for(r=0;d.length>r;r++)if(h[r]===t){n=d[r];break}return{top:n.y+P.scrollTop,left:n.x+P.scrollLeft}}this.compute=e}function i(o){function i(e){e.data(v,!0),O.queue(function(t){s(e),t()})}function s(e){var t;if(e.data(v)){if(P.isTipOpen)return P.isClosing||r(P.activeHover),O.delay(100).queue(function(t){s(e),t()}),void 0;e.trigger("powerTipPreRender"),t=p(e),t&&(O.empty().append(t),e.trigger("powerTipRender"),P.activeHover=e,P.isTipOpen=!0,O.data(g,o.mouseOnToPopup),o.followMouse?a():(b(e),P.isFixedTipOpen=!0),O.fadeIn(o.fadeInTime,function(){P.desyncTimeout||(P.desyncTimeout=setInterval(H,500)),e.trigger("powerTipOpen")}))}}function r(e){P.isClosing=!0,P.activeHover=null,P.isTipOpen=!1,P.desyncTimeout=clearInterval(P.desyncTimeout),e.data(v,!1),e.data(m,!1),O.fadeOut(o.fadeOutTime,function(){var n=new t;P.isClosing=!1,P.isFixedTipOpen=!1,O.removeClass(),n.set("top",P.currentY+o.offset),n.set("left",P.currentX+o.offset),O.css(n),e.trigger("powerTipClose")})}function a(){if(!P.isFixedTipOpen&&(P.isTipOpen||P.tipOpenImminent&&O.data(T))){var e,n,i=O.outerWidth(),s=O.outerHeight(),r=new t;r.set("top",P.currentY+o.offset),r.set("left",P.currentX+o.offset),e=c(r,i,s),e!==I.none&&(n=u(e),1===n?e===I.right?r.set("left",P.windowWidth-i):e===I.bottom&&r.set("top",P.scrollTop+P.windowHeight-s):(r.set("left",P.currentX-i-o.offset),r.set("top",P.currentY-s-o.offset))),O.css(r)}}function b(t){var n,i;o.smartPlacement?(n=e.fn.powerTip.smartPlacementLists[o.placement],e.each(n,function(e,o){var n=c(y(t,o),O.outerWidth(),O.outerHeight());return i=o,n===I.none?!1:void 0})):(y(t,o.placement),i=o.placement),O.addClass(i)}function y(e,n){var i,s,r=0,a=new t;a.set("top",0),a.set("left",0),O.css(a);do i=O.outerWidth(),s=O.outerHeight(),a=k.compute(e,n,i,s,o.offset),O.css(a);while(5>=++r&&(i!==O.outerWidth()||s!==O.outerHeight()));return a}function H(){var e=!1;!P.isTipOpen||P.isClosing||P.delayInProgress||(P.activeHover.data(v)===!1||P.activeHover.is(":disabled")?e=!0:l(P.activeHover)||P.activeHover.is(":focus")||P.activeHover.data(m)||(O.data(g)?l(O)||(e=!0):e=!0),e&&r(P.activeHover))}var k=new n,O=e("#"+o.popupId);0===O.length&&(O=e("<div/>",{id:o.popupId}),0===d.length&&(d=e("body")),d.append(O)),o.followMouse&&(O.data(T)||(f.on("mousemove",a),w.on("scroll",a),O.data(T,!0))),o.mouseOnToPopup&&O.on({mouseenter:function(){O.data(g)&&P.activeHover&&P.activeHover.data(h).cancel()},mouseleave:function(){P.activeHover&&P.activeHover.data(h).hide()}}),this.showTip=i,this.hideTip=r,this.resetPosition=b}function s(e){return window.SVGElement&&e[0]instanceof SVGElement}function r(){P.mouseTrackingActive||(P.mouseTrackingActive=!0,e(function(){P.scrollLeft=w.scrollLeft(),P.scrollTop=w.scrollTop(),P.windowWidth=w.width(),P.windowHeight=w.height()}),f.on("mousemove",a),w.on({resize:function(){P.windowWidth=w.width(),P.windowHeight=w.height()},scroll:function(){var e=w.scrollLeft(),t=w.scrollTop();e!==P.scrollLeft&&(P.currentX+=e-P.scrollLeft,P.scrollLeft=e),t!==P.scrollTop&&(P.currentY+=t-P.scrollTop,P.scrollTop=t)}}))}function a(e){P.currentX=e.pageX,P.currentY=e.pageY}function l(e){var t=e.offset(),o=e[0].getBoundingClientRect(),n=o.right-o.left,i=o.bottom-o.top;return P.currentX>=t.left&&P.currentX<=t.left+n&&P.currentY>=t.top&&P.currentY<=t.top+i}function p(t){var o,n,i=t.data(y),s=t.data(H),r=t.data(k);return i?(e.isFunction(i)&&(i=i.call(t[0])),n=i):s?(e.isFunction(s)&&(s=s.call(t[0])),s.length>0&&(n=s.clone(!0,!0))):r&&(o=e("#"+r),o.length>0&&(n=o.html())),n}function c(e,t,o){var n=P.scrollTop,i=P.scrollLeft,s=n+P.windowHeight,r=i+P.windowWidth,a=I.none;return(n>e.top||n>Math.abs(e.bottom-P.windowHeight)-o)&&(a|=I.top),(e.top+o>s||Math.abs(e.bottom-P.windowHeight)>s)&&(a|=I.bottom),(i>e.left||e.right+t>r)&&(a|=I.left),(e.left+t>r||i>e.right)&&(a|=I.right),a}function u(e){for(var t=0;e;)e&=e-1,t++;return t}var f=e(document),w=e(window),d=e("body"),h="displayController",v="hasActiveHover",m="forcedOpen",T="hasMouseMove",g="mouseOnToPopup",b="originalTitle",y="powertip",H="powertipjq",k="powertiptarget",O=180/Math.PI,P={isTipOpen:!1,isFixedTipOpen:!1,isClosing:!1,tipOpenImminent:!1,activeHover:null,currentX:0,currentY:0,previousX:0,previousY:0,desyncTimeout:null,mouseTrackingActive:!1,delayInProgress:!1,windowWidth:0,windowHeight:0,scrollTop:0,scrollLeft:0},I={none:0,top:1,bottom:2,left:4,right:8};e.fn.powerTip=function(t,n){if(!this.length)return this;if("string"===e.type(t)&&e.powerTip[t])return e.powerTip[t].call(this,this,n);var s=e.extend({},e.fn.powerTip.defaults,t),a=new i(s);return r(),this.each(function(){var t,n=e(this),i=n.data(y),r=n.data(H),l=n.data(k);n.data(h)&&e.powerTip.destroy(n),t=n.attr("title"),i||l||r||!t||(n.data(y,t),n.data(b,t),n.removeAttr("title")),n.data(h,new o(n,s,a))}),s.manual||this.on({"mouseenter.powertip":function(t){e.powerTip.show(this,t)},"mouseleave.powertip":function(){e.powerTip.hide(this)},"focus.powertip":function(){e.powerTip.show(this)},"blur.powertip":function(){e.powerTip.hide(this,!0)},"keydown.powertip":function(t){27===t.keyCode&&e.powerTip.hide(this,!0)}}),this},e.fn.powerTip.defaults={fadeInTime:200,fadeOutTime:100,followMouse:!1,popupId:"powerTip",intentSensitivity:7,intentPollInterval:100,closeDelay:100,placement:"n",smartPlacement:!1,offset:10,mouseOnToPopup:!1,manual:!1},e.fn.powerTip.smartPlacementLists={n:["n","ne","nw","s"],e:["e","ne","se","w","nw","sw","n","s","e"],s:["s","se","sw","n"],w:["w","nw","sw","e","ne","se","n","s","w"],nw:["nw","w","sw","n","s","se","nw"],ne:["ne","e","se","n","s","sw","ne"],sw:["sw","w","nw","s","n","ne","sw"],se:["se","e","ne","s","n","nw","se"],"nw-alt":["nw-alt","n","ne-alt","sw-alt","s","se-alt","w","e"],"ne-alt":["ne-alt","n","nw-alt","se-alt","s","sw-alt","e","w"],"sw-alt":["sw-alt","s","se-alt","nw-alt","n","ne-alt","w","e"],"se-alt":["se-alt","s","sw-alt","ne-alt","n","nw-alt","e","w"]},e.powerTip={show:function(t,o){return o?(a(o),P.previousX=o.pageX,P.previousY=o.pageY,e(t).data(h).show()):e(t).first().data(h).show(!0,!0),t},reposition:function(t){return e(t).first().data(h).resetPosition(),t},hide:function(t,o){return t?e(t).first().data(h).hide(o):P.activeHover&&P.activeHover.data(h).hide(!0),t},destroy:function(t){return e(t).off(".powertip").each(function(){var t=e(this),o=[b,h,v,m];t.data(b)&&(t.attr("title",t.data(b)),o.push(y)),t.removeData(o)}),t}},e.powerTip.showTip=e.powerTip.show,e.powerTip.closeTip=e.powerTip.hide});



/**
 * @author Aleksey Martov (c) 2014 <a-martov@linber.ru>
 * The MIT License (MIT)
 * @version 0.1
 */
var PassGenJS = (function () {
    "use strict";

    var strLetters = 'qwertyuiopasdfghjklzxcvbnm';
    var strLettersUpper = strLetters.toUpperCase();
    var strNumbers = '0123456789';
    var strSymbols = '!@#$%^&*()_+-={}[];|?<>/"\'~';
    var defaultGenerateRecursion = 1;

    var strLettersArray = strLetters.split('');
    var strLettersUpperArray = strLettersUpper.split('');
    var strNumbersArray = strNumbers.split('');
    var strSymbolsArray = strSymbols.split('');

    /* Содержит объект параметров для генерации паролей */
    var scoreVariants = null;

    /**
     * Возвращает случайное число в диапазоне min-max (служебный метод)
     * @private
     * @param {Number} min Минимальное значение
     * @param {Number} max Максимальное значение
     * @returns {Number} Случайное число
     */
    function _getRandom(min, max) {
        var range = max - min + 1;
        return Math.floor(Math.random() * range) + min;
    }

    /**
     * Возвращает случайный элемент из массива arrayVariants (служебный метод)
     * @private
     * @param {Array} arrayVariants Массив элементов из которых будет выбран случайный
     * @returns {*} Значение выбранного элемента из массива arrayVariants
     */
    function _getRandomOfVariants(arrayVariants) {
        arrayVariants = arrayVariants ? arrayVariants : [];
        return arrayVariants.length > 0 ? arrayVariants[_getRandom(0, arrayVariants.length - 1)] : null;
    }

    /**
     * Генерирует и возвращает пароль (служебный метод)
     * @private
     * @param {Object} obj Объект, содержащий параметры для генерации пароля
     * obj.numbers {Number} Число цифр в пароле
     * obj.letters {Number} Число букв в пароле
     * obj.lettersUpper {Number} Число заглавных букв в пароле
     * obj.symbols {Number} Число символов в пароле
     * @returns {String} Сгенерированный пароль
     */
    function _generate(obj) {
        obj = obj ? obj : {};
        var symbols = obj.symbols ? obj.symbols : 0;
        var numbers = obj.numbers ? obj.numbers : 0;
        var letters = obj.letters ? obj.letters : 0;
        var lettersUpper = obj.lettersUpper ? obj.lettersUpper : 0;

        var totalLength = symbols + numbers + letters + lettersUpper;
        var result = '';

        var objGeneratedChars = {
            letters: 0,
            lettersUpper: 0,
            numbers: 0,
            symbols: 0
        };
        var objVariantsSource = {
            letters: true,
            lettersUpper: true,
            numbers: true,
            symbols: true
        };

        for (var i = 0; i < totalLength; i++) {

            if (objVariantsSource['letters'] && objGeneratedChars.letters == letters) {
                objVariantsSource['letters'] = false;
            }

            if (objVariantsSource['lettersUpper'] && objGeneratedChars.lettersUpper == lettersUpper) {
                objVariantsSource['lettersUpper'] = false;
            }

            if (objVariantsSource['numbers'] && objGeneratedChars.numbers == numbers) {
                objVariantsSource['numbers'] = false;
            }

            if (objVariantsSource['symbols'] && objGeneratedChars.symbols == symbols) {
                objVariantsSource['symbols'] = false;
            }

            var arrayVariantsSource = [];
            for (var key in objVariantsSource) {

                if (objVariantsSource[key]) {
                    arrayVariantsSource[arrayVariantsSource.length] = key;
                }
            }

            var typeChar = _getRandomOfVariants(arrayVariantsSource);
            var resultChar = '';

            switch (typeChar) {
                case 'letters':
                {
                    resultChar = strLettersArray[_getRandom(0, strLettersArray.length - 1)];
                    objGeneratedChars.letters++;
                    break;
                }
                case 'lettersUpper':
                {
                    resultChar = strLettersArray[_getRandom(0, strLettersArray.length - 1)].toUpperCase();
                    objGeneratedChars.lettersUpper++;
                    break;
                }
                case 'numbers':
                {
                    resultChar = strNumbersArray[_getRandom(0, strNumbersArray.length - 1)];
                    objGeneratedChars.numbers++;
                    break;
                }
                case 'symbols':
                {
                    resultChar = strSymbolsArray[_getRandom(0, strSymbolsArray.length - 1)];
                    objGeneratedChars.symbols++;
                    break;
                }
            }

            result += resultChar;
        }

        return result;
    }

    /**
     * Возвращает сгенерированный пароль
     * @private
     * @param {Object} obj Объект, содержащий параметры для генерации пароля
     * obj.score {Number} Число в диапазоне 1-4. Чем больше, тем надежнее пароль
     * obj.maxGenerateRecursion {Number} Сколько итераций использовать для нахождения более стойкого пароля
     * От 0 до n. Значение по умолчанию 6. Чем больше значение, тем больше времени требуется на генерацию
     * и получение более надежного пароля.
     * obj.numbers {Number} Число цифр в пароле
     * obj.letters {Number} Число букв в пароле
     * obj.lettersUpper {Number} Число заглавных букв в пароле
     * obj.symbols {Number} Число символов в пароле
     * @returns {String} Сгенерированный пароль
     */
    function _getPassword(obj) {
        var result = '';
        var resultEntropy = 0;
        var maxEntropy = 0;
        var generateRecursion = obj.maxGenerateRecursion !== undefined ? obj.maxGenerateRecursion : defaultGenerateRecursion;
        var objParams = {};

        if (!obj) {
            objParams = {
                letters: 4,
                lettersUpper: 2,
                numbers: 2,
                symbols: 1
            };
        } else {

            if (obj.score || obj.reliabilityPercent) {

                /* Если не генерировали параметры для генерации паролей, то генерируем их */
                if (!scoreVariants) {
                    scoreVariants = _generateScoreVariants();
                }

                var tmpScoreVariants = scoreVariants;
                var arrayVariants = [];

                if (obj.score !== undefined) {
                    obj.score = parseInt(obj.score);

                    if (obj.score == 0) {
                        return '';
                    }

                    if (obj.score > 4 || obj.score < 0) {
                        obj.score = 4;
                    }

                    for (var keyChars in tmpScoreVariants) {

                        if (tmpScoreVariants[keyChars].score == obj.score) {
                            arrayVariants[arrayVariants.length] = keyChars;
                        }
                    }
                } else if (obj.reliabilityPercent !== undefined) {
                    obj.reliabilityPercent = parseInt(obj.reliabilityPercent);
                    var arrayReliabilityPercentExist = [];

                    if (obj.reliabilityPercent == 0) {
                        return '';
                    }

                    if (obj.reliabilityPercent > 100 || obj.reliabilityPercent < 0) {
                        obj.reliabilityPercent = 100;
                    }

                    for (var keyChars in tmpScoreVariants) {
                        arrayReliabilityPercentExist[arrayReliabilityPercentExist.length] = tmpScoreVariants[keyChars].reliabilityPercent;

                        if (tmpScoreVariants[keyChars].reliabilityPercent == obj.reliabilityPercent) {
                            arrayVariants[arrayVariants.length] = keyChars;
                        }
                    }

                    if (!arrayVariants.length) {
                        arrayReliabilityPercentExist.sort(function(a, b){
                            return (a < b) ? -1 : (a > b) ? 1 : 0;
                        });
                        var arrayReliabilityPercentExistLength = arrayReliabilityPercentExist.length;
                        var reliabilityPercentExist = null;

                        for (var i = 0; i < arrayReliabilityPercentExistLength; i++) {

                            if (arrayReliabilityPercentExist[i] > obj.reliabilityPercent) {
                                reliabilityPercentExist = arrayReliabilityPercentExist[i];
                                break;
                            }
                        }

                        if (!reliabilityPercentExist) {
                            arrayReliabilityPercentExist.reverse();

                            for (var i = 0; i < arrayReliabilityPercentExistLength; i++) {

                                if (arrayReliabilityPercentExist[i] < obj.reliabilityPercent) {
                                    reliabilityPercentExist = arrayReliabilityPercentExist[i];
                                    break;
                                }
                            }
                        }

                        for (var keyChars in tmpScoreVariants) {

                            if (tmpScoreVariants[keyChars].reliabilityPercent == reliabilityPercentExist) {
                                arrayVariants[arrayVariants.length] = keyChars;
                            }
                        }
                    }
                }

                var randomVariant = _getRandomOfVariants(arrayVariants);

                if (randomVariant) {
                    randomVariant = randomVariant.split('-');

                    objParams = {
                        letters: randomVariant[1],
                        lettersUpper: randomVariant[3],
                        numbers: randomVariant[0],
                        symbols: randomVariant[2]
                    };
                }
            } else {
                objParams = {
                    letters: obj.letters,
                    lettersUpper: obj.lettersUpper,
                    numbers: obj.numbers,
                    symbols: obj.symbols
                };
            }
        }

        for (var i = 0; i <= generateRecursion; i++) {
            var tmpResult = _generate(objParams);
            resultEntropy = _getScore(tmpResult).entropy;

            if (!obj.score) {

                if (maxEntropy < resultEntropy) {
                    maxEntropy = resultEntropy;
                    result = tmpResult;
                }
            } else {

                if (obj.score == _getScore(tmpResult).score) {
                    result = tmpResult;
                    break;
                }
            }
        }

        if (!result) {
            result = tmpResult;
        }

        return result;
    }

    function _getScore(password) {
        var objLengthMany = {};
        var entropy = 0;
        var score = 0;
        var passwordArray = password.split('');

        for (var key in passwordArray) {

            if (!objLengthMany['strLetters'] && strLetters.indexOf(passwordArray[key]) > -1) {
                objLengthMany['strLetters'] = strLetters.length;
            } else if (!objLengthMany['strNumbers'] && strNumbers.indexOf(passwordArray[key]) > -1) {
                objLengthMany['strNumbers'] = strNumbers.length;
            } else if (!objLengthMany['strSymbols'] && strSymbols.indexOf(passwordArray[key]) > -1) {
                objLengthMany['strSymbols'] = strSymbols.length;
            } else if (!objLengthMany['strLettersUpper'] && strLettersUpper.indexOf(passwordArray[key]) > -1) {
                objLengthMany['strLettersUpper'] = strLettersUpper.length;
            }
        }

        var lengthMany = 0;
        for (var key in objLengthMany) {
            lengthMany += objLengthMany[key];
        }

        if (lengthMany) {
            entropy = Math.round(password.length * (Math.log(lengthMany) / Math.log(2)));
        } else {
            entropy = 0;
        }

        if (entropy > 0 && entropy < 32) {
            score = 1;
        } else if (entropy >= 32 && entropy < 64) {
            score = 2;
        } else if (entropy >= 64 && entropy < 128) {
            score = 3;
        } else if (entropy >= 128) {
            score = 4;
        }

        var reliability = entropy / (128 / 100);
        reliability = reliability < 100 ? reliability : 100;

        return {
            password: password,
            score: score,
            entropy: entropy,
            reliability: reliability,
            reliabilityPercent: Math.round(reliability)
        };
    }

    /**
     * Генерирует и возвращает объект параметров для последующей генерации паролей
     * @private
     * (будет больше вариантов параметров для генерации паролей)
     * @returns {Object}
     */
    function _generateScoreVariants() {
        var objResult = {};

        for (var i = 0; i < 6666; i++) {
            var strIndexIteration = i + '';

            if (i < 10) {
                strIndexIteration = '000' + i;
            } else if (i >= 10 && i < 100) {
                strIndexIteration = '00' + i;
            } else if (i >= 100 && i < 1000) {
                strIndexIteration = '0' + i;
            }

            var strIndexIterationArray = strIndexIteration.split('');

            if (parseInt(strIndexIterationArray[0]) + parseInt(strIndexIterationArray[1]) + parseInt(strIndexIterationArray[2]) + parseInt(strIndexIterationArray[3]) > 20) {
                continue;
            }

            var keyForObjResult = strIndexIterationArray.join('-');

            var result = strNumbers.substr(0, strIndexIterationArray[0]) + strLetters.substr(0, strIndexIterationArray[1])
                + strSymbols.substr(0, strIndexIterationArray[2]) + strLettersUpper.substr(0, strIndexIterationArray[3]);

            var score = _getScore(result);

            if (score.score == 0) {
                continue;
            }

            objResult[keyForObjResult] = {
                score: score.score,
                reliabilityPercent: score.reliabilityPercent
            }
        }

        return objResult;
    }

    return {
        /**
         * Обертка над _getPassword
         * @see _getPassword
         * @returns {String}
         */
        getPassword: function (params) {
            var result = _getPassword(params);
            return result;
        },

        /**
         * Обертка над _getScore
         * @see _getScore
         * @returns {Object}
         */
        getScore: function (password) {
            return _getScore(password);
        }
    };
})();


/*!
 * miniTip v1.5.3
 *
 * Updated: July 15, 2012
 * Requires: jQuery v1.3+
 *
 * (c) 2011, James Simpson
 * http://goldfirestudios.com
 *
 * Dual licensed under the MIT and GPL
 *
 * Documentation found at:
 * http://goldfirestudios.com/blog/81/miniTip-jQuery-Plugin
*/
(function(e){e.fn.miniTip=function(t){var n={title:"",content:!1,delay:300,anchor:"n",event:"hover",fadeIn:200,fadeOut:200,aHide:!0,maxW:"250px",offset:5,stemOff:0,doHide:!1},r=e.extend(n,t);e("#miniTip")[0]||e("body").append('<div id="miniTip"><div id="miniTip_t"></div><div id="miniTip_c"></div><div id="miniTip_a"></div></div>');var i=e("#miniTip"),s=e("#miniTip_t"),o=e("#miniTip_c"),u=e("#miniTip_a");return r.doHide?(i.stop(!0,!0).fadeOut(r.fadeOut),!1):this.each(function(){var t=e(this),n=r.content?r.content:t.attr("title");if(n!=""&&typeof n!="undefined"){window.delay=!1;var a=!1,f=!0;r.content||t.removeAttr("title"),r.event=="hover"?(t.hover(function(){i.removeAttr("click"),f=!0,l.call(this)},function(){f=!1,c()}),r.aHide||i.hover(function(){a=!0},function(){a=!1,setTimeout(function(){!f&&!i.attr("click")&&c()},20)})):r.event=="click"&&(r.aHide=!0,t.click(function(){return i.attr("click","t"),i.data("last_target")!==t?l.call(this):i.css("display")=="none"?l.call(this):c(),i.data("last_target",t),e("html").unbind("click").click(function(t){i.css("display")=="block"&&!e(t.target).closest("#miniTip").length&&(e("html").unbind("click"),c())}),!1}));var l=function(){r.show&&r.show.call(this,r),r.content&&r.content!=""&&(n=r.content),o.html(n),r.title!=""?s.html(r.title).show():s.hide(),r.render&&r.render(i),u.removeAttr("class"),i.hide().width("").width(i.width()).css("max-width",r.maxW);var a=t.is("area");if(a){var f,l=[],c=[],h=t.attr("coords").split(",");function p(e,t){return e-t}for(f=0;f<h.length;f++)l.push(h[f++]),c.push(h[f]);var d=t.parent().attr("name"),v=e("img[usemap=\\#"+d+"]").offset(),m=parseInt(v.left,10)+parseInt((parseInt(l.sort(p)[0],10)+parseInt(l.sort(p)[l.length-1],10))/2,10),g=parseInt(v.top,10)+parseInt((parseInt(c.sort(p)[0],10)+parseInt(c.sort(p)[c.length-1],10))/2,10)}else var g=parseInt(t.offset().top,10),m=parseInt(t.offset().left,10);var y=a?0:parseInt(t.outerWidth(),10),b=a?0:parseInt(t.outerHeight(),10),w=i.outerWidth(),E=i.outerHeight(),S=Math.round(m+Math.round((y-w)/2)),x=Math.round(g+b+r.offset+8),T=Math.round(w-16)/2-parseInt(i.css("borderLeftWidth"),10),N=0,C=m+y+w+r.offset+8>parseInt(e(window).width(),10),k=w+r.offset+8>m,L=E+r.offset+8>g-e(window).scrollTop(),A=g+b+E+r.offset+8>parseInt(e(window).height()+e(window).scrollTop(),10),O=r.anchor;if(k||r.anchor=="e"&&!C){if(r.anchor=="w"||r.anchor=="e")O="e",N=Math.round(E/2-8-parseInt(i.css("borderRightWidth"),10)),T=-8-parseInt(i.css("borderRightWidth"),10),S=m+y+r.offset+8,x=Math.round(g+b/2-E/2)}else if(C||r.anchor=="w"&&!k)if(r.anchor=="w"||r.anchor=="e")O="w",N=Math.round(E/2-8-parseInt(i.css("borderLeftWidth"),10)),T=w-parseInt(i.css("borderLeftWidth"),10),S=m-w-r.offset-8,x=Math.round(g+b/2-E/2);if(A||r.anchor=="n"&&!L){if(r.anchor=="n"||r.anchor=="s")O="n",N=E-parseInt(i.css("borderTopWidth"),10),x=g-(E+r.offset+8)}else if(L||r.anchor=="s"&&!A)if(r.anchor=="n"||r.anchor=="s")O="s",N=-8-parseInt(i.css("borderBottomWidth"),10),x=g+b+r.offset+8;r.anchor=="n"||r.anchor=="s"?w/2>m?(S=S<0?T+S:T,T=0):m+w/2>parseInt(e(window).width(),10)&&(S-=T,T*=2):L?(x+=N,N=0):A&&(x-=N,N*=2),u.css({"margin-left":(T>0?T:T+parseInt(r.stemOff,10)/2)+"px","margin-top":N+"px"}).attr("class",O),delay&&clearTimeout(delay),delay=setTimeout(function(){i.css({"margin-left":S+"px","margin-top":x+"px"}).stop(!0,!0).fadeIn(r.fadeIn)},r.delay)},c=function(){if(!r.aHide&&!a||r.aHide)delay&&clearTimeout(delay),delay=setTimeout(function(){h()},r.delay)},h=function(){!r.aHide&&!a||r.aHide?(i.stop(!0,!0).fadeOut(r.fadeOut),r.hide&&r.hide.call(this)):setTimeout(function(){c()},200)}}})}})(jQuery)


/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.1
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});