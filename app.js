function hideEverything(){
    $("#secondPage").hide()
    $("#question1").hide()
    $("#question2").hide()
    $("#question3").hide()
    $("#no1").hide()
    $("#no2").hide()
    $("#no3").hide()
}
$(hideEverything);

function hideTitlePage() {
    $("#jumbotronBtn").click(function () {
        $("#titlePage").hide()
        $("#secondPage").show()
    })

    $("#guest").click(function () {
        $("#secondPage").hide()
        $("#question1").show()
    })

    $("#yesbtn").click(function () {
        $("#question1").hide()
        $("#question2").show()
    })

    $("#nobtn").click(function () {
        $("#yesbtn").hide()
        $("#nobtn").hide()
        $("#no1").show()
    })

    $("#nextbtn").click(function () {
        $("#question1").hide()
        $("#question2").show()
    })

    $("#yesbtn2").click(function () {
        $("#question2").hide()
        $("#question3").show()
    })

    $("#nobtn2").click(function () {
        $("#yesbtn2").hide()
        $("#nobtn2").hide()
        $("#no2").show()
    })

    $("#nextbtn2").click(function () {
        $("#question2").hide()
        $("#question3").show()
    })

    $("#yesbtn3").click(function () {
        $("#question3").hide()
        $("#question4").show()
    })

    $("#nobtn3").click(function () {
        $("#yesbtn3").hide()
        $("#nobtn3").hide()
        $("#no3").show()
    })

    $("#nextbtn3").click(function () {
        $("#question3").hide()
        $("#question4").show()
    })
}
$(hideTitlePage);


