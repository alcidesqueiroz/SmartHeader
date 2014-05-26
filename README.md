jQuery SmartHeader
=================

An easy-to-use auto collapsible header plugin for jQuery.

Usage
-----

```javascript
$(function(){
	$(".your-header-class").smartHeader();	
});
```

**Options**
```javascript
$(function(){
	$(".your-header-class").smartHeader({
		//Vertical Scroll offset where header will collapse (in pixels) [default: 50]
		collapseBreakpoint: 100, 

		//Throttle time (controls the frequency of scroll checkings by a given time period) [default: 300]
		throttleTimeout: 200, 

		//The class name to be assigned when header is in the collapsed state [default: 'collapsed-header']
		collapsedClassName: 'tiny-navbar'		
	});	
});
```

Author
------

Alcides Queiroz Aguiar 

-	E-mail: alcidesqueiroz(at)gmail(dot)com 
-	Twitter: [@alcidesqueiroz](http://www.twitter.com/alcidesqueiroz)
-	Stack Overflow: [http://is.gd/aqanso](http://stackoverflow.com/users/1295666/alcides-queiroz-aguiar)
-	Github: [alcidesqueiroz](https://github.com/alcidesqueiroz)


License
-------
This code is free to use under the terms of the MIT license.
