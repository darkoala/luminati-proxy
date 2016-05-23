$(function(){
    'use strict'; /*jslint browser:true*/
    function formData($form){
        var dataArr = $form.serializeArray();
        var data = {};
        dataArr.forEach(function(item){
            data[item.name]=item.value;
        });
        return data;
    }

    var $new_proxy = $('#new_proxy');
    var $new_proxy_btn = $new_proxy.find('.btn-primary');
    var $new_proxy_form = $new_proxy.find('form');
    $new_proxy_btn.click(function(){
        $new_proxy_btn.text('Saving...');
        $.post({
            url: 'add_proxy',
            data: JSON.stringify(formData($new_proxy_form)),
            contentType: 'application/json'
        }).done(function(res){
            location.reload();
        }).fail(function(res){
            $new_proxy_btn.text('Save');
            console.log(res); // XXX lee: show error
        });
    });
});
