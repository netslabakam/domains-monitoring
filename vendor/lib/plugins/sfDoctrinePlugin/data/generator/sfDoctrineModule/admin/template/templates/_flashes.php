[?php if ($sf_user->hasFlash('notice')): ?]
<i class="lui__notice[?php echo (!$sf_request->isXmlHttpRequest() ? ' lui__notice__no_ajax' : '');?]">&nbsp;&nbsp;&nbsp;[?php echo __($sf_user->getFlash('notice'), array(), 'sf_admin') ?]</i>
[?php endif; ?]

[?php if ($sf_user->hasFlash('error')): ?]
<i class="lui__error[?php echo (!$sf_request->isXmlHttpRequest() ? ' lui__error__no_ajax' : '');?]">&nbsp;&nbsp;&nbsp;[?php echo __($sf_user->getFlash('error'), array(), 'sf_admin') ?]</i>
[?php endif; ?]

[?php if ($sf_user->hasFlash('restrict_error')): ?]
<span class="lui__error lui__restrict_error[?php echo (!$sf_request->isXmlHttpRequest() ? ' lui__error__no_ajax' : '');?]">&nbsp;&nbsp;&nbsp;[?php echo htmlspecialchars_decode($sf_user->getFlash('restrict_error')) ?]</span>
[?php endif; ?]
