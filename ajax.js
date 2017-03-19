$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "ajax.txt",
    cache: false
  }).done(function(text){
    $("#description").html(text);
  });

  $("#show").click(function(){
    $.ajax({
      type: "GET",
      url: "link.txt",
      cache: false
    }).done(function(text){
      $("#logo").attr('src', text);
    });
  });
});
