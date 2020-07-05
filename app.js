(function() {

    function createButton() {
        var button = document.createElement("button");

        button.classList.add("backToTop", "hidden");
        button.textContent = "Powrót do góry";
        document.body.appendChild(button);

        return button;
    }

    function animateScroll() {

        if(window.scrollY > 0) {
            window.scrollTo(0, window.scrollY-5);
            setTimeout(animateScroll, 10);
        }

    }

    var button = createButton();

    button.addEventListener("click", function(e) {
        e.stopPropagation();
        
        animateScroll();
        
        console.log('jedziemy na 0')

    }, false);
    
    window.addEventListener("scroll", function(e) {

        if(window.scrollY >= 100) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }

    }, false)


})(); 