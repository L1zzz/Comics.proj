var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();
$(document).ready(()=>{
    _init_gallery();
})

  $('.contacts_left').css('height','600px');
  $('.contacts_right').css('height','600px');

$(window).on('load scroll', function() { 
    if ($(this).scrollTop() >= '100' ) {
     $("header").addClass("header_fixed");
    }
    else{
     $("header").removeClass("header_fixed");
    }
});
$("#openpop").click(function(){
  $(".popup").show();
})
$(".back_popup").click(function(){
  $(".popup").hide();

})

$("#openpop1").click(function(){
  $(".popup1").show();
})
$(".back_popup").click(function(){
  $(".popup1").hide();

})


$(".burger_circle").click(function(){
        $(".mobile-menu").toggleClass("mobile-menu-active");
});

function _init_gallery(){

  $(".gallery").each(function(){

    var list = $(this).attr("list").split(",");

    $(this).css("background-image", "url(../img/"+list[0]+")");

    $(this).attr("current","0");

    var el = $(this);

    $(this).find(".right").click(function(){

      var current = parseInt(el.attr("current"))+1<list.length?parseInt(el.attr("current"))+1:0;
      el.attr("current", current.toString());

      el.css("background-image", "url(../img/"+list[current]+")");

    });

    $(this).find(".left").click(function(){

      var current = parseInt(el.attr("current"))>0?parseInt(el.attr("current"))-1:list.length-1;
      el.attr("current", current.toString());

      el.css("background-image", "url(../img/"+list[current]+")");

    });

    if(!$(this).hasClass("no-fullscreen"))
      $(this).find(".handler").click(function(){
        var big_gallery = document.createElement("div");
        $(big_gallery).attr("class", "big_gallery")
        .append("<span class='close_overlay'></span>")
        .append("<span class='close'>x</span>")
        .append("<div class='main_image' style='background-image:url(../img/"+list[parseInt(el.attr("current"))]+");'></div>")
        .append("<div class='images-list'></div>");
        $("body").append(big_gallery);

        for(var i = 0;i<list.length;i++)
          $(big_gallery).find(".images-list").append("<div n='"+i+"' data-img='"+list[i]+"' class='img "+(i==parseInt(el.attr("current"))?"current":"")+"' style='background-image:url(../img/"+list[i]+");'></div>");

        $(big_gallery).find(".close_overlay, .close").click(function(){
          $(big_gallery).remove();
        });

        $(big_gallery).find(".images-list .img").click(function(){

          $(big_gallery).find(".images-list .img").removeClass("current");
          $(this).addClass("current");

          el.attr("current", $(this).attr("n"));

          el.css("background-image", "url(../img/"+$(this).attr("data-img")+")");
          $(big_gallery).find(".main_image").css("background-image", "url(img/"+$(this).attr("data-img")+")");

        });

      });

  });

}
$(".menu_list_mobile").find("li").click(function(){
  $(".mobile-menu-active").removeClass("mobile-menu-active");
})