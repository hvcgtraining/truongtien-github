"use strict";

$(document).ready(function () {
  var owl = $("#owl-demo-slide");
  owl.owlCarousel({
    navigation: true,
    items: 3,
    loop: true,
    smartSpeed: 450,
    margin: 15,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      400: {
        items: 2,
        margin: 12
      },
      800: {
        items: 3
      }
    }
  }); // owl-2

  var owl2 = $("#owl-demo-2");
  owl2.owlCarousel({
    navigation: true,
    items: 4,
    loop: true,
    smartSpeed: 450,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      800: {
        items: 4
      }
    }
  }); //slide

  var owl2 = $("#owl-demo-1");
  owl2.owlCarousel({
    navigation: true,
    items: 1,
    loop: true,
    smartSpeed: 450,
    nav: true,
    dots: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  }); //tuyendung

  var owl2 = $("#owl-demo-td");
  owl2.owlCarousel({
    navigation: true,
    items: 1,
    loop: true,
    smartSpeed: 450,
    nav: false,
    dots: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  }); // Lĩnh vực và  lĩnh vực chi tiết

  var owlv = $("#owl-slide-lv");
  owlv.owlCarousel({
    navigation: true,
    items: 1,
    loop: true,
    smartSpeed: 450,
    nav: false,
    dots: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  });
  var owlvct = $("#owl-slide-lv-chitiet");
  owlvct.owlCarousel({
    navigation: true,
    items: 1,
    loop: true,
    smartSpeed: 450,
    nav: false,
    dots: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
  });
});