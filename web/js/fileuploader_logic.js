var init_fileuploader = function(id, options, exts, JSdone, JSinit){
  var pseudo_button__txt = $('#' + id + 'fileupload').parent().find('.pseudo_button__txt');
  var pseudo_button__filename = $('#' + id + 'fileupload').parent().parent().find('.pseudo_button__filename');
  pseudo_button__txt.data('holder', pseudo_button__txt.html());
  if($('#' + id).val() != ''){
    pseudo_button__filename.html($('#' + id).val());
  }
  JSinit(id);
  $('#' + id + 'fileupload').fileupload({
    dataType: 'json',
    done: function (e, data) {
      //NProgress.done();
      pseudo_button__txt.html(pseudo_button__txt.data('holder'));
      $('#' + id + 'fileupload').parent().removeClass('pseudo_button__disabled');
      if(data.result.success == true){
        pseudo_button__filename.html(data.result.filename);
        $('#' + id).val(data.result.filename);
        JSdone(data, id);
      } else {
        alert(data.result.error);
      }
    },
    progressall: function (e, data) {
      //NProgress.set(data.loaded / data.total);
      pseudo_button__filename.html(Math.round(data.loaded / data.total * 100) + '%');
    },
    add: function(e, data){
      var valid = true;
      $.each(data.files, function (index, file) {
        var expr = new RegExp('(\.|\/)(' + exts + ')$', 'i');
        if(!(expr.test(file.name))){
          var ext = file.name.substr(file.name.lastIndexOf('.'));
          alert('Недопустимое расширение файла: ' + file.name + '. Допустимые расширения: .' + exts.replace(/\|/g, ', .'));
          valid = false;
        } else {
          
        }
      });
      if(valid){
        $('#' + id + 'fileupload').parent().addClass('pseudo_button__disabled');
        pseudo_button__txt.html('Загрузка..');
        //NProgress.start();
        data.submit();
      }
    }
  });
};