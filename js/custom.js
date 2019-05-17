
        $(document).ready(function () {
            $('.button-left').click(function () {
                $('.sidebar').toggleClass('fliph');
            });
			$('[data-toggle="popover"]').popover();
            $(document).ready(function () {
                $(document).on('click', '.cta', function () {
                    $(this).toggleClass('active')
                });
            });


            $(document).ready(function () {
                $(".hamburger").click(function () {
                    $('.sidebar-menu').removeClass("flowHide");
                    $(".sidebar-menu").toggleClass("full-side-bar");
                    $('.nav-link-name').removeClass('name-hide');
                    $('.bgfix').toggleClass("showbgfix");
					$(".notification-block").removeClass("active");
                });
            });
			$(document).ready(function () {
                $(".notifications-bell").click(function () {
                    $(".notification-block").toggleClass("active");
					$('.bgfix').toggleClass("showbgfix");
					$(".sidebar-menu").removeClass("full-side-bar");
					$(".cta").removeClass("active");
                });
            });

            $(document).ready(function () {
                $(".nav-link").hover(function () {
                    $('.sidebar-menu').removeClass("flowHide");
                    $(this).addClass('tax-active');


                }, function () {
                    $('.sidebar-menu')
                        .addClass("flowHide");
                    $(this).removeClass('tax-active');

                });
            });
        });
	$(document).click( function(){
    $('.sidebar-menu').removeClass("flowHide");
		 
});
	$('.bgfix').click( function(){
    $('.sidebar-menu').removeClass("flowHide");
    $(".sidebar-menu").removeClass("full-side-bar");
	$('.nav-link-name').removeClass('name-hide');
	$('.bgfix').toggleClass("showbgfix");
	$('.cta').removeClass('active')
	$(".notification-block").removeClass("active");
});
	$('.notification-close').click( function(){
    $('.bgfix').toggleClass("showbgfix");
	$('.cta').removeClass('active')
	$(".notification-block").removeClass("active");
});
