$(function () {
    var navMain = $("#navbarsExampleDefault");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
    $("#inscrire").click(function () {
        $('#myModalConnexion').modal('hide');
        $('#myModalInscription').modal('show');
    });
    $("#connecter").click(function () {
        $('#myModalInscription').modal('hide');
        $('#myModalConnexion').modal('show');
    });
});