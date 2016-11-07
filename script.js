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
    var anfrage1 = 0;
    //2.
    var meiers2 = 0;
    var maik2 = 0;
    var mops2 = 0;
    var thomas2 = 0;
    var jonas2 = 0;
    var klaus2 = 0;
    var anfrage2 = 0;
    //3.
    var meiers3 = 0;
    var maik3 = 0;
    var mops3 = 0;
    var thomas3 = 0;
    var jonas3 = 0;
    var klaus3 = 0;
    var anfrage3 = 0;
    //4.
    var meiers4 = 0;
    var maik4 = 0;
    var mops4 = 0;
    var thomas4 = 0;
    var jonas4 = 0;
    var klaus4 = 0;
    var anfrage4 = 0;
    //5.
    var meiers5 = 0;
    var maik5 = 0;
    var mops5 = 0;
    var thomas5 = 0;
    var jonas5 = 0;
    var klaus5 = 0;
    var anfrage5 = 0;
    //6.
    var meiers6 = 0;
    var maik6 = 0;
    var mops6 = 0;
    var thomas6 = 0;
    var jonas6 = 0;
    var klaus6 = 0;     
    var anfrage6 = 0;
    //für erstes Feld
    $('#ehrenlos1').click(function(){
     meiers1 = 0;
     maik1 = 0;
     mops1 = 0;
     thomas1 = 1;
     jonas1 = 0;
     klaus1 = 0;
     anfrage1 = 1;
    });
    $('#ehrenlos2').click(function(){
     meiers1 = 1;
     maik1 = 0;
     mops1 = 0;
     thomas1 = 0;
     jonas1 = 0;
     klaus1 = 0;
     anfrage1 = 1;
    });
    $('#ehrenlos3').click(function(){
     meiers1 = 0;
     maik1 = 0;
     mops1 = 0;
     thomas1 = 0;
     jonas1 = 0;
     klaus1 = 1;
     anfrage1=1;
    });
    $('#ehrenlos4').click(function(){
     meiers1 = 0;
     maik1 = 1;
     mops1 = 0;
     thomas1 = 0;
     jonas1 = 1;
     klaus1 = 0;
     anfrage1=1;
    });
    $('#ehrenlos5').click(function(){
     meiers1 = 0;
     maik1 = 0;
     mops1 = 1;
     thomas1 = 0;
     jonas1 = 0;
     klaus1 = 0;
     anfrage1=1;
    });
    //für zweites Feld
     $('#pos1').click(function(){
     meiers2 = 0;
     maik2 = 1;
     mops2 = 0;
     thomas2 = 1;
     jonas2 = 0;
     klaus2 = 0;   
     anfrage2 = 1;
    });
    $('#pos2').click(function(){
     meiers2 = 1;
     maik2 = 0;
     mops2 = 0;
     thomas2 = 0;
     jonas2 = 0;
     klaus2 = 1;
     anfrage2 = 1;
    });
    $('#pos3').click(function(){
     meiers2 = 0;
     maik2 = 0;
     mops2 = 1;
     thomas2 = 1;
     jonas2 = 0;
     klaus2 = 1;
     anfrage2 = 1;
    });
    $('#pos4').click(function(){
     meiers2 = 1;
     maik2 = 0;
     mops2 = 0;
     thomas2 = 0;
     jonas2 = 1;
     klaus2 = 0;
     anfrage2 = 1;
    });
    $('#pos5').click(function(){
     meiers2 = 0;
     maik2 = 1;
     mops2 = 1;
     thomas2 = 0;
     jonas2 = 0;
     klaus2 = 0;
     anfrage2 = 1;
    });
    //für drittes Feld
     $('#team1').click(function(){
     meiers3 = 0;
     maik3 = 0;
     mops3 = 1;
     thomas3 = 0;
     jonas3 = 0;
     klaus3 = 0;
     anfrage3 = 1;
    });
     $('#team2').click(function(){
     meiers3 = 1;
     maik3 = 0;
     mops3 = 0;
     thomas3 = 0;
     jonas3 = 0;
     klaus3 = 0;
     anfrage3 = 1;
    });
     $('#team3').click(function(){
     meiers3 = 0;
     maik3 = 0;
     mops3 = 0;
     thomas3 = 0;
     jonas3 = 1;
     klaus3 = 1;
     anfrage3 = 1;
    });
     $('#team4').click(function(){
     meiers3 = 0;
     maik3 = 0;
     mops3 = 0;
     thomas3 = 1;
     jonas3 = 0;
     klaus3 = 0;
     anfrage3 = 1;
    });
     $('#team5').click(function(){
     meiers3 = 0;
     maik3 = 1;
     mops3 = 0;
     thomas3 = 0;
     jonas3 = 0;
     klaus3 = 0;
     anfrage3 = 1;
    });
    //für viertes Feld
     $('#champ1').click(function(){
     meiers4 = 0;
     maik4 = 1;
     mops4 = 0;
     thomas4 = 0;
     jonas4 = 0;
     klaus4 = 0;
     anfrage4 = 1;
    });
     $('#champ2').click(function(){
     meiers4 = 0;
     maik4 = 0;
     mops4 = 0;
     thomas4 = 1;
     jonas4 = 0;
     klaus4 = 0;
     anfrage4 = 1;
    });
     $('#champ3').click(function(){
     meiers4 = 0;
     maik4 = 0;
     mops4 = 1;
     thomas4 = 0;
     jonas4 = 0;
     klaus4 = 0;
     anfrage4 = 1;
    });
     $('#champ4').click(function(){
     meiers4 = 0;
     maik4 = 0;
     mops4 = 0;
     thomas4 = 0;
     jonas4 = 0;
     klaus4 = 0;
     anfrage4 = 1;
    });
     $('#champ5').click(function(){
     meiers4 = 0;
     maik4 = 0;
     mops4 = 0;
     thomas4 = 0;
     jonas4 = 0;
     klaus4 = 0;
     anfrage4 = 1;
    });
    //für fünftes Feld
     $('#gut1').click(function(){
     meiers5 = 1;
     maik5 = 0;
     mops5 = 0;
     thomas5 = 0;
     jonas5 = 0;
     klaus5 = 0;
     anfrage5 = 1;
    });
     $('#gut2').click(function(){
     meiers5 = 0;
     maik5 = 1;
     mops5 = 0;
     thomas5 = 0;
     jonas5 = 0;
     klaus5 = 0;
     anfrage5 = 1;
    });
     $('#gut3').click(function(){
     meiers5 = 0;
     maik5 = 0;
     mops5 = 0;
     thomas5 = 0;
     jonas5 = 0;
     klaus5 = 0;
     anfrage5 = 1;
    });
     $('#gut4').click(function(){
     meiers5 = 0;
     maik5 = 0;
     mops5 = 0;
     thomas5 = 0;
     jonas5 = 0;
     klaus5 = 0;
     anfrage5 = 1;
    });
     $('#gut5').click(function(){
     meiers5 = 0;
     maik5 = 0;
     mops5 = 0;
     thomas5 = 1;
     jonas5 = 0;
     klaus5 = 0;
     anfrage5 = 1;
    });
    //für sechstes Feld
     $('#minions1').click(function(){
     meiers6 = 0;
     maik6 = 0;
     mops6 = 1;
     thomas6 = 0;
     jonas6 = 0;
     klaus6 = 0;
     anfrage6 = 1;
    });
     $('#minions2').click(function(){
     meiers6 = 1;
     maik6 = 1;
     mops6 = 0;
     thomas6 = 0;
     jonas6 = 0;
     klaus6 = 0;
     anfrage6 = 1;
    });
     $('#minions3').click(function(){
     meiers6 = 0;
     maik6 = 0;
     mops6 = 0;
     thomas6 = 1;
     jonas6 = 0;
     klaus6 = 1;
     anfrage6 = 1;
    });
     $('#minions4').click(function(){
     meiers6 = 0;
     maik6 = 0;
     mops6 = 0;
     thomas6 = 0;
     jonas6 = 1;
     klaus6 = 0;
     anfrage6 = 1;
    });
    $('#button').click(function(){
     var gesamt = anfrage1 + anfrage2 + anfrage3 + anfrage4 + anfrage5 + anfrage6;
     var meiersg = meiers1 + meiers2 + meiers3 + meiers4 + meiers5 + meiers6
     var maikg =  maik1 + maik2 + maik3 + maik4 + maik5 + maik6
     var mopsg =  mops1 + mops2 + mops3 + mops4 + mops5 + mops6
     var thomasg =  thomas1 + thomas2 + thomas3 + thomas4 + thomas5 + thomas6
     var jonasg =  jonas1 + jonas2 + jonas3 + jonas4 + jonas5 + jonas6
     var klausg =  klaus1 + klaus2 + klaus3 + klaus4 + klaus5 + klaus6
    if(gesamt >= 6){
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
    }
    else{
        alert("Bitte beantworte alle Fragen");
    }
    });

    /*$(function(){
    $(window).scroll(function() {
        var $myDiv = $('.kreis');
        var st = $(this).scrollTop();
        $myDiv.height( st );
        if( st == 0 ) {
            $myDiv.hide();
        } else {
            $myDiv.show();
        }
    }).scroll();
});*/

    $('<h3><a href=\'../subpages/stories\' class = \'link\'">Verrückte Geschichten</a></h3>').appendTo("#müsli").css("margin-top", "2em");
    $('<p>Hier gehts zu den Geschichten der Jungs. Eine seltsamer als die andere aber dennoch alle wahr. Die Autoren möchten aus Sicherheitsgründen anonym bleiben (es sind Maik und Thomas).</p>').appendTo("#müsli").css("color" ,"#f0effa").css("margin-left", "1em").css("margin-top","1em");
 //videoseinstellungen   

    $(".video").after("<div class=\'buttun\'><img src=\'../Media/play.png\'class=\'bild1\'/><img src=\'../Media/pause.png\' class=\'bild2\'/><img src=\'../Media/left.png\' class=\'bild3\'/></div>");
    $(".buttun").after("<div class=\'sound\'><img src=\'../Media/sound.png\'class=\'bild4\'/><img src=\'../Media/mute.png\' class=\'bild5\'/></div>");
    $(".sound").after("<div class=\'gabe\'></div>");
    $(".sound").after("<div class=\'gabe2\'></div>");
    $("<p id=\'dauer\'>00:00</p>").prependTo(".gabe2");
    $("<p id=\'dauer2\'>00:00</p>").prependTo(".gabe");
    $(".gabe2").after("<input class=\'fullscreen\' type=\'number\'></div>");
    $(".gabe2").after("<div class=\'ok\'>Springe zu</div>");
    $(".gabe2").after("<div class=\'x2\'>x2</div>");
    $(".gabe2").after("<div class=\'x05\'>x0.5</div>");
    $(".gabe2").after("<div class=\'x1\'</div>");
    
    $(".videocontainer").each(function () {
    
    var video = $(this).find(".video");
    var plainVideo = video.get(0);/*DOM video object, unwrapped from jQuery*/
    var playBtn = $(this).find(".buttun");
    var playBild = $(this).find(".bild1");
    var pauseBild = $(this).find(".bild2");
    var replayBild = $(this).find(".bild3");
    var soundBtn = $(this).find(".sound");
    var soundBild = $(this).find(".bild4");
    var muteBild = $(this).find(".bild5");
    var anzeige = $(this).find("#dauer");
    var anzeige2 = $(this).find("#dauer2");
    var modus = $(this).find(".fullscreen");
    var ok = $(this).find(".ok");
    var x2 = $(this).find(".x2");
    var x05 = $(this).find("x05");
    var x1 = $(this).find("x1");
    var laenge = video.duration;
    var gesch = 0;
    
    $("#dauer").text("00:00");    
    video.on('loadedmetadata', function() {
        if(Math.round(video[0].duration) < 10){
         $(anzeige2).text("00:0"+Math.round(video[0].duration));
        }else if(Math.round(video[0].duration) < 60 && Math.round(video[0].duration) > 10){
         $(anzeige2).text("00:"+Math.round(video[0].duration));  
        }
    });

    video.on('timeupdate', function() {
        if(Math.round(video[0].currentTime) < 10){
            $(anzeige).text("00:0"+Math.round(video[0].currentTime));
        }else if(Math.round(video[0].currentTime) < 60 && Math.round(video[0].currentTime) > 9){
            $(anzeige).text("00:"+Math.round(video[0].currentTime));  
        }
    });    
    
    soundBild.show();
    muteBild.hide();
    playBild.show();
    pauseBild.hide();
    replayBild.hide();

    ok.click(function(){
        video.prop("currentTime", modus.val());
    });    
        
     x1.text(gesch);   
        
    x1.click(function(){
       if(gesch != 1){
           video.prop("playbackRate", 1); 
           gesch = 1;
       }
    });    
        
    x2.click(function(){
       if(gesch != 2){
           video.prop("playbackRate", 2); 
           gesch = 2;
       }else if(gesch == 2){
            gesch = 1;   
       }
    });
        
    x05.click(function(){
       if(gesch != 0.5){
           video.prop("playbackRate", 0.5); 
           gesch = 0.5;
       }
    });
        
    soundBtn.click(function(){
        if(muteBild.is(":hidden")){
            video.prop('muted', true);
            soundBild.hide();
            muteBild.show();
        }else if(soundBild.is(":hidden")){
            video.prop('muted', false);
            soundBild.show();
            muteBild.hide();
        }
    });

    playBtn.click(function () {
        if(pauseBild.is(':hidden')){
            video.get(0).addEventListener('ended',myHandler,false);
            plainVideo.play();
            playBild.hide();
            pauseBild.show();
            replayBild.hide();   
        }else if(playBild.is(":hidden")){
            plainVideo.pause();
            playBild.show();
            pauseBild.hide();
            replayBild.hide()
        }

        function myHandler() {
            playBild.hide();
            pauseBild.hide();
            replayBild.show();
        }
    });

 });
});
