$(document).ready(function () {
  $(".custom-select").select2();
  $('[data-toggle="tooltip"]').tooltip();
  var mainSwiper = new Swiper(".main-slider", {
    observer: true, // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var newsSwiper = new Swiper(".news-slider", {
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $("#info-card-toggle").on("click", function () {
    $(".user-info-card").toggleClass("collapsed");
    $("#user-info-other-side").toggleClass("collapsed");
    if ($(".user-info-card").hasClass("collapsed")) {
      $(this).attr("data-original-title", "تكبير القائمة");
    } else {
      $(this).attr("data-original-title", "تصغير القائمة");
    }
    $(this).blur();
    var interval = setInterval(() => {
      mainSwiper.update();
    }, 5);
    setTimeout(() => {
      clearInterval(interval);
    }, 300);
  });
  $("#fav-toggle").on("click", function () {
    $("#fav-list").slideToggle();
    $("#fav-toggle i").toggleClass("fa-chevron-up");
    $("#fav-toggle i").toggleClass("fa-chevron-down");
  });
  $("#s-btn").click(function () {
    $(".search-box").slideToggle(300);
  });
  $(".close-search-btn,.search-submit-btn").click(function () {
    $(".search-box").slideUp(300);
  });
  // intializing datepicker
  if($(".date-inline").length){
    $(".date-inline").datepicker({
      format: "mm/dd/yyyy",
      autoclose: true,
    });
  }

  // open event for date picker
  $(".date-toggle").click(function () {
    $(this).siblings(".date-inline").datepicker("show");
  });
  $("#showResult").on('click',function(){
    $("#voteResult").css({'display':'block'});
    $("#votePoll").css({'display':'none'});
  });
  $("#pollBack").on('click',function(){
    $("#voteResult").css({'display':'none'});
    $("#votePoll").css({'display':'block'});
  })
});
