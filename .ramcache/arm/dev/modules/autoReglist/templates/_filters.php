<?php use_stylesheets_for_form($form) ?>
<?php use_javascripts_for_form($form) ?>
<?php
$fa = $sf_user->getAttribute('reglist.filters', $configuration, 'admin_module');
$fac = array();
foreach($fa as $f)
{
if(!is_null($f))
{
$fac[] = $f;
}
}
?>
<div class="sf_admin_filter__wrapper">
    <button class="sf_admin_filter__button pseudo_button sf_admin_filter__tooggler<?php echo (count($fac) > 0 ? ' sf_admin_filter__tooggler__on' : '');?>">Фильтр</button>
    <div class="sf_admin_filter">
        <span class="sf_admin_filter_close" onclick="$(this).parent().hide();"></span>
        <b>Фильтр</b><i class="br10"></i>
        <?php if ($form->hasGlobalErrors()): ?>
        <?php echo $form->renderGlobalErrors() ?>
        <?php endif; ?>
        <div id="sf_admin_filter_form">
            <form action="<?php echo url_for('reglist_collection', array('action' => 'filter')) ?>" method="post">
                <?php foreach ($configuration->getFormFilterFields($form) as $name => $field): ?>
                <?php if ((isset($form[$name]) && $form[$name]->isHidden()) || (!isset($form[$name]) && $field->isReal())) continue ?>
                <?php include_partial('reglist/filters_field', array(
                'name'       => $name,
                'attributes' => $field->getConfig('attributes', array()),
                'label'      => $field->getConfig('label'),
                'help'       => $field->getConfig('help'),
                'form'       => $form,
                'field'      => $field,
                'class'      => 'sf_admin_form_row sf_admin_'.strtolower($field->getType()).' sf_admin_filter_field_'.$name,
                )) ?>
                <?php endforeach; ?>
                <i class="br5"></i>
                <?php echo $form->renderHiddenFields() ?>
                <input type="submit" class="pseudo_button no_ajax" value="Применить" />&nbsp;&nbsp;<?php echo link_to(__('Reset', array(), 'sf_admin'), 'reglist_collection', array('action' => 'filter'), array('query_string' => '_reset', 'method' => 'post', 'class' => 'lui_pseudo')) ?>

            </form>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function() {
        var lui__list_actions__wrapper__filter = [];
        $('#sf_admin_filter_form').find('select').each(function(k, el){
            if($(el).val() != ''){
                lui__list_actions__wrapper__filter.push('<div class="sf_admin_filter__extend__item"><b>' + $(el).parent().find('label').html() + ':</b>&nbsp;' + $(el).find('option:selected').html() + '<span class="sf_admin_filter__extend__item__remove" onclick="$(\'#' + $(el).attr('id') + '\').val(\'\');$(\'#sf_admin_filter_form form\').submit();"></span></div>');
            }
        });
        if(lui__list_actions__wrapper__filter.length > 0){
            $('.lui__list_actions__wrapper').append('<i class="br10"></i><div class="sf_admin_filter__extend">' + lui__list_actions__wrapper__filter.join('&nbsp;&nbsp;&nbsp;') + '</div>');
            create_custom_table_head_recalc();
        }
        $('.sf_admin_filter__tooggler').click(function(){
            $(this).parent().find('.sf_admin_filter').toggle();
            return false;
        });

        /*
        var sf_filter_abss = $('.sf_filter_abs');
        sf_filter_abss.each(function(){
          if($(this).parent().data('absed') == '1'){
            return false;
          }
          $(this).parent().data('absed', '1');

          var pp = $(this).parent().clone();
          $('.lui__list_count').after(pp);

          pp.css({
            'display' : 'inline-block',
            'position': 'absolute',
            'left' : $('.lui__list_count').width() + $('.lui__list_count').position().left + 30
          });


        });
        */
    });
</script>
