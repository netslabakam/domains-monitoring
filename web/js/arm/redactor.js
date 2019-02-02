function basename(path, suffix) {
    var b = path.replace(/^.*[\/\\]/g, '');
    if (typeof(suffix) == 'string' && b.substr(b.length - suffix.length) == suffix) {
        b = b.substr(0, b.length - suffix.length);
    }
    return b;
}
var RLANG = {html: 'Код',
    html: 'Код',
    video: 'Видео',
    image: 'Добавление изображения',
    image_edit: 'Редактирование изображения',
    table: 'Таблица',
    table_width: 'Ширина таблицы',
    table_param: 'Свойства таблицы',
    cell_param: 'Свойства ячейки',
    link: 'Ссылка',
    link_insert: 'Вставить ссылку ...',
    unlink: 'Удалить ссылку',
    styles: 'Стили',
    paragraph: 'Обычный текст',
    quote: 'Цитата',
    code: 'Код',
    header1: 'Заголовок 1',
    header2: 'Заголовок 2',
    header3: 'Заголовок 3',
    format: 'Формат',
    bold: 'Полужирный',
    italic: 'Наклонный',
    superscript: 'Надстрочный',
    strikethrough: 'Зачеркнутый',
    fontcolor: 'Цвет текста',
    backcolor: 'Заливка текста',
    removeformat: 'Удалить формат',
    cleanstyles: 'Удалить стили MS Word',
    lists: 'Списки',
    unorderedlist: 'Обычный список',
    orderedlist: 'Нумерованный список',
    outdent: 'Уменьшить отступ',
    indent: 'Увеличить отступ',
    redo: 'Повтор',
    apply: 'Применить',
    undo: 'Отмена',
    cut: 'Кат / Врезка',
    cancel: 'Отменить',
    insert: 'Вставить',
    save: 'Сохранить',
    _delete: 'Удалить',
    insert_table: 'Вставить таблицу',
    insert_row_above: 'Добавить строку сверху',
    insert_row_below: 'Добавить строку снизу',
    insert_column_left: 'Добавить столбец слева',
    insert_column_right: 'Добавить столбец справа',
    delete_column: 'Удалить столбец',
    delete_row: 'Удалить строку',
    delete_table: 'Удалить таблицу',
    Rows: 'Количество строк',
    Columns: 'Количество столбцов',
    add_head: 'Добавить заголовок',
    delete_head: 'Удалить заголовок',
    title: 'Подсказка',
    image_view: 'Скачать изображение',
    image_position: 'Обтекание текстом',
    left: 'слева',
    right: 'справа',
    image_web_link: 'Cсылка на изображение',
    text: 'Текст',
    mailto: 'Эл. почта',
    phone: 'Телефон',
    web: 'URL',
    video_html_code: 'Код видео ролика',
    file: 'Файл',
    upload: 'Загрузить',
    download: 'Скачать',
    choose: 'Выбрать',
    or_choose: 'Или выберите',
    drop_file_here: 'Перетащите файл сюда',
    align_left: 'По левому краю',
    align_center: 'По центру',
    align_right: 'По правому краю',
    align_justify: 'Выровнять текст по ширине',
    horizontalrule: 'Горизонтальная линия',
    fullscreen: 'Во весь экран',
    deleted: 'Зачеркнутый',
    underline: 'Подчеркнутый',
    word: 'Редактировать в Word',
    word_to_html: 'Преобразовать документ в HTML',
    glavred: 'Главред - очистка текста от словесного мусора',
    screen_shot: 'Скриншот экрана',
    screen_shot_file: 'Выберите изображение',
    screen_shot_comment: 'Комментарий для скриншота',
    fill: 'Заливка фона',
    fill_delete: 'Удаление заливки',
    insert_image: 'Добавление изображения',
    add_to_gallery: 'Выбрать из галереи',
    slider_edit: 'Редактирование слайдера',
    slider_base: 'Слайдер',
    form_show: 'Выбор формы',
    form_edit: 'Редактирование формы',
    form_base: 'Форма',
    map_base: 'Карта',
    map_edit: 'Редактирование карты',
    product_base: 'Товары',
    product_edit: 'Редактирование группы товаров',
    img_text_base: 'Картинка с текстом',
    f_form_base: 'Форма обратной связи',
    fform_edit: 'Редактирование формы',
    article_base: 'Статьи',
    article_edit: 'Выберите статьи',
    gallery_base: 'Галерея изображений',
    gallery_edit: 'Редактирование галереи',
    service_base: 'Услуги',
    service_edit: 'Выберите две услуги',
    advantages_base: 'Преимущества',
    advantages_edit: 'Выберите преимущества',
    components: 'Компоненты',
    none: 'Нет'
};

var tempForm = function(obj){
    //obj.type | obj.title
    var temps = {

        product_edit: '<div class="redactor_con_goods">'+
        '<input type="text" autocomplete="off" name="title" class="redactor_con_goods__title" placeholder="Заголовок группы" style="width: 100%;" />'+
        '<i class="br10"></i>' +
        '<div class="redactor_con_goods__items"></div>' +
        '<i class="br10"></i>' +
        '<button onclick="redactorActive.addConditionProducts(this)">+ Добавить условие</button>' +
        '<i class="br20"></i>' +
        '<button onclick="redactorActive.productSave();">%RLANG.save%</button>&nbsp;&nbsp;' +
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>&nbsp;&nbsp;' +
        '</div>',

        article_edit: '<div class="redactor_show_article">' +
        '<input class="redactor_article__title" placeholder="Заголовок" value="" type="text" style="width:100%;"><i class="br10"></i>' +
        '<ul class="redactor_show_tabs"><li><label><input type="radio" checked="true" name="article_type" data-initialized="1" value="articles" /><span>Список</span></label></li><li><label><input type="radio" name="article_type" data-initialized="1" value="tags" /><span>Теги</span></label></li></ul>' +
        '<div class="redactor_show_tabs_cont" onclick="redactorActive.articleClick(event);"></div>' +
        '<button onclick="redactorActive.saveArticle();">%RLANG.save%</button>&nbsp;&nbsp;' +
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>&nbsp;&nbsp;' +
        '</div>',

        service_edit: '<div class="redactor_show_service">' +
        '<div class="redactor_show_service_list" onclick="redactorActive.serviceClick(event);"></div>' +
        '<button onclick="redactorActive.saveService();">%RLANG.save%</button>&nbsp;&nbsp;' +
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>&nbsp;&nbsp;' +
        '</div>',

        gallery_edit: '<div class="redactor_show_gallery">' +
        '<input class="redactor_gallery__title" placeholder="Заголовок" value="" type="text" style="width:100%;"><i class="br10"></i>' +
        '<ul class="redactor_show_tabs"><li><label><input type="radio" checked="true" name="gallery_type" data-initialized="1" value="photo_albums" /><span>Альбомы</span></label></li><li><label><input type="radio" name="gallery_type" data-initialized="1" value="tags" /><span>Группы</span></label></li></ul>' +
        '<div class="redactor_show_tabs_cont" onclick="redactorActive.galleryClick(event);"></div>' +
        '<button onclick="redactorActive.saveGallery();">%RLANG.save%</button>&nbsp;&nbsp;' +
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>&nbsp;&nbsp;' +
        '</div>',

        advantages_edit: '<div class="redactor_show_advantages">' +
        '<div class="redactor_show_tabs_cont" onclick="redactorActive.advantagesClick(event);"></div>' +
        '<button onclick="redactorActive.saveAdvantages();">%RLANG.save%</button>&nbsp;&nbsp;' +
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>&nbsp;&nbsp;' +
        '</div>',

        slider_edit: '<div class="redactor_sl_edit">' +
        'Слайды:<i class="br10"></i><ul class="redactor_sl_edit__items"></ul>' +
        '<div class="redactor_sl_edit__btns">' +
        '<div class="redactor_sl_edit__btns__add" onclick="redactorActive.sliderUpload();"><span>Загрузить слайд</span></div>' +
        '</div><i class="br20"></i>' +
        '<button onclick="redactorActive.sliderSave();">%RLANG.apply%</button>' +
        '&nbsp;&nbsp;'+
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>' +
        '<button style="float:right;" class="red" onclick="redactorActive.sliderDelete();">%RLANG._delete% слайдер</button>' +
        '</div>',

        form_show: '<div class="redactor_show_form">' +
        '<select class="redactor_show_form__list"></select>' +
        '</div>' +
        '<input type="button" name="save" style="margin-right:10px !important;" class="redactor_show_form_insert" id="redactorSaveBtn" value="%RLANG.insert%" onclick="redactorActive.insertForm();" />' +
        '<input type="button" name="save" style="margin-right:10px !important;" id="redactorSaveBtn" class="redactor_show_form_edit" value="%RLANG.save%" onclick="redactorActive.saveForm();" />' +
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />&nbsp;&nbsp'+
        '<button class="red redactor_show_form__delete redactor_show_form_edit">%RLANG._delete% форму</button>',

        form_insert: '<div class="redactor_insert_form">' +
        '<select class="redactor_insert_form__list"></select>' +
        '</div>' +
        '<input type="button" name="save" id="redactorSaveBtn" value="%RLANG.insert%" onclick="" />&nbsp;&nbsp' +
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />',

        map_edit: '<div class="redactor_show_map">' +
        '<div class="redactor_show_map__list"></div>' +
        '<div class="redactor_show_map__list__add" onclick="redactorActive.mapAddPoint(this);">+ Добавить метку</div>' +
        '<button onclick="redactorActive.mapSave();">%RLANG.apply%</button>&nbsp;&nbsp;' +
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>&nbsp;&nbsp;' +
        '<button style="float:right;" class="red" onclick="redactorActive.mapDelete();">%RLANG._delete% карту</button>' +
        '</div>',
        fform_edit: '<div class="redactor_show_f_form">' +
        'Тип обращения<i class="br5"></i>' +
        '<select class="redactor_show_f_form__sel"></select>' +
        '</div>' +
        '<i class="br20"></i>' +
        '<input type="button" name="save" style="margin-right:10px !important;" id="redactorSaveBtn" class="redactor_show_form_edit" value="%RLANG.save%" onclick="redactorActive.saveFForm();" />' +
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />&nbsp;&nbsp'+
        '<button class="red redactor_show_form__delete" onclick="redactorActive.fFormDelete();">%RLANG._delete% форму</button>',

        video: '<form class="redactor_popup_form" id="redactorInsertVideoForm" onsubmit="return false;">'+
        '<textarea id="redactor_insert_video_area" name="redactor_insert_video_area" style="width:100%;height:160px;" placeholder="%RLANG.video_html_code%"></textarea>'+
        '</form><i class="br10"></i>'+
        '<button onclick="redactorActive.insertVideo();">%RLANG.insert%</button>'+
        '&nbsp;&nbsp;'+
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button></p>',

        link: '<form class="redactor_popup_form" id="redactorInsertLinkForm" onsubmit="return false;">'+
        '<input type="text" class="input__control" autocomplete="off" placeholder="%RLANG.web%" name="redactor_link_url" id="redactor_link_url" style="width: 100%;" />'+
        '<i class="br10"></i>'+
        '<input type="text" class="input__control" autocomplete="off" placeholder="%RLANG.text%" name="redactor_link_text" id="redactor_link_text" style="width: 100%;" />' +
        '<i class="br10"></i>' +
        '<label class="custom_input_label"><input type="radio" class="custom_input" name="redactorInsertLinkView" value="0" checked="checked" /><span class="custom_input custom_input_radio"></span>&nbsp;<span style="display: inline-block;vertical-align:middle;">Ссылка</span></label>&nbsp;&nbsp;&nbsp;&nbsp;'+
        '<label class="custom_input_label"><input type="radio" class="custom_input" name="redactorInsertLinkView" value="1" /><span class="custom_input custom_input_radio"></span>&nbsp;<span style="display: inline-block;vertical-align:middle;">Кнопка</span></label>'+
        '<i class="br20"></i>'+
        '<div class="redactor_link_struct"></div>' +
        '<i class="br20"></i>'+
        '<button onclick="redactorActive.insertLink();">%RLANG.insert%</button>'+
        '&nbsp;&nbsp;'+
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>'+
        '</form>',

        screen_shot: '<form class="redactor_popup_form" id="redactorInsertScreenShotForm" onsubmit="return false;">'+
        '<button id="redactor_insert_screen_shot_upload" onclick="redactorActive.upload_screen_shot();">%RLANG.screen_shot_file%</button><span id="redactor_insert_screen_shot_size" style="margin-left:10px;margin-right: 20px;"></span>'+
        '<input type="hidden" id="redactor_insert_screen_shot_img" />'+
        '<input type="text" class="input__control" id="redactor_insert_screen_shot_link" placeholder="Ссылка" />' +
        // '<p><textarea id="redactor_insert_screen_shot_comment" style="width: 100%; height: 100px;" placeholder="%RLANG.screen_shot_comment%"></textarea></p>'+
        '</form>'+
        '<i class="br20"></i>'+
        '<button onclick="redactorActive.insert_screen_shot();">%RLANG.insert%</button>'+
        '&nbsp;&nbsp;'+
        '<button onclick="redactorActive.overlayHide();">%RLANG.cancel%</button>',

        insert_image: '<div class="redactor_insert_image_type"><button class="redactor_insert_image_upload" style="width: 100%;" onclick="redactorActive.uploadImage();">%RLANG.upload%</button>',

        insert_table: '<table class="redactor_ruler"><tr>' +
        '<td class="redactor_ruler__label">%RLANG.Rows%:&nbsp;</td><td><input type="text" size="5" value="2" id="redactor_table_rows" /></td></tr><tr>' +
        '<td class="redactor_ruler__label">%RLANG.Columns%:&nbsp;</td><td><input type="text" size="5" value="3" id="redactor_table_columns" /></td></tr>' +
        '<td class="redactor_ruler__label">%RLANG.table_width%:</td><td><input type="text" size="5" value="100" id="redactor_table_width" />&nbsp;<select id="redactor_table_type_width"><option value="%">%</option><option value="px">px</option></select></td></tr>' +
        '</table>' +
        '<input type="button" value="%RLANG.insert%" onclick="redactorActive.insertTable();" />&nbsp;&nbsp;'+
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />',

        table_param: '<table class="redactor_ruler"><tr>' +
        '<td class="redactor_ruler__label">%RLANG.table_width%:</td><td><input type="text" size="5" value="100" id="redactor_tparam_width" />&nbsp;<select id="redactor_tparam_type"><option value="%">%</option><option value="px">px</option></select></td></tr>' +
        '<tr><td colspan="2"><label class="custom_input_label"><input type="checkbox" class="custom_input" id="redactor_tparam_transparent" /><span class="custom_input custom_input_checkbox"></span><span style="display: inline-block;vertical-align:top;">Невидимая граница</span></label></td></tr>' +
        '</table>' +
        '<input type="button" value="%RLANG.apply%" onclick="redactorActive.tableParam();" />&nbsp;&nbsp;'+
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />',

        cell_param: '<table class="redactor_ruler"><tr>' +
        '<td class="redactor_ruler__label">Выравнивание по вертикали:</td><td><select id="redactor_cparam_valign"><option value="top">Сверху</option><option value="bottom">Снизу</option><option value="middle">По центру</option></select></td></tr>' +
        '<td class="redactor_ruler__label">Выравнивание по горизонтали:</td><td><select id="redactor_cparam_align"><option value="left">Слева</option><option value="right">Справа</option><option value="center">По центру</option></select></td></tr>' +
        '</table>' +
        '<input type="button" value="%RLANG.apply%" onclick="redactorActive.cellParam();" />&nbsp;&nbsp;'+
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />',

        fill: '<table class="redactor_ruler"><tr>' +
        '<td class="redactor_ruler__label">Элемент:</td><td><select id="redactor_fill"><option value="table">Таблица</option><option value="row">Строка</option><option value="cell">Ячейка</option></select></td></tr>' +
        '<tr><td class="redactor_ruler__label">Цвет:</td><td><input type="color" id="redactor_fill_color" /></td>' +
        '</tr></table>' +
        '<input type="button" value="%RLANG.apply%" onclick="redactorActive.fill();" />&nbsp;&nbsp;'+
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />',

        fill_delete: '<table class="redactor_ruler"><tr>' +
        '<td class="redactor_ruler__label">Элемент:</td><td><select id="redactor_fill_delete"><option value="table">Таблица</option><option value="row">Строка</option><option value="cell">Ячейка</option></select></td>' +
        '</tr></table>' +
        '<input type="button" value="%RLANG._delete%" onclick="redactorActive.fill_delete();" />&nbsp;&nbsp;'+
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />',

        image_edit: '<table width="100%" class="redactor_ruler"><tr>' +
        '<td class="redactor_ruler__label">Выравнивание:</td><td>' +
        '<select id="redactor_image_align">' +
        '<option value="block">Блоком</option>' +
        '<option value="left">Слева</option>' +
        '<option value="right">Справа</option>' +
        '</select></td></tr>' +
        '<tr><td>Ширина:</td><td><input type="text" id="redactor_image_width" size="6" />&nbsp;px</td></tr>' +
        '<tr><td>Высота:</td><td><input type="text" id="redactor_image_height" size="6" />&nbsp;px</td></tr>' +
        '<tr><td colspan="2"><label class="custom_input_label"><input type="checkbox" class="custom_input" id="redactor_image_ratio" checked="checked" /><span class="custom_input custom_input_checkbox"></span><span style="display: inline-block;vertical-align:top;">Сохранять пропорции</span></label></td></tr>' +
        '<tr><td>Alt:</td><td><input type="text" id="redactor_image_alt" /></td></tr>' +
        '</table>' +
        '<input type="button" name="save" id="redactorSaveBtn" value="%RLANG.apply%" />&nbsp;&nbsp' +
        '<input type="button" id="redactor_image_edit_delete" value="%RLANG._delete%" />&nbsp;&nbsp;' +
        '<input type="button" onclick="redactorActive.overlayHide();" value="%RLANG.cancel%" />'
    }
    return temps[obj.type];
};


