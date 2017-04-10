export function flattenArray(arr) {
	
	var flattenedArray = [];
	
	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			for (var j = 0; j < arr[i].length; j++) {
				if (Array.isArray(arr[i][j])) {
					for (var k = 0; k < arr[i][j].length; k++) {
						flattenedArray.push(arr[i][j][k]);
					}
				} else {
					flattenedArray.push(arr[i][j]);
				}
			}
		} else {
			flattenedArray.push(arr[i]);
		}
	}
	return flattenedArray;
}
