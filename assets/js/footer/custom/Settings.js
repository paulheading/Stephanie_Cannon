
const GetHeight = () => {

  let About = ".split._right.--about",
      AboutHeight = $(About).css('height'),
      Acting = ".split._right.--acting",
      ActingHeight = $(About).css('height');

  gsap.set(".split._left.--about", { height : AboutHeight });

  gsap.set(".split._left.--acting", { height : ActingHeight });

}
