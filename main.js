$(function(){
    // 메일 순차등장
  let contactPlayed = false;

  $(window).on('scroll', function(){

    const contactTop = $('#contact').offset().top;
    const scroll = $(window).scrollTop();
    const winH = $(window).height();

    if(!contactPlayed && scroll > contactTop - winH + 100){

      $('.letter').each(function(i){
        setTimeout(() => {
          $(this).addClass('on');
        }, 60 * i);
      });

      contactPlayed = true;
    }

  });

});


// 헤더 그림자
$(window).scroll(function(){

  if($(this).scrollTop() > 50){
    $('.site_header').addClass('scrolled');
  } else {
    $('.site_header').removeClass('scrolled');
  }

});


// active menu
$(window).scroll(function(){

  $('section').each(function(){
    var top = $(this).offset().top - 100;
    var bottom = top + $(this).outerHeight();
    var scroll = $(window).scrollTop();
    var id = $(this).attr('id');

    if(scroll >= top && scroll < bottom){
      $('.nav_ul a').removeClass('active');
      $('.nav_ul a[href="#'+id+'"]').addClass('active');
    }
  });

});


// top버튼 스무스
$('.return_top').click(function(e){
  e.preventDefault();

  $('html, body').animate({
    scrollTop:0
  }, 600);
});


// 프로젝트 등장 애니메이션
$(window).on('scroll', function(){

  $('.project_list li').each(function(){

    var pos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var win = $(window).height();

    if(scroll > pos - win + 100){
      $(this).addClass('show');
    }

  });

});

// 메인 타이틀
$('.main_title span').each(function(i){
  setTimeout(()=>{
    $(this).addClass('on');
  }, 200 * i);
});

