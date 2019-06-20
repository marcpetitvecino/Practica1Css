var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");

var click1 = document.getElementById("click1");
var click2 = document.getElementById("click2");
var click3 = document.getElementById("click3");
var click4 = document.getElementById("click4");

var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

var botomobil = document.getElementById("botomenumobil");
var menumobil = document.getElementById("menumobil");

$(document).ready(function() {

    $(".buttonpopup").click(function() {

        var $container = $(this).closest(".modal-content");
        var quantitat = $container.find(".selectpopup").val();
        var preu = $container.find(".preupopup").text();
        preu = parseFloat(preu)*parseFloat(quantitat);
        var articlesactuals = $("#numeroarticles").text();
        articlesactuals = parseFloat(articlesactuals);
        var preuactual = $("#dinerstotals").text();
        preuactual = parseFloat(preuactual);

        var sumaarticles = parseFloat(quantitat) + parseFloat(articlesactuals);
        var sumapreu = parseFloat(preu )+ parseFloat(preuactual);

        sumaarticles = Math.round(sumaarticles * 100) / 100;
        sumapreu = Math.round(sumapreu * 100) /100;

        $("#numeroarticles").text(sumaarticles+" items");
        $("#dinerstotals").text(sumapreu + "€");

        $("#numeroarticlesmobil").text(sumaarticles+ " items");
        $("#dinerstotalsmobil").text(sumapreu + "€");


    });

});

var comprar0 = document.getElementsByClassName("buttonpopup")[0];
var comprar1 = document.getElementsByClassName("buttonpopup")[1];
var comprar2 = document.getElementsByClassName("buttonpopup")[2];
var comprar3 = document.getElementsByClassName("buttonpopup")[3];

comprar0.onclick = function() {

    modal1.style.display = "none";

}
comprar1.onclick = function() {

    modal2.style.display = "none";

}
comprar2.onclick = function() {

    modal3.style.display = "none";

}
comprar3.onclick = function() {

    modal4.style.display = "none";

}

click1.onclick = function() {

    modal1.style.display = "block";

}
span1.onclick = function() {

    modal1.style.display = "none";

}


click2.onclick = function() {

    modal2.style.display = "block";

}
span2.onclick = function() {

    modal2.style.display = "none";

}


click3.onclick = function() {

    modal3.style.display = "block";

}
span3.onclick = function() {

    modal3.style.display = "none";

}


click4.onclick = function() {

    modal4.style.display = "block";

}
span4.onclick = function() {

    modal4.style.display = "none";

}

botomobil.onclick = function() {

    menumobil.classList.toggle("show");

}

