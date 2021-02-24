// KONSEP THIS

// CARA MEMBUAT OBJECT
// mengulang cara membuat function

// cara 1 >> function declaration
function halo () {
	console.log('halo');
}
// cara memanggil
halo();


// // cara 2 >> object literal
let obj = {};
obj.halo = function () {
	console.log('halo');
}
obj.halo();


// // cara 3 >> constructor function
function Halo () {
	console.log('halo');
}
let he = new Halo();




// // masuk konsep this
// // THIS adalah sebuah keyword spesial yang secara otomatis di definisikan pada setiap function
var a = 10;
console.log(this.a);

// menjalankan this pada tiap" cara membuat object

// cara 1 function declaration
function halo () {
	console.log(this);
	console.log('halo');
}
// cara memanggil
this.halo();
// this pada function declaration adalah mengembalikan object global


// // cara 2 object literal
let objj = { a : 10, nama : 'riki' };
objj.halo = function () {
	console.log(this);
	console.log('halo');
}
objj.halo();
// this mengembalikan object yang bersangkutan


// // cara 3 constructor function
function Halo () {
	console.log(this);
	console.log('halo');
}
let obj1 = new Halo();
let obj2 = new Halo();
// this mengembalikan object yang baru dibuat
