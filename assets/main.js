/*** intersecton observer animations */

// get all animations
const animated = document.querySelectorAll('.animate__animated');
const options = { root: null };

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // if animation intersects with the page
        if(entry.intersectionRatio > 0) {
            // get all classes on animation (object)
            var animTypes = entry.target.classList;

            // if animation comes from left, remove the fadeIn effect and add fadeOut
            if (animTypes.contains("animate__fadeInLeft")) {
                console.log(entry.target.id, " fade in from left");
                // entry.target.classList.remove('animate__fadeInLeft');
                // entry.target.classList.add('animate__fadeOutLeft');
            }

            // if animation comes from right, remove the fadeIn effect and add fadeOut
            else if (animTypes.contains("animate__fadeInRight")) {
                console.log(entry.target.id, " fade in from right");
                // entry.target.classList.remove('animate__fadeInRight');
                // entry.target.classList.add('animate__fadeOutRight');
            }
        }
    });
}, options);

animated.forEach(element => {
    observer.observe(element);
});


