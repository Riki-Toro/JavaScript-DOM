// MEMBUAT OBJECT PADA JAVASCRIPT

// object literal
let mhs1 = {
	nama : "Riki Widiantoro",
	umur : 22,
	nim : 1111,
	jurusan : "Teknik Informatika"
};

let mhs2 = {
	nama : "Toro toro",
	umur : 20,
	nim : 2222,
	jurusan : "Teknik Mesin"
};



// function declaration
function buatObjectMahasiswa(nama, nim, umur, jurusan) {
	let mhs = {};

	mhs.nama = nama;
	mhs.nim = nim;
	mhs.umur = umur;
	mhs.jurusan = jurusan;

	return mhs;
}

let mhs3 = buatObjectMahasiswa('Widi', '3333', '21', 'Teknik Electro');
let mhs4 = buatObjectMahasiswa('Anto', '4444', '20', 'Teknik Sipil');



// constructor function >> dengan keyword new
// constructor adalah function yang khusus untuk membuat object pada javascript
// nama function nya utamakan dengan huruf besar karena untuk membedakan declaration dengan constructor
function Mahasiswa (nama, nim, umur, jurusan) {
	// let this = {};
	this.nama = nama;
	this.nim = nim;
	this.umur = umur;
	this.jurusan = jurusan;
	// return this;
}

let mhs5 = new Mahasiswa('Eren', '5555', '19', 'Teknik Industri');
let mhs6 = new Mahasiswa('Levi', '6666', '19', 'Teknik Industri');



// object.create
// pada javascript lanjutan setelah materi prototype
