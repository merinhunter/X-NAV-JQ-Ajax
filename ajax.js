$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "text.txt",
    cache: false
  });
})
