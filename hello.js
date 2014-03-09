
jQuery(document).ready(function(){
  jQuery("#submitAjaxButton").click(function(){
    //alert("YOu clicked on the button");
    jQuery.ajax({
      url: Drupal.settings.basePath + 'gethello',
      data:{
        name: jQuery('#edit-name').val(),
        token: mytoken
      },
      success:function(data){
				//data: value returned from server
        jQuery('#msg-display-area').html(data)
      }
    })  
  });
});