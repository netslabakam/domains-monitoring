<?php

require_once dirname(__FILE__) . '/../lib/pageGeneratorConfiguration.class.php';
require_once dirname(__FILE__) . '/../lib/pageGeneratorHelper.class.php';

/**
 * page actions.
 *
 * @package    chrisal
 * @subpackage page
 * @author     SyLord
 * @version    SVN: $Id: actions.class.php 23810 2009-11-12 11:07:44Z Kris.Wallsmith $
 */
class pageActions extends autoPageActions
{
    public function executeUpload(sfWebRequest $request)
    {
        echo Page::uploader($request->getFiles('file'), $request->getParameter('key'), 'file');
        return sfView::NONE;
    }

    public function executeJcrop(sfWebRequest $request)
    {
        if ($request->isMethod('POST')) {
            $c = strip_tags($request->getParameter('c'));
            $key = strip_tags($request->getParameter('key'));
            $size = strip_tags($request->getParameter('size'));

            if (is_array($cfg_sizes = sfConfig::get('app_' . $key . '_sizes'))) {
                $this_cfg_size = $cfg_sizes[$size];
                if ($this_cfg_size && $this_cfg_size['jcrop']) {
                    $min_width = $this_cfg_size['width'];
                    $min_height = $this_cfg_size['height'];

                    if (($request->getParameter('w') * $c) > $min_width && ($request->getParameter('h') * $c) > $min_height) {
                        $img = new sfImage(sfConfig::get('sf_upload_dir') . '/i/' . $request->getParameter('src'));
                        @$img->crop(($request->getParameter('x') * $c), ($request->getParameter('y') * $c), ($request->getParameter('w') * $c), ($request->getParameter('h') * $c));
                        @$img->thumbnail($min_width, $min_height, true);
                        $image_src = sfConfig::get('sf_upload_dir') . '/i/' . str_replace('.', '-' . $size . '.', $request->getParameter('src'));
                        @$img->saveAs($image_src);

                        if ($cfg_sizes[$size]['watermark']) {
                            Page::watermarkAdd($image_src);
                        }

                        $result = 'ok';
                    } else {
                        $result = 'small';
                    }
                }
            }
        }
        echo $result;
        return sfView::NONE;
    }
}
