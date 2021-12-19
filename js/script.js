$(document).ready(function(){

// counter start
$('.counter').counterUp({
    delay: 100,
    time: 2000
});
// counter end

// wow js start
wow = new WOW(
    {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       true,       
    live:         true        
  }
  )
  wow.init();
// wow js end

//parallax start
$('.parallax-window').parallax({imageSrc: 'images/p1.jpg'});
//parallax end

// aos start
AOS.init({
  duration: 2000,
});
// aos end

// curved text start
var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });
// curved text end

});