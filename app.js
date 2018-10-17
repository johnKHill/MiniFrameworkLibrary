// gets a new object (the architecture allows us to not have to use the 'new keyword' here)
var g = G$('John', 'Doe');

// use these chainable methods
g.greet().setLang('es').greet(true).log();

// using the object on the click of the login button
$('#login').click(function(){

    // create a new 'Greetr' object (I'm pretending to know the name from the login)
    var loginGrtr = G$('John', 'Doe');

    // hide the login on the screen
    $('#logindiv').hide();

    // fire off an HTML greeting, passinf the 'greeting' as the selector and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});