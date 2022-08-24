// Preloader
var preloader = document.getElementById("loading");

function runLoading() {
    preloader.style.display = "none";
}

$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $("header").removeClass("nav-vanish");
    } else {
        $("header").addClass("nav-vanish home-page-menu");
    }
})

// Hide header on scroll down
var didScroll;
var lastScrollTop = 300;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('#header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('#header').removeClass('nav-up').addClass('nav-down home-page-menu');
        }
    }

    lastScrollTop = st;
}

// Flickity options for Blog Area, defaults
var options = {
    cellAlign: "left",
    contain: true,
    groupCells: 3,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: false,
    draggable: true,
};

// enable prev/next buttons at 768px
if (matchMedia("screen and (min-width: 320px)").matches) {
    options.groupCells = 1;
}

// disable draggable at 1200px
if (matchMedia("screen and (min-width: 600px)").matches) {
    options.groupCells = 2;
}

// disable draggable at 1200px
if (matchMedia("screen and (min-width: 1500px)").matches) {
    options.groupCells = 3;
}

$(".news-blog-area .main-carousel").flickity(options);

// Flickity for Process Area
$(".process-slider-area .main-carousel").flickity({
    cellAlign: "left",
    contain: true,
    groupCells: 1,
    wrapAround: true,
    autoPlay: 6000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    draggable: false,
    fade: true,
});

// Flickity for Article Area
$(".article-page .main-carousel").flickity({
    cellAlign: "left",
    contain: true,
    groupCells: 1,
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    draggable: false,
    fade: true,
});

// Search Field Visible Effect
$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $("body").addClass("overflow");
    });
});

// Search Field Remove Effect
$(document).ready(function() {
    $(".menu-cross-icon a").click(function() {
        $("body").removeClass("overflow");
    });
});

// Mobile Menu Visible
$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $(".mobile-menu").addClass("menu-visible");
        $("main").addClass("main-hidden");
        $("footer").addClass("menu-overflow1");
    });
});

// Mobile Menu Hidden
$(document).ready(function() {
    $(".menu-cross-icon a").click(function() {
        $(".mobile-menu").removeClass("menu-visible");
        $("main").removeClass("main-hidden");
        $("footer").removeClass("menu-overflow1");
    });
});

$(document).ready(function() {

    gsap.registerPlugin(ScrollTrigger);

    // NavBar Hidden When Start Scroll
    ScrollTrigger.create({
        trigger: 'main',
        start: '0% 0%',
        end: "400 top",
        markers: false,
        toggleClass: { targets: '.all-page-menu', className: 'active' },
    });

    // Gradient Fade Out
    ScrollTrigger.create({
        trigger: '.next-fade',
        start: '0% 88%',
        end: "130% top",
        markers: false,
        toggleClass: { targets: '.bg-fade-out', className: 'active' },
    });

    // Same Banner Fade Out
    ScrollTrigger.create({
        trigger: '.next-fade',
        start: '0% 88%',
        end: "130% top",
        markers: false,
        toggleClass: { targets: '.same-banner', className: 'active' },
    });

    // Next Section Fade
    var nextFade = gsap.timeline({
        scrollTrigger: {
            trigger: ".same-banner",
            start: "100% 85%",
            end: "bottom 0%",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });

    nextFade.from(".next-fade", {
        ease: "power3.inOut",
        autoAlpha: 0,
    });

});


$(document).ready(function() {
    // About Area Animation
    gsap.registerPlugin(ScrollTrigger);

    var aboutCircle = gsap.timeline({
        scrollTrigger: {
            trigger: ".can",
            start: "-100 65%",
            end: "top top",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });

    aboutCircle.from(".can", {
        duration: 2,
        autoAlpha: 0,
        stagger: 0.35,
    });

    // Circle Free Floating Effect

    console.clear();

    const randomX = random(1, 30);
    const randomY = random(1, 30);
    const randomDelay = random(0, 1);
    const randomTime = random(3, 2);
    const randomTime2 = random(5, 10);
    const randomAngle = random(0, 0);

    const cans = gsap.utils.toArray(".can");
    cans.forEach((can) => {
        gsap.set(can, {
            x: randomX(-1),
            y: randomX(1),
            rotation: randomAngle(0),
        });

        moveX(can, 1);
        moveY(can, -1);
        rotate(can, 1);
    });

    function rotate(target, direction) {
        gsap.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            // delay: randomDelay(),
            ease: Sine.easeInOut,
            onComplete: rotate,
            onCompleteParams: [target, direction * -1],
        });
    }

    function moveX(target, direction) {
        gsap.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1],
        });
    }

    function moveY(target, direction) {
        gsap.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1],
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }

});

