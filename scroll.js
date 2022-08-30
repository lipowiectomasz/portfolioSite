window.onload = function(){
	scrollList("techSliderContainer");
}

function scrollList(containerName){
	let list, collection, width, baseWidth, newItem, container;
	container = containerName;
	list = document.getElementById(container);
	collection = list.children;

	baseWidth = collection[1].clientWidth +10;

	if(parseInt(collection[1].style.left)==0){
		newItem = collection[0].cloneNode(true);
		list.insertBefore(newItem, collection[(collection.length)-1].nextSibling);
		list = document.getElementById(container);
		collection = list.children;
	}
		
	for(let i=0; i<collection.length; i++){
		width = parseInt(collection[i].style.left);
		width = width-1;
		collection[i].style.left = parseInt(width)+"px";
	}

	if(parseInt(collection[(collection.length)-1].style.left)==(-baseWidth)){
		for(let i=0; i<collection.length; i++){
			collection[i].style.left = 0+"px";
		}
		list.removeChild(collection[0]);
	}
	
	setTimeout( () => {scrollList(container);}, 50);
}