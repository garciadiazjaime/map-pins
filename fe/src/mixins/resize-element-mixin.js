var ResizeElement = {

	/**
	* Makes sections at least as tall as the window
	* {string} elementID
    * {int} height
	**/
    setHeightByID: function( elementID, height){
    	document.getElementById(elementID).style.minHeight = height + "px";
    },
    /**
    * Makes all emements with a defined class at least as tall as the window
    * {string} elementClass
    * {Int} height
    **/

    setHeightByClass: function(elementClass, height){
        console.log(height);
    	var elements = document.getElementsByClassName(elementClass);
    	for(var i=0; i<elements.length; i++) { 
		  	elements[i].style.minHeight = height + "px";
		}
    }
};

module.exports = ResizeElement;
