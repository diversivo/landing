$(function() {

    $('form').submit((e)=>{
        e.preventDefault();
        e.stopPropagation();
        send();
        return false;
    });

    function send(){
        $('form').find('input', 'textarea');
        let data = $('#campos').serializeArray();
        console.log(data);
        $.ajax({
            type:'POST',
            url:'/contacto',
            data:data,
            dataType:'json',
            success:function(res){
                $('.contact__form').html('');
                let div = $('<div/>');
                div.append('<p>Muchas gracias, nos pondremos en contacto contigo!</p>');
                $('.contact__form').append(div);
            },
            error: function(err){
                console.log(err);
                $('.contact__form').html('');
                let div = $('<div/>');
                div.append('<p>Ups ocurrió un error, que verguenza por favor vuelve a intentarlo!</p>');
                $('.contact__form').append(div);
            }
        });
    }

});