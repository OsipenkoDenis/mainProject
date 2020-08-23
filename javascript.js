
  $("#navigation").on("click","a:nth-child(5)", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 5000);
  });
