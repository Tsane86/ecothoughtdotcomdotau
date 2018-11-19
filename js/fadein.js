//JQuery Fader code
$(document).ready(function(){
    setTimeout(function(){
    // Slow can be any number of ms
    $(".fade").fadeIn('3000', function () {
        // Do nothing
        });
    }, 300); // Fade in after 2000 ms (2 secs)
});
$(document).ready(function(){
    setTimeout(function(){
    // Slow can be any number of ms
    $(".fade1").fadeIn('3000', function () {
        // Do nothing
        });
    }, 600); // Fade in after 2000 ms (2 secs)
});
$(document).ready(function(){
    setTimeout(function(){
    // Slow can be any number of ms
    $(".fade2").fadeIn('3000', function () {
        // Do nothing
        });
    }, 900); // Fade in after 2000 ms (2 secs)
});
$(document).ready(function(){
    setTimeout(function(){
    // Slow can be any number of ms
    $(".fade3").fadeIn('3000', function () {
        // Do nothing
        });
    }, 1200); // Fade in after 2000 ms (2 secs)
});
$(document).ready(function(){
    setTimeout(function(){
    // Slow can be any number of ms
    $(".fade4").fadeIn('3000', function () {
        // Do nothing
        });
    }, 1500); // Fade in after 2000 ms (2 secs)
});
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
// Usage:
$(['img/ecothoughtbanner.jpg','img/ecothoughtbannercontact.jpg','img/ecothoughtbannerpor.jpg']).preload();