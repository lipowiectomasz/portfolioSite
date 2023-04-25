var currWidthDiagram;
var currHeightDiagram;
var currWidthProject;
var diagramVisibility;
var projectVisibility;
var goToTopVisibility;
var langChanged;

$(document).ready(function(){
    prepareGoToTop();
    prepareDiagrams();
    prepareProjects();
    preparePhotos();
    prepareLinks();
    changeLanguageButton();
    $(document).scroll(function(){
        if(Math.floor($("#technologies").position().top)*0.8<$(document).scrollTop()){
            if(diagramVisibility==false){
                showDiagrams();
            }
        }
        else{
            if(diagramVisibility==true){
                hideDiagrams();
            }
        }

        if(Math.floor($("#projects").position().top)*0.8<$(document).scrollTop()){
            if(projectVisibility==false){
                showProjects();
            }
        }
        else{
            if(projectVisibility==true){
                hideProjects();
            }
        }

        if(1000<$(document).scrollTop()){
            if(goToTopVisibility==false){
                showGoToTop(1);
            }
        }
        else{
            if(goToTopVisibility==true){
                showGoToTop(0);
            }
        }
    });     

});
function showDiagrams(){
    diagramVisibility = true;
    $("#firstDiagram").animate({
        left: '+='+currWidthDiagram,
        opacity: 1
    }, 900);
    $("#secoundDiagram").animate({
        top: '+='+currHeightDiagram,
        opacity: 1
    }, 900);
    $("#thirdDiagram").animate({
        left: '-='+currWidthDiagram,
        opacity: 1,
        display: "none"
    }, 900);
}
function hideDiagrams(){
    diagramVisibility = false;
    $("#firstDiagram").animate({
        left: '-='+currWidthDiagram,
        opacity: 0
    }, 900);
    $("#secoundDiagram").animate({
        top: '-='+currHeightDiagram,
        opacity: 0
    }, 900);
    $("#thirdDiagram").animate({
        left: '+='+currWidthDiagram,
        opacity: 0
    }, 900);
}
function prepareDiagrams(){
    currWidthDiagram = $("#firstDiagram").width();
    currHeightDiagram = $("#secoundDiagram").height();
    hideDiagrams();
    diagramVisibility = false;
}
function prepareProjects(){
    currWidthProject = $(".projectLeftBorder").width();
    hideProjects();
    projectVisibility = false;
}
function showProjects(){
    projectVisibility = true;
    $(".projectLeftBorder").animate({
        left: '+='+currWidthProject,
        opacity: 1
    }, 900);
    $(".projectRightBorder").animate({
        left: '-='+currWidthProject,
        opacity: 1
    }, 900);
}
function hideProjects(){
    projectVisibility = false;
    $(".projectLeftBorder").animate({
        left: '-='+currWidthProject,
        opacity: 0
    }, 900);
    $(".projectRightBorder").animate({
        left: '+='+currWidthProject,
        opacity: 0
    }, 900);
}
function preparePhotos(){
    $(".projectPhotoDot").first().addClass("projectPhotoDotChange");
    $(".projectPhoto").click((e)=>{
        let target = e.target;
        target.parentElement.classList.toggle("projectPhotoFlip");
        
        let photoDots = $(".projectPhotoDot");
        for(let dot of photoDots){
            dot.classList.toggle("projectPhotoDotChange");
        }
    });
}
function showGoToTop(mode){
    if(mode==1){
        $("#goToTop").animate({
            display: "block",
            opacity: 1
        }, 700);
        goToTopVisibility = true;
    }
    else{
        $("#goToTop").animate({
            display: "none",
            opacity: 0
        },700);
        goToTopVisibility = false;
    }
}
function prepareGoToTop(){
    goToTopVisibility=false;
    showGoToTop(0);
    $("#goToTop").click(()=>{
        $(document).scrollTop(0);
    });
}
function prepareLinks(){
    $("#headerNav li:eq(0)").click(()=>{$(document).scrollTop($("#introduction").scrollTop);});
    $("#headerNav li:eq(1)").click(()=>{$(document).scrollTop($("#technologies").position().top);});
    $("#headerNav li:eq(2)").click(()=>{$(document).scrollTop($("#projects").position().top*0.94);});
    $("#headerNav li:eq(3)").click(()=>{$(document).scrollTop($("#contact").position().top);});
    $("#headerNav li:eq(4)").click(()=>{$(document).scrollTop($("#links").position().top);});
}
function changeToPL(){
    $("#eng").css("background-color","transparent");
    $("#pl").css("background-color","white");
    $("#headerNav li:eq(0)").html("Strona główna");
    $("#headerNav li:eq(1)").html("Umiejętności");
    $("#headerNav li:eq(2)").html("Projekty");
    $("#headerNav li:eq(3)").html("Kontakt");
    $("#headerNav li:eq(4)").html("Linki");

    $("#introduction p:eq(0)").html("Cześć, jestem Tomek");
    $("#introduction p:eq(1)").html("Jestem studentem na kierunku informatycznym. Moim zainteresowaniem jest programowanie. Swoje projekty hobbystycznie zamieszczam na niniejszej stronie.");

    $("#technologies p:eq(0)").html("Umiejętności");
    $("#firstDiagram li:eq(0)").html("Programowanie");
    $("#secoundDiagram li:eq(0)").html("Technologie webowe");
    $("#thirdDiagram li:eq(0)").html("Minikomputery");

    $("#projects p:eq(0)").html("Projekty");

    $("#firstProject p:eq(0)").html("Stacja pogodowa");
    $("#firstProject p:eq(1)").html("Projekt stacji pogodowej opartej na Arduino Uno R3. Jej działanie polega na pobieraniu danych z 5 czujników: natężenia światła, czystości powietrza, obecności opadów, natężenia dźwięku oraz temperatury i wilgoci. Dane wyświetlane są na ekranie obudowy, a oprócz tego przesyłane zostają również do zdalnego serwera aby można je było analizować przy pomocy aplikacji webowej.");
    let projInside = $("#firstProject .techIcons").children();
    $("#firstProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });
    
    $("#secoundProject p:eq(0)").html("Menedżer GPS");
    $("#secoundProject p:eq(1)").html("Projekt programu zarządzającego zasilaniem mikrokomputera Raspberry Pi 4 z synchronizacją GPS. Pozwala wybrać dwa porty GPIO urządzenia, które będą załączane we wszystkie dni niebędące niedzielą lub świętem.");
    projInside = $("#secoundProject .techIcons").children();
    $("#secoundProject .techIcons").html(()=>{
        let inside = "Technologia: ";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#thirdProject p:eq(0)").html("Memory");
    $("#thirdProject p:eq(1)").html("Projekt realizujący gre w memory przy użyciu JavaScript.");
    projInside = $("#thirdProject .techIcons").children();
    $("#thirdProject .techIcons").html(()=>{
        let inside = "Technologia: ";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#fourthProject p:eq(0)").html("Strona - portfolio");
    $("#fourthProject p:eq(1)").html("Obecnie wyświetlana strona. Prezentuje ona część moich obecnych umiejętności oraz zamieszczane na niej będą przyszłe postępy.");
    projInside = $("#fourthProject .techIcons").children();
    $("#fourthProject .techIcons").html(()=>{
        let inside = "Technologia: ";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#fifthProject p:eq(0)").html("Platforma e-learningowa");
    $("#fifthProject p:eq(1)").html("Projekt platformy do nauki oparty głównie na PHP.");
    projInside = $("#fifthProject .techIcons").children();
    $("#fifthProject .techIcons").html(()=>{
        let inside = "Technologia: ";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#sixthProject p:eq(0)").html("Sudoku");
    $("#sixthProject p:eq(1)").html("Sudoku zrealizowane w Java z interfejsem graficznym JavaFx.");
    projInside = $("#sixthProject .techIcons").children();
    $("#sixthProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#seventhProject p:eq(0)").html("Behawiorysta");
    $("#seventhProject p:eq(1)").html("Strona informująca o usługach lokalnego behawiorysty psów.");
    projInside = $("#seventhProject .techIcons").children();
    $("#seventhProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#contactHeader").html("Kontakt");
    $("#linksHeader").html("Linki");

    langChanged = false;
}
function changeToENG(){
    $("#pl").css("background-color","transparent");
    $("#eng").css("background-color","white");
    $("#headerNav li:eq(0)").html("Home page");
    $("#headerNav li:eq(1)").html("Skills");
    $("#headerNav li:eq(2)").html("Projects");
    $("#headerNav li:eq(3)").html("Contact");
    $("#headerNav li:eq(4)").html("Links");

    $("#introduction p:eq(0)").html("Hi, my name is Tomek");
    $("#introduction p:eq(1)").html("I am IT student. My hobby is programming. In free time I publish my projects on this site.");

    $("#technologies p:eq(0)").html("Skills");
    $("#firstDiagram li:eq(0)").html("Programming");
    $("#secoundDiagram li:eq(0)").html("Web technologies");
    $("#thirdDiagram li:eq(0)").html("Minicomputers");

    $("#projects p:eq(0)").html("Projects");

    $("#firstProject p:eq(0)").html("Weather station");
    $("#firstProject p:eq(1)").html("Project of weather station based on Arduino connected with local website.");
    let projInside = $("#firstProject .techIcons").children();
    $("#firstProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });
    
    $("#secoundProject p:eq(0)").html("GPS manager");
    $("#secoundProject p:eq(1)").html("Project of GPIO power manager for Raspberry Pi.");
    projInside = $("#secoundProject .techIcons").children();
    $("#secoundProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#thirdProject p:eq(0)").html("Memory game");
    $("#thirdProject p:eq(1)").html("Memory game in JavaScript.");
    projInside = $("#thirdProject .techIcons").children();
    $("#thirdProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#fourthProject p:eq(0)").html("Portfolio site");
    $("#fourthProject p:eq(1)").html("Current site. Place where I publish information about my skills and projects.");
    projInside = $("#fourthProject .techIcons").children();
    $("#fourthProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#fifthProject p:eq(0)").html("E-learning Platfom");
    $("#fifthProject p:eq(1)").html("E-learning platform created with PHP.");
    projInside = $("#fifthProject .techIcons").children();
    $("#fifthProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#sixthProject p:eq(0)").html("Sudoku");
    $("#sixthProject p:eq(1)").html("Sudoku created with Java and JavaFx.");
    projInside = $("#sixthProject .techIcons").children();
    $("#sixthProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });

    $("#seventhProject p:eq(0)").html("Behaviorist");
    $("#seventhProject p:eq(1)").html("Site promotes services of local dog behaviourist from my hometown.");
    projInside = $("#seventhProject .techIcons").children();
    $("#seventhProject .techIcons").html(()=>{
        let inside = "Technology:";
        projInside.each((id,element)=>{
            inside += element.outerHTML;
        })
        return inside;
    });


    $("#contactHeader").html("Contact");
    $("#linksHeader").html("Links");

    langChanged = true;
}
function changeLanguageButton(){
    $("#pl").css("background-color","white");
    langChanged = false;
    $("#pl").click(()=>{
        if(langChanged==true){
            changeToPL();
        }
    });
    $("#eng").click(()=>{
        if(langChanged==false){
            changeToENG();
        }
    });
}



