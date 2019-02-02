<?php
$amp = ($sf_request->hasParameter('q') && $sf_request->getParameter('q') != '' ? '?q=' . $sf_request->getParameter('q') . '&' : '?');
if($sf_request->hasParameter('checked'))
{
//$amp .= 'checked=' . $sf_request->getParameter('checked') . '&';
}
?>
<?php if ($pager->getPage() > 1): ?><a href="<?php echo ($_partial ? '?_spath=' : '') . url_for('@period') ?><?php echo $amp;?>page=1"><?php echo image_tag(sfConfig::get('sf_admin_module_web_dir').'/images/first.png', array('title' => __('First page', array(), 'sf_admin'))) ?></a><a href="<?php echo ($_partial ? '?_spath=' : '') . url_for('@period') ?><?php echo $amp;?>page=<?php echo $pager->getPreviousPage() ?>"><?php echo image_tag(sfConfig::get('sf_admin_module_web_dir').'/images/previous.png', array('title' => __('Previous page', array(), 'sf_admin')))?></a><?php endif; ?><?php foreach ($pager->getLinks() as $page): ?><?php if ($page == $pager->getPage()): ?><span><?php echo $page ?></span><?php else: ?><a href="<?php echo ($_partial ? '?_spath=' : '') . url_for('@period') ?><?php echo $amp;?>page=<?php echo $page ?>"><?php echo $page ?></a><?php endif; ?><?php endforeach; ?><?php if ($pager->getPage() < $pager->getLastPage() ): ?><a href="<?php echo ($_partial ? '?_spath=' : '') . url_for('@period') ?><?php echo $amp;?>page=<?php echo $pager->getNextPage() ?>"><?php echo image_tag(sfConfig::get('sf_admin_module_web_dir').'/images/next.png', array('title' => __('Next page', array(), 'sf_admin'))) ?></a><a href="<?php echo ($_partial ? '?_spath=' : '') . url_for('@period') ?><?php echo $amp;?>page=<?php echo $pager->getLastPage() ?>"><?php echo image_tag(sfConfig::get('sf_admin_module_web_dir').'/images/last.png', array('title' => __('Last page', array(), 'sf_admin'))) ?></a><?php endif; ?>
<script type="text/javascript">
$(document).ready(function () {
$('.lui_pager a').click(function () {
    var split = $(this).prop('href').split("?");
    var checked = [];
    $('.sf_admin_batch_checkbox:checked').each(function (k, v) {
        checked.push($(v).val());
    });
    is_not_good_style_of_code("?" + split[1] + (checked.length > 0 ? '&checked=' + checked.join(':') : ''));
    return false;
});
});
</script>