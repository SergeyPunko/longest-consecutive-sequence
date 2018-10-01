module.exports = function longestConsecutiveLength(array) {
	const setArr = new Set(array);
	let     k = 0,
		  max = 0,
	 maxonArr = Math.max.apply( Math, array ),
	 minonArr = Math.min.apply( Math, array );
	for(let i = minonArr; i<=maxonArr;i++){
		if(setArr.has(i)){
			k++;
			if(k>max){
		     	max = k;
		    }
	    } else k=0;
	}
	return max;
}
