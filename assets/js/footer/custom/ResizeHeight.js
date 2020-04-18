
function ResizeHeight(e) {

  let ResizeTimer;

  clearTimeout(ResizeTimer);

  ResizeTimer = setTimeout(GetHeight,300);

}

$(GetHeight);

$(window).on('resize',ResizeHeight);
