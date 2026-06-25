const navLinks = document.querySelectorAll(".nav-links a");
const img = document.querySelector(".UI-right");


// Navbar active link on scroll
window.addEventListener("scroll", () => {

    let scrollPosition = window.scrollY + 150;


    document.querySelectorAll("section[id]").forEach(section => {

        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;


        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){


            navLinks.forEach(link => {
                link.classList.remove("active");
            });


            let activeLink = document.querySelector(
                `.nav-links a[href="#${section.id}"]`
            );


            if(activeLink){
                activeLink.classList.add("active");
            }

        }

    });



    // Image slide animation on scroll
    if(img){

        let imagePosition = img.getBoundingClientRect().top;


        if(imagePosition < window.innerHeight - 100){

            img.classList.add("show");

        }

    }


});