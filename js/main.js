$(function() {
  console.log( "ready!" );
  function ajax_request(cmd) {
    $.ajax({ url: window.location.href + 'ajax-api.php',
      data: {action: cmd},
      type: 'post',
      success: function(output) {
        $('.msg').text(output).addClass('active');
      }
    });
  }
  $('.hello-btn').on('click', function() {
    ajax_request('test');
  });
  $('.example-btn').on('click', function() {
    ajax_request('example');
  });
});
