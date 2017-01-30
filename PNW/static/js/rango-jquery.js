$(document).ready( function() {

    $("#about-btn").click( function(event) {
        alert("You clicked the button using JQuery!");
    });
	$("#about-btn").addClass('btn btn-primary');
    $("#about-btn").click( function(event) {
		msgstr = $("#msg").html()
        msgstr = msgstr + "o"
        $("#msg").html(msgstr)
 });
});