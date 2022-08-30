var currWidthDiagram;
var currHeightDiagram;
var currWidthProject;
var diagramVisibility;
var projectVisibility;
var goToTopVisibility;

$(document).ready(function(){
    prepareGoToTop();
    prepareDiagrams();
    prepareProjects();
    preparePhotos();
    prepareLinks();
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



