ons.ready(function() {
    // deviceready event is fired
    // Call whatever Cordova APIs

    $("#hello").click(function(){
        ons.notification.alert('Hello world!');
    });
    
});

