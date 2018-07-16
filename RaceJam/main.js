$(document).ready(function(){

    $("#createTeamForm").submit(submitForm);
});

function createNewInput(e) {
    //var input = $("<input>").attr("type", "text").attr("placeholder", "Team member").wrap($("<div>").addClass("input").addClass("members")).parent();
    var input = $(".members:last").clone();
    
    $(".members:last").after(input);
    $(".members:last input").val("");
    e.preventDefault();
}

function submitForm(event) {
    formValues = $(this).serializeArray();
    event.preventDefault();
    var error = false;

    formValues.forEach(element => {
        if (!element.value) {
            $("form .error").show()
            error = true;
        }
    });

    if(!error) {
        showLoading();
        $.when(submitToDB(formValues)).then(function() {
            $("form .error").hide();
            setTimeout(showSuccess, 500);
        });
    }
}

function submitToDB(values) {
    console.log("%c values submitted", "background: green; padding: 5px;")
    return $.Deferred().resolve();
}

function showLoading() {
    console.log("%c Form disabled", "background: red; padding: 5px;")
    $("form button[type=submit]").prop("disabled", true);
}

function showSuccess() {
    console.log("%c Show success", "background: green; padding: 5px;")
    $("form .message").show(500, function() {
        setTimeout(function() {
            $("form .message").hide();
        }, 2000);
    });
    $("form button[type=submit]").prop("disabled", false);
    $("form input").val("");
    $("form .members:not(:first)").remove();
    
}