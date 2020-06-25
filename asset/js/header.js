! function(e, n, a) {
    "use strict";

    function s() {
        if (e(".vc_row[id]").length) {
            var a = e(n).scrollTop();
            e(".vc_row[id]").each(function() {
                var n = e(this).attr("id");
                n.length > 2 && (a >= e(this).offset().top - e(".navbar-trans-fixed").outerHeight() - e("#wpadminbar").outerHeight() && e(".navbar-main-menu li:not(.menu-item-has-children) > a").filter('[href="#' + n + '"]').closest("li:not(.menu-item-has-children)").addClass("active").siblings().removeClass("active"))
            })
        }
    }

    function i() {
        var a, s = e(".navbar-header").not(".navbar-trans-fixed").outerHeight(),
            i = e(".menu-wrapper").data("top"),
            t = e("#wpadminbar").outerHeight();
        e("#wpadminbar").length ? (a = t + s, e(".navbar-header").css("margin-top", t)) : a = s, e(n).width() < i ? e(".menu-wrapper").css("padding-top", a + "px") : e("#wpadminbar").length && e(".navbar-header").hasClass("navbar-trans-fixed") ? e(".menu-wrapper").css("padding-top", t + "px") : e(".menu-wrapper").css("padding-top", "0"), e("#wpadminbar").length && e(n).width() < 768 && e("#wpadminbar").css({
            position: "fixed",
            top: "0"
        })
    }

    function t() {
        var a = e(".menu-wrapper").attr("data-top");
        n.outerWidth < a || e(".navbar-header").hasClass("topmenu-arrow") ? (e(".menu-item-has-children i").length || (e("header .menu-item-has-children").append('<i class="fa fa-angle-down"></i>'), e("header .menu-item-has-children i").addClass("hide-drop")), e("header .menu-item-has-children i").on("click", function() {
            e(this).hasClass("animation") || (e(this).parent().toggleClass("is-open"), e(this).addClass("animation"), e(this).parent().siblings().removeClass("is-open").find(".fa").removeClass("hide-drop").prev(".sub-menu").slideUp(250), e(this).hasClass("hide-drop") ? e(this).closest(".sub-menu").length ? e(this).removeClass("hide-drop").prev(".sub-menu").slideToggle(250) : (e(".menu-item-has-children i").addClass("hide-drop").next(".sub-menu").hide(250), e(this).removeClass("hide-drop").prev(".sub-menu").slideToggle(250)) : e(this).addClass("hide-drop").prev(".sub-menu").hide(100).find(".menu-item-has-children a").addClass("hide-drop").prev(".sub-menu").hide(250)), setTimeout(function() {
                e("header .navbar-main-menu i").removeClass("animation")
            }, 250)
        })) : e("header .menu-item-has-children i").remove()
    }

    function o() {
        var n = e("#wpadminbar").length ? e("#wpadminbar").outerHeight() : 0;
        e(".additional-inner-wrap").css("top", n + "px")
    }
    e(n).on("scroll load", function() {
        e(this).scrollTop() >= 30 ? (e(".navbar-header.navbar-trans-fixed").length && (e(".navbar-header.navbar-trans-fixed").not(".fixed-dark").addClass("sone-header-fixed"), e(".fixed-dark").addClass("bg-fixed-dark"), e(".sticky-logo, .header-button-scroll").show(), e(".main-logo, .header-button-default").hide()), e(".right-menu.modern").length && e(".right-menu.modern").closest(".fixed-header").addClass("fixed-header-scroll")) : (e(".navbar-header.navbar-trans-fixed").length && (e(".navbar-header.navbar-trans-fixed").not(".fixed-dark").removeClass("sone-header-fixed"), e(".fixed-dark").removeClass("bg-fixed-dark"), e(".sticky-logo, .header-button-scroll").hide(), e(".main-logo, .header-button-default").show()), e(".right-menu.modern").length && e(".right-menu.modern").closest(".fixed-header").removeClass("fixed-header-scroll"))
    }), e(n).width() >= e(".menu-wrapper").data("top") && e('.navbar-main-menu li:not(.menu-item-has-children) > a[href^="#"]').on("click", function(n) {
        n.preventDefault();
        var a = e(this).attr("href");
        e(a).length && e("html,body").animate({
            scrollTop: e(a).offset().top - e(".navbar-trans-fixed").outerHeight() - e("#wpadminbar").outerHeight()
        }, "slow")
    }), e(".toggle-menu").on("click", function(a) {
        a.preventDefault();

        e('<div class="mask-overlay">')
        .hide().appendTo("body")
        .fadeIn("fast"), 
        e("html").addClass("no-scroll sidebar-open")
        //.height(n.innerHeight + "px") 

        e("#wpadminbar").length ? e(".sidebar-open .navbar-nav").css("top", "46px") : e(".sidebar-open .navbar-nav").css("top", "0")

    }), e(".close-menu, .mask-overlay").on("click", function(n) {
        n.preventDefault(), e("html").removeClass("no-scroll sidebar-open").height("auto"), e(".mask-overlay").remove()
    }), e(".search-icon-wrapper.ico-style .close-search").on("click", function() {
        e(this).parent().toggleClass("is-active"), e(this).parent().hasClass("is-active") && setTimeout(function() {
            e(".search-icon-wrapper.ico-style .search-field").focus()
        }, 300)
    }), e(a).on("click", function(n) {
        e(n.target).closest(".search-icon-wrapper.ico-style").length || e(".ico-style .close-search").parent().removeClass("is-active"), n.stopPropagation()
    }), e(".additional-nav").on("click", function(n) {
        n.preventDefault(), e(".additional-menu-wrapper").addClass("menu-open"), e(".menu-wrapper").addClass("additional-menu-open")
    }), e(".additional-nav-close, .additional-menu-overlay").on("click", function() {
        e(".additional-menu-wrapper").removeClass("menu-open"), e(".menu-wrapper").removeClass("additional-menu-open")
    }), e(n).on("load", function() {
        ! function() {
            e(".aside-nav").on("click", function() {
                return e(".aside-menu").toggleClass("active-menu"), e(".navbar-header").toggleClass("active-menu"), !1
            }), e(".menu-wrapper:not(.unit) .menu-item-has-children > a").on("click", function(e) {
                e.preventDefault()
            });
            var a = e(".menu-wrapper").data("top");
            if (n.outerWidth >= a ? (e(".menu-wrapper").on("click", function(n) {
                    n.target.closest(".aside-menu") || e(".sub-menu-open").slideUp(250)
                }), e(".aside-menu .menu-item-has-children a").addClass("hide-drop"), e(".aside-menu .menu-item a").on("click", function() {
                    e(this).parent().hasClass("menu-item-has-children") && (e(this).hasClass("hide-drop") ? e(this).closest(".sub-menu").length ? (e(this).removeClass("hide-drop").next(".sub-menu").slideDown(250).removeClass("sub-menu-open"), e(this).parent().siblings().find(".sub-menu").slideUp(250).addClass("sub-menu-open")) : (e(".menu-item-has-children a").addClass("hide-drop").next(".sub-menu").hide(250).removeClass("sub-menu-open"), e(this).removeClass("hide-drop").next(".sub-menu").slideToggle(250).toggleClass("sub-menu-open")) : (e(this).addClass("hide-drop").next(".sub-menu").hide(250).find(".menu-item-has-children a").addClass("hide-drop").next(".sub-menu").hide(250), e(this).next(".sub-menu").removeClass("sub-menu-open")))
                })) : e(".menu-item-has-children a").removeClass("hide-drop"), e(".aside-fix").length && e(n).width() > a) {
                var s = e(".logo span, .logo img").outerWidth();
                e(".logo").css("top", s + "px")
            }
        }()
    }), e(n).on("scroll", function() {
        s()
    }), e(n).on("load resize", function() {
        i(), t(), o(), s()
    }), n.addEventListener("orientationchange", function() {
        o(), i(), t()
    })
}(jQuery, window, document);



//Sticky
$(document).ready(function() {
    $('.left-blog-d, .right-blog-d, .blog-single .left-blog-d, .blog-single .right-blog-d').theiaStickySidebar({
        additionalMarginTop: 90,
        additionalMarginBottom: 50
    });
});


//Anchor
$(function(){
  $('.faq a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
  
    $('html, body').animate({scrollTop: dn-100}, 800);
    
   
  });
});