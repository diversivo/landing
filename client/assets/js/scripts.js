$(function(){
    var $services = $('#services');
    var $services_desc = $('#services-desc');

    var $service1 = $('#service-1');
    var $service1_info = $('#service-1__info, #service-1__info-desc');

    var $service2 = $('#service-2');
    var $service2_info = $('#service-2__info, #service-2__info-desc');

    var $service3 = $('#service-3');
    var $service3_info = $('#service-3__info, #service-3__info-desc');

    var $service4 = $('#service-4');
    var $service4_info = $('#service-4__info, #service-4__info-desc');

    var $app = $('#app');

    

    $service1.on('click dbclick mouseover', function(){
        $services.addClass('box--off');
        $services_desc.addClass('box--off');
        $service1_info.removeClass('box--off');
        $service2_info.addClass('box--off');
        $service3_info.addClass('box--off');
        $service4_info.addClass('box--off');
        $app.addClass('services__bg--1');
        $app.removeClass('services__bg--2');
        $app.removeClass('services__bg--3');
        $app.removeClass('services__bg--4');
    });

    $service2.on('click dbclick mouseover', function(){
        $services.addClass('box--off');
        $services_desc.addClass('box--off');
        $service1_info.addClass('box--off');
        $service2_info.removeClass('box--off');
        $service3_info.addClass('box--off');
        $service4_info.addClass('box--off');

        $app.removeClass('services__bg--1');
        $app.addClass('services__bg--2');
        $app.removeClass('services__bg--3');
        $app.removeClass('services__bg--4');
    });

    $service3.on('click dbclick mouseover', function(){
        $services.addClass('box--off');
        $services_desc.addClass('box--off');
        $service1_info.addClass('box--off');
        $service2_info.addClass('box--off');
        $service3_info.removeClass('box--off');
        $service4_info.addClass('box--off');

        $app.removeClass('services__bg--1');
        $app.removeClass('services__bg--2');
        $app.addClass('services__bg--3');
        $app.removeClass('services__bg--4');
    });

    $service4.on('click dbclick mouseover', function(){
        $services.addClass('box--off');
        $services_desc.addClass('box--off');
        $service1_info.addClass('box--off');
        $service2_info.addClass('box--off');
        $service3_info.addClass('box--off');
        $service4_info.removeClass('box--off');

        $app.removeClass('services__bg--1');
        $app.removeClass('services__bg--2');
        $app.removeClass('services__bg--3');
        $app.addClass('services__bg--4');
    });

});
