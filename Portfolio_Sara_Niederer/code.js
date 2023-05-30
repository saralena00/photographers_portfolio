



// HOMEPAGE........................................................


// Cover Slider mit Media Queries
//für Bildschirme über 850px
if (window.matchMedia('(min-width: 851px)').matches)
{
    console.log('hei')
    let slideWidth = $('.slide').width()

    $('.right').click( moveRight)
    $('.left').click( moveLeft)

    $('.slide').last().prependTo('.slideshow ul')

    function moveRight () {

        $('.slideshow ul').animate(
        {'left': '-=33.3vw'}, 
        1500, 
        function() {
            $('.slideshow ul').css('left', '')
            $('.slide').first().appendTo('.slideshow ul')
        })
    }

    function moveLeft () {
        $('.slideshow ul').animate(
            {'left': '+=33.3vw'}, 
            1500, 
            function() {
                $('.slideshow ul').css('left', '')
                $('.slide').last().prependTo('.slideshow ul')
            })
    }
}


// für Bildschirme unter 850px
if (window.matchMedia('(max-width: 851px)').matches)
{
let slideWidth = $('.slide').width()

$('.right').click( moveRight)
$('.left').click( moveLeft)

$('.slide').last().prependTo('.slideshow ul')

function moveRight () {

    $('.slideshow ul').animate(
    {'left': '-=100vw'}, 
    1500, 
    function() {
        $('.slideshow ul').css('left', '')
        $('.slide').first().appendTo('.slideshow ul')
    })
}

function moveLeft () {
    $('.slideshow ul').animate(
        {'left': '+=100vw'}, 
        1500, 
        function() {
            $('.slideshow ul').css('left', '')
            $('.slide').last().prependTo('.slideshow ul')
        })
}
}




//Autoplay CODE

let autoplay_timer

$('.autoplay').click(function () {
    if($('.autoplay').hasClass('clicked')) {
        clearInterval(autoplay_timer)
        $('.autoplay').removeClass('clicked')
        $('.autoplay').html('autoplay starten')
        $('.left, .right').css({'opacity':'40%'})
    }
    else {
        $('.autoplay').addClass('clicked')
        autoplay_timer = setInterval(function() {
            moveRight()
        }, 2500)
        
        $('.left, .right').css({'opacity':'1%'})
        $('.autoplay').html('autoplay stoppen')
    }
})









// COVER SEITEN VOM SLIDER........................................................

$('.slide img').click(function (e) {
        //elemente verstecken
        $('img, .right, .left, .autoplay').not($(this)).addClass('hidden')
        //hover-effekt entfernen
        $('.slider-pic').removeClass('hover')
        //autoplay stoppen
    if( $('.autoplay').hasClass('clicked')) {
        clearInterval(autoplay_timer)
        $('.autoplay').removeClass('clicked')
        $('.autoplay').html('autoplay starten')
        $('.left, .right').css({'opacity':'40%'})
    }

    // farbe von unterschiedlichen titelseiten ändern
    if ($(this).hasClass('one')) {
        $('body').css('background-color', '#bbc7d6')
        $('.close-cover, .title-1, .info-1 .info-arrow, .info-1 a').removeClass('hidden').css('color', 'white')
    }
    else if ($(this).hasClass('two')) {
        $('body').css('background-color', '#dbd6d1')
        $('.close-cover, .title-2, .info-2 .info-arrow, .info-2 a').removeClass('hidden').css('color', 'white')
    }
    else if ($(this).hasClass('three')) {
        $('.title-3').removeClass('hidden').css('color', '#ffe08d')
        $('.close-cover, .info-3 a, .info-3 .info-arrow').removeClass('hidden').css('color', '#404040')
    }
    else if ($(this).hasClass('four')) {
        $('body').css('background-color', '#e6d1ba')
        $('.close-cover, .title-4, .info-4 .info-arrow, .info-4 a').removeClass('hidden').css('color', 'white')

    }
})


