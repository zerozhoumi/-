/**
 * @file task0002_1
 * @author zhoumi
 */

//util
function insertAfter(newElement, existElement) {

	var existParent = existElement.parentNode;

	if (existParent) {
		existParent.insertBefore(newElement, existElement.nextSibling);
   
	}
	 return newElement;
}

function filterArray(arr) {
	var result = [];

	each(arr, function (item) {
		if (item) {
			result.push(item);
		}
	});

	return result;
}

//