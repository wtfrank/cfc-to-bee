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

	v = v.replace(/\bThe Imperium\b/g, "Those Bee guys");
	v = v.replace(/\bThe imperium\b/g, "Those bee guys");
	v = v.replace(/\bthe Imperium\b/g, "those bee guys");
	v = v.replace(/\bthe imperium\b/g, "those bee guys");

	v = v.replace(/\bThe&nbsp;Imperium\b/g, "Those Bee guys");

	v = v.replace(/\bThe CFC\b/g, "Those Bee guys");
	v = v.replace(/\bThe cfc\b/g, "Those bee guys");
	v = v.replace(/\bthe CFC\b/g, "those bee guys");
	v = v.replace(/\bthe cfc\b/g, "those bee guys");
	
	v = v.replace(/\bThe Cluster Fuck Coalition\b/g, "Those Bee guys");
	v = v.replace(/\bThe ClusterFuck Coalition\b/g, "Those Bee guys");
	v = v.replace(/\bThe Cluster fuck Coalition\b/g, "Those Bee guys");
	v = v.replace(/\bThe Clusterfuck Coalition\b/g, "Those Bee guys");
	v = v.replace(/\bThe cluster fuck coalition\b/g, "Those bee guys");
	v = v.replace(/\bThe clusterfuck coalition\b/g, "Those bee guys");
	v = v.replace(/\bthe Cluster fuck coalition\b/g, "those bee guys");
	v = v.replace(/\bthe Clusterfuck coalition\b/g, "those bee guys");
	v = v.replace(/\bthe cluster fuck Coalition\b/g, "those bee guys");
	v = v.replace(/\bthe clusterfuck Coalition\b/g, "those bee guys");
	v = v.replace(/\bthe cluster fuck coalition\b/g, "those bee guys");
	v = v.replace(/\bthe clusterfuck coalition\b/g, "those bee guys");

        v = v.replace(/\bAn Imperium\b/g, "Those Bee guys");
        v = v.replace(/\bAn imperium\b/g, "Those bee guys");
        v = v.replace(/\ban Imperium\b/g, "those bee guys");
        v = v.replace(/\ban imperium\b/g, "those bee guys");

        v = v.replace(/\bImperium\b/g, "Bee guys");
        v = v.replace(/\bimperium\b/g, "bee guys");

        v = v.replace(/\bDreddit is Recruiting\b/g, "Dreddit is no longer Recruiting");
        v = v.replace(/\bDreddit is recruiting\b/g, "Dreddit is no longer recruiting");
        v = v.replace(/\bdreddit is recruiting\b/g, "dreddit is no longer recruiting");

        v = v.replace(/\bCFC\b/g, "Bee guys");
        v = v.replace(/\bCfc\b/g, "Bee guys");
        v = v.replace(/\bcfc\b/g, "bee guys");

        v = v.replace(/\bGoons\b/g, "Bees");
        v = v.replace(/\bgoons\b/g, "bees");

	textNode.nodeValue = v;
}


