walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	


	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
                        if(node.parentElement.tagName.toLowerCase() != "script") {
			handleText(node);
                        }
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	
    v = v.replace(/\b(dreddit is) (recruiting)\b/gi, "$1 no longer $2");
	
	var reg = new RegExp(/\b(the|an)\s(i)mperium\b/gi);
	var res = reg.exec(v);
	if(res != null){
		v = (res[1] == res[1].toUpperCase() ? "T" : "t")  + "hose " + (res[2] == res[2].toUpperCase() ? "B" : "b") + "ee guys";		
	}
	
	reg = new RegExp(/\b(i)mperium\b/gi);
	res = reg.exec(v);
	if(res != null){
		v = (res[1] == res[1].toUpperCase() ? "B" : "b") + "ee guys";		
	}
	
	reg = new RegExp(/\b(t)he (c)fc\b/gi);
	res = reg.exec(v);
	if(res != null){
		v = (res[1] == res[1].toUpperCase() ? "T" : "t") + "hose " + (res[2] == res[2].toUpperCase() ? "B" : "b") + "ee guys";		
	}
	
	reg = new RegExp(/\b(t)he (c)luster\s{0,1}fuck coalition\b/gi);
	res = reg.exec(v);
	if(res != null){
		v = (res[1] == res[1].toUpperCase() ? "T" : "t") + "hose " + (res[2] == res[2].toUpperCase() ? "B" : "b") + "ee guys";		
	}	
	
	reg = new RegExp(/\b(c)fc\b/gi);
	res = reg.exec(v);
	if(res != null){
		v = (res[1] == res[1].toUpperCase() ? "B" : "b") + "ee guys";		
	}	
	
	reg = new RegExp(/\b(g)oons\b/gi);
	res = reg.exec(v);
	if(res != null){
		v = (res[1] == res[1].toUpperCase() ? "B" : "b") + "ees";		
	}

	textNode.nodeValue = v;
}


