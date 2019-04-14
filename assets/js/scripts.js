---
layout: none
---

$(document).ready(siteFunc);
$(document).ready(smoothScroll);

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

$('.title._embed').click(openAcc);