// GSAP Animation

$(document).ready(function() {
    // News Blog Area Animation
    gsap.registerPlugin(ScrollTrigger);

    var newsBlog = gsap.timeline({
        scrollTrigger: {
            trigger: ".news-blog-container",
            start: "-100 85%",
            end: "top top",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });

    newsBlog.from(".single-blog", {
        duration: 2,
        autoAlpha: 0,
        stagger: 0.3,
    }), newsBlog.from(".blog-pagination", {
            duration: 2,
            autoAlpha: 0,
        },
        "-=1.7"
    );

    // Lets Talk Area Animation
    gsap.registerPlugin(ScrollTrigger);

    var letsTalk = gsap.timeline({
        scrollTrigger: {
            trigger: ".lets-talk-content h5",
            start: "-100 85%",
            end: "top top",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });

    letsTalk.from(".lets-talk-content h5", {
            duration: 1.5,
            autoAlpha: 0,
        }),
        letsTalk.from(
            ".lets-talk-content a", {
                duration: 1,
                autoAlpha: 0,
                stagger: 0.3,
            },
            "-=1"
        );
});

$(document).ready(function() {
    // Home Circle Parallax
    var talkParallax = gsap.timeline();

    talkParallax.to(".talk-human", {
            scrollTrigger: {
                trigger: ".lets-talk-area",
                start: "top 80%",
                end: "60% 30%",
                markers: false,
                scrub: 0.5,
            },
            y: -130,
        }),
        talkParallax.to(".talk-blue", {
            scrollTrigger: {
                trigger: ".lets-talk-area",
                start: "top 70%",
                end: "60% 30%",
                markers: false,
                scrub: 0.5,
            },
            y: -130,
        }),
        talkParallax.to(".talk-computer", {
            scrollTrigger: {
                trigger: ".lets-talk-area",
                start: "top 70%",
                end: "60% 30%",
                markers: false,
                scrub: 0.5,
            },
            y: -80,
        }),
        talkParallax.to(".talk-green", {
            scrollTrigger: {
                trigger: ".lets-talk-area",
                start: "top 80%",
                end: "60% 30%",
                markers: false,
                scrub: 0.5,
            },
            y: -130,
        }),
        talkParallax.to(".talk-yellow", {
            scrollTrigger: {
                trigger: ".lets-talk-area",
                start: "top 63%",
                end: "60% 30%",
                markers: false,
                scrub: 0.5,
            },
            y: -80,
        });

    // All Banner Animation
    var allBanner = gsap.timeline();

    allBanner.from(
        ".banner-circle", {
            duration: 1.8,
            autoAlpha: 0,
            stagger: 0.3,
        });


    // All Circle Parallax
    var allBParallax = gsap.timeline();

    allBParallax.to(".circle-1", {
            scrollTrigger: {
                trigger: ".starting-circles",
                start: "20% 45%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-40vh",
        }),
        allBParallax.to(".circle-2", {
            scrollTrigger: {
                trigger: ".starting-circles",
                start: "70% 55%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-60vh",
        }),
        allBParallax.to(".circle-3", {
            scrollTrigger: {
                trigger: ".starting-circles",
                start: "75% 45%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-68vh",
        }),
        allBParallax.to(".circle-4", {
            scrollTrigger: {
                trigger: ".starting-circles",
                start: "100% 55%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-50vh",
        }),
        allBParallax.to(".circle-5", {
            scrollTrigger: {
                trigger: ".starting-circles",
                start: "100% 55%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-60vh",
        }),
        allBParallax.to(".circle-6", {
            scrollTrigger: {
                trigger: ".starting-circles",
                start: "100% 50%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-55vh",
        });
});




$(document).ready(function() {

    // Home Banner Animation
    var homeBanner = gsap.timeline();

    homeBanner.from(".hero-video-text h1", {
            duration: 1.5,
            autoAlpha: 0,
            delay: 0.8,
        }),
        homeBanner.from(
            ".hero-video-text h1 span", {
                duration: 1.5,
                autoAlpha: 0,
            },
            "-=1.9"
        ),
        homeBanner.from(
            ".hero-video-text a", {
                duration: 1,
                autoAlpha: 0,
            },
            "-=1.1"
        ),
        homeBanner.from(
            ".home-banner-cicle", {
                duration: 1.3,
                autoAlpha: 0,
                stagger: 0.17,
            },
            "-=1.2"
        );

    // Home Circle Parallax
    var homeBParallax = gsap.timeline();

    homeBParallax.to(".home-banner-cicle1", {
            scrollTrigger: {
                trigger: ".hero-video-area",
                start: "60% 55%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-90%",
        }),
        homeBParallax.to(".home-banner-cicle2", {
            scrollTrigger: {
                trigger: ".hero-video-area",
                start: "70% 55%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-120%",
        }),
        homeBParallax.to(".home-banner-cicle3", {
            scrollTrigger: {
                trigger: ".hero-video-area",
                start: "75% 55%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-120%",
        }),
        homeBParallax.to(".home-banner-cicle4", {
            scrollTrigger: {
                trigger: ".hero-video-area",
                start: "100% 55%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-120%",
        }),
        homeBParallax.to(".home-banner-cicle5", {
            scrollTrigger: {
                trigger: ".hero-video-area",
                start: "100% 55%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-120%",
        }),
        homeBParallax.to(".home-banner-cicle6", {
            scrollTrigger: {
                trigger: ".hero-video-area",
                start: "100% 80%",
                end: "bottom 0%",
                markers: false,
                scrub: 0.5,
            },
            y: "-150%",
        });
});

$(document).ready(function() {
    // Process Area Animation
    gsap.registerPlugin(ScrollTrigger);

    var process = gsap.timeline({
        scrollTrigger: {
            trigger: ".process-area",
            start: "top 0%",
            end: "bottom 65%",
            toggleActions: "play reverse play reverse",
            markers: false,
        },
    });

    process.to(".process-bg", {
        duration: 0.4,
        backgroundImage: "linear-gradient(20.92deg, rgb(0, 166, 235) 55.59%, rgb(142, 0, 216) 85.66%)",
    });

    // Process Text Animation
    gsap.registerPlugin(ScrollTrigger);

    var processText = gsap.timeline({
        scrollTrigger: {
            trigger: ".process-area",
            start: "top 0%",
            end: "bottom 65%",
            toggleActions: "play reverse play reverse",
            markers: false,
        },
    });

    processText.from(".process-area h5, .process-area h5 span", {
            duration: 0.8,
            autoAlpha: 0,
        }),
        processText.from(
            ".process-area p", {
                duration: 0.8,
                autoAlpha: 0,
                stagger: 0.3,
            },
            "-=0.6"
        ),
        processText.from(
            ".process-btn", {
                duration: 0.8,
                autoAlpha: 0,
            },
            "-=0.5"
        );
});


$(document).ready(function() {
    var textWrapper = document.querySelector(".testimonial-content h5");

    textWrapper.innerHTML = textWrapper.textContent.replace(/[\s\S]/g, "<span class='letter-wrap'>$&</span>");

    gsap.registerPlugin(ScrollTrigger);

    var testimonialText = gsap.timeline({
        scrollTrigger: {
            trigger: ".testimonial-content h5",
            start: "-100 85%",
            end: "top top",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });

    testimonialText.from(".testimonial-content .havas-logo, .article-testimonial", {
            duration: 1.5,
            autoAlpha: 0,
        }),
        testimonialText.from(
            ".testimonial-content h5 .letter-wrap", {
                duration: 0.5,
                autoAlpha: 0,
                stagger: 0.018,
            },
            "-=1"
        ),
        testimonialText.from(
            ".testimonial-content p", {
                duration: 1,
                autoAlpha: 0,
            },
            "-=0.5"
        );
});


$(document).ready(function() {
    // Experience Number Animation
    gsap.registerPlugin(ScrollTrigger);

    var circle = gsap.timeline({
        scrollTrigger: {
            trigger: ".experience-content",
            start: "-500 45%", // originally "top 20%"
            end: "70% top",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });

    circle.from(".experience-content h5", {
            duration: 1,
            autoAlpha: 0,
        }),
        circle.from(
            ".experience-content p", {
                duration: 1,
                autoAlpha: 0,
            },
            "-=0.6"
        ),
        circle.from(
            ".circle-num-inner", {
                duration: 2,
                autoAlpha: 0,
                stagger: 0.7,
            },
            "-=0.5"
        ),
        circle.to(
            "circle.complete", {
                duration: 1.8,
                strokeDashoffset: 0,
                stagger: 0.75,
                ease: "power1.out",
                autoAlpha: 1,
            },
            "-=2.8"
        ),
        circle.from(
            ".experience-img", {
                duration: 1,
                autoAlpha: 0,
            },
            "-=1.8"
        );
});