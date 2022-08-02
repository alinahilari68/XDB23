$('.interactive-menu-button a').click(function() {
  $(this).toggleClass('active');
});

var scroll = new SmoothScroll('a[href*="#"]');


$('.more-btn').click(function() {
  $('#hiden-gallery').toggleClass('hide');
  $('#hiden-gallery').toggleClass('open');
  if ( $('#hiden-gallery').is( ".open" ) ) {
    $(".more-btn-inside").text("Show Less.");
  }else {
    $(".more-btn-inside").text("Show More.");
  }
});



$(document).on('click', '#submit', function(evt){
    if($(".contact-area").val()==""){
        $(".contact-area").val("您的建议不能为空 !");
        evt.preventDefault();  //阻止提交表单到第三方网站去
    }
});



function slickify(){
  $('.blog-slider').slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
            breakpoint: 991,
            settings: "unslick"
        }
      ] 
  });
  $(".slick-next").text("");
  $(".slick-next").addClass("icofont-long-arrow-right");
  $(".slick-prev").text("");
  $(".slick-prev").addClass("icofont-long-arrow-left");
}

slickify();
$(window).resize(function(){
  var $windowWidth = $(window).width();
  if ($windowWidth > 991) {
      slickify(); 
      $('#blog-btn').addClass('hide-me');  
  }else if($windowWidth < 991) {
    $('#blog-btn').removeClass('hide-me');
  }
});

$('#blog-btn').click(function() {
  $('.hiden-blog').toggleClass('hide-blog');
  $('.hiden-blog').toggleClass('open-blog');
  if ( $('.hiden-blog').is( ".open-blog" ) ) {
    $("#blog-btn").text("Show Less Stories.");
  }else {
    $("#blog-btn").text("Show More Stories.");
  }
});
function changeColor(newColor) {
var elem = document.getElementById('para');
  elem.style.color = newColor;
}


