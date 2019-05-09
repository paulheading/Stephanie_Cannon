---
layout: none
---

function openAcc() {
  var ting = $(this),
      tingWrap = ting.children('.wrap._embed'),
      tingIcon = ting.children('.acc'),
      closeTl = new TimelineMax(),
      openTl = new TimelineMax();

  if(ting.hasClass('--open')) {
    TweenMax.set(ting,{className:'-=--open'});
    // closeTl
    // .add('now')
    // .to(tingIcon,0.3,{rotation:0},'now')
    // .to(tingWrap,0.3,{maxHeight:0},'now')
    // .set(tingWrap,{opacity:0})
    // .set(ting,{className:'-=--open'});
  } else {
    openTl
    .set('.row._embed',{className:'-=--open'})
    .set(ting,{className:'+=--open'})
    ;
    // .add('then')
    // .to('.acc',0.3,{rotation:0},'then')
    // .to('.wrap._embed',0.3,{maxHeight:0},'then')
    // .set('.wrap._embed',{opacity:0})
    // .add('now')
    // .to(tingIcon,0.3,{rotation:225},'now')
    // .to(tingWrap,0.3,{maxHeight:308},'now')
    // .to(tingWrap,0.3,{opacity:1})
    // .set(ting,{className:'+=--open'});
  }
}

function getHeight() {
  setTimeout(function(){
    var about = $('.split._right.--about')[0].clientHeight;
    TweenMax.set('.img._about',{height:about});
    var acting = $('.split._right.--acting')[0].clientHeight;
    TweenMax.set('.img._acting',{height:acting});
  }, 1000);
}

function rszHeight(e) {
  var rszTimer;
  clearTimeout(rszTimer);
  rszTimer = setTimeout(function(){
    getHeight();
  },300);
}

function setup() {
  getHeight();
  siteFunc();
}

$(document).ready(setup);
$(window).on('resize',rszHeight);
$('.row._embed').click(openAcc);
