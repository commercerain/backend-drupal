!function(n,s){s.theme.ajaxProgressThrobber=function(){return'\n    <span class="ajax-spinner ajax-spinner--inline fs-sm me-2">\n        <span class="spinner-grow spinner-grow-sm text-secondary" role="status"></span>\n    </span>'},s.theme.ajaxProgressIndicatorFullscreen=function(){return'\n    <div class="ajax-spinner ajax-spinner--fullscreen">\n      <span class="ajax-spinner__label">'+s.t("Loading&nbsp;&hellip;",{},{context:"Loading text for Drupal cores Ajax throbber (fullscreen)"})+"\n      </span>\n    </div>"}}(jQuery,Drupal);