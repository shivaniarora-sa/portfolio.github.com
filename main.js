// MENU SHOW Y HIDDEN
var navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
// MENU SHOW
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// MENU HIDDEN
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


//Skills

$(function () {
    $(".skill1").click(function () {
        $(".skill_list1").slideToggle(1000)
    })
})
$(function () {
    $(".skill2").click(function () {
        $(".skill_list2").slideToggle(1000)
    })
})
$(function () {
    $(".skill3").click(function () {
        $(".skill_list3").slideToggle(1000)
    })
})

//qualification
$(function () {
    $("#b1").click(function () {
        $("#qual1").show()
        $("#qual2").hide()
        $("#b2").removeClass("active")
        $("#b1").addClass("active")
    })
})
$(function () {
    $("#b2").click(function () {
        $("#qual2").show()
        $("#qual1").hide()
        $("#b1").removeClass("active")
        $("#b2").addClass("active")
    })
})
// SERVICES MODAL

$(function () {
    $("#modal1").click(function () {
        $("#modal1_open").addClass("active_modal")
    })
   
})
$(function () {
    $(".services_modal-close").click(function () {
        $(".services_modal").removeClass("active_modal")
    })
})
$(function () {
    $("#modal2").click(function () {
        $("#modal2_open").addClass("active_modal")
    })
   
})
$(function () {
    $(".services_modal-close").click(function () {
        $(".services_modal").removeClass("active_modal")
    })
})
$(function () {
    $("#modal3").click(function () {
        $("#modal3_open").addClass("active_modal")
    })
   
})
$(function () {
    $(".services_modal-close").click(function () {
        $(".services_modal").removeClass("active_modal")
    })
})



//  CHANGE BACKGROUND HEADER
function scrolHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrolHeader)


// show scroll up

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 50) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');

    window.addEventListener('scroll', scrollUp)
}