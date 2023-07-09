const slider = document.querySelector('.card-items');
let isDown = false;
let startX;
let scrollLeft;

// $("#select1").selectator();



// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });


// var w_width = $(window).width();
// var position_obj = [];

// var half_w_width = w_width / 2;
// $(".card-item").each(function () {
// 	position_obj.push($(this).offset().left);
// });

// Draggable.create(".card-items", {
// 	type: "scrollLeft",
// 	edgeResistance: 0.9,
// 	throwProps: !0,
// 	maxDuration: 1.2,
// 	minDuration: 1.2,
// 	lockAxis: true,
// 	throwProps: true,
// 	onThrowUpdate: function () {
// 		var wrapper_left = this.x * -1 + half_w_width;

// 		$(position_obj).each(function (i, val) {
// 			obj_c = i + 1;
// 			if (val < wrapper_left) {
// 				$(".card-item").removeClass("active");
// 				$("#item-" + obj_c).addClass("active");
// 			}
// 		});
// 	},
// 	snap: function (e) {
// 		var span_window_w = $(window).width();
// 		return -Math.round(
// 			Math.round(e / (0.3 * span_window_w)) * (0.3 * span_window_w)
// 		); // This changes the threshold for dragging and snapping the obj's
// 	},
// 	onDragStart: function () {},
// 	onThrowComplete: function () {
// 		TweenLite.set(".card-item", { className: "+=loc" });
// 	}
// }),
// 	TweenMax.set(".card-items", {
// 		overflow: "scroll"
// 	})
// 	// $(".card-items").scroll(function () {
// 	// 	$(".parallax").each(function () {
// 	// 		var leftOffset = $(this).offset().left;
// 	// 		var element_w = $(this).width();

// 	// 		leftOffset < w_width &&
// 	// 			leftOffset + element_w > 0 &&
// 	// 			TweenLite.to($(this), 1.2, {
// 	// 				xPercent:
// 	// 					((w_width - leftOffset) / w_width) * $(this).attr("data-velocity"),
// 	// 				overwrite: 0
// 	// 			});
// 	// 	});
// 	// });

//$( document ).ready(function() {
  // const toggleForm = () => {
  //   const container = document.querySelector(".container");
  //   container.classList.toggle("active");
  // };

//})

$( document ).ready(function() {


var options = {
'templateSelection': custom_template,
'templateResult': custom_template,
}
// $('#select2_my_id').select2(options);
$('.select2-container--default .select2-selection--single').css({'height': '45px','background': '#f1f1f1','border': 'none'});


  // $(".nav-tabs a").click(function(){
  //   $(this).tab('show');
  // });
  // $('.nav-tabs a').on('show.bs.tab', function(){
  //   alert('The new tab is about to be shown.');
  // });
  // $('.nav-tabs a').on('shown.bs.tab', function(){
  //   alert('The new tab is now fully shown.');
  // });
  // $('.nav-tabs a').on('hide.bs.tab', function(e){
  //   alert('The previous tab is about to be hidden.');
  // });
  // $('.nav-tabs a').on('hidden.bs.tab', function(){
  //   alert('The previous tab is now fully hidden.');
  // });

$('#menu-action').on('click',function() {
  $('.sidebar').toggleClass('active');
  $('.main').toggleClass('active');
  $(this).toggleClass('active');

  if ($('.sidebar').hasClass('active')) {
    $(this).find('i').addClass('fa-close');
    $(this).find('i').removeClass('fa-bars');
  } else {
    $(this).find('i').addClass('fa-bars');
    $(this).find('i').removeClass('fa-close');
  }
});

// Add hover feedback on menu
$('#menu-action').hover(function() {
    $('.sidebar').toggleClass('hovered');
});



// Add Product JS

// Select Option
//----- jQuery Javascript---- //
// get the select box element and store it as '$selecBox'
var $selectbox = $("#selectbox");
// get the image container and store it as '$imageContainer'
var $imagecontainer = $(".images");
// get the current image selection
var selection = $selectbox.data("selected");

// listen for when the selection changes...
// when it does change, run our `changeImageSelection` function
$selectbox.on("change", changeImageSelection);

function changeImageSelection() {
  // change the `selection` variable to the selected option
  selection = $selectbox.val();
  // add a '.loading' class to the $imageContainer
  $imagecontainer.addClass("loading");
  // clear the $imageContainer's selected option
  $imagecontainer[0].dataset.selected = null;

  // set a timout of 1.5 seconds
  setTimeout(function() {
    // remove the '.loading' class from $imageContainer
    $imagecontainer.removeClass("loading");
    // add the currently selected option to $imageContainer
    $imagecontainer[0].dataset.selected = selection;
  }, 1500);
}

// ----- Plain Javascipt ---- //
// const selectbox = document.getElementById("selectbox");
// const imagecontainer = document.querySelector(".images");
// let selection = selectbox.dataset.selected;

// selectbox.addEventListener("change", e => {
//   selection = selectbox.value;
//   imagecontainer.classList.add("loading");
//   imagecontainer.dataset.selected = "";

//   setTimeout(() => {
//     imagecontainer.classList.remove("loading");
//     imagecontainer.dataset.selected = selection;
//   }, 1500);
// });

// var select_id = $('#select_id').data('img-src'); //getter

// $('#select_id').data('img_src',20); //setter
// alert($('#select_id').data('img-src'))
})
$('#image').change(function(){
  var path = $(this).find('option:selected').data('path'); //get source of selected option and store it in variable path
  $('#avatar').attr('src', path); //specify image's source to be variable path
});


function custom_template(obj){
  var data = $(obj.element).data();
  var text = $(obj.element).text();
  if(data && data['img_src']){
    img_src = data['img_src'];
    template = $("<div><img src=\"" + img_src + "\" style=\"height:40px;width: 40px;border: 1px solid gray;border-radius:50%;\"/><p style=\"margin-left: 15px;display: -webkit-inline-box;margin-top: 10.3px;\">" + text + "</p></div>");
    return template;
  }
}
