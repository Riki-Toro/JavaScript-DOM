// LATIHAN OBJECT

// PENGELOLAAN JURAGAN ANGKOT
// bisa mengelola sopir, trayek, kas, penumpang

// membuat object
function Angkot (sopir, trayek, penumpang, kas) {
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	// mengelola penumpang naik
	this.penumpangNaik = function(namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	// penumpang turun
	this.penumpangTurun = function(namaPenumpang, bayar) {
		if ( this.penumpang.length === 0 ) {
			alert('Angkot masih kosong!');
			return false;
		}

		for (let i = 0; i < this.penumpang.length; i++) {
			if ( this.penumpang[i] == namaPenumpang ) {
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}
}

let angkot1 = new Angkot ('Riki', ['Bungkal','Jetis'], [], 0);
let angkot2 = new Angkot ('Toro', ['Bungkal','Slahung'], [], 0);

// hasil di console
// angkot1.penumpangNaik('ttt');
// ["ttt"]
// angkot1.penumpangNaik('iii');
// (2) ["ttt", "iii"]
// angkot1.penumpangTurun('iii', 2000);
// (2) ["ttt", undefined]
// angkot1.kas
// 2000
// angkot1.penumpangTurun('ttt', 7500);
// (2) [undefined, undefined]
// angkot1.penumpangNaik('ppp');
// (3) [undefined, undefined, "ppp"]
// angkot1.kas
// 9500
// angkot1.penumpangTurun('ppp', 1500);
// (3) [undefined, undefined, undefined]
// angkot1.kas
// 11000
// angkot2.kas
// 0
