"use strict";

$(".nav-box").click(function (e) {
  e.stopPropagation();
  var navsub = $(this).find(".sibar-menu-sub-1");
  var iconmenu = $(this).find("i");

  if ($(this).hasClass('active') == false) {
    $('.nav-box.active').removeClass('active').find('.sibar-menu-sub-1').slideUp('fast');
    $(".nav-box").find("i").removeClass('rotate-icon');
    $(this).addClass('active');
    $(this).find("i").addClass("rotate-icon");
    navsub.fadeIn('swing');
  } else {
    $('.nav-box.active').removeClass('active').find('.sibar-menu-sub-1').slideUp('fast');
    $('.nav-box:first-child').addClass('active');
    $(this).find("i").removeClass('rotate-icon');
  } // if($(this).hasClass('selected') == false) {
  //     $(".nav-box.selected").removeClass('selected').find('.sibar-menu-sub-1').slideUp('fast');
  //     $(this).addClass('selected');
  //     navsub.fadeIn('swing');
  // } else {
  //     $(".nav-box.selected").removeClass('selected').find('.sibar-menu-sub-1').slideUp('fast');
  // } 

});
$('.op-menu').click(function () {
  $(this).toggleClass('clo-menu');
  $(".menu-1").toggleClass('show-menu'); // $("body").addClass("wrapper-bg-menu");
});
$("body").click(function (e) {
  console.log(e.target.tagName);
  $('.nav-box.active').removeClass('active').find('.sibar-menu-sub-1').slideUp('fast');
  $('.nav-box:first-child').addClass('active');
  $('.nav-box').find("i").removeClass('rotate-icon');

  if (e.target.tagName == 'BODY') {
    $(".menu-1").removeClass('show-menu');
    $(".op-menu").removeClass('clo-menu');
  }
});