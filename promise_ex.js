let janjian = new Promise((resolve, rejected) => {
	resolve("berhasil")
});


janjian.then((result) => {console.log(result)})

let url = 'http://jsonplaceholder.typicode.com/posts/1';
fetch(url).then((res) => res.json()).then((res) => {console.log(res)});