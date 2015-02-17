(function ($) {
  $('.spinner .btn:first-of-type').on('click', function() {
  	var input = $(this).parents('.spinner').find('input');
    input.val( ( Number(input.val()) + 0.1 ).toFixed(1) );
    return false;
  });
  $('.spinner .btn:last-of-type').on('click', function() {
  	var input = $(this).parents('.spinner').find('input');
    input.val( ( Number(input.val()) - 0.1 ).toFixed(1) );
    return false;
  });
})(jQuery);