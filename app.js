function hideEverything(){
    $("#secondPage").hide()
    $("#question1").hide()
    $("#question2").hide()
    $("#question3").hide()
    $("#question4").hide()
    $("#question5").hide()
    $("#question6").hide()
    $("#question7").hide()
    $("#question8").hide()
    $("#question9").hide()
    $("#question10").hide()
    $("#no1").hide()
    $("#no2").hide()
    $("#no3").hide()
    $("#no4").hide()
    $("#no5").hide()
    $("#no6").hide()
    $("#no7").hide()
    $("#no8").hide()
    $("#no9").hide()
    $("#no10").hide()
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


    $("#yesbtn4").click(function () {
        $("#question4").hide()
        $("#question5").show()
    })
    $("#nobtn4").click(function () {
        $("#yesbtn4").hide()
        $("#nobtn4").hide()
        $("#no4").show()
    })
    $("#nextbtn4").click(function () {
        $("#question4").hide()
        $("#question5").show()
    })


    $("#yesbtn5").click(function () {
        $("#question5").hide()
        $("#question6").show()
    })
    $("#nobtn5").click(function () {
        $("#yesbtn5").hide()
        $("#nobtn5").hide()
        $("#no5").show()
    })
    $("#nextbtn5").click(function () {
        $("#question5").hide()
        $("#question6").show()
    })

    $("#yesbtn6").click(function () {
        $("#question6").hide()
        $("#question7").show()
    })
    $("#nobtn6").click(function () {
        $("#yesbtn6").hide()
        $("#nobtn6").hide()
        $("#no6").show()
    })
    $("#nextbtn6").click(function () {
        $("#question6").hide()
        $("#question7").show()
    })


    $("#yesbtn7").click(function () {
        $("#question7").hide()
        $("#question8").show()
    })
    $("#nobtn7").click(function () {
        $("#yesbtn7").hide()
        $("#nobtn7").hide()
        $("#no7").show()
    })
    $("#nextbtn7").click(function () {
        $("#question7").hide()
        $("#question8").show()
    })
    

    $("#yesbtn8").click(function () {
        $("#question8").hide()
        $("#question9").show()
    })
    $("#nobtn8").click(function () {
        $("#yesbtn8").hide()
        $("#nobtn8").hide()
        $("#no8").show()
    })
    $("#nextbtn8").click(function () {
        $("#question8").hide()
        $("#question9").show()
    })
    
    $("#yesbtn9").click(function () {
        $("#question9").hide()
        $("#question10").show()
    })
    $("#nobtn9").click(function () {
        $("#yesbtn9").hide()
        $("#nobtn9").hide()
        $("#no9").show()
    })
    $("#nextbtn9").click(function () {
        $("#question9").hide()
        $("#question10").show()
    }) 


    $("#yesbtn10").click(function () {
        $("#question10").hide()
        $("#question11").show()
    })
    $("#nobtn10").click(function () {
        $("#yesbtn10").hide()
        $("#nobtn10").hide()
        $("#no10").show()
    })
    $("#nextbtn10").click(function () {
        $("#question10").hide()
        $("#question11").show()
    }) 
}
$(hideTitlePage);


