;(function($){
    $(function (){
    //smooth scrolling
        $("body").on('click', '[href*="#"]', function(e){
            var fixed_offset = 100;
            $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
            e.preventDefault();
        });
    //
        //Close modal by html click
        $('html').mouseup(function (e) {
            let container = $(".modal__gallery");
            if (container.has(e.target).length === 0){
                container.hide();
                $('.dark__background').hide();
            }
        });
        //
        //Modal gallery
        $('#gal1').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-1.jpg) no-repeat',
                            'background-size': 'cover'})
        });
        $('#gal2').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-2.jpg) no-repeat',
                    'background-size': 'cover'})
        });
        $('#gal3').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-3.jpg) no-repeat',
                    'background-size': 'cover'})
        });
        $('#gal4').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-4.jpg) no-repeat',
                    'background-size': 'cover'})
        });
        $('#gal5').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-5.jpg) no-repeat',
                    'background-size': 'cover'})
        });
        $('#gal6').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-6.jpg) no-repeat',
                    'background-size': 'cover'})
        });
        $('#gal7').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-7.jpg) no-repeat',
                    'background-size': 'cover'})
        });
        $('#gal8').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-8.jpg) no-repeat',
                    'background-size': 'cover'})
        });
        $('#gal9').on('click', function (){
            $('.modal__gallery, .dark__background').show();
            $('.modal__gallery')
                .css({'background': 'url(./img/work-9.jpg) no-repeat',
                    'background-size': 'cover'})
        });










        /////////////////////////////////////////////
    });
})(jQuery);

// Карта Google
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11.25,
        center: { lat: 48.73161, lng: 37.61589 },
    });
    const mark = new google.maps.Marker({
        position: { lat: 48.7343469, lng: 37.597213 },
        map,
        title: "STIHL",
        animation: google.maps.Animation.BOUNCE
    });
    const popUpContent = "Адрес: г.Краматорск, ул.Дворцовая, 100";
    const infoWindow = new google.maps.InfoWindow({
        content: popUpContent,
    });
    mark.addListener("click", () => {
        infoWindow.open(map, mark);
    });
}