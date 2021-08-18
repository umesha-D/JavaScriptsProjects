let index = 0;

function changeColors(){
    let colors = ["red","blue","orange","yellow","green","purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index];
	index = index + 1;

    if(index > colors.length -1){
        index = 0;
	}
}