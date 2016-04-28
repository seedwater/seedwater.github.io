

$(window).scroll(function() {
if ($(this).scrollTop() > 309){  
    $("#wrap").addClass("fix-donate");
  }
  else{
    $("#wrap").removeClass("fix-donate");
  }
});