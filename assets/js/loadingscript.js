$(function(){

  var History = window.History;
  var $container = $('#ajax-container');
  var $latestPost = $('latestPost');
  var $postIndex = $('#postIndex');



  $('body').on('click', '.ajax-link, .pagination a, .post-tags a, .post-header a', function(e) {
    e.preventDefault();

  });
});