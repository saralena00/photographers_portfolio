if(window.matchMedia("(min-width: 851px)").matches){function a(){$(".slideshow ul").animate({left:"-=33.3vw"},1500,function(){$(".slideshow ul").css("left",""),$(".slide").first().appendTo(".slideshow ul")})}function b(){$(".slideshow ul").animate({left:"+=33.3vw"},1500,function(){$(".slideshow ul").css("left",""),$(".slide").last().prependTo(".slideshow ul")})}console.log("hei"),$(".slide").width(),$(".right").click(a),$(".left").click(b),$(".slide").last().prependTo(".slideshow ul")}if(window.matchMedia("(max-width: 851px)").matches){function c(){$(".slideshow ul").animate({left:"-=100vw"},1500,function(){$(".slideshow ul").css("left",""),$(".slide").first().appendTo(".slideshow ul")})}function d(){$(".slideshow ul").animate({left:"+=100vw"},1500,function(){$(".slideshow ul").css("left",""),$(".slide").last().prependTo(".slideshow ul")})}$(".slide").width(),$(".right").click(c),$(".left").click(d),$(".slide").last().prependTo(".slideshow ul")}let autoplay_timer;$(".autoplay").click(function(){$(".autoplay").hasClass("clicked")?(clearInterval(autoplay_timer),$(".autoplay").removeClass("clicked"),$(".autoplay").html("autoplay starten"),$(".left, .right").css({opacity:"40%"})):($(".autoplay").addClass("clicked"),autoplay_timer=setInterval(function(){a()},2500),$(".left, .right").css({opacity:"1%"}),$(".autoplay").html("autoplay stoppen"))}),$(".slide img").click(function(a){$("img, .right, .left, .autoplay").not($(this)).addClass("hidden"),$(".slider-pic").removeClass("hover"),$(".autoplay").hasClass("clicked")&&(clearInterval(autoplay_timer),$(".autoplay").removeClass("clicked"),$(".autoplay").html("autoplay starten"),$(".left, .right").css({opacity:"40%"})),$(this).hasClass("one")?($("body").css("background-color","#bbc7d6"),$(".close-cover, .title-1, .info-1 .info-arrow, .info-1 a").removeClass("hidden").css("color","white")):$(this).hasClass("two")?($("body").css("background-color","#dbd6d1"),$(".close-cover, .title-2, .info-2 .info-arrow, .info-2 a").removeClass("hidden").css("color","white")):$(this).hasClass("three")?($(".title-3").removeClass("hidden").css("color","#ffe08d"),$(".close-cover, .info-3 a, .info-3 .info-arrow").removeClass("hidden").css("color","#404040")):$(this).hasClass("four")&&($("body").css("background-color","#e6d1ba"),$(".close-cover, .title-4, .info-4 .info-arrow, .info-4 a").removeClass("hidden").css("color","white"))}),$(".close-cover").click(function(){$("img, .right, .left, .autoplay").removeClass("hidden"),$("body").css({"background-color":"white",transition:"1s"}),$(".main-navigation ul, .main-navigation a").css({color:"#404040",transition:"1s"}),$(".burger-menu .line").css("background","#404040"),$(".close-cover, .title, .info-arrow, .info a").addClass("hidden"),$(".slider-pic").addClass("hover")});const movePrOne=document.querySelectorAll(".parallax-move-pr");window.addEventListener("scroll",()=>{let a=window.pageYOffset;movePrOne.forEach(b=>{let c=b.dataset.speed;b.style.transform=`translateY(${a*c}px)`})}),$(".gallery img").click(function(){let a=$(this).attr("src");$(`<div class="lightbox">
        <img src="${a}">
        <div class="close-lightbox">⨯</div>
    </div>`).appendTo("body")}),$(document).on("click",".close-lightbox",function(){$(".lightbox").remove()}),$(".burger-menu").click(function(a){$(".burger-menu-content ul").slideToggle(300),$(".dropdown-menu").css({"box-shadow":"rgba(0, 0, 0, 0.214) -10px 10px 30px"})}),$(".contact form").on("submit",function(c){c.preventDefault(),$(".errorMessages").remove();let b={firstName:$("#first-name").val(),lastName:$("#last-name").val(),email:$("#email").val(),phone:$("#phone").val(),message:$("#message").val(),radioButtons:$("#female, #male")},a={};b.firstName.length<=0&&(a.firstName="bitte schreiben sie hier ihren vornamen"),b.lastName.length<=0&&(a.lastName="bitte schreiben sie hier ihren nachnamen"),b.email.length<=0?a.email="bitte geben sie hier ihre email adresse ein":/(?:((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?));*)/g.test(b.email)||(a.email="bitte geben sie eine g\xfcltige email adresse ein"),b.phone.length>0&&(/(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/.test(b.phone)||(a.phone="bitte geben sie eine g\xfcltige telefon nummer ein")),b.message.length<=0&&(a.message="bitte geben sie hier ihre nachricht ein"),!$.isEmptyObject(a)&&(a.firstName&&$("#first-name").after(`<span class="errorMessages">${a.firstName}</span>`),a.lastName&&$("#last-name").after(`<span class="errorMessages">${a.lastName}</span>`),a.email&&$("#email").after(`<span class="errorMessages">${a.email}</span>`),a.phone&&$("#phone").after(`<span class="errorMessages">${a.phone}</span>`),a.message&&$("#message").after(`<span class="errorMessages">${a.message}</span>`),a.radioButtons&&$(".radio-buttons").after(`<span class="errorMessages">${a.radioButtons}</span>`))})