$(document).ready(function(){
    $("#createTeamForm").submit(function() {
        return false;
    });
});

function createNewInput() {
    var input = $("<input>").attr("type", "text").attr("placeholder", "Team member");
    $(".members").append(input);
}