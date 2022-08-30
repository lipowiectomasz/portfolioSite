window.onload = function(){
	setTableDimensions()
	slide();
}

function slide(){
    let container = document.getElementById("techSliderContainer");
    let elements = container.children;
    let baseWidth = elements[1].clientWidth;

    if(parseInt(elements[1].style.left)==0){

        newItem = elements[(elements.length)-1].cloneNode(true);
        elements.firstElementChild.insertBefore(newItem, elements[1]);
        container = document.getElementById("techSlider");
        elements = container.children;

        for(let i=1; i<elements.length; i++){
            elements[i].style.left = -baseWidth;
        }

    }

    for(let i=1; i<elements.length; i++){
		height = parseInt(elements[i].style.left);
		elements[i].style.left = parseInt(height)+1;
	}

	if(parseInt(elements[1].style.left)==-1){
		container.firstElementChild.removeChild(elements[elements.length-1]);
	}

	setTimeout(slide, 100);
}
function setTableDimensions(){
	
    let container = document.getElementById("techSliderContainer");
    let collection = container.children;
    let saveHeight, saveWidth;
    
    saveHeight = container.clientHeight;
    saveWidth = container.clientWidth;

    container.style.height = saveHeight;
    container.style.width = collection[0].clientWidth+(collection[0].children.length*2);
}