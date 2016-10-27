$(document).ready(function(){
    //Tabellenfunktion
    //maik
    var gewonnen1 = $('#tabelle').find('td:eq(3)').text();
    var max1 = $('#tabelle').find('td:eq(1)').text();
    $('#tabelle').find('td:eq(4)').text(Math.round((gewonnen1/max1)*100)+"%");
    $('#tabelle').find('td:eq(2)').text(Math.round(max1-gewonnen1));
    //thomas
    var gewonnen2 = $('#tabelle').find('td:eq(8)').text();
    var max2 = $('#tabelle').find('td:eq(6)').text();
    $('#tabelle').find('td:eq(9)').text(Math.round((gewonnen2/max2)*100)+"%");
    $('#tabelle').find('td:eq(7)').text(Math.round(max2-gewonnen2));
    //meiers
    var gewonnen3 = $('#tabelle').find('td:eq(13)').text();
    var max3 = $('#tabelle').find('td:eq(11)').text();
    $('#tabelle').find('td:eq(14)').text(Math.round((gewonnen3/max3)*100)+"%");
    $('#tabelle').find('td:eq(12)').text(Math.round(max3-gewonnen3));
    //klaus
    var gewonnen4 = $('#tabelle').find('td:eq(18)').text();
    var max4 = $('#tabelle').find('td:eq(16)').text();
    $('#tabelle').find('td:eq(19)').text(Math.round((gewonnen4/max4)*100)+"%");
    $('#tabelle').find('td:eq(17)').text(Math.round(max4-gewonnen4));
    //mops
    var gewonnen5 = $('#tabelle').find('td:eq(23)').text();
    var max5 = $('#tabelle').find('td:eq(21)').text();
    $('#tabelle').find('td:eq(24)').text(Math.round((gewonnen5/max5)*100)+"%");
    $('#tabelle').find('td:eq(22)').text(Math.round(max5-gewonnen5));
    //jonas
    var gewonnen6 = $('#tabelle').find('td:eq(28)').text();
    var max6 = $('#tabelle').find('td:eq(26)').text();
    $('#tabelle').find('td:eq(29)').text(Math.round((gewonnen6/max6)*100)+"%");
    $('#tabelle').find('td:eq(27)').text(Math.round(max6-gewonnen6));
    //team
    //3geg3
    var gewonnen7 = $('#tabelle2').find('td:eq(3)').text();
    var max7 = $('#tabelle2').find('td:eq(1)').text();
    $('#tabelle2').find('td:eq(4)').text(Math.round((gewonnen7/max7)*100)+"%");
    $('#tabelle2').find('td:eq(2)').text(Math.round(max7-gewonnen7));
    //5geg5
    var gewonnen8 = $('#tabelle2').find('td:eq(8)').text();
    var max8 = $('#tabelle2').find('td:eq(6)').text();
    $('#tabelle2').find('td:eq(9)').text(Math.round((gewonnen8/max8)*100)+"%");
    $('#tabelle2').find('td:eq(7)').text(Math.round(max8-gewonnen8));
    //Formular
    //1.
    var meiers1 = 0;
    var maik1 = 0;
    var mops1 = 0;
    var thomas1 = 0;
    var jonas1 = 0;
    var klaus1 = 0;
    //2.
    var meiers2 = 0;
    var maik2 = 0;
    var mops2 = 0;
    var thomas2 = 0;
    var jonas2 = 0;
    var klaus2 = 0;
    //3.
    var meiers3 = 0;
    var maik3 = 0;
    var mops3 = 0;
    var thomas3 = 0;
    var jonas3 = 0;
    var klaus3 = 0;
    //4.
    var meiers4 = 0;
    var maik4 = 0;
    var mops4 = 0;
    var thomas4 = 0;
    var jonas4 = 0;
    var klaus4 = 0;
    //5.
    var meiers5 = 0;
    var maik5 = 0;
    var mops5 = 0;
    var thomas5 = 0;
    var jonas5 = 0;
    var klaus5 = 0;
    //6.
    var meiers6 = 0;
    var maik6 = 0;
    var mops6 = 0;
    var thomas6 = 0;
    var jonas6 = 0;
    var klaus6 = 0
    //für erstes Feld
    $('#ehrenlos1').click(function(){
     meiers1 = 0;
     maik1 = 0;
     mops1 = 0;
     thomas1 = 1;
     jonas1 = 0;
     klaus1 = 0;
    });
    $('#ehrenlos2').click(function(){
     meiers1 = 1;
     maik1 = 0;
     mops1 = 0;
     thomas1 = 0;
     jonas1 = 0;
     klaus1 = 0;
    });
    $('#ehrenlos3').click(function(){
     meiers1 = 0;
     maik1 = 0;
     mops1 = 0;
     thomas1 = 0;
     jonas1 = 0;
     klaus1 = 1;
    });
    $('#ehrenlos4').click(function(){
     meiers1 = 0;
     maik1 = 1;
     mops1 = 0;
     thomas1 = 0;
     jonas1 = 1;
     klaus1 = 0;
    });
    $('#ehrenlos5').click(function(){
     meiers1 = 0;
     maik1 = 0;
     mops1 = 1;
     thomas1 = 0;
     jonas1 = 0;
     klaus1 = 0;
    });
    //für zweites Feld
     $('#pos1').click(function(){
     meiers2 = 0;
     maik2 = 1;
     mops2 = 0;
     thomas2 = 1;
     jonas2 = 0;
     klaus2 = 0;
    });
    $('#pos2').click(function(){
     meiers2 = 1;
     maik2 = 0;
     mops2 = 0;
     thomas2 = 0;
     jonas2 = 0;
     klaus2 = 1;
    });
    $('#pos3').click(function(){
     meiers2 = 0;
     maik2 = 0;
     mops2 = 1;
     thomas2 = 1;
     jonas2 = 0;
     klaus2 = 1;
    });
    $('#pos4').click(function(){
     meiers2 = 1;
     maik2 = 0;
     mops2 = 0;
     thomas2 = 0;
     jonas2 = 1;
     klaus2 = 0;
    });
    $('#pos5').click(function(){
     meiers2 = 0;
     maik2 = 1;
     mops2 = 1;
     thomas2 = 0;
     jonas2 = 0;
     klaus2 = 0;
    });
    //für drittes Feld
     $('#team1').click(function(){
     meiers3 = 0;
     maik3 = 0;
     mops3 = 1;
     thomas3 = 0;
     jonas3 = 0;
     klaus3 = 0;
    });
     $('#team2').click(function(){
     meiers3 = 1;
     maik3 = 0;
     mops3 = 0;
     thomas3 = 0;
     jonas3 = 0;
     klaus3 = 0;
    });
     $('#team3').click(function(){
     meiers3 = 0;
     maik3 = 0;
     mops3 = 0;
     thomas3 = 0;
     jonas3 = 1;
     klaus3 = 1;
    });
     $('#team4').click(function(){
     meiers3 = 0;
     maik3 = 0;
     mops3 = 0;
     thomas3 = 1;
     jonas3 = 0;
     klaus3 = 0;
    });
     $('#team5').click(function(){
     meiers3 = 0;
     maik3 = 1;
     mops3 = 0;
     thomas3 = 0;
     jonas3 = 0;
     klaus3 = 0;
    });
    //für viertes Feld
     $('#champ1').click(function(){
     meiers4 = 0;
     maik4 = 1;
     mops4 = 0;
     thomas4 = 0;
     jonas4 = 0;
     klaus4 = 0;
    });
     $('#champ2').click(function(){
     meiers4 = 0;
     maik4 = 0;
     mops4 = 0;
     thomas4 = 1;
     jonas4 = 0;
     klaus4 = 0;
    });
     $('#champ3').click(function(){
     meiers4 = 0;
     maik4 = 0;
     mops4 = 1;
     thomas4 = 0;
     jonas4 = 0;
     klaus4 = 0;
    });
     $('#champ4').click(function(){
     meiers4 = 0;
     maik4 = 0;
     mops4 = 0;
     thomas4 = 0;
     jonas4 = 0;
     klaus4 = 0;
    });
     $('#champ5').click(function(){
     meiers4 = 0;
     maik4 = 0;
     mops4 = 0;
     thomas4 = 0;
     jonas4 = 0;
     klaus4 = 0;
    });
    //für fünftes Feld
     $('#gut1').click(function(){
     meiers5 = 1;
     maik5 = 0;
     mops5 = 0;
     thomas5 = 0;
     jonas5 = 0;
     klaus5 = 0;
    });
     $('#gut2').click(function(){
     meiers5 = 0;
     maik5 = 1;
     mops5 = 0;
     thomas5 = 0;
     jonas5 = 0;
     klaus5 = 0;
    });
     $('#gut3').click(function(){
     meiers5 = 0;
     maik5 = 0;
     mops5 = 0;
     thomas5 = 0;
     jonas5 = 0;
     klaus5 = 0;
    });
     $('#gut4').click(function(){
     meiers5 = 0;
     maik5 = 0;
     mops5 = 0;
     thomas5 = 0;
     jonas5 = 0;
     klaus5 = 0;
    });
     $('#gut5').click(function(){
     meiers5 = 0;
     maik5 = 0;
     mops5 = 0;
     thomas5 = 1;
     jonas5 = 0;
     klaus5 = 0;
    });
    //für sechstes Feld
     $('#minions1').click(function(){
     meiers6 = 0;
     maik6 = 0;
     mops6 = 1;
     thomas6 = 0;
     jonas6 = 0;
     klaus6 = 0;
    });
     $('#minions2').click(function(){
     meiers6 = 1;
     maik6 = 1;
     mops6 = 0;
     thomas6 = 0;
     jonas6 = 0;
     klaus6 = 0;
    });
     $('#minions3').click(function(){
     meiers6 = 0;
     maik6 = 0;
     mops6 = 0;
     thomas6 = 1;
     jonas6 = 0;
     klaus6 = 1;
    });
     $('#minions4').click(function(){
     meiers6 = 0;
     maik6 = 0;
     mops6 = 0;
     thomas6 = 0;
     jonas6 = 1;
     klaus6 = 0;
    });
    $('#button').click(function(){
     var meiersg = meiers1 + meiers2 + meiers3 + meiers4 + meiers5 + meiers6
     var maikg =  maik1 + maik2 + maik3 + maik4 + maik5 + maik6
     var mopsg =  mops1 + mops2 + mops3 + mops4 + mops5 + mops6
     var thomasg =  thomas1 + thomas2 + thomas3 + thomas4 + thomas5 + thomas6
     var jonasg =  jonas1 + jonas2 + jonas3 + jonas4 + jonas5 + jonas6
     var klausg =  klaus1 + klaus2 + klaus3 + klaus4 + klaus5 + klaus6

     if(klausg > maikg && klausg > meiersg && klausg > jonasg && klausg > thomasg && klausg > mopsg){
         alert("Du bist am ehesten HartzFEAR4Life");
     }
     else if(maikg > klausg && maikg > meiersg && maikg > jonasg && maikg > thomasg && maikg > mopsg){
         alert("Du bist am ehesten MaulD");
     }
     else if(thomasg > klausg && thomasg > meiersg && thomasg > jonasg && thomasg > maikg && thomasg > mopsg){
         alert("Du bist am ehesten NoAX12");
     }
     else if(meiersg > klausg && meiersg > thomasg && meiersg > jonasg && meiersg > maikg && meiersg > mopsg){
         alert("Du bist am eheseten Hobbycamper666");
     }
     else if(mopsg > klausg && mopsg > thomasg && mopsg > jonasg && mopsg > maikg && mopsg > meiersg){
         alert("Du bist am ehesten plueschkanickel");
     }
     else if(jonasg > klausg && jonasg > thomasg && jonasg > mopsg && jonasg > maikg && jonasg > meiersg){
         alert("Du bist am ehesten Exmatrikulat0r");
     }
     else{
         alert("Du wirst nie einer von uns sein");
     }
    });
});
