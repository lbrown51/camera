Template.layout.onRendered(function(){
    var height = $(window).height();
    var width = $(window).width();
   $('.body').css("height",height);
   $('.body').css("width",width);
});