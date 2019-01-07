// function main(param1, param2, callback) {
// 	console.log(param1, param2);
// 	callback();
// }

// function myCallback() {
// 	console.log("hello callback");
// }

// main(2,2,myCallback);

// var result = 0;
function calculate(param1, param2, callback) {
	result = param1+param2;

	if(typeof callback == 'function')
	{
		result = callback(param1, param2);
	}

	return result
}

function kali(x, y) {
	return x*y;
}
function bagi(x, y) {
	return x/y;
}
function tambah(x, y) {
	return x+y;
}
function kurang(x, y) {
	return x-y;
}

console.log(calculate(2,8,tambah))


// function p1() {
//   console.log('p1 done')
// }
// function p2(param1) {
//   //setTimeout or delay for asynchronous simulation 
//   setTimeout(
//       function() {
//         console.log('p2 done')
//         param1()
//       },100
//   )
// }
// function p3() {
//   console.log('p3 done')
// }
// p1()
// p2(p3)