var RTOOLBAR = {
    p:{
        title: RLANG.paragraph,
        exec: 'formatblock',
        param: '<p>'
    },
    h2:{
        title: RLANG.header1,
        exec: 'formatblock',
        param: '<h2>'
    },
    h3:{
        title: RLANG.header2,
        exec: 'formatblock',
        param: '<h3>'
    },
    h4:{
        title: RLANG.header3,
        exec: 'formatblock',
        param: '<h4>'
    },
    bold: {
        title: RLANG.bold,
        exec: 'bold',
        param: null,
        htmlShow: false
    },
    italic: {
        title: RLANG.italic,
        exec: 'italic',
        param: null,
        htmlShow: false
    },
    underline: {
        title: RLANG.underline,
        exec: 'underline',
        param: null,
        htmlShow: false
    },
    deleted: {
        title: RLANG.deleted,
        exec: 'strikethrough',
        param: null,
        htmlShow: false
    },
    insertunorderedlist: {
        title: '&bull; ' + RLANG.unorderedlist,
        exec: 'insertunorderedlist',
        param: null,
        htmlShow: false
    },
    insertorderedlist: {
        title: '1. ' + RLANG.orderedlist,
        exec: 'insertorderedlist',
        param: null,
        htmlShow: false
    },
    image: {
        title: RLANG.image,
        func: 'uploadImage',
        htmlShow: false
    },
    // screen_shot: {
    //     title: RLANG.screen_shot,
    //     func: 'screen_shot',
    //     htmlShow: false
    // },
    video: {
        title: RLANG.video,
        func: 'showVideo',
        htmlShow: false
    },
    // file: {
    //     title: RLANG.file,
    //     func: 'showFile',
    //     htmlShow: false
    // },
    link: {
        title: RLANG.link,
        func: 'showLink',
        htmlShow: false
    },
    unlink: {
        title: RLANG.unlink,
        exec: 'unlink',
        param: null,
        htmlShow: false
    },
    // table:{
    //     title: RLANG.table,
    //     func: 'show',
    //     dropdown: {
    //         insert_table: { name: 'insert_table', title: RLANG.insert_table, func: 'showTable' },
    //         table_param: { name: 'table_param', title: RLANG.table_param, func: 'showTableParam' },
    //         cell_param: { name: 'cell_param', title: RLANG.cell_param, func: 'showCellParam' },
    //         separator_drop1: { name: 'separator' },
    //         insert_row_above: { name: 'insert_row_above', title: RLANG.insert_row_above, func: 'insertRowAbove' },
    //         insert_row_below: { name: 'insert_row_below', title: RLANG.insert_row_below, func: 'insertRowBelow' },
    //         insert_column_left: { name: 'insert_column_left', title: RLANG.insert_column_left, func: 'insertColumnLeft' },
    //         insert_column_right: { name: 'insert_column_right', title: RLANG.insert_column_right, func: 'insertColumnRight' },
    //         separator_drop2: { name: 'separator' },
    //         add_head: { name: 'add_head', title: RLANG.add_head, func: 'addHead' },
    //         delete_head: { name: 'delete_head', title: RLANG.delete_head, func: 'deleteHead' },
    //         separator_drop3: { name: 'separator' },
    //         delete_column: { name: 'insert_table', title: RLANG.delete_column, func: 'deleteColumn' },
    //         delete_row: { name: 'delete_row', title: RLANG.delete_row, func: 'deleteRow' },
    //         delete_table: { name: 'delete_table', title: RLANG.delete_table, func: 'deleteTable' },
    //         separator_drop4: { name: 'separator' },
    //         fill: { name: 'fill', title: RLANG.fill, func: 'showFill' },
    //         fill_delete: { name: 'fill_delete', title: RLANG.fill_delete, func: 'showFillDelete' }
    //     }
    // },
    horizontalrule: {
        exec: 'inserthorizontalrule',
        name: 'horizontalrule',
        title: RLANG.horizontalrule
    },
    components:{
        title: RLANG.components,
        func: 'show',
        dropdown: {
            insert_product: { name: 'product_insert', title: RLANG.product_base, func: 'insertProduct' },
            insert_article: { name: 'article_insert', title: RLANG.article_base, func: 'insertArticle' },
            insert_gallery: { name: 'insert_gallery', title: RLANG.gallery_base, func: 'insertGallery' },
            insert_service: { name: 'insert_service', title: RLANG.service_base, func: 'insertService' },
            insert_advantages: { name: 'insert_advantages', title: RLANG.advantages_base, func: 'insertAdvantages' },

            // insert_slider: { name: 'insert_slider', title: RLANG.slider_base, func: 'insertSlider' },

            // show_form: { name: 'show_form', title: RLANG.form_base, func: 'showForm' },
            // insert_f_form: { name: 'f_form_insert', title: RLANG.f_form_base, func: 'insertFForm' },
            // insert_map: { name: 'map_insert', title: RLANG.map_base, func: 'insertMap' },

            // insert_img_text: { name: 'img_text_insert', title: RLANG.img_text_base, func: 'insertImgNText' }
        }
    },
    word: {
        title: RLANG.word,
        func: 'word',
        htmlShow: true
    },
    html: {
        title: RLANG.html,
        func: 'toggle',
        htmlShow: true
    },
    fullscreen: {
        title: RLANG.fullscreen,
        func: 'fullscreen',
        htmlShow: true
    },

    /*glavred: {
        title: RLANG.glavred,
        func: 'glavredProofread',
        htmlShow: false
    },
    word_to_html:
    {
        title: 'Преобразовать документ в HTML',
        func: 'word_to_html'
    }*/
};


var redactorActive = false;
var $table, $table_tr, $table_td, $tbody, $thead, $current_tr, $current_td;

