// Parallaxing + add class active on scroll
$(document).scroll(function() {
  // parallaxing
  var $movebg = $(window).scrollTop() * -0.3;
  $(".portion").css("background-positionY", $movebg + "px");

  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 100;
  $("nav a").each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position() &&
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $("nav a").removeClass("active");
      currLink.addClass("active");
    }
  });

  // changing padding of nav a on scroll
  if (scrollPos > 250) {
    $("nav a").addClass("small");
    $("nav img").addClass("move");
    $("nav span").removeClass("movetext");
  } else {
    $("nav a").removeClass("small");
    $("nav img").removeClass("move");
    $("nav span").addClass("movetext");
  }
});