// Close-Button macht oberen Schritt rückgängig
$('.close-cover').click(function() {
    //elemente anzeigen
    $('img, .right, .left, .autoplay').removeClass('hidden')
    //farbe ändern
    $('body').css({"background-color": "white", "transition": "1s"})
    $('.main-navigation ul, .main-navigation a').css({'color': '#404040', 'transition': '1s'})
    $('.burger-menu .line').css('background', '#404040')
    //elemente verstecken
    $('.close-cover, .title, .info-arrow, .info a').addClass('hidden')
    //hover-effekt hinzufügen
    $('.slider-pic').addClass('hover')
    
})









//UNTERSEITE........................................................

//CODE FÜR PARALLAX BEWEGUNG VON ALLEN PROJEKTSEITEN
const movePrOne = document.querySelectorAll(".parallax-move-pr")


window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    
    movePrOne.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`
    });
})






//LIGHTBOX..................................................................................

$('.gallery img').click( function () {
    const img_src = $(this).attr('src')

    $(`<div class="lightbox">
        <img src="${img_src}">
        <div class="close-lightbox">⨯</div>
    </div>`).appendTo('body')
})

$(document).on('click', '.close-lightbox', function() {
    $('.lightbox').remove()
})




//BURGER MENU..................................................................................

$('.burger-menu').click( function(e) {
    $('.burger-menu-content ul').slideToggle(300)
    $('.dropdown-menu').css({'box-shadow': 'rgba(0, 0, 0, 0.214) -10px 10px 30px'})
})










// KONTAKTFORMULAR VALIDATION..................................................................................

$('.contact form').on('submit', function(e) {
    e.preventDefault()
    $('.errorMessages').remove()

    const allInputValues = {
        firstName : $('#first-name').val(),
        lastName : $('#last-name').val(),
        email : $('#email').val(),
        phone : $('#phone').val(),
        message : $('#message').val(),
        radioButtons : $('#female, #male')
    }

    const errorMessages = {}


    // überprüfung von Namen

    if (allInputValues.firstName.length <= 0) {
        errorMessages.firstName = 'bitte schreiben sie hier ihren vornamen'
    }
    if (allInputValues.lastName.length <= 0) {
        errorMessages.lastName = 'bitte schreiben sie hier ihren nachnamen'
    }


    // überprüfung der Email Adresse

    const email_pattern = /(?:((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?));*)/g

    if ( allInputValues.email.length <= 0 ) {
        errorMessages.email = 'bitte geben sie hier ihre email adresse ein'
    }
    else if ( !email_pattern.test(allInputValues.email)) {
        errorMessages.email = 'bitte geben sie eine gültige email adresse ein'
    }


    // überprüfung der Telefon Nummer

    const phone_pattern = /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/
        
    if ( allInputValues.phone.length > 0 ) {
        if( !phone_pattern.test(allInputValues.phone)) {
            errorMessages.phone = 'bitte geben sie eine gültige telefon nummer ein'
        }
    }


    // überprüfung der Nachricht

    if (allInputValues.message.length <= 0) {
        errorMessages.message = 'bitte geben sie hier ihre nachricht ein'
    }


      // Fehler Nachrichten anzeigen
    if (!$.isEmptyObject(errorMessages)){
        if ( errorMessages.firstName ) {
        $('#first-name').after(`<span class="errorMessages">${errorMessages.firstName}</span>`)
        }
        if ( errorMessages.lastName ) {
        $('#last-name').after(`<span class="errorMessages">${errorMessages.lastName}</span>`)
        }
        if ( errorMessages.email ) {
        $('#email').after(`<span class="errorMessages">${errorMessages.email}</span>`)
        }
        if ( errorMessages.phone ) {
        $('#phone').after(`<span class="errorMessages">${errorMessages.phone}</span>`)
        }
        if ( errorMessages.message ) {
        $('#message').after(`<span class="errorMessages">${errorMessages.message}</span>`)
        }
        if (errorMessages.radioButtons) {
            $('.radio-buttons').after(`<span class="errorMessages">${errorMessages.radioButtons}</span>`)
        }   
    }  
})

