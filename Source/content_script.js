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

	v = v.replace(/\bthe imperium\b/gi, "those bee guys");

	v = v.replace(/\bThe&nbsp;Imperium\b/gi, "Those Bee guys");

	v = v.replace(/\bthe cfc\b/gi, "those bee guys");
	
	v = v.replace(/\bthe cluster fuck coalition\b/gi, "those bee guys");
	v = v.replace(/\bthe clusterfuck coalition\b/gi, "those bee guys");

        v = v.replace(/\ban imperium\b/gi, "those bee guys");

        v = v.replace(/\bimperium\b/gi, "bee guys");

        v = v.replace(/\bdreddit is recruiting\b/gi, "dreddit is no longer recruiting");

        v = v.replace(/\bcfc\b/gi, "bee guys");

        v = v.replace(/\bgoons\b/gi, "bees");

	textNode.nodeValue = v;
}


