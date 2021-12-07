$(document).ready(function(){
    $(window).scroll(function(){
        if( $(this).scrollTop() >= 86)
        {
            $("nav").css({
                "position": "fixed",
                "top": 0,
                "right": 0,
                "left": 0,
                "opacity": 0.7,
                "z-index": 9999
            })
        }
        else{
            $("nav").css({
                "position": "relative",
                "opacity": 1
            })
        }
    })

    $("div.illutr > div:first-child").addClass("animate__animated animate__slideInLeft")
    $("div.illutr > div:last-child").addClass("animate__animated animate__slideInRight")

    $("div.slide > div:first-child").addClass("wow animate__slideInLeft")
    $("div.slide > div:last-child").addClass("wow animate__slideInRight")

    $("div.post > div:last-child").addClass("wow animate__slideInRight")
    $("div.post > div:first-child").addClass("wow animate__slideInLeft")
    
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
    wow.init();
})
