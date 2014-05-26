/**
 Smart Header - An easy-to-use auto collapsible header plugin
 Version: 0.1.0
 Date: 2014-05-25 
 Author: Alcides Queiroz [alcidesqueiroz(at)gmail(dot)com]
 Available under the MIT License (http://opensource.org/licenses/MIT)
 **/
;(function(factory){
	if(typeof define === "function" && define.amd)
	    define(["jquery"], factory);
	else
	    factory(jQuery);
})(function($){
    $.fn.smartHeader = function(options){
    	options = options || {};

    	var $window = $(window),
			$header = this,
			collapseBreakpoint = options.collapseBreakpoint || 50,
			throttleTimeout = options.throttleTimeout || 300,
			collapsedClassName = options.collapsedClassName || "collapsed-header",
			scrolled = false;

		function setHeaderHeight(){
			$header.toggleClass(collapsedClassName, $window.scrollTop() >= collapseBreakpoint);
			scrolled = false;
		}

		$window.scroll(function(){
			if(!scrolled){
				scrolled = true;
				setTimeout(setHeaderHeight, throttleTimeout);
			}
		});

		return this;
    };  
});