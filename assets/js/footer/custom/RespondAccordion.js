
function RespondAccordion() {

  let ting = $(this),
      open = "--open",
      tl   = gsap.timeline();

  if(ting.hasClass(open)) {

    ting.removeClass(open);

  } else {

    $(".row._embed").removeClass(open);

    ting.addClass(open);

  }
}

$(".row._embed").click(RespondAccordion);
