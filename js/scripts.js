$(document).ready(function(){

  var tags = ["h1", "p", "img"];
  tags.forEach(function(tag) {
    $(tag).click(function() {
      alert("This is a " + tag);
    });
  });

  $(".clickable").click(function(){
    $(".initially-hidden").toggle();
    $(".initially-showing").toggle();
  });

});