(function ($) {
    $.fn.redactor = function (options) {
        var obj = new Construct(this, options);
        obj.init();
        return obj;
    };
    function Construct(el, options) {
        this.opts = $.extend({
            lang: 'ru',
            air: false,
            toolbar: 'main',
            path: '',
            word_path: '',
            upload_path: '/arm/uploader?key=redactor',
            focus: true,
            resize: true,
            handler: false,
            autoclear: true,
            autoformat: true,
            removeClasses: false,
            removeStyles: true,
            convertLinks: true,
            autosave: false,
            interval: 20,
            imageUpload: '',
            imageGetJson: '',
            imageUploadFunction: false,
            fileUpload: '',
            fileDownload: '',
            fileDelete: '',
            fileUploadFunction: false,
            css: ['/css/arm/redactor/fonts.css?170918', '/css/arm/redactor/ftext.css?170918'],
            js: [],
            visual: true,
            fullscreen: false,
            overlay: true,
            colors: Array(
                '#ffffff', '#000000', '#eeece1', '#1f497d', '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#ffff00',
                '#f2f2f2', '#7f7f7f', '#ddd9c3', '#c6d9f0', '#dbe5f1', '#f2dcdb', '#ebf1dd', '#e5e0ec', '#dbeef3', '#fdeada', '#fff2ca',
                '#d8d8d8', '#595959', '#c4bd97', '#8db3e2', '#b8cce4', '#e5b9b7', '#d7e3bc', '#ccc1d9', '#b7dde8', '#fbd5b5', '#ffe694',
                '#bfbfbf', '#3f3f3f', '#938953', '#548dd4', '#95b3d7', '#d99694', '#c3d69b', '#b2a2c7', '#b7dde8', '#fac08f', '#f2c314',
                '#a5a5a5', '#262626', '#494429', '#17365d', '#366092', '#953734', '#76923c', '#5f497a', '#92cddc', '#e36c09', '#c09100',
                '#7f7f7f', '#0c0c0c', '#1d1b10', '#0f243e', '#244061', '#632423', '#4f6128', '#3f3151', '#31859b', '#974806', '#7f6000'),

        }, options);
        this.$el = $(el);
    };

    Construct.prototype = {
        _loadFile: function (file, array) {
            var item = array[0];
            array.splice(0, 1);

            if (typeof(item) == 'function') var callback = item;
            else {
                var callback = function () {
                    this._loadFile(item, array);

                }.bind2(this);
            }

            this.dynamicallyLoad(file, callback);
        },
        loadFiles: function (array) {
            var item = array[0];
            array.splice(0, 1);

            this._loadFile(item, array);
        },
        dynamicallyLoad: function (url, callback) {
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.src = url;

            // Handle Script loading
            var done = false;

            // Attach handlers for all browsers
            script.onload = script.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                    done = true;
                    if (callback) {
                        callback();
                    }
                    // Handle memory leak in IE
                    script.onload = script.onreadystatechange = null;
                }
            };
            head.appendChild(script);

            // We handle everything using the script element injection
            return undefined;
        },
        init: function () {

            var el_height = this.$el.height();

            // if ($.cookie('redactor_height')) {
            //     el_height = $.cookie('redactor_height');
            // }

            this.$el.height(el_height - 6);

            this.height = el_height + 'px';

            this.$el.height

            this.width = this.$el.css('width');
            this.editorID = this.$el.attr('id');

            if (typeof(this.editorID) == 'undefined') {
                this.editorID = this.getRandomID();
            }
            this.build();
            this.start();

            this.enable(this.$el.val());

            if ($.cookie('redactor_mode') == 'textarea') {
                this.toggle();
            }


            // // get dimensions
            // this.height = this.$el.css('height');
            // this.width = this.$el.css('width');
            //
            // // get editor ID
            // this.editorID = this.$el.attr('id');
            // if (typeof(this.editorID) == 'undefined') this.editorID = this.getRandomID();
            //
            // // air box
            // if (this.opts.air)
            // {
            //     this.opts.toolbar = 'air';
            //     this.air = $('<div id="imp_redactor_air_' + this.editorID + '" class="redactor_air" style="display: none;"></div>');
            // }
            //
            //
            // // load files
            //
            //
            //
            //
            //
            // // constract editor
            // this.build();
            //
            // // enable
            // this.enable(this.$el.val());
        },

        start: function () {
            this.buildToolbar();
            this.buildResizer();

            $(this.doc).bind('paste', function (e) {
                setTimeout(function () {
                    var node = $('<span id="pastemarkerend"><br /></span>');
                    this.insertNodeAtCaret(node.get(0));
                    this.clean();
                }.bind2(this), 200);
            }.bind2(this));

            // doc events
            $(this.doc).keypress(function (e) {
                var key = e.keyCode || e.which;

                if (navigator.userAgent.indexOf('Safari')) {
                    if (e.shiftKey && key == 13) {
                        if (e.preventDefault) e.preventDefault();

                        var node1 = $('<span></span>')
                        this.insertNodeAtCaret(node1.get(0));

                        var node2 = $('<br>')
                        this.insertNodeAtCaret(node2.get(0));

                        this.setFocusNode(node1.get(0));

                        return false;
                    }
                }

                if (key == 13 && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
                    if (this.getParentNodeName() == 'BODY') {
                        if (e.preventDefault) e.preventDefault();

                        var node = $('<p>&nbsp;</p>')
                        this.insertNodeAtCaret(node.get(0));

                        return false;
                    }
                    else return true;

                }


            }.bind2(this));

            $(this.doc).keyup(function (e) {
                var key = e.keyCode || e.which;

                if (key == 8 || key == 46) {
                    if ($(this.doc.body).html() == '') {
                        if (e.preventDefault) e.preventDefault();

                        var node = $('<p>&nbsp;</p>').get(0);
                        $(this.doc.body).append(node);
                        this.setFocusNode(node);

                        return false;
                    }

                }


                if (key == 13 && !e.shiftKey && !e.ctrlKey && !e.metaKey) {

                    if (this.getParentNodeName() == 'BODY') {
                        if (e.preventDefault) e.preventDefault();

                        element = $(this.getCurrentNode());
                        if (element.get(0).tagName != 'P') {
                            newElement = $('<p>').append(element.clone().get(0).childNodes);
                            element.replaceWith(newElement);
                            newElement.html('&nbsp;');
                            this.setFocusNode(newElement.get(0));

                            return false;
                        }

                        // convert links
                        if (this.opts.convertLinks) $(this.doc).linkify();
                    }
                    else return true;

                }

            }.bind2(this));

            // shortcuts
            //this.shortcuts();

            // autosave
            this.autoSave();


            // focus
            if (this.opts.focus) this.focus();

        },
        shortcuts: function () {
            $(this.doc).keydown(function (e) {
                var key = e.keyCode || e.which;

                if (e.ctrlKey) {
                    // Ctrl + z
                    if (key == 90) {
                        if (e.preventDefault) e.preventDefault();
                        this.execCommand('undo', null);
                    }
                    // Ctrl + Shift + z
                    else if (key == 90 && e.shiftKey) {
                        if (e.preventDefault) e.preventDefault();
                        this.execCommand('redo', null);
                    }
                    // Ctrl + m
                    else if (key == 77) {
                        if (e.preventDefault) e.preventDefault();
                        this.execCommand('removeFormat', null);
                    }
                    // Ctrl + b
                    else if (key == 66) {
                        if (e.preventDefault) e.preventDefault();
                        this.execCommand('bold', null);
                    }
                    // Ctrl + i
                    else if (key == 73) {
                        if (e.preventDefault) e.preventDefault();
                        this.execCommand('italic', null);
                    }
                    // Ctrl + j
                    else if (key == 74) {
                        if (e.preventDefault) e.preventDefault();
                        this.execCommand('insertunorderedlist', null);
                    }
                    // Ctrl + k
                    else if (key == 75) {
                        if (e.preventDefault) e.preventDefault();
                        this.execCommand('insertorderedlist', null);
                    }
                    // Ctrl + l
                    else if (key == 76) {
                        if (e.preventDefault) e.preventDefault();
                        this.execCommand('superscript', null);
                    }
                }

                // Tab
                if (!e.shiftKey && key == 9) {
                    if (e.preventDefault) e.preventDefault();
                    this.execCommand('indent', null);
                }
                // Shift + tab
                else if (e.shiftKey && key == 9) {
                    if (e.preventDefault) e.preventDefault();
                    this.execCommand('outdent', null);
                }


            }.bind2(this));

        },

        focus: function () {
            if ($.browser.msie) this.$frame.get(0).contentWindow.focus();
            else this.$frame.focus();
        },
        build: function () {
            // container
            this.$box = $('<div id="redactor_box_' + this.editorID + '" class="redactor_box"></div>');

            this.$upload = $('<input type="file" name="file" style="position:absolute;opacity:0;"/>');

            // frame
            this.$frame = $('<iframe frameborder="0" scrolling="auto" id="redactor_frame_' + this.editorID + '" style="height: ' + this.height + ';" class="redactor_frame"></iframe>');

            // hide textarea
            // this.$el.addClass('redactor_load_textarea');

            // append box and frame
            this.$box.insertAfter(this.$el).append(this.$frame).append(this.$el).append(this.$el).append(this.$upload);


            // form submit
            this.formSubmit();
            this.init_uploader();

        },
        init_uploader: function () {
            var redactorActive = this;
            var p = null;
            var pBox = null;
            this.$uploader = $(this.$upload).liteUploader({
                script: this.opts.upload_path,
                singleFileUploads: true,
                rules: {
                    maxSize: 1024 * 1024 * 1024
                }
            })
                .on('lu:errors', function (e, errors) {
                    console.log(errors);
                })
                .on('lu:before', function (e, files) {
                    $(this).closest('.redactor_box').addClass('redactor_preloader');

                    redactorActive.overlayHide();
                })
                .on('lu:success', function (e, json) {
                    var o = JSON.parse(json);
                    var html = null;

                    if(o.state == 'success'){
                        redactorActive.execCommand('inserthtml', '<img src="/u/f/' + (o.filename.replace('.', '-FHD.')) + '" />');
                        redactorActive.overlayHide();

                        // $(this).data('liteUploader').removeParam('convert');

                        $(this).closest('.redactor_box').removeClass('redactor_preloader');
                        if(pBox != null) pBox.remove();
                        redactorActive.docObserve();
                    }
                });

            $(this.$upload).change(function () {
                $(this).data("liteUploader").startUpload();
            });

        },
        enable: function (html) {
            this.doc = this.getDoc(this.$frame);

            if (typeof(html) == 'undefined' || html == '') {
                if (this.opts.autoformat === true) {
                    if ($.browser.msie) html += '<p></p>';
                    else html += '<p>&nbsp;</p>';
                }
            }

            this.write(this.setDoc(html));
            this.designMode();
            this.docObserve();
            var _this = this;
            $(this.doc).keyup(function (e) {

            });
        },
        enableAir: function () {
            if (this.opts.air === false) return false;

            $('#imp_redactor_air_' + this.editorID).hide();

            $(this.doc).bind('textselect', this.editorID, function (e) {
                var width = $('#imp_redactor_air_' + this.editorID).width();
                var width_area = this.$frame.width();

                var diff = width_area - e.clientX;
                if (diff < width) e.clientX = e.clientX - width;

                $('#imp_redactor_air_' + this.editorID).css({
                    left: e.clientX + 'px',
                    top: (e.clientY + 8) + 'px'
                }).show();

            }.bind2(this));

            $(this.doc).bind('textunselect', this.editorID, function () {
                $('#imp_redactor_air_' + this.editorID).hide();

            }.bind2(this));

        },
        write: function (html) {
            if (this.doc != null) {
                this.doc.open();
                this.doc.write(html);
                this.doc.close();
            }
        },
        setDoc: function (html) {
            var frameHtml = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
            frameHtml += '<html>';
            frameHtml += '<head>';
            $.each(this.opts.css, function (k, v) {
                frameHtml += '<link media="all" type="text/css" href="' + v + '" rel="stylesheet">';
            });
            $.each(this.opts.js, function (k, v) {
                frameHtml += '<script src="' + v + '"></script>';
            });
            frameHtml += '</head>';
            frameHtml += '<body class="ftext">';
            frameHtml += html;
            frameHtml += '</html>';
            frameHtml += '</body>';
            return frameHtml;
        },
        getDoc: function (frame) {
            frame = frame.get(0);
            if (frame.contentDocument) return frame.contentDocument;
            else if (frame.contentWindow && frame.contentWindow.document) return frame.contentWindow.document;
            else if (frame.document) return frame.document;
            else return null;
        },
        glvrd_insert_div: null,
        glvrd_insert: function(){
            if($(this.doc.body).find('i.glvrd').length == 0){
                return false;
            }
            if($(this.doc.body).find('.glvrd_insert_div').length){
                this.glvrd_insert_div = $(this.doc.body).find('.glvrd_insert_div');
            } else {
                this.glvrd_insert_div = $('<div class="glvrd_insert_div"></div>');
                $(this.doc.body).append(this.glvrd_insert_div);
            }
            var glvrd_insert_div = this.glvrd_insert_div;
            $(this.doc.body).find('i.glvrd').each(function(k, el){
                $(el).mouseover(function(){
                    glvrd_insert_div.html('<b>' + $(el).data('name') + '</b>' + $(el).data('description'));
                    var el_pos = $(el).position();

                    glvrd_insert_div.css({'left': el_pos.left, 'top': el_pos.top + $(el).height()});
                    glvrd_insert_div.show();
                });
                $(el).mouseout(function(){
                    glvrd_insert_div.hide();
                });
            });

        },
        designMode: function () {
            if (this.doc) {
                this.doc.designMode = 'on';
                this.$frame.load(function () {
                    if ($.browser.mozilla) this.enableObjects();
                    this.doc.designMode = 'on';
                    this.docObserve();
                }.bind2(this));
            }
        },
        enableObjects: function () {
            if ($.browser.mozilla) {
                try{
                    this.doc.execCommand("enableObjectResizing", false, "false");
                    this.doc.execCommand("enableInlineTableEditing", false, "false");
                }
                catch(e){}
            }
        },
        docObserve: function () {
            try{
                this.glvrd_insert();
            }
            catch(e){}
            this.enableObjects();


            $(this.doc.body).find('.aligned_image').mousedown(function(e) {
                if($(e.target).hasClass('aligned_image') && $(e.target).find('p').length == 0){
                    $(e.target).append('<p>&nbsp;</p>');
                }
            }.bind2(this));

            $(this.doc.body).find('img').click(function(e) {
                if(!$(e.target).hasClass('ecotime_component_all')){
                    this.showImageEdit(e);
                }
                if($(e.target).hasClass('place_for_img')){
                    this.insertImage(e);
                    return false;
                }
            }.bind2(this));

            $(this.doc.body).find('.products_component').click(function(e) {this.showProduct(e); }.bind2(this));
            $(this.doc.body).find('.article_component').click(function(e) {this.showArticle(e); }.bind2(this));
            $(this.doc.body).find('.gallery_component').click(function(e) {this.showGallery(e); }.bind2(this));
            $(this.doc.body).find('.advantages_component').click(function(e) {this.showAdvantages(e); }.bind2(this));
            $(this.doc.body).find('.service_component').click(function(e) {this.showService(e); }.bind2(this));


            $(this.doc.body).find('.ecotime_slider_wrap').click(function(e) {this.showSliderEdit(e); }.bind2(this));
            $(this.doc.body).find('.form_constructor_component').click(function(e) {this.showForm(e); }.bind2(this));
            $(this.doc.body).find('.map_component').click(function(e) {this.showMapEdit(e); }.bind2(this));
            $(this.doc.body).find('.f_form_component').click(function(e) {this.showFForm(e); }.bind2(this));
            $(this.doc.body).find('table').click(function(e) { this.tableObserver(e); }.bind2(this));
            $(this.doc.body).find('.redactor_file_link').click(function(e) { this.fileEdit(e); }.bind2(this));

        },
        formSubmit: function () {
            var _this = this;
            if (this.opts.visual === false) return false;
            var form = this.$box.parents('form');
            if (form.size() == 0) return false;
            form.find('[type="submit"]').each(function(k, submit) {
                $(submit).click(function() {
                    _this.clean(false);
                    _this.syncCodeToTextarea();
                });
            });
            form.submit(function () {
                this.clean(false);
                this.syncCodeToTextarea();
                return true;
            }.bind2(this));
            return true;
        },
        execCommand: function (cmd, param) {
            if (this.opts.visual && this.doc) {
                try {
                    this.focus();
                    if (cmd == 'inserthtml' && $.browser.msie) this.doc.selection.createRange().pasteHTML(param);
                    else if (cmd == 'formatblock' && $.browser.msie) this.doc.execCommand(cmd, false, '<' + param + '>');
                    else if (cmd == 'indent' && $.browser.mozilla) this.doc.execCommand('formatblock', false, 'blockquote');
                    else {
                        this.doc.execCommand(cmd, false, param);
                    }
                }
                catch (e) {

                }
                this.syncCodeToTextarea();
            }
        },
        clean: function (marker) {
            var html = this.getCodeEditor();

            if (marker !== false) html = html.replace(/<span id="pastemarkerend">&nbsp;<\/span>/, '#marker#');

            html = this.formating(html);
            html = html.replace(/(<\!\-\-([\w\W]*?)\-\->)/ig, "");
            html = this._clean(html);
            html = html.replace(/<div(.*?)>/gi, "<p$1>");
            html = html.replace(/<\/div>/, '</p>');
            html = html.replace(/ lang="([\w\W]*?)"/gi, '');

            if (this.opts.removeClasses) html = html.replace(/ class="([\w\W]*?)"/gi, '');
            else html = this._cleanClasses(html);

            if (this.opts.removeStyles){
                html = html.replace(/ style="([\w\W]*?)"/gi, '');
            }else{
                html = this._cleanStyles(html);
            }

            html = html.replace(/<a name="(.*?)">([\w\W]*?)<\/a>/gi, '');

            var _this = this;
            // html = html.replace(/<img src="http(.*?)"/gi, function (s, url) {
            //     return http2base64(s, url, _this);
            // });

            html = html.replace(/\&nbsp;\&nbsp;\&nbsp;/gi, ' ');
            html = html.replace(/\&nbsp;\&nbsp;/gi, ' ');
            html = html.replace(/\s*style="\s*"/gi, '');
            html = html.replace(/\n/gi, ' ');
            html = html.replace(/\<span>&nbsp;<\/span>/gi, '');
            html = html.replace(/<span>([\w\W]*?)<\/span>/gi, '$1');
            html = this._clean(html);
            html = this.formating(html);

            if (marker !== false) html = html.replace(/#marker#/, '<span id="pastemarkerend">&nbsp;</span>');
            this.setCodeEditor(html);

            if (marker !== false) {
                var node = $(this.doc.body).find('#pastemarkerend').get(0);
                this.setFocusNode(node);
            }
        },
        _cleanClasses: function (html) {
            html = html.replace(/\s*class="TOC(.*?)"/gi, "");
            html = html.replace(/\s*class="Heading(.*?)"/gi, "");
            html = html.replace(/\s*class="Body(.*?)"/gi, "");
            html = html.replace(/<p(.*?)>&nbsp;<\/p>/gi, '');
            return html;
        },
        _cleanStyles: function (html) {
            html = html.replace(/\s*mso-[^:]+:[^;"]+;?/gi, "");
            html = html.replace(/\s*margin(.*?)pt\s*;/gi, "");
            html = html.replace(/\s*margin(.*?)cm\s*;/gi, "");
            html = html.replace(/\s*text-indent:(.*?)\s*;/gi, "");
            html = html.replace(/\s*line-height:(.*?)\s*;/gi, "");
            html = html.replace(/\s*page-break-before: [^\s;]+;?"/gi, "\"");
            html = html.replace(/\s*font-variant: [^\s;]+;?"/gi, "\"");
            html = html.replace(/\s*tab-stops:[^;"]*;?/gi, "");
            html = html.replace(/\s*tab-stops:[^"]*/gi, "");
            html = html.replace(/\s*face="[^"]*"/gi, "");
            html = html.replace(/\s*face=[^ >]*/gi, "");
            html = html.replace(/\s*font:(.*?);/gi, "");
            html = html.replace(/font:(.*?);/gi, "");
            html = html.replace(/\s*font-size:(.*?);/gi, "");
            html = html.replace(/font-size:(.*?);/gi, "");
            html = html.replace(/\s*font-weight:(.*?);/gi, "");
            html = html.replace(/font-weight:(.*?);/gi, "");
            html = html.replace(/\s*font-family:[^;"]*;?/gi, "");
            html = html.replace(/font-family:[^;"]*;?/gi, "");
            html = html.replace(/\s*color:(.*?);/gi, "");
            html = html.replace(/color:(.*?);/gi, "");
            html = html.replace(/<span style="Times New Roman&quot;">\s\n<\/span>/gi, '');

            return html;
        },
        _clean: function (html) {
            return html.replace(/<(?!\s*\/?(button|div|span|label|a|br|p|b|i|del|strike|img|video|audio|iframe|object|embed|param|blockquote|mark|cite|small|ul|ol|li|hr|dl|dt|dd|sup|sub|big|pre|code|figure|figcaption|strong|em|table|tr|td|th|tbody|thead|tfoot|h1|h2|h3|h4|h5|h6)\b)[^>]+>/gi, "");
        },

        // TEXTAREA CODE FORMATTING
        formating: function (html) {
            // lowercase
            if ($.browser.msie) {
                html = html.replace(/< *(\/ *)?(\w+)/g, function (w) {
                    return w.toLowerCase()
                });
                html = html.replace(/style="(.*?)"/g, function (w) {
                    return w.toLowerCase()
                });
                html = html.replace(/ jQuery(.*?)=\"(.*?)\"/gi, '');
            }

            // Firefox Convert Span
            if ($.browser.mozilla) html = this.convertSpan(html);

            //html = html.replace(/<span id="pastemarkerend">([\w\W]*?)<\/span>/, "$1");

            html = html.replace(/\<font([\w\W]*?)color="(.*?)">([\w\W]*?)\<\/font\>/gi, '<span style="color: $2;">$3</span>');
            html = html.replace(/\<font([\w\W]*?)>([\w\W]*?)\<\/font\>/gi, "<span$1>$2</span>");
            html = html.replace(/\<p><span>([\w\W]*?)<\/span><\/p>/gi, "<p>$1</p>");
            html = html.replace(/<span>([\w\W]*?)<\/span>/gi, '$1');

            // mini clean
            html = html.replace(/ class="Apple-style-span"/gi, '');
            html = html.replace(/ class="Apple-tab-span"/gi, '');
            html = html.replace(/<p><p>/g, '<p>');
            html = html.replace(/<\/p><\/p>/g, '</p>');
            html = html.replace(/<hr(.*?)>/g, '<hr>');
            html = html.replace(/<p>&nbsp;/g, '<p>');
            html = html.replace(/<p><ul>/g, '<ul>');
            html = html.replace(/<p><ol>/g, '<ol>');
            html = html.replace(/<\/ul><\/p>/g, '</ul>');
            html = html.replace(/<\/ol><\/p>/g, '</ol>');
            html = html.replace(/<div class="glvrd_insert_div"><\/div>/g, '');
            html = html.replace(/<div class="glvrd_insert_div" style="(.*?)">([\w\W]*?)<\/div>/g, '');
            html = html.replace(/<i class="glvrd" data-name="([\w\W]*?)" data-description="([\w\W]*?)">([\w\W]*?)<\/i>/g, '$3');


            // remove formatting
            html = html.replace(/[\t]*/g, '');
            //html = html.replace(/[\r\n]*/g, '');
            html = html.replace(/\n\s*\n/g, "\n");
            html = html.replace(/^[\s\n]*/, '');
            html = html.replace(/[\s\n]*$/, '');

            // empty tags
            var btags = ["<pre></pre>", "<blockquote></blockquote>", "<em></em>", "<b></b>", "<ul></ul>", "<ol></ol>", "<li></li>", "<table></table>", "<tr></tr>", "<span><span>", "<span>&nbsp;<span>", "<p> </p>", "<p></p>", "<p>&nbsp;</p>", "<p><br></p>", "<div></div>"];
            for (i = 0; i < btags.length; ++i) {
                var bbb = btags[i];
                html = html.replace(new RegExp(bbb, 'gi'), "");
            }

            // add formatting before
            var lb = '\r\n';
            var btags = ["<form", "<fieldset", "<legend", "<object", "<embed", "<select", "<option", "<input", "<textarea", "<br>", "<br />", "<pre", "<blockquote", "<ul", "<ol", "<li", "<dl", "<dt", "<dd", "<\!--", "<table", "<thead", "<tbody", "<caption", "</caption>", "<th", "<tr", "<td", "<figure"];
            for (i = 0; i < btags.length; ++i) {
                var bbb = btags[i];
                html = html.replace(new RegExp(bbb, 'gi'), lb + bbb);
            }

            // add formatting after
            var etags = ['</p>', '</div>', '</ul>', '</ol>', '</h1>', '</h2>', '</h3>', '</h4>', '</h5>', '</h6>', '</dl>', '</dt>', '</dd>', '</form>', '</blockquote>', '</pre>', '</legend>', '</fieldset>', '</object>', '</embed>', '</textarea>', '</select>', '</option>', '</table>', '</thead>', '</tbody>', '</tr>', '</td>', '</th>', '</figure>'];
            for (i = 0; i < etags.length; ++i) {
                var bbb = etags[i];
                html = html.replace(new RegExp(bbb, 'gi'), bbb + lb);
            }

            // indenting
            html = html.replace(/<li/g, "\t<li");
            html = html.replace(/<tr/g, "\t<tr");
            html = html.replace(/<td/g, "\t\t<td");
            html = html.replace(/<\/tr>/g, "\t</tr>");
            return html;
        },
        convertSpan: function (html) {
            html = html.replace(/\<span(.*?)style="font-weight: bold;"\>([\w\W]*?)\<\/span\>/gi, "<strong>$2</strong>");
            html = html.replace(/\<span(.*?)style="font-style: italic;"\>([\w\W]*?)\<\/span\>/gi, "<em>$2</em>");
            html = html.replace(/\<span(.*?)style="font-weight: bold; font-style: italic;"\>([\w\W]*?)\<\/span\>/gi, "<em><strong>$2</strong></em>");
            html = html.replace(/\<span(.*?)style="font-style: italic; font-weight: bold;"\>([\w\W]*?)\<\/span\>/gi, "<strong><em>$2</em></strong>");
            return html;
        },

        // TOOLBAR
        buildToolbar: function () {
            if (this.opts.toolbar === false) {
                return false;
            }
            var toolsVisible = null;

            function toolsFunc(key){
                return toolsVisible.find(function(_key, i){
                    if(_key == key){
                        return true;
                    }else{
                        return false;
                    }
                })
            };
            this.$toolbar = $('<ul>').addClass('redactor_toolbar');
            this.$box.prepend(this.$toolbar);

            if(this.$el.data('toolbar') != undefined){
                toolsVisible = this.$el.data('toolbar').split(',');
            }


            $.each(RTOOLBAR, function (key, s) {
                if(!this.$el.hasClass('rich_extend')){
                    if(key == 'components'){
                        return;
                    }
                }

                if(toolsVisible != null && toolsFunc(key) == undefined && key != 'fullscreen' && key != 'html' && key != 'components'){
                    return;
                }

                if (key == 'word' && this.opts.word_path == '') {
                    return;
                }
                var li = $('<li data-type="' + key + '">');

                if (key == 'word_to_html' || key == 'fullscreen' || key == 'word' || key == 'glavred') {
                    $(li).addClass('redactor_toolbar_right');
                }

                var a = $('<a href="' + (key == 'word' ? this.opts.word_path : 'javascript:void(null);') + '" title="' + s.title + '" class="redactor_btn_' + key + (s.html ? ' redactor_btn_htmlc' : '') + '"><span>' + (s.html ? s.html : '&nbsp;') + '</span></a>');


                if (typeof(s.func) == 'undefined') a.click(function () {
                    this.execCommand(s.exec, key);
                }.bind2(this));
                else if (s.func != 'show') a.click(function (e) {
                    this[s.func](e);
                }.bind2(this));

                if (key == 'backcolor' || key == 'fontcolor' || typeof(s.dropdown) != 'undefined') {
                    var dropdown = $('<div class="redactor_dropdown" style="display: none;">');

                    // build colorpickers
                    if (key == 'backcolor' || key == 'fontcolor') {
                        if (key == 'backcolor') {
                            if ($.browser.msie) var mode = 'BackColor';
                            else var mode = 'hilitecolor';
                        }
                        else var mode = 'ForeColor';

                        $(dropdown).width(210);


                        var len = this.opts.colors.length;
                        for (var i = 0; i < len; ++i) {
                            var color = this.opts.colors[i];

                            var swatch = $('<a rel="' + color + '" href="javascript:void(null);" class="redactor_color_link"></a>').css({'backgroundColor': color});
                            $(dropdown).append(swatch);

                            var _self = this;
                            $(swatch).click(function () {
                                var color = $(this).attr('rel');
                                _self.execCommand(mode, color);
                            });
                        }

                        /*
                         TODO: color none

                         var elnone = $('<a href="javascript:void(null);" class="redactor_color_none">').html(RLANG.none).click();
                         $(dropdown).append(elnone);
                         */

                    }
                    else {

                        $.each(s.dropdown,
                            function (x, d) {
                                if (typeof(d.style) == 'undefined') d.style = '';

                                if (d.name == 'separator') {
                                    var drop_a = $('<a class="redactor_separator_drop">');
                                }
                                else {
                                    var drop_a = $('<a href="javascript:void(null);" style="' + d.style + '">' + d.title + '</a>');

                                    if (typeof(d.func) == 'undefined') $(drop_a).click(function () {
                                        this.execCommand(d.exec, x);
                                    }.bind2(this));
                                    else {
                                        $(drop_a).click(function (e) {
                                            // if (typeof(d.params) != 'undefined') this[d.func](d.params);
                                            // else

                                            this[d.func](e);

                                        }.bind2(this));
                                    }
                                }

                                $(dropdown).append(drop_a);

                            }.bind2(this)
                        );

                    }

                    this.$box.append(dropdown);

                }

                // observing dropdown
                if (key == 'backcolor' || key == 'fontcolor' || typeof(s.dropdown) != 'undefined') {
                    this.hdlHideDropDown = function (e) {
                        this.hideDropDown(e, dropdown, key)
                    }.bind2(this);
                    this.hdlShowDropDown = function (e) {
                        this.showDropDown(e, dropdown, key)
                    }.bind2(this);

                    a.click(this.hdlShowDropDown);

                    $(document).click(this.hdlHideDropDown);
                }

                $(li).append(a);
                this.$toolbar.append(li);

                if (typeof(s.separator) != 'undefined') {
                    var li = $('<li class="separator"></li>');
                    this.$toolbar.append(li);
                }


            }.bind2(this));

            // hide all dropdowns
            $(this.doc).click(function () {
                this.hideAllDropDown();
            }.bind2(this));

        },

        // DROPDOWN
        showDropDown: function (e, dropdown, key) {
            this.hideAllDropDown();
            this.setBtnActive(key);
            this.getBtn(key).addClass('dropact');

            var left = this.getBtn(key).parent().position().left;

            if (this.opts.air) {
                var air_left = this.air.position().left;
                var air_top = this.air.position().top;
                left += air_left;
                $(dropdown).css('top', air_top + 28);
            }

            $(this.doc).click(function () {
                this.hideAllDropDown();
            }.bind2(this));

            $(dropdown).css('left', left + 'px').show();
        },
        hideAllDropDown: function () {
            this.$toolbar.find('a.dropact').removeClass('act').removeClass('dropact');
            this.$box.find('.redactor_dropdown').hide();
        },
        hideDropDown: function (e, dropdown, key) {
            if (!$(e.target).parent().hasClass('dropact')) {
                $(dropdown).removeClass('act');
                this.showedDropDown = false;
                this.hideAllDropDown();
            }

            $(document).unbind('click', this.hdlHideDropDown);
            $(this.doc).unbind('click', this.hdlHideDropDown);
        },

        // FULLSCREEN
        fullscreen: function () {
            if (this.opts.fullscreen === false) {
                this.changeBtnIcon('fullscreen', 'normalscreen');
                this.setBtnActive('fullscreen');
                this.opts.fullscreen = true;

                this.height = this.$frame.css('height');
                this.width = (this.$box.width() - 2) + 'px';

                var html = this.getCodeEditor();

                this.$box.addClass('redactor_box_fullscreen').after('<span id="fullscreen_' + this.editorID + '"></span>');

                $(document.body).prepend(this.$box).css('overflow', 'hidden');

                this.enable(html);
                this.enableAir();

                $(this.doc).click(function () {
                    this.hideAllDropDown()
                }.bind2(this));

                this.fullScreenResize();
                $(window).resize(function () {
                    this.fullScreenResize();
                }.bind2(this));
                $(document).scrollTop(0, 0);
                this.focus();
            }
            else {
                this.removeBtnIcon('fullscreen', 'normalscreen');
                this.setBtnInactive('fullscreen');
                this.opts.fullscreen = false;

                $(window).unbind('resize', function () {
                    this.fullScreenResize();
                }.bind2(this));
                $(document.body).css('overflow', '');

                var html = this.getCodeEditor();

                this.$box.removeClass('redactor_box_fullscreen').css('width', 'auto');

                $('#fullscreen_' + this.editorID).after(this.$box).remove();

                this.enable(html);
                this.enableAir();

                $(this.doc).click(function () {
                    this.hideAllDropDown()
                }.bind2(this));

                this.$frame.css('height', this.height);
                this.$el.css('height', this.height);
                this.focus();
            }
        },
        fullScreenResize: function () {
            if (this.opts.fullscreen === false) return;

            var hfix = 42;
            if (this.opts.air) hfix = 2;

            var height = $(window).height() - hfix;

            this.$box.width($(window).width() - 2);
            this.$frame.height(height);
            this.$el.height(height);
        },

        // SELECTION AND NODE MANIPULATION
        getSelection: function () {
            if (this.$frame.get(0).contentWindow.getSelection) return this.$frame.get(0).contentWindow.getSelection();
            else if (this.$frame.get(0).contentWindow.document.selection) return this.$frame.get(0).contentWindow.document.selection.createRange();
        },
        saveSelection: function () {
            if (window.getSelection) {
                sel = this.getSelection();
                if (sel.getRangeAt && sel.rangeCount) this.cursorPosition = sel.getRangeAt(0);
            }
            else if (document.selection && document.selection.createRange) this.cursorPosition = this.getSelection();

            this.cursorPosition = null;
        },
        restoreSelection: function () {
            if (this.cursorPosition) {
                if (window.getSelection) {
                    sel = this.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(this.cursorPosition);
                }
                else if (document.selection && this.cursorPosition.select) this.cursorPosition.select();
            }
        },
        insertNodeAtCaret: function (node) {

            if (typeof window.getSelection != "undefined") {
                var sel = this.getSelection();
                if (sel.rangeCount) {
                    var range = sel.getRangeAt(0);
                    range.collapse(false);
                    range.insertNode(node);
                    range = range.cloneRange();
                    range.selectNodeContents(node);
                    range.collapse(false);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
            else if (typeof document.selection != "undefined" && document.selection.type != "Control") {
                var html = (node.nodeType == 1) ? node.outerHTML : node.data;
                var id = "marker_" + ("" + Math.random()).slice(2);
                html += '<span id="' + id + '"></span>';
                var textRange = this.getSelection();
                textRange.collapse(false);
                textRange.pasteHTML(html);
                var markerSpan = document.getElementById(id);
                textRange.moveToElementText(markerSpan);
                textRange.select();
                markerSpan.parentNode.removeChild(markerSpan);

            }
        },
        getParentNodeName: function () {
            if (window.getSelection) return this.getSelection().getRangeAt(0).startContainer.parentNode.nodeName;
            else if (document.selection) return this.getSelection().parentElement().nodeName;
        },
        getParentNode: function () {
            if (window.getSelection) return this.getSelection().getRangeAt(0).startContainer.parentNode;
            else if (document.selection) return this.getSelection().parentElement();
        },
        getParentNodeID: function () {
            if (window.getSelection) return this.getSelection().getRangeAt(0).startContainer.parentNode.id;
            else if (document.selection) return this.getSelection().parentElement().id;
        },
        getCurrentNode: function () {
            if (window.getSelection) return this.getSelection().getRangeAt(0).startContainer;
            else if (document.selection) return this.getSelection();
        },
        setFocusNode: function (node, toStart) {
            var range = this.doc.createRange();
            var selection = this.getSelection();
            var toStart = toStart ? 0 : 1;


            if (selection != null) {
                range.selectNodeContents(node);
                selection.addRange(range);
                if(!selection.isCollapsed){
                    selection.collapse(node, toStart);
                }
            }

            this.focus();
        },

        /*

         ON THE FUTURE

         getSelected: function()
         {
         if ($.browser.msie)
         {
         var caretPos = this.$frame.get(0).contentWindow.document.caretPos;
         if (caretPos != null)
         {
         if (caretPos.parentElement != undefined)
         return caretPos.parentElement();
         }
         }
         else
         {
         var sel = this.$frame.get(0).contentWindow.getSelection();
         var node = sel.focusNode;
         if (node)
         {
         if (node.nodeName == "#text") return node.parentNode;
         else return node;
         }
         else returnnull;
         }
         },

         getUp: function(node, filter)
         {products_component

         if (node)
         {

         var tagname = node.tagName.toLowerCase();

         if (typeof(filter) == 'string')
         {
         while (tagname != filter && tagname != 'body')
         {
         node = node.parentNode;
         tagname = node.tagName.toLowerCase();
         }
         }
         else
         {
         var bFound = false;

         while (!bFound && tagname != 'body')
         {
         for (i = 0; i < filter.length; i++)
         {
         if (tagname == filter[i])
         {
         bFound = true;
         break;
         }
         }
         if (!bFound)
         {
         node = node.parentNode;
         tagname = node.tagName.toLowerCase();
         }
         }
         }

         if (tagname != 'body') return (node);
         else return (null);

         }
         else return(null);
         },
         */

        word_to_html: function(){
            var redactorActive = this;
            $(this.$uploader).attr('accept', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
            $(this.$uploader).data('type-upload', 'word_to_html');
            this.$uploader.data('liteUploader').addParam('convert', '1');
            $(this.$upload).removeAttr('multiple');
            this.$upload.click();
        },

        // TABLE
        showFill: function(){
            redactorActive = this;
            this.overlayShow(RLANG.fill, 'fill');
        },
        showFillDelete: function(){
            redactorActive = this;
            this.overlayShow(RLANG.fill_delete, 'fill_delete');
        },
        fill_delete: function(){
            var type = $('#redactor_fill_delete').val();
            var elem = null;

            if(typeof $table != 'object' || typeof $current_tr != 'object' || typeof $current_td != 'object'){
                return false;
            }
            if(type == 'table'){
                elem = $table;
            }else if(type == 'row'){
                elem = $current_tr;
            }else if(type == 'cell'){
                elem = $current_td;
            }
            elem.css('background-color', 'transparent');
            this.overlayHide();

        },
        fill: function(){
            var fillColor = $('#redactor_fill_color').val();
            var type = $('#redactor_fill').val();
            var elem = null;

            if(typeof $table != 'object' || typeof $current_tr != 'object' || typeof $current_td != 'object'){
                return false;
            }
            if(type == 'table'){
                elem = $table;
            }else if(type == 'row'){
                elem = $current_tr;
            }else if(type == 'cell'){
                elem = $current_td;
            }
            elem.css('background-color', fillColor);
            this.overlayHide();
        },
        showTable: function () {
            redactorActive = this;
            this.overlayShow(RLANG.table, 'insert_table');
        },
        showTableParam: function () {
            redactorActive = this;
            var handler = function(overlay){
                if($table.hasClass('tnb')){
                    overlay.find('#redactor_tparam_transparent').attr('checked','checked');
                }else{
                    overlay.find('#redactor_tparam_transparent').removeAttr('checked');
                }
            };
            this.overlayShow(RLANG.table_param, 'table_param', handler);
        },
        tableParam: function(){
            var width = $('#redactor_tparam_width').val();
            var typeWidth = $('#redactor_tparam_type').val();
            if(width != ''){
                if(typeWidth == '%' && width > 100){
                    width = 100;
                }else if(typeWidth == 'px' && width > 800){
                    width = 800;
                }
                $table.attr('width', width + (typeWidth == 'px' ? '' : typeWidth));
            }

            if($('#redactor_tparam_transparent').is(':checked')){
                $table.addClass('tnb');
            }else{
                $table.removeClass('tnb');
            }

            this.enableObjects();
            this.docObserve();
            this.overlayHide();
            // $table = $(this.doc).find('body').find('#table' + tableid);
        },
        insertTable: function () {
            var rows = $('#redactor_table_rows').val();
            var columns = $('#redactor_table_columns').val();
            var width = $('#redactor_table_width').val();
            var typeWidth = $('#redactor_table_type_width').val();
            var table_box = $('<div></div>');
            var tableid = Math.floor(Math.random() * 99999);
            var attrWidth = ' width="';
            var table = null;

            if(width != ''){
                if(typeWidth == '%' && width > 100){
                    width = 100;
                }else if(typeWidth == 'px' && width > 800){
                    width = 800;
                }
                attrWidth += width + (typeWidth == 'px' ? '' : typeWidth) + '"';
            }else{
                attrWidth = '';
            }
            table = $('<table id="table' + tableid + '"' + attrWidth + '><tbody></tbody></table>');
            for (i = 0; i < rows; i++) {
                var row = $('<tr></tr>');
                for (z = 0; z < columns; z++) {
                    var column = $('<td>&nbsp;</td>');
                    $(row).append(column);
                }
                $(table).append(row);
            }

            $(table_box).append(table);
            var html = $(table_box).html();

            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';

            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
            this.overlayHide();
            // $table = $(this.doc).find('body').find('#table' + tableid);
        },
        tableObserver: function(e){
            $table = $(e.target).closest('table');
            $table_tr = $table.find('tr');
            $table_td = $table.find('td');
            $table_td.removeClass('current');
            $tbody = $(e.target).closest('tbody');
            $thead = $($table).find('thead');
            $current_td = ($(e.target).is('td') ? $(e.target) : $(e.target).closest('td'));
            $current_td.addClass('current');
            $current_tr = $(e.target).closest('tr');
        },
        deleteTable: function () {
            $($table).remove();
            $table = false;
        },
        deleteRow: function () {
            $($current_tr).remove();
        },
        deleteColumn: function () {
            var index = $($current_td).get(0).cellIndex;

            $($table).find('tr').each(function () {
                $(this).find('td').eq(index).remove();
            });
        },
        addHead: function () {
            if ($($table).find('thead').size() != 0) this.deleteHead();
            else {
                var tr = $($table).find('tr').first().clone();
                tr.find('td').html('&nbsp;');
                $thead = $('<thead></thead>');
                $thead.append(tr);
                $($table).prepend($thead);
            }
        },
        deleteHead: function () {
            $($thead).remove();
            $thead = false;
        },
        insertRowAbove: function () {
            this.insertRow('before');
        },
        insertRowBelow: function () {
            this.insertRow('after');
        },
        insertColumnLeft: function () {
            this.insertColumn('before');
        },
        insertColumnRight: function () {
            this.insertColumn('after');
        },
        insertRow: function(type){
            if(typeof $current_tr == 'undefined'){return false;}
            var new_tr = $current_tr.clone();
            new_tr.find('td').html('&nbsp;');
            if (type == 'after') $current_tr.after(new_tr);
            else $current_tr.before(new_tr);
        },
        insertColumn: function (type) {
            if(typeof $current_td == 'undefined'){return false;}
            var index = 0;
            $current_td.addClass('current');
            $current_tr.find('td').each(function (i, s) {
                if ($(s).hasClass('current')) index = i;
            });

            $table_tr = $current_td.closest('table').find('tr');
            $table_tr.each(function (i, s) {
                var current = $(s).find('td').eq(index);
                var td = current.clone();
                td.removeClass('current');
                td.html('&nbsp;');
                if (type == 'after') $(current).after(td);
                else $(current).before(td);
            });
        },

        showCellParam: function () {
            redactorActive = this;
            var handler = function(overlay){
                var valignSel = $('#redactor_cparam_valign');
                var valign = $current_td.attr('valign');
                var alignSel = $('#redactor_cparam_align');
                var align = $current_td.attr('align');

                if(valign == undefined){
                    valignSel.val('top');
                }else if(valign == 'top' || valign == 'bottom' || valign == 'middle'){
                    valignSel.val(valign);
                }

                if(align == undefined){
                    alignSel.val('left');
                }else if(align == 'left' || align == 'center' || align == 'right'){
                    alignSel.val(align);
                }
            };
            this.overlayShow(RLANG.cell_param, 'cell_param', handler);
        },
        cellParam: function(){
            var valign = $('#redactor_cparam_valign').val();
            var align = $('#redactor_cparam_align').val();

            $current_td.attr('valign', valign);
            $current_td.attr('align', align);

            this.enableObjects();
            this.docObserve();
            this.overlayHide();
            // $table = $(this.doc).find('body').find('#table' + tableid);
        },


        // INSERT FILE
        showFile: function () {
            $(this.$uploader).data('type-upload', 'file');
            $(this.$upload).attr('multiple', 'multiple');
            this.$uploader.click();
        },
        fileUploadCallback: function (data) {
            if ($.browser.msie) {
                $(redactorActive.doc.getElementById('span' + redactorActive.spanid)).after(data);
                $(redactorActive.doc.getElementById('span' + redactorActive.spanid)).remove();
            }
            else redactorActive.execCommand('inserthtml', data);

            this.modalClose();
            this.docObserve();
        },
        fileEdit: function (e) {
            var el = e.target;
            var file_id = $(el).attr('rel');

            var handler = function () {
                $('#file').val($(el).text());
                $('#redactorFileDeleteBtn').click(function () {
                    this.fileDelete(el, file_id);
                }.bind2(this));

                $('#redactorFileDownloadBtn').click(function () {
                    this.fileDownload(el, file_id);
                }.bind2(this));

            }.bind2(this);

            redactorActive = this;
            this.modalInit(RLANG.file, this.opts.path + 'plugins/file_edit.html', 400, 200, handler);
        },
        fileDelete: function (el, file_id) {
            $(el).remove();
            $.get(this.opts.fileDelete + file_id);
            redactorActive.$frame.get(0).contentWindow.focus();
            this.modalClose();
        },
        fileDownload: function (el, file_id) {
            top.location.href = this.opts.fileDownload + file_id;
        },


        //>>>>>>>>>>>>>>>>>COMPONENTS>>>>>>>>>>>>>>>>>

        insertSlider: function(){
            redactorActive = this;
            var html = '<img src="/i/n.gif" title="Нажмите для загрузки слайдов" class="ecotime_component_all ecotime_slider_wrap ecotime_slider_education" data-init="true" data-item=".ecotime_slider__slides__item" data-pag=".ecotime_slider_pag" data-timer="10000" data-items="" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
            // this.overlayHide();
        },
        showSliderEdit: function (e) {
            redactorActive = this;
            var handler = function(overlay){
                var items = $(this).data('items').split(',');
                if(overlay == undefined || overlay.length == 0){return false;}

                if($(this).data('items') != ''){
                    $.each(items, function(i, el){
                        var c = i + 1;
                        overlay.find('.redactor_sl_edit__items').append(redactorActive.sliderTempLi(el, c));
                    });
                }
            }.bind(e.target);
            this.sliderWrap = e.target;
            this.overlayShow(RLANG.slider_edit, 'slider_edit', handler);
        },
        sliderUpload: function(){
            $(this.$uploader).data('type-upload', 'slider');
            $(this.$upload).attr('accept', 'image/jpeg,image/png').attr('multiple','multiple');
            this.$upload.click();
        },
        sliderTempLi: function(url, i){
            var temp = '';
            temp += '<li data-url="' + url + '" style="background-image:url(' + url + ');" class="redactor_sl_edit__slide">';
            temp += '<span class="redactor_sl_edit__slide_c">' + i + '</span>';
            temp += '<span class="redactor_sl_edit__slide_del" onclick="redactorActive.sliderDelLi(this);" title="Удалить слайд"></span>';
            temp += '</li>';
            return temp;
        },
        sliderDelLi: function(btn){
            var slide = $(btn).closest('.redactor_sl_edit__slide');
            if(confirm('Вы уверены?')){
                slide.remove();
            }
        },
        sliderSave: function(){
            var html = null;
            if($(redactorActive.sliderWrap) == undefined || $(redactorActive.sliderWrap) == null || redactorActive.overlay == undefined || redactorActive.overlay == null){return false;}
            var sliderItems = this.overlay.find('.redactor_sl_edit__items');
            var imgs = '';
            $.each(sliderItems.find('li'), function(i, item){
                imgs += (i == 0 ? '' : ',') + $(item).data('url');
            });
            $(this.sliderWrap).attr('data-items', imgs).empty();
            html = redactorActive.getCodeEditor();
            html = redactorActive.formating(html);
            redactorActive.setCodeEditor(html);
            redactorActive.overlayHide();
        },
        sliderDelete: function(btn){
            var html = null;
            if($(redactorActive.sliderWrap) == undefined || $(redactorActive.sliderWrap) == null || redactorActive.overlay == undefined || redactorActive.overlay == null){return false;}
            if(confirm('Вы уверены, что хотите удалить весь слайдер?')){
                $(this.sliderWrap).remove();
                html = redactorActive.getCodeEditor();
                html = redactorActive.formating(html);
                redactorActive.setCodeEditor(html);
                redactorActive.overlayHide();
            }
        },


        showForm: function(e){
            redactorActive = this;
            var handler = function(overlay){
                var form = this;

                if($(form).hasClass('form_constructor_component')){
                    overlay.find('.redactor_show_form__delete').on('click', function(){
                        if(confirm('Вы уверены, что хотите удалить форму?')){
                            $(form).remove();
                            redactorActive.overlayHide();
                        }
                    });
                }
            }.bind(e.target);
            var activeListId = null;
            var editState = $(e.target).hasClass('form_constructor_component');

            this.overlayShow(RLANG[(editState ? 'form_edit' : 'form_show')], 'form_show', handler, true);

            if(e.target == undefined){return false;}

            if(editState){
                redactorActive.overlay.find('.redactor_show_form_edit').css('display','inline-block');
                redactorActive.overlay.find('.redactor_show_form_insert').hide();
                redactorActive.formWrap = $(e.target);
                activeListId = redactorActive.formWrap.attr('id');
                redactorActive.formWrap.empty();
            }else{
                redactorActive.overlay.find('.redactor_show_form_edit').hide();
                redactorActive.overlay.find('.redactor_show_form_insert').css('display','inline-block');
            }

            $.ajax({
                url: '/Admin/Form/FormsList',
                type: 'GET',
                dataType: 'json',
                success: function(o){
                    var list = '';
                    $.each(o, function(i, item){
                        list += '<option value="' + item.id + '"' + (activeListId != null && activeListId == item.id ? ' selected' : '') + '>' + item.title + '</option>'
                    });
                    $('.redactor_show_form__list').html(list);
                    redactorActive.overlay.removeClass('redactor_overlay_preloader');
                }
            });
        },



        insertForm: function(){
            redactorActive = this;
            var selected = redactorActive.overlay.find('.redactor_show_form__list option:selected');
            var html = '<img src="/i/n.gif" class="ecotime_component_all form_constructor_component" id="' + selected.val() + '" title="Форма «' + selected.text() + '»" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
            this.overlayHide();
        },

        insertMap: function(e){
            redactorActive = this;
            var html = '<img src="/i/n.gif" class="ecotime_component_all map_component" title="Нажмите для редактирования" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
        },
        mapTempItem:function(el, type){
            var temp = '';
            var el = el.split('$');
            var o = {
                name: el[0],
                coords: el[1],
                description: el[2]
            };

            temp += '<div class="redactor_show_map__list__item ' + (type  == 'new' ? ' redactor_show_map__list__item_active' : '' ) + '">';
            temp += '<div class="redactor_show_map__list__item__name" onclick="$(\'.redactor_show_map__list__item_active\').removeClass(\'redactor_show_map__list__item_active\');$(this).parent().toggleClass(\'redactor_show_map__list__item_active\');">';
            temp += '<span>' + (o.name == '' ? 'Метка без названия' : o.name) + '</span>';
            temp += '<img src="/i/icon-delete.png" width="14" class="redactor_show_map__list__item__del" onclick="redactorActive.mapDelPoint(this, event);" title="Удалить метку" />';
            temp += '</div>';
            temp += '<div class="redactor_show_map__list__item__drop">';
            temp += '<input type="text" class="redactor_show_map__name" placeholder="Название" value="' + o.name + '" /><i class="br10"></i>';
            temp += '<input type="text" class="redactor_show_map__coords" placeholder="Координаты" value="' + o.coords + '" /><i class="br10"></i>';
            temp += '<textarea placeholder="Описание" class="redactor_show_map__description" cols="25" rows="4">' + o.description + '</textarea></div>';
            temp += '</div>';
            return temp;
        },
        showMapEdit: function(e){
            redactorActive = this;
            var handler = function(overlay){
                if($(this).data('items') != ''){
                    var items = $(this).data('items').split('%%');
                    if(overlay == undefined || overlay.length == 0){return false;}

                    $.each(items, function(i, el){
                        overlay.find('.redactor_show_map__list').append(redactorActive.mapTempItem(el));
                    });
                }
                overlay.find('.redactor_show_map__list').on('blur', '.redactor_show_map__name', function(){
                    var $inp = $(this);
                    var item = $inp.closest('.redactor_show_map__list__item');
                    var t = 'Метка без названия';
                    if($inp.val().trim() != ''){
                        t = $inp.val();
                    }
                    item.find('.redactor_show_map__list__item__name').find('span').text(t);
                });
            }.bind(e.target);
            this.mapWrap = e.target;
            this.overlayShow(RLANG.map_edit, 'map_edit', handler);
        },
        mapAddPoint: function(thisBtn){
            var overlayBox = $(thisBtn).closest('.redactor_overlay__box');
            var temp = redactorActive.mapTempItem('$$', 'new');
            overlayBox.find('.redactor_show_map__list__item_active').removeClass('redactor_show_map__list__item_active');
            overlayBox.find('.redactor_show_map__list').append(temp);
        },
        mapDelPoint: function(thisBtn, event){
            var item = $(thisBtn).closest('.redactor_show_map__list__item ');
            item.remove();
            event.stopPropagation();
        },
        mapSave: function(){
            var html = null;
            if($(redactorActive.mapWrap) == undefined || $(redactorActive.mapWrap) == null || redactorActive.overlay == undefined || redactorActive.overlay == null){return false;}
            var mapItems = redactorActive.overlay.find('.redactor_show_map__list__item');
            var items = [];
            $.each(mapItems, function(i, item){
                var $item = $(item);
                var name = $item.find('.redactor_show_map__name');
                var coords = $item.find('.redactor_show_map__coords');
                var description = $item.find('.redactor_show_map__description');

                items.push(name.val() + '$' + coords.val() + '$' + description.val());
            });
            $(this.mapWrap).attr('data-items', items.join('%%')).empty();
            html = redactorActive.getCodeEditor();
            html = redactorActive.formating(html);
            redactorActive.setCodeEditor(html);
            redactorActive.overlayHide();
        },
        mapDelete: function(btn){
            var html = null;
            if($(redactorActive.mapWrap) == undefined || $(redactorActive.mapWrap) == null || redactorActive.overlay == undefined || redactorActive.overlay == null){return false;}
            if(confirm('Вы уверены, что хотите удалить карту (все метки отмеченные на карте будут утеряны)?')){
                $(this.mapWrap).remove();
                html = redactorActive.getCodeEditor();
                html = redactorActive.formating(html);
                redactorActive.setCodeEditor(html);
                redactorActive.overlayHide();
            }
        },

        insertFForm: function(){
            redactorActive = this;
            var html = '<img src="/i/n.gif" class="ecotime_component_all f_form_component" title="Нажмите для редактирования формы обратной связи" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
        },

        showFForm: function(e){
            redactorActive = this;
            var handler = function(overlay){
                var _this = this;

                $.ajax({
                    url: '/Admin/FeedbackSection/',
                    dataType: 'html',
                    type: 'GET',
                    success: function(html){
                        var options = '';
                        var items = $(html).find('.a_list__table__td');
                        items.each(function(i, item){
                            if(!$(item).hasClass('a_list__table__td_checkbox') && !$(item).hasClass('a_list__table__td__actions')){
                                var id = $(item).attr('onclick').split('Id=')[1].replace('\'','');
                                options += '<option' + ($(_this).data('id') != undefined && $(_this).data('id') == id ? ' selected' : '' ) + ' value="' + id + '">' + $(item).text() + '</option>';
                            }
                        });
                        overlay.find('.redactor_show_f_form__sel').html(options);
                    }
                })

            }.bind(e.target);
            this.fFormWrap = $(e.target);
            this.overlayShow(RLANG.fform_edit, 'fform_edit', handler);
        },
        saveFForm: function(){
            if(redactorActive.fFormWrap != undefined){
                var selected = redactorActive.overlay.find('.redactor_show_f_form__sel').find('option:selected');
                var id = selected.val();
                var type = selected.text();
                redactorActive.fFormWrap.data('id', id);
                redactorActive.fFormWrap.attr('data-id', id);
                redactorActive.fFormWrap.attr('data-type', type);
                redactorActive.fFormWrap.attr('title', 'Форма обратной связи «' + type + '»');
                this.enableObjects();
                this.docObserve();
            }
            redactorActive.overlayHide();
        },

        fFormDelete: function(){
            var html = null;
            if($(redactorActive.fFormWrap) == undefined || $(redactorActive.fFormWrap) == null || redactorActive.overlay == undefined || redactorActive.overlay == null){return false;}
            if(confirm('Вы уверены, что хотите удалить форму обратной связи?')){
                $(this.fFormWrap).remove();
                html = redactorActive.getCodeEditor();
                html = redactorActive.formating(html);
                redactorActive.setCodeEditor(html);
                redactorActive.overlayHide();
            }
        },



        insertAdvantages: function(){
            redactorActive = this;
            var html = '<img src="/i/n.gif" class="ecotime_component_all advantages_component" title="Нажмите для редактирования" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
        },

        showAdvantages: function(e){
            redactorActive = this;
            var handler = function(overlay){
                var _this = this;
                var wrap = $(redactorActive.advantagesWrap);
                var jsonObj = null;
                var _items = [];
                var build = function(o){
                    return '<div data-id="' + o.id + '" class="' + (o.selected ? 'redactor_show_advantages__item_active ' : '') + 'redactor_show_advantages__item">' + o.title + '</div>';
                }
                var items = '';
                if(wrap == undefined || wrap == null){return false;}

                if(wrap.data('ids') != undefined){
                    _items = wrap.data('ids').split(',');
                }

                $.ajax({
                    url: '/arm/page/get_value_field/?component=advantage',
                    type: 'GET',
                    dataType: 'json',
                    success: function(o){
                        console.log(o);
                        $.each(o, function(i, item){
                            if(_items.indexOf(item.id) != -1){
                                item.selected = true;
                            }
                            items += build(item);
                        })

                        overlay.find('.redactor_show_tabs_cont').html(items);
                    }
                })
            }.bind(e.target);
            this.advantagesWrap = $(e.target);
            this.overlayShow(RLANG.advantages_edit, 'advantages_edit', handler);
        },

        advantagesClick: function(e){
            var $target = $(e.target)
            if(($target.hasClass('redactor_show_advantages__item') == true && $target.parent().find('.redactor_show_advantages__item_active').length < 4) || $target.hasClass('redactor_show_advantages__item_active') == true){
                $target.toggleClass('redactor_show_advantages__item_active');
            }else{
                alert('Можно выбрать только четыре преимущества');
            }
        },

        saveAdvantages: function(){
            var html = null;
            var items = [];
            var wrap = $(redactorActive.advantagesWrap);
            if(wrap == undefined || wrap == null){return false;}

            console.log($('.redactor_show_advantages').find('.redactor_show_advantages__item_active'));

            $('.redactor_show_advantages').find('.redactor_show_advantages__item_active').each(function(i, item){
                items.push($(item).data('id') + '');
            });

            wrap.attr('data-ids', items.join(','));
            wrap.data('ids', items.join(','));

            html = redactorActive.getCodeEditor();
            html = redactorActive.formating(html);
            redactorActive.setCodeEditor(html);
            redactorActive.overlayHide();
        },


        insertService: function(){
            redactorActive = this;
            var html = '<img src="/i/n.gif" class="ecotime_component_all service_component" title="Нажмите для редактирования" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
        },

        showService: function(e){
            redactorActive = this;
            var handler = function(overlay){
                var _this = this;
                var wrap = $(redactorActive.serviceWrap);
                var jsonObj = null;
                var _items = [];
                var build = function(o){
                    return '<div data-id="' + o.id + '" class="' + (o.selected ? 'redactor_show_service__item_active ' : '') + 'redactor_show_service__item">' + o.title + '</div>';
                }
                var items = '';
                if(wrap == undefined || wrap == null){return false;}

                if(wrap.data('ids') != undefined){
                    _items = wrap.data('ids').split(',');
                }

                $.ajax({
                    url: '/arm/page/get_value_field/?component=service',
                    type: 'GET',
                    dataType: 'json',
                    success: function(o){
                        $.each(o, function(i, item){
                            if(_items.indexOf(item.id) != -1){
                                item.selected = true;
                            }
                            items += build(item);
                        })
                        // items.build();
                        overlay.find('.redactor_show_service_list').html(items);
                        console.log(o)
                    }
                })
            }.bind(e.target);
            this.serviceWrap = $(e.target);
            this.overlayShow(RLANG.service_edit, 'service_edit', handler);
        },

        serviceClick: function(e){
            var $target = $(e.target)
            if($target.hasClass('redactor_show_service__item') == true && $target.parent().find('.redactor_show_service__item_active').length < 2){
                $target.toggleClass('redactor_show_service__item_active');
            }else{
                alert('Можно выбрать только две услуги')
            }
        },

        saveService: function(){
            var html = null;
            var items = [];
            var wrap = $(redactorActive.serviceWrap);
            if(wrap == undefined || wrap == null){return false;}

            $('.redactor_show_service').find('.redactor_show_service__item_active').each(function(i, item){
                items.push($(item).data('id') + '');
            });

            wrap.attr('data-ids', items.join(','));
            wrap.data('ids', items.join(','));

            html = redactorActive.getCodeEditor();
            html = redactorActive.formating(html);
            redactorActive.setCodeEditor(html);
            redactorActive.overlayHide();
        },


        insertArticle: function(){
            redactorActive = this;
            var html = '<img src="/i/n.gif" class="ecotime_component_all article_component" title="Нажмите для редактирования" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
        },


        insertArticle: function(){
            redactorActive = this;
            var html = '<img src="/i/n.gif" class="ecotime_component_all article_component" title="Нажмите для редактирования" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
        },

        showArticle: function(e){
            redactorActive = this;
            var handler = function(overlay){
                var _this = this;
                var wrap = $(redactorActive.articleWrap);
                var jsonObj = null;
                if(wrap == undefined || wrap == null){return false;}

                if(wrap.data('json') != undefined){
                    jsonObj = JSON.parse(wrap.data('json').replace(/&amp;quote;/g, '"').replace(/&quote;/g, '"'));
                    var inps = $('.redactor_show_article').find('input[type="radio"]');
                    if(jsonObj.tags.length > 0){
                        inps.eq(1).attr('checked', true)
                    }else{
                        inps.eq(0).attr('checked', true)
                    }
                }

                if(wrap.data('title') != undefined){
                    $('.redactor_article__title').val(wrap.data('title'));
                }

                var build = function(type){
                    var o = redactorActive.articlesTabItems[type];
                    var _o = [];
                    var items = '';
                    $.each(o, function(i, item){
                        var activeClass = '';
                        if(jsonObj != null){
                            if(type == 'tags'){
                                _o = jsonObj[type];
                            }else{
                                _o = jsonObj['title'];
                            }
                        }

                        items += '<div class="redactor_show_tabs_cont__item'+ (_o.indexOf(item.id) != -1 ? ' redactor_show_tabs_cont__item_active' : '') +'" data-id="'+ item.id +'">'+ item.title +'</div>';
                    });
                    $('.redactor_show_article').find('.redactor_show_tabs_cont').html(items);

                };

                $('.redactor_show_article').on('change', 'input[type="radio"]', function(){
                    var $inp = $(this);
                    jsonObj = null;
                    build($inp.attr('value'));
                })

                $.ajax({
                    url: '/arm/page/get_value_field/?component=article',
                    type: 'GET',
                    dataType: 'json',
                    success: function(o){
                        redactorActive.articlesTabItems = o;
                        build($('.redactor_show_article').find('input[type="radio"]:checked').attr('value'));
                    }
                })

            }.bind(e.target);
            this.articleWrap = $(e.target);
            this.overlayShow(RLANG.article_edit, 'article_edit', handler);
        },
        saveArticle: function(){
            var html = null;
            var o = { title: [], tags: [] };
            var items = [];
            var json = '';
            var wrap = $(redactorActive.articleWrap);
            if(wrap == undefined || wrap == null){return false;}

            $('.redactor_show_article').find('.redactor_show_tabs_cont__item_active').each(function(i, item){
                items.push($(item).data('id') + '');
            })

            if($('.redactor_show_article').find('input[type="radio"]:checked').val() == 'tags'){
                o.tags = items;
            }else{
                o.title = items;
            }

            json = JSON.stringify(o).replace(/\"/g, '&quote;');
            wrap.attr('data-json', json);
            wrap.data('json', json);
            wrap.attr('data-title', $('.redactor_article__title').val());
            wrap.data('title', $('.redactor_article__title').val());
            html = redactorActive.getCodeEditor();
            html = redactorActive.formating(html);
            redactorActive.setCodeEditor(html);
            redactorActive.overlayHide();
        },

        articleClick: function(e){
            var $target = $(e.target)

            if($target.hasClass('redactor_show_tabs_cont__item') == true){
                $target.toggleClass('redactor_show_tabs_cont__item_active');
            }
        },

        articleDelete: function(){
            var html = null;
            if($(redactorActive.articleWrap) == undefined || $(redactorActive.articleWrap) == null || redactorActive.overlay == undefined || redactorActive.overlay == null){return false;}
            if(confirm('Вы уверены, что хотите удалить группу статей?')){
                $(this.articleWrap).remove();
                html = redactorActive.getCodeEditor();
                html = redactorActive.formating(html);
                redactorActive.setCodeEditor(html);
                redactorActive.overlayHide();
            }
        },






        insertGallery: function(){
            redactorActive = this;
            var html = '<img src="/i/n.gif" class="ecotime_component_all gallery_component" title="Нажмите для редактирования" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
        },

        showGallery: function(e){
            redactorActive = this;
            var handler = function(overlay){
                var _this = this;
                var wrap = $(redactorActive.galleryWrap);
                var jsonObj = null;
                if(wrap == undefined || wrap == null){return false;}

                if(wrap.data('json') != undefined){
                    jsonObj = JSON.parse(wrap.data('json').replace(/&amp;quote;/g, '"').replace(/&quote;/g, '"'));
                    var inps = $('.redactor_show_gallery').find('input[type="radio"]');
                    if(jsonObj.tags.length > 0){
                        inps.eq(1).attr('checked', true)
                    }else{
                        inps.eq(0).attr('checked', true)
                    }
                }
                if(wrap.data('title') != undefined){
                    $('.redactor_gallery__title').val(wrap.data('title'));
                }

                var build = function(type){
                    var o = redactorActive.galleryTabItems[type];
                    var _o = [];
                    var items = '';
                    $.each(o, function(i, item){
                        var activeClass = '';
                        if(jsonObj != null){
                            if(type == 'tags'){
                                _o = jsonObj[type];
                            }else{
                                _o = jsonObj['title'];
                            }
                        }

                        items += '<div class="redactor_show_tabs_cont__item'+ (_o.indexOf(item.id) != -1 ? ' redactor_show_tabs_cont__item_active' : '') +'" data-id="'+ item.id +'">'+ item.title +'</div>';
                    });
                    $('.redactor_show_gallery').find('.redactor_show_tabs_cont').html(items);

                };

                $('.redactor_show_gallery').on('change', 'input[type="radio"]', function(){
                    var $inp = $(this);
                    jsonObj = null;
                    build($inp.attr('value'));
                })

                $.ajax({
                    url: '/arm/page/get_value_field/?component=photo_album',
                    type: 'GET',
                    dataType: 'json',
                    success: function(o){
                        redactorActive.galleryTabItems = o;
                        build($('.redactor_show_gallery').find('input[type="radio"]:checked').attr('value'));
                    }
                })

            }.bind(e.target);
            this.galleryWrap = $(e.target);
            this.overlayShow(RLANG.gallery_edit, 'gallery_edit', handler);
        },
        saveGallery: function(){
            var html = null;
            var o = { title: [], tags: [] };
            var items = [];
            var json = '';
            var wrap = $(redactorActive.galleryWrap);
            if(wrap == undefined || wrap == null){return false;}

            $('.redactor_show_gallery').find('.redactor_show_tabs_cont__item_active').each(function(i, item){
                items.push($(item).data('id') + '');
            })

            if($('.redactor_show_gallery').find('input[type="radio"]:checked').val() == 'tags'){
                o.tags = items;
            }else{
                o.title = items;
            }

            json = JSON.stringify(o).replace(/\"/g, '&quote;');
            wrap.attr('data-json', json);
            wrap.data('json', json);
            wrap.attr('data-title', $('.redactor_gallery__title').val());
            wrap.data('title', $('.redactor_gallery__title').val());

            html = redactorActive.getCodeEditor();
            html = redactorActive.formating(html);
            redactorActive.setCodeEditor(html);
            redactorActive.overlayHide();
        },

        galleryClick: function(e){
            var $target = $(e.target)

            if($target.hasClass('redactor_show_tabs_cont__item') == true){
                $target.toggleClass('redactor_show_tabs_cont__item_active');
            }
        },



        insertProduct: function(){
            redactorActive = this;
            var html = '<img src="/i/n.gif" class="ecotime_component_all products_component" title="Нажмите для ввода условия выборки товаров" />';
            if ($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';
            redactorActive.execCommand('inserthtml', html);
            this.enableObjects();
            this.docObserve();
        },
        templateProducts: function(item){
            var temp = '<div class="redactor_con_goods__item">' +
                ( item.separator != undefined ? '<div class="redactor_con_goods__item__sep" style="margin-bottom:5px;"><select name="separator"><option value="and">и</option><option value="or">или</option></select></div>' : '') +
                '<div class="redactor_con_goods__item__i"><select class="redactor_con_goods__stype" name="type"><option value="title">Название</option><option value="brand">Бренд</option><option value="storage">Склад</option><option value="property">Свойство</option><option value="price">Цена</option><option value="dateof_entry">Дата ввода в ассортимент</option><option value="popular">Индекс популярности</option><option value="count">Количество</option></select>' +
                '<select name="operation"><option value="equally">=</option><option value="like">содержит</option><option value="less"><</option><option value="more">></option></select>' +
                '<div class="redactor_con_goods__type"><input type="text" name="value" value="'+item.value+'" onkeyup="redactorActive.searchConditionProducts(this);">' +
                '<ul class="redactor_con_goods__drop" onclick="redactorActive.clickConditionProducts(event);"></ul></div>' +
                '<span class="redactor_remove_btn" title="Удалить условие" onclick="redactorActive.removeConditionProducts($(this).parent().parent())">×</span>' +
                '</div></div>';

            temp = $(temp);

            $.each(item, function(i, el){
                temp.find('option[value="' + el + '"]').attr('selected', true);
            });

            return temp;
        },
        showProduct: function(e){
            redactorActive = this;
            var handler = function (overlay) {
                var wrap = $(e.target);
                var json = null;
                var o = null;
                var temp = [];
                if(wrap.data('json') != undefined){
                    json = wrap.data('json').replace(/&amp;quote;/g, '"').replace(/&quote;/g, '"');
                    o = JSON.parse(json);
                    $.each(o, function(i, _item){
                        temp.push(redactorActive.templateProducts(_item));
                    });
                    $('.redactor_con_goods__items').html(temp);
                }
                $('.redactor_con_goods__title').val(wrap.data('title'));
            }.bind2(e.target);
            this.productsWrap = $(e.target);
            this.overlayShow(RLANG.product_edit, 'product_edit', handler);
        },
        addConditionProducts: function(thisBtn){
            var o = {
                type: 'Бренд',
                operation: 'like',
                value: ''
            };
            var $thisBtn = $(thisBtn);
            var items = $thisBtn.closest('.redactor_overlay__box').find('.redactor_con_goods__items');
            var temp = '';

            if(items.find('.redactor_con_goods__item').length >= 1){
                o['separator'] = 'and';
            }
            temp = redactorActive.templateProducts(o);
            items.append(temp);
        },
        removeConditionProducts: function(item){
            if(item.index() == 0 && item.next().hasClass('redactor_con_goods__item') == true){
                item.next().find('.redactor_con_goods__item__sep').remove();
            }
            item.remove();
        },
        searchConditionProducts: function(inp){
            var $inp = $(inp);
            var type = $inp.closest('.redactor_con_goods__item').find('.redactor_con_goods__stype').val();

            if($inp.val().trim() == '' || $inp.val().trim().length == 1){
                $('.redactor_con_goods__drop').empty();
                return false;
            }

            $.ajax({
                url: '/arm/page/get_all_value/?type='+ type +'&q='+ $inp.val().trim(),
                type: 'GET',
                dataType: 'json',
                success: function(o){
                    var lis = '';
                    $.each(o, function(i, item){
                        lis += '<li data-id="'+ item.id +'">'+ item.title +'</li>';
                    });
                    $inp.closest('.redactor_con_goods__type').find('.redactor_con_goods__drop').html(lis);
                }
            })

            console.log($inp.val());
        },
        clickConditionProducts: function(e){
            var $target = $(e.target);
            var $wrapInp = $target.closest('.redactor_con_goods__type');
            if($target[0].tagName == 'LI'){
                $wrapInp.find('input').val($(e.target).text());
                $wrapInp.find('.redactor_con_goods__drop').empty();
            }
            console.log();
        },
        productSave: function(){
            var html = null;
            var o = {};
            var json = '';
            var wrap = $(redactorActive.productsWrap);
            if(wrap == undefined || wrap == null){return false;}

            $('.redactor_con_goods__items').find('.redactor_con_goods__item').each(function(i, item){
                var fo = {};
                $(item).find('select, input').each(function(j, field){
                    var $field = $(field);
                    var key = $field.attr('name');
                    fo[$field.attr('name')] = $field.val();
                })
                o[i] = fo;
            })
            console.log(JSON.stringify(o));

            json = JSON.stringify(o).replace(/\"/g, '&quote;');
            wrap.attr('data-json', json);
            wrap.data('json', json);
            wrap.attr('data-title', $('.redactor_con_goods__title').val());
            wrap.data('title', $('.redactor_con_goods__title').val());

            html = redactorActive.getCodeEditor();
            html = redactorActive.formating(html);
            redactorActive.setCodeEditor(html);
            redactorActive.overlayHide();
        },


        insertImgNText: function(e){
            redactorActive = this;
            var sel = redactorActive.getSelection();
            var html = '';
            html += '<div class="aligned_image aligned_image_left">' +
                '<img class="aligned_image__img place_for_img" src="/i/n.gif" title="Нажмите для выбора изображения">' +
                '<p>Текст</p>' +
                '</div>';
            if($.browser.msie) html += '<p></p>';
            else html += '<p>&nbsp;</p>';

            // console.log(sel);

            if(sel.anchorNode != null){
                if(sel.anchorNode.previousElementSibling == null){
                    if($(sel.anchorNode.parentNode).closest('.aligned_image').length > 0){
                        $(sel.anchorNode.parentNode).closest('.aligned_image').after(html);
                    }else{
                        if($(sel.anchorNode).is('body')){
                            $(sel.anchorNode).append(html);
                            $(redactorActive.doc).find('body').scrollTop(10000);
                        }else{
                            $(sel.anchorNode).after(html);
                        }
                    }
                }else{
                    if($(sel.anchorNode.parentNode).is('body')){
                        $(sel.anchorNode.parentNode).append(html);
                        $(redactorActive.doc).find('body').scrollTop(10000);
                    }else{
                        $(sel.anchorNode.parentNode).after(html);
                    }
                }
            }else{
                if($(redactorActive.doc).find('body').find('.aligned_image:last-child').length > 0){
                    $(redactorActive.doc).find('body').find('.aligned_image:last-child').after(html);
                }else{
                    $(redactorActive.doc).find('body').append(html);
                }
                $(redactorActive.doc).find('body').scrollTop(10000);
            }

            this.enableObjects();
            this.docObserve();
        },
        insertPlaceImg: function(src){
            if(redactorActive.placeImgBox != undefined && redactorActive.placeImgBox != null){
                redactorActive.placeImgBox.attr('src', src);
                redactorActive.placeImgBox.removeClass('place_for_img');
                redactorActive.placeImgBox.removeAttr('title');
                redactorActive.placeImgBox = null;
                redactorActive.overlayHide();
                redactorActive.enableObjects();
                redactorActive.docObserve();
            }
        },


        //<<<<<<<<<<<<<<<<<<<<COMPONENTS<<<<<<<<<<<<<<<<<<

        // INSERT IMAGE
        showImageEdit: function (e) {
            var handler = function () {
                var image = $(e.target);
                var state = '';
                var inpW = $('#redactor_image_width');
                var inpH = $('#redactor_image_height');
                var k = image.get(0).naturalWidth / image.get(0).naturalHeight;

                $('#redactor_image_alt').val(image.attr('alt'));

                $('#redactor_file_alt').val(image.attr('alt'));
                if(image.closest('.aligned_image').length > 0){
                    if(image.closest('.aligned_image').hasClass('aligned_image_left')){
                        state = 'left';
                    }else{
                        state = 'right';
                    }
                }else{
                    if(image.hasClass('ecotime_ftext_image_fl_left')){
                        state = 'left';
                    }else if(image.hasClass('ecotime_ftext_image_fl_right')){
                        state = 'right';
                    }else{
                        state = 'block';
                    }
                }

                inpW.val(image.width()).data('maxW', image.get(0).naturalWidth);
                inpH.val(image.height()).data('maxW', image.get(0).naturalHeight);

                $('#redactor_image_align').val(state);
                $('#redactor_image_edit_delete').click(function(){
                    this.deleteImage(e.target);
                }.bind2(this));
                $('#redactorSaveBtn').click(function(){
                    this.imageSave(e.target);
                }.bind2(this));
                $('#redactor_image_width, #redactor_image_height').keyup(function(event){
                    var rep = /\D/g;
                    var inp = $(event.target);
                    var inpVal = (inp.val() + '').replace(rep, '');
                    var type = inp.attr('id');

                    if(inpVal == ''){return false;}

                    type = (type == 'redactor_image_width' ? 'Width' : 'Height');
                    inpVal = (parseInt(inpVal) > image.get(0)['natural' + type] ? image.get(0)['natural' + type] : parseInt(inpVal));

                    if($('#redactor_image_ratio').is(':checked')){
                        if(type == 'Width'){
                            $('#redactor_image_height').val(Math.floor(inpVal / k));
                        }else{
                            $('#redactor_image_width').val(Math.floor(inpVal * k));
                        }
                    }
                    inp.val(inpVal);
                });

            }.bind2(this);

            redactorActive = this;
            this.overlayShow(RLANG.image_edit, 'image_edit', handler);
        },
        imageSave: function (el){
            $(el).attr('alt', $('#redactor_image_alt').val());
            var floating = $('#redactor_image_align').val();

            if(floating == 'left') {
                if($(el).hasClass('aligned_image__img')){
                    $(el).closest('.aligned_image').addClass('aligned_image_left');
                    $(el).closest('.aligned_image').removeClass('aligned_image_right');
                }else{
                    $(el).removeClass('ecotime_ftext_image_fl_right');
                    $(el).addClass('ecotime_ftext_image_fl_left');
                }
            }else if (floating == 'right') {
                if($(el).hasClass('aligned_image__img')){
                    $(el).closest('.aligned_image').removeClass('aligned_image_left');
                    $(el).closest('.aligned_image').addClass('aligned_image_right');
                }else{
                    $(el).removeClass('ecotime_ftext_image_fl_left');
                    $(el).addClass('ecotime_ftext_image_fl_right');
                }
            }else{
                $(el).removeClass('ecotime_ftext_image_fl_right ecotime_ftext_image_fl_left')
            }

            if($('#redactor_image_ratio').is(':checked')){
                $(el).attr('width', $('#redactor_image_width').val());
                $(el).removeClass('ecotime_ftext_custom_image');
            }else{
                $(el).attr('width', $('#redactor_image_width').val());
                $(el).attr('height', $('#redactor_image_height').val());
                $(el).addClass('ecotime_ftext_custom_image');
            }
            this.overlayHide();
        },
        deleteImage: function (el) {
            $(el).remove();
            this.overlayHide();
        },
        insertImage: function(e){
            var handler = function(){};
            if($(e.target).hasClass('place_for_img')){
                handler = function (overlay) {
                    var imgBox = $(e.target);
                    overlay.find('.redactor_insert_image_upload').attr('onclick', 'redactorActive.uploadImage(\'place_image\');');

                    // $('#redactor_file_alt').val(elObj.attr('alt'));
                    // $('#redactor_form_image_align').val(elObj.css('float'));
                    // $('#redactor_image_edit_delete').click(function () {
                    //     this.deleteImage(e.target);
                    // }.bind2(this));
                    // $('#redactorSaveBtn').click(function () {
                    //     this.imageSave(e.target);
                    // }.bind2(this));

                }.bind2(e.target);
            }
            this.placeImgBox = $(e.target);

            this.overlayShow(RLANG.insert_image, 'insert_image', handler);
        },
        uploadImage: function (typeUpload) {
            this.$upload.click();
        },

        openMediaImages: function(typeUpload){
            var redactorActive = this;
            var modal = $('.redactor_overlay__box__inner');

            modal.find('.redactor_insert_image_type').hide();

            redactorActive.getMediaImages(function(o){
                var _o = o;
                var imgs = '';
                if(_o !== 'false'){
                    $.each(_o, function(i, img){
                        var t = '<img src="/Content/f/' + img.Path + '" />';
                        var evClick = 'redactorActive.insertMediaImage(\'' + img.Path + '\')';
                        if(typeUpload != undefined && typeUpload == 'place_image'){
                            evClick = 'redactorActive.insertPlaceImg(\'/Content/f/' + img.Path + '\')';
                        }
                        imgs += '<div class="redactor_insert_image_gallery__item" onclick="' + evClick + '"><img src="/Content/f/' + img.Path + '" /></div>';
                    });
                    imgs += '<button class="redactor_insert_image_gallery__close" onclick="$(this).closest(\'.redactor_overlay\').find(\'.redactor_insert_image_gallery\').hide();$(this).closest(\'.redactor_overlay\').find(\'.redactor_insert_image_type\').show();">Отмена</button>';
                    modal.find('.redactor_insert_image_gallery').html(imgs);
                }else{
                    modal.find('.redactor_insert_image_gallery').text('Нет изображений');
                }
                modal.find('.redactor_insert_image_gallery').show();
                redactorActive.modalResize(900);
            });
            modal.find('.redactor_insert_image_gallery').show();

        },
        insertMediaImage: function(src){
            this.execCommand('inserthtml', '<img src="/Content/f/' + src + '" />');
            this.docObserve();
            this.overlayHide();
        },
        showImage: function () {
            this.spanid = Math.floor(Math.random() * 99999);
            if (jQuery.browser.msie) this.execCommand('inserthtml', '<span id="span' + this.spanid + '"></span>');

            var handler = function () {

                if (this.opts.imageGetJson !== false) {
                    $.getJSON(this.opts.imageGetJson, function (data) {
                        $.each(data, function (key, val) {
                            var img = $('<img src="' + val.thumb + '" rel="' + val.image + '">');
                            img.click(function () {
                                redactorActive.imageSetThumb($(this).attr('rel'));
                            });
                            $('#redactor_image_box').append(img);
                        });
                    });
                }
                else {
                    $('#redactor_tabs li').eq(1).remove();
                }


                // upload params
                var params = '';
                if (this.opts.imageUploadFunction) params = this.opts.imageUploadFunction();


                $('#redactor_file').dragupload(
                    {
                        url: this.opts.imageUpload + params,
                        success: function (data) {
                            this.imageUploadCallback(data);

                        }.bind2(this)
                    });

                this.uploadInit('redactor_file', {
                    auto: true, url: this.opts.imageUpload + params, success: function (data) {

                        this.imageUploadCallback(data);

                    }.bind2(this)
                });

                $('#redactorUploadBtn').click(this.imageUploadCallbackLink);


            }.bind2(this);


            redactorActive = this;
            this.modalInit(RLANG.image, this.opts.path + 'plugins/image.html', 530, 350, handler);

        },
        imageSetThumb: function (data) {
            this._imageSet('<img alt="" src="' + data + '" />');
        },
        imageUploadCallbackLink: function () {
            if ($('#redactor_file_link').val() != '') {
                var data = '<img src="' + $('#redactor_file_link').val() + '">';

                redactorActive._imageSet(data);
            }
            else this.modalClose();

        },
        imageUploadCallback: function (data) {
            redactorActive._imageSet(data);
        },
        _imageSet: function (html) {
            //var json = $.parseJSON(html);
            //alert(json.filelink);
            html = '<p>' + html + '</p>';

            redactorActive.$frame.get(0).contentWindow.focus();

            if ($.browser.msie) {
                $(redactorActive.doc.getElementById('span' + redactorActive.spanid)).after(html);
                $(redactorActive.doc.getElementById('span' + redactorActive.spanid)).remove();
            }
            else {
                redactorActive.execCommand('inserthtml', html);
            }

            this.modalClose();
            this.docObserve();
        },


        // INSERT LINK
        showLink: function () {
            if (jQuery.browser.msie) {
                this.spanid = Math.floor(Math.random() * 99999);
                this.execCommand('inserthtml', '<span id="span' + this.spanid + '"></span>');
            }

            redactorActive = this;

            var handler = function () {
                var sel = this.getSelection();
                var getStruct = function(param){
                    var url = '/Admin/Struct?json=1' + (param.parentId != undefined ? '&parentId=' + param.parentId : '');

                    $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'json',
                        success: function(arr){
                            param.html = '';
                            $.each(arr, function(i, item){
                                param.html += '<div data-active="' + item.IsActive + '" data-id="' + item.Id + '" data-path="' + item.Path + '" data-lvl="' + item.Level + '" data-type="' + item.Type + '"><span>' + item.Title + '</span></div>';
                            });

                            if(param.callback != undefined && typeof param.callback == 'function'){
                                param.callback(param);
                            }


                        }
                    });
                };
                this.insert_link_node = null;
                if ($.browser.msie) {
                    // var temp = sel.htmlText.match(/href="(.*?)"/gi);
                    // if (temp != null) {
                    //     temp = new String(temp);
                    //     temp = temp.replace(/href="(.*?)"/gi, '$1');
                    // }
                    //
                    // var text = sel.text;
                    // if (temp != null) var url = temp;
                    // else  var url = '';
                    // var title = '';
                }
                else {
                    if(sel.anchorNode != null){
                        if(sel.anchorNode.parentNode.tagName == 'A') {
                            var url = sel.anchorNode.parentNode.href;
                            var text = sel.anchorNode.parentNode.text;
                            if (sel.toString() == '') this.insert_link_node = sel.anchorNode.parentNode;
                        }else{
                            var text = sel.toString();
                            var url = '';
                        }
                    }
                }

                $('#redactor_link_url').val(url).focus();
                $('#redactor_link_text').val(text);

                getStruct({
                    callback: function(param){
                        $('.redactor_link_struct').html(param.html);
                    }
                });

                $('.redactor_link_struct').on('click', 'div', function(event){
                    $('#redactor_link_url').val('/' + $(this).data('path') + '/');

                    if($(this).find('.redactor_link_struct__in').length > 0){
                        $(this).find('.redactor_link_struct__in').remove();
                    }else if($(this).data('type') == 0){
                        getStruct({
                            thisElem: this,
                            parentId: $(this).data('id'),
                            callback: function(param){
                                $(param.thisElem).append('<div class="redactor_link_struct__in">' + param.html + '</div>');
                            }
                        });
                    }
                    event.stopPropagation();
                });

            }.bind2(this);
            this.overlayShow(RLANG.link, 'link', handler);
        },
        insertLink: function () {
            var value = $('#redactor_link_text').val();
            var sel = this.getSelection();
            if (value == '') {
                $('#redactor_link_text').focus();
                return false
            }

            if(this.insert_link_node == null && sel.anchorOffset < sel.focusOffset && $('#redactorInsertLinkForm').find('input[name="redactorInsertLinkView"]:checked').val() == 0){
                redactorActive.execCommand('createLink', $('#redactor_link_url').val());
            }else{
                var a = '<a' + ($('#redactorInsertLinkForm').find('input[name="redactorInsertLinkView"]:checked').val() == 1 ? ' class="ecotime_btn_all ecotime_btn_m ecotime_btn_green"' : '') + ' href="' + $('#redactor_link_url').val() + '">' + value + '</a> ';
                if(this.insert_link_node != null){
                    $(this.insert_link_node).text(value);
                    $(this.insert_link_node).attr('href', $('#redactor_link_url').val());
                }else{
                    if ($.browser.msie) {
                        // $(redactorActive.doc.getElementById('span' + redactorActive.spanid)).after(a);
                        // $(redactorActive.doc.getElementById('span' + redactorActive.spanid)).remove();
                    }else{
                        var node = $('<span></span>').get(0);
                        redactorActive.insertNodeAtCaret(node);
                        redactorActive.setFocusNode(node);
                        redactorActive.execCommand('inserthtml', a);
                    }
                }
            }
            this.overlayHide();
        },

        screen_shot: function(){
            redactorActive = this;
            this.overlayShow(RLANG.screen_shot, 'screen_shot');
        },

        upload_screen_shot: function(){
            $(this.$uploader).data('type-upload', 'screen_shot');
            $(this.$upload).removeAttr('multiple');
            this.$upload.click();
        },

        insert_screen_shot: function(){

            var img = $('#redactor_insert_screen_shot_img').val().trim();
            // var comment = $('#redactor_insert_screen_shot_comment').val().trim();
            var link = $('#redactor_insert_screen_shot_link').val().trim();

            if(img == ''){
                $('#redactor_insert_screen_shot_upload').focus();
                return false;
            }

            this.execCommand('inserthtml', '<p class="screenshot_wrap">' +
                (link != "" ? '<a href="' + link + '" target="_blank">' + img + '</a>' : img) + /*(comment == '' ? '' : '<i>' + comment) + '</i>*/'</p><span>&nbsp;</span>');
            this.overlayHide();
        },

        glavredProofread: function(){
            redactorActive = this;

            var text = redactorActive.getCodeEditor();
            if(text.trim() == '' || $(this.doc.body).find('i.glvrd').length){
                return false;
            }
            glvrd.proofread(text, function(result){
                if(result.status == 'ok') {
                    var texts = [];
                    var start = 0;
                    $.each(result.fragments, function(k, fragment){
                        texts.push(text.substring(start, fragment.start));
                        texts.push('<i class="glvrd" data-name="' + fragment.hint.name + '" data-description="' + fragment.hint.description + '">' + text.substring(fragment.start, fragment.end) + '</i>');
                        start = fragment.end;
                    });
                    texts.push(text.substring(start));
                    redactorActive.setCodeEditor(texts.join(''));
                }else {
                    alert(result.message);
                }
            });
        },

        // INSERT VIDEO
        showVideo: function () {

            if (jQuery.browser.msie) {
                this.spanid = Math.floor(Math.random() * 99999);
                this.execCommand('inserthtml', '<span id="span' + this.spanid + '"></span>');
            }

            // redactorActive = this;
            this.overlayShow(RLANG.video, 'video', function () {
                $('#redactor_insert_video_area').focus();
            });
        },
        insertVideo: function () {
            var data = $('#redactor_insert_video_area').val();

            if (redactorActive.opts.visual) {
                // iframe video
                if (data.search('iframe')) {
                    data = '<p>' + data + '</p>';
                }
                // flash
                else data = '<p class="redactor_video_box">' + data + '</p>';
            }

            // if ($.browser.msie) {
            //     $(redactorActive.doc.getElementById('span' + redactorActive.spanid)).after(data);
            //     $(redactorActive.doc.getElementById('span' + redactorActive.spanid)).remove();
            // }
            // else


            redactorActive.execCommand('inserthtml', data);

            this.overlayHide();

        },


        // TOGGLE
        toggle: function () {
            var htmlToggle = false;
            if (this.opts.visual) {
                this.$box.addClass('redactor_box_html');
                this.clean(false);
                var html = this.getCodeEditor();
                html = this.formating(html);
                this.$el.val(html);
                this.setBtnActive('html');
                this.opts.visual = false;
                $.cookie('redactor_mode', 'textarea');
                htmlToggle = true;
            }
            else {
                this.$box.removeClass('redactor_box_html');
                this.setCodeEditor(this.getCodeTextarea(false));

                if ($(this.doc.body).html() == '') this.setCodeEditor('<p>&nbsp;</p>');

                this.focus();
                this.setBtnInactive('html');
                this.opts.visual = true;
                $.cookie('redactor_mode', 'html');
                htmlToggle = false;
            }

            this.$toolbar.find('li').each(function(i, li){
                var $li = $(li);
                var type = $li.data('type');

                if(htmlToggle){
                    if(RTOOLBAR[type].htmlShow){
                        $li.removeClass('disabled');
                    }else{
                        $li.addClass('disabled');
                        $li.attr('title', 'Вы находитесь в режиме html-редактирования');
                    }
                }else{
                    $li.removeClass('disabled');
                    $li.attr('title', '');
                }

            });



        },

        // RESIZE
        buildResizer: function () {
            if (this.opts.resize === false) return false;

            this.$resizer_box = $('<div>').addClass('redactor_resizer');
            this.$resizer = $('<div>');

            this.$resizer_box.append(this.$resizer);
            this.$box.append(this.$resizer_box);

            this.$resizer.mousedown(function (e) {
                this.initResize(e)
            }.bind2(this));

        },
        initResize: function (e) {
            if (e.preventDefault) e.preventDefault();

            this.splitter = e.target;

            if (this.opts.visual) {
                this.element_resize = this.$frame;
                this.element_resize.get(0).style.visibility = 'hidden';
                this.element_resize_parent = this.$el;
            }
            else {
                this.element_resize = this.$el;
                this.element_resize_parent = this.$frame;
            }

            this.stopResizeHdl = function (e) {
                this.stopResize(e)
            }.bind2(this);
            this.startResizeHdl = function (e) {
                this.startResize(e)
            }.bind2(this);
            this.resizeHdl = function (e) {
                this.resize(e)
            }.bind2(this);

            $(document).mousedown(this.startResizeHdl);
            $(document).mouseup(this.stopResizeHdl);
            $(this.splitter).mouseup(this.stopResizeHdl);

            this.null_point = false;
            this.h_new = false;
            this.h = this.element_resize.height();
        },
        startResize: function () {
            $(document).mousemove(this.resizeHdl);
        },
        resize: function (e) {
            if (e.preventDefault) e.preventDefault();

            var y = e.pageY;
            if (this.null_point == false) this.null_point = y;
            if (this.h_new == false) this.h_new = this.element_resize.height();

            var s_new = (this.h_new + y - this.null_point) - 10;

            if (s_new <= 30) return true;

            if (s_new >= 0) {
                this.element_resize.get(0).style.height = s_new + 'px';
                this.element_resize_parent.get(0).style.height = s_new + 'px';
                $.cookie('redactor_height', this.$el.height());
            }
        },
        stopResize: function (e) {
            $(document).unbind('mousemove', this.resizeHdl);
            $(document).unbind('mousedown', this.startResizeHdl);
            $(document).unbind('mouseup', this.stopResizeHdl);
            $(this.splitter).unbind('mouseup', this.stopResizeHdl);

            this.element_resize.get(0).style.visibility = 'visible';
        },


        // =BUTTONS MANIPULATIONS
        getBtn: function (key) {
            return $(this.$toolbar.find('a.redactor_btn_' + key));
        },
        setBtnActive: function (key) {
            this.getBtn(key).addClass('act');
        },
        setBtnInactive: function (key) {
            this.getBtn(key).removeClass('act');
        },
        changeBtnIcon: function (key, classname) {
            this.getBtn(key).addClass('redactor_btn_' + classname);
        },
        removeBtnIcon: function (key, classname) {
            this.getBtn(key).removeClass('redactor_btn_' + classname);
        },


        // API
        setCodeEditor: function (code) {
            var code = $('<div>' + code + '</div>');
            code.find('>*').each(function(i, el){
                var _tagName = $(el)[0].tagName;

                if(_tagName != undefined){
                    if(_tagName == 'I' || _tagName == 'B' || _tagName == 'OL' || _tagName == 'UL' ){
                        $(el).wrap('<p></p>');
                    }
                }
            })

            $(this.doc.body).html(code.html());
            this.docObserve();
        },
        setCodeTextarea: function (code) {
            this.$el.val(code);
        },
        getCodeEditor: function () {
            return $(this.doc.body).html();
        },
        getCodeTextarea: function (sync) {
            if (sync !== false) {
                this.clean(false);
                this.syncCodeToTextarea();
            }

            return $.trim(this.$el.val());
        },
        syncCodeToTextarea: function () {
            if (this.opts.visual) this.setCodeTextarea(this.getCodeEditor());
        },
        syncCodeToEditor: function () {
            this.setCodeEditor(this.getCodeTextarea(false));
        },
        handler: function () {
            var html = this.getCodeEditor();

            $.ajax({
                url: this.opts.handler,
                type: 'post',
                data: 'redactor=' + escape(encodeURIComponent(html)),
                success: function (data) {
                    this.setCodeEditor(data);
                    this.syncCodeToTextarea();

                }.bind2(this)
            });

        },
        destroy: function () {
            var html = this.getCodeEditor();

            this.$box.after(this.$el)
            this.$box.remove();
            this.$el.val(html).show();

        },


        // AUTOSAVE
        autoSave: function () {
            if (this.opts.autosave === false) return false;

            setInterval(function () {
                $.post(this.opts.autosave, {data: this.getCodeEditor()});

            }.bind2(this), this.opts.interval * 1000);
        },

        overlayShow: function(title, type, handler, preloader){
            var data = tempForm({type: type});

            redactorActive = this;

            if($('.redactor_overlay').length > 0){
                $('.redactor_overlay').remove();
            }

            $.each(RLANG, function (i, s) {
                var re = new RegExp("%RLANG\." + i + "%", "gi");
                data = data.replace(re, s);
            });

            this.overlay = '<div class="redactor_overlay' + (preloader != undefined ? ' redactor_overlay_preloader' : '') + '" onclick="$(this).remove();">' +
                '<div class="redactor_overlay__box" onclick="event.stopPropagation();">' +
                '<div class="redactor_overlay__box__close" title="Закрыть окно" onclick="$(this).closest(\'.redactor_overlay\').remove();"></div>' +
                '<div class="redactor_overlay__box__header">' + title + '</div>' +
                '<div class="redactor_overlay__box__inner">'+
                data +
                '</div>' +
                '</div>' +
                '</div>';

            this.overlay = $(this.overlay);
            $('body').append(this.overlay);
            if (typeof(handler) == 'function') handler(this.overlay);
        },

        overlayHide: function(){
            $('.redactor_overlay').remove();
        },

        // MODAL
        modalInit: function (title, type, width, height, handler, scroll) {
            // modal overlay

            var data = tempForm({type: type});
            redactorActive = this;

            if ($('#redactor_modal_overlay').size() == 0) {
                this.overlay = $('<div id="redactor_modal_overlay" style="display: none;"></div>');
                $('body').prepend(this.overlay);
            }
            if (this.opts.overlay) {
                $('#redactor_modal_overlay').show();
                $('#redactor_modal_overlay').click(function () {
                    this.modalClose();
                }.bind2(this));
            }

            if ($('#redactor_modal').size() == 0) {
                this.modal = $('<div id="redactor_modal" style="display: none;"><div id="redactor_modal_close"></div><div id="redactor_modal_header"></div><div id="redactor_modal_inner"></div></div>');
                $('body').append(this.modal);
            }

            $('#redactor_modal_close').click(function () {
                this.modalClose();
            }.bind2(this));
            $(document).keyup(function (e) {
                if (e.keyCode == 27) this.modalClose();
            }.bind2(this));
            $(this.doc).keyup(function (e) {
                if (e.keyCode == 27) this.modalClose();
            }.bind2(this));

            $.each(RLANG, function (i, s) {
                var re = new RegExp("%RLANG\." + i + "%", "gi");
                data = data.replace(re, s);
            });



            $('#redactor_modal_inner').html(data);
            $('#redactor_modal_header').html(title);

            if (height === false) theight = 'auto';
            else theight = height + 'px';

            $('#redactor_modal').css({
                'min-width': width + 'px',
                'min-height': theight,
                'marginLeft': '-' + width / 2 + 'px'
            }).fadeIn('fast');

            $('#redactor_modal').css({
                'marginTop': '-' + $('#redactor_modal').height() / 2 + 'px'
            });

            if (scroll === true) {
                $('#imp_redactor_table_box').height(height - $('#redactor_modal_header').outerHeight() - 130).css('overflow', 'auto');
            }

            if (typeof(handler) == 'function') handler();
        },
        modalClose: function () {

            $('#redactor_modal_close').unbind('click', function () {
                this.modalClose();
            }.bind2(this));
            $('#redactor_modal').fadeOut('fast', function () {
                $('#redactor_modal_inner').html('');

                if (this.opts.overlay) {
                    $('#redactor_modal_overlay').hide();
                    $('#redactor_modal_overlay').unbind('click', function () {
                        this.modalClose();
                    }.bind2(this));
                }

                $(document).unbind('keyup', function (e) {
                    if (e.keyCode == 27) this.modalClose();
                }.bind2(this));
                $(this.doc).unbind('keyup', function (e) {
                    if (e.keyCode == 27) this.modalClose();
                }.bind2(this));

            }.bind2(this));
            this.$uploader.val('');
        },

        modalResize: function (width, height){
            var modal = $('#redactor_modal');
            modal.css({
                'min-width': (width == undefined ? 'auto' : width + 'px'),
                'max-width': (width == undefined ? 'auto' : width + 'px'),
                'max-height': $(window).height() * 0.8 + 'px'
            });

            modal.css({
                'marginLeft': '-' + modal.width() / 2 + 'px',
                'marginTop': '-' + modal.height() / 2 + 'px'
            });
        },

        // UPLOAD
        uploadInit: function (element, options) {
            /*
             Options
             */
            this.uploadOptions = {
                url: false,
                success: false,
                start: false,
                trigger: false,
                auto: false,
                input: false
            };

            $.extend(this.uploadOptions, options);


            // Test input or form
            if ($('#' + element).get(0).tagName == 'INPUT') {
                this.uploadOptions.input = $('#' + element);
                this.element = $($('#' + element).get(0).form);
            }
            else {
                this.element = $('#' + element);
            }


            this.element_action = this.element.attr('action');

            // Auto or trigger
            if (this.uploadOptions.auto) {
                $(this.uploadOptions.input).change(function () {
                    this.element.submit(function (e) {
                        return false;
                    });
                    this.uploadSubmit();
                }.bind2(this));

            }
            else if (this.uploadOptions.trigger) {
                $('#' + this.uploadOptions.trigger).click(function () {
                    this.uploadSubmit();
                }.bind2(this));
            }
        },
        uploadSubmit: function () {
            this.uploadForm(this.element, this.uploadFrame());
        },
        uploadFrame: function () {
            this.id = 'f' + Math.floor(Math.random() * 99999);

            var d = document.createElement('div');
            var iframe = '<iframe style="display:none" src="about:blank" id="' + this.id + '" name="' + this.id + '"></iframe>';
            d.innerHTML = iframe;
            document.body.appendChild(d);

            // Start
            if (this.uploadOptions.start) this.uploadOptions.start();

            $('#' + this.id).load(function () {
                this.uploadLoaded()
            }.bind2(this));

            return this.id;
        },
        uploadForm: function (f, name) {
            if (this.uploadOptions.input) {
                var formId = 'redactorUploadForm' + this.id;
                var fileId = 'redactorUploadFile' + this.id;
                this.form = $('<form  action="' + this.uploadOptions.url + '" method="POST" target="' + name + '" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');

                var oldElement = this.uploadOptions.input;
                var newElement = $(oldElement).clone();
                $(oldElement).attr('id', fileId);
                $(oldElement).before(newElement);
                $(oldElement).appendTo(this.form);
                $(this.form).css('position', 'absolute');
                $(this.form).css('top', '-2000px');
                $(this.form).css('left', '-2000px');
                $(this.form).appendTo('body');

                this.form.submit();
            }
            else {
                f.attr('target', name);
                f.attr('method', 'POST');
                f.attr('enctype', 'multipart/form-data');
                f.attr('action', this.uploadOptions.url);

                this.element.submit();
            }

        },
        uploadLoaded: function () {
            var i = $('#' + this.id);

            if (i.contentDocument) var d = i.contentDocument;
            else if (i.contentWindow) var d = i.contentWindow.document;
            else var d = window.frames[this.id].document;

            if (d.location.href == "about:blank") return true;

            // Success
            if (this.uploadOptions.success) this.uploadOptions.success(d.body.innerHTML);

            this.element.attr('action', this.element_action);
            this.element.attr('target', '');
            //this.element.unbind('submit');
            //if (this.uploadOptions.input) $(this.form).remove();
        },

        // UTILITY
        getRandomID: function () {
            return Math.floor(Math.random() * 99999);
        }
    };


    // bind2
    Function.prototype.bind2 = function (object) {
        var method = this;
        var oldArguments = $.makeArray(arguments).slice(1);
        return function (argument) {
            if (argument == new Object) {
                method = null;
                oldArguments = null;
            }
            else if (method == null) throw "Attempt to invoke destructed method reference.";
            else {
                var newArguments = $.makeArray(arguments);
                return method.apply(object, oldArguments.concat(newArguments));
            }
        };
    };


})(jQuery);


// Define: Linkify plugin from stackoverflow
(function ($) {

    var url1 = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g,
        url2 = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g,

        linkifyThis = function () {
            var childNodes = this.childNodes,
                i = childNodes.length;
            while (i--) {
                var n = childNodes[i];
                if (n.nodeType == 3) {
                    var html = n.nodeValue;
                    if (html) {
                        html = html.replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(url1, '$1<a href="http://$2">$2</a>$3')
                            .replace(url2, '$1<a href="$2">$2</a>$5');

                        $(n).after(html).remove();
                    }
                }
                else if (n.nodeType == 1 && !/^(a|button|textarea)$/i.test(n.tagName)) {
                    linkifyThis.call(n);
                }
            }
        };

    $.fn.linkify = function () {
        this.each(linkifyThis);
    };

})(jQuery);


// redactor_tabs
function showRedactorTabs(el, index) {
    $('#redactor_tabs a').removeClass('redactor_tabs_act');
    $(el).addClass('redactor_tabs_act');

    $('.redactor_tabs').hide();
    $('#redactor_tabs' + index).show();
}


/*
 Plugin Drag and drop Upload v1.0.1
 http://imperavi.com/
 Copyright 2012, Imperavi Ltd.
 */
(function ($) {

    // Initialization
    $.fn.dragupload = function (options) {
        return this.each(function () {
            var obj = new Construct(this, options);
            obj.init();
        });
    };

    // Options and variables
    function Construct(el, options) {

        this.opts = $.extend({

            url: false,
            success: false,
            preview: false,

            text: RLANG.drop_file_here,
            atext: RLANG.or_choose

        }, options);

        this.$el = $(el);
    };

    // Functionality
    Construct.prototype = {
        init: function () {
            if (!$.browser.opera && !$.browser.msie) {

                this.droparea = $('<div class="redactor_droparea"></div>');
                this.dropareabox = $('<div class="redactor_dropareabox">' + this.opts.text + '</div>');
                this.dropalternative = $('<div class="redactor_dropalternative">' + this.opts.atext + '</div>');

                this.droparea.append(this.dropareabox);

                this.$el.before(this.droparea);
                this.$el.before(this.dropalternative);

                // drag over
                this.dropareabox.bind('dragover', function () {
                    return this.ondrag();
                }.bind2(this));

                // drag leave
                this.dropareabox.bind('dragleave', function () {
                    return this.ondragleave();
                }.bind2(this));


                // drop
                this.dropareabox.get(0).ondrop = function (event) {
                    event.preventDefault();

                    this.dropareabox.removeClass('hover').addClass('drop');

                    var file = event.dataTransfer.files[0];

                    var fd = new FormData();
                    fd.append('file', file);

                    $.ajax({
                        dataType: 'html',
                        url: this.opts.url,
                        data: fd,
                        //xhr: provider,
                        cache: false,
                        contentType: false,
                        processData: false,
                        type: 'POST',
                        success: function (data) {
                            if (this.opts.success !== false) this.opts.success(data);
                            if (this.opts.preview === true) this.dropareabox.html(data);
                        }.bind2(this)
                    });


                }.bind2(this);
            }
        },
        ondrag: function () {
            this.dropareabox.addClass('hover');
            return false;
        },
        ondragleave: function () {
            this.dropareabox.removeClass('hover');
            return false;
        }
    };


})(jQuery);


/* jQuery plugin textselect
 * version: 0.9
 * author: Josef Moravec, josef.moravec@gmail.com
 * updated: Imperavi
 *
 */
(function ($) {
    $.event.special.textselect = {
        setup: function (data, namespaces) {
            $(this).data("textselected", false);
            $(this).data("ttt", data);
            $(this).bind('mouseup', $.event.special.textselect.handler);
        }, teardown: function (data) {
            $(this).unbind('mouseup', $.event.special.textselect.handler);
        }, handler: function (event) {
            var data = $(this).data("ttt");
            var text = $.event.special.textselect.getSelectedText(data).toString();
            if (text != '') {
                $(this).data("textselected", true);
                event.type = "textselect";
                event.text = text;
                $.event.handle.apply(this, arguments);
            }
        }, getSelectedText: function (data) {
            var text = '';
            var frame = $('#redactor_frame_' + data).get(0);
            if (frame.contentWindow.getSelection)text = frame.contentWindow.getSelection(); else if (frame.contentWindow.document.getSelection) text = frame.contentWindow.document.getSelection(); else if (frame.contentWindow.document.selection)text = frame.contentWindow.document.selection.createRange().text;
            return text;
        }
    }
    $.event.special.textunselect = {
        setup: function (data, namespaces) {
            $(this).data("rttt", data);
            $(this).data("textselected", false);
            $(this).bind('mouseup', $.event.special.textunselect.handler);
            $(this).bind('keyup', $.event.special.textunselect.handlerKey)
        }, teardown: function (data) {
            $(this).unbind('mouseup', $.event.special.textunselect.handler);
        }, handler: function (event) {
            if ($(this).data("textselected")) {
                var data = $(this).data("rttt");
                var text = $.event.special.textselect.getSelectedText(data).toString();
                if (text == '') {
                    $(this).data("textselected", false);
                    event.type = "textunselect";
                    $.event.handle.apply(this, arguments);
                }
            }
        }, handlerKey: function (event) {
            if ($(this).data("textselected")) {
                var data = $(this).data("rttt");
                var text = $.event.special.textselect.getSelectedText(data).toString();
                if ((event.keyCode = 27) && (text == '')) {
                    $(this).data("textselected", false);
                    event.type = "textunselect";
                    $.event.handle.apply(this, arguments);
                }
            }
        }
    }
})(jQuery);