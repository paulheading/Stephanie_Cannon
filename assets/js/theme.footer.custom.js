"use strict";var GetHeight=function(){var e=".split._right.--about",t=$(e).css("height"),i=$(e).css("height");gsap.set(".split._left.--about",{height:t}),gsap.set(".split._left.--acting",{height:i})};function ResizeHeight(e){var t;clearTimeout(t),t=setTimeout(GetHeight,300)}function RespondAccordion(){var e=$(this),t="--open";gsap.timeline();e.hasClass(t)?e.removeClass(t):($(".row._embed").removeClass(t),e.addClass(t))}$(GetHeight),$(window).on("resize",ResizeHeight),$(".row._embed").click(RespondAccordion);