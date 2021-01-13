const chunk = (array, chunkSize) => {
	var tempArray = []; 
	for (var i = 0; i < array.length; i+= chunkSize) {
		tempArray.push(array.slice(i, i+chunkSize));
    }
    console.log(tempArray)
	return tempArray
}

const array = [1,2,3,4,5,6,7,8,9,10,11,12];
chunk(array,2)
