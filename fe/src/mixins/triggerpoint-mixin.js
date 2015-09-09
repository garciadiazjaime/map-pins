var TriggerPoint = {

	/**
	* When the scroll passes over a certain point it changes the element's class
	* {string} triggerID Trigger element ID 
	* {string} elementID Element ID to change
	* {string} className CSS class to use
	**/
    watchPoint: function(triggerID, elementID, className){
    	var scrollTop = Math.round(document.body.scrollTop) || Math.round(document.documentElement.scrollTop);
    	var triggerElement = document.getElementById(triggerID);
    	var element = document.getElementById(elementID);
	    if(scrollTop > triggerElement.offsetTop){
	      element.classList.add(className);
	    }
	    else{
	      element.classList.remove(className);
	    }
    }

};

module.exports = TriggerPoint;
