$(document).ready(function() {
    $('.obo_change .change_item').eq(0).addClass('active').fadeIn(4000);

    setInterval('blockAnimate();', 10000);
});


function blockAnimate() {
    var length = $('.obo_change .change_item').length - 1;
    $('.obo_change .change_item').each(function(index) {
        if($(this).hasClass('active') && index != length) {
            $(this).removeClass('active').fadeOut(500).next('.change_item').addClass('active').delay(1000).fadeIn(4000);
            return false;
        } else if (index == length) {
            $(this).removeClass('active').fadeOut(500);
            $('.obo_change .change_item').eq(0).addClass('active').delay(1000).fadeIn(4000);
            return false;
        }
    });
};