// hover:
// grey and grey
// grey and blue

// active:
// bounce w/ fireworks

// deactivate:
// cracking + fall apart heart
$( document ).ready(function() {
$(".button").click(function() {

  if ( $(this).hasClass( "deactivate" ) ) {
    $(this).removeClass("deactivate")
  }
  if ( $(this).hasClass( "active" ) ) {
    $(this).addClass("deactivate")
  }
  $(this).toggleClass("animate");
  $(this).toggleClass("active");
  $(this).toggleClass("inactive");
});


// $('.icon-wishlist').on('click', function(){
//   $(this).toggleClass('in-wishlist');
// });
})
