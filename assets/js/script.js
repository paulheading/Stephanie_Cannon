---
layout: none
---

function openAcc() {
  var ting = $(this),
      sibling = ting.siblings('.wrap._embed');
  if(ting.hasClass('--open')) {
    var closeTl = new TimelineMax();
    closeTl
    .to(sibling,0.3,{maxHeight:0})
    .to(sibling,0.3,{opacity:0})
    .set(ting,{className:'-=--open'});
  } else {
    var openTl = new TimelineMax();
    openTl
    .to(sibling,0.3,{maxHeight:308})
    .to(sibling,0.3,{opacity:1})
    .set(ting,{className:'+=--open'});
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
$('.title._embed').click(openAcc);
