
$("#animate-test").hover(function(){
    $(this).filter(':not(:animated)').animate({ width: "150%" });
}, function() {
    $(this).animate({ width: "100%" });
});