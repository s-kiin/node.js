function say (wrd){
	console.log(wrd);
}

function execute(setFunction, value){
	setFunction(value);
}


execute(say, '123');