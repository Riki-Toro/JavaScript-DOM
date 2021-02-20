// LATIHAN MEMBUAT GAME SUWIT JAWA V2.0

// LATIHAN MEMBUAT GAME SUWIT JAWA V2.0

function getPilihanCompoter() {
	const comp = Math.random();

	if (comp < 0.34) return "gajah";
	if (comp >= 0.34 && comp < 0.67) return "orang";
	return "semut";
	
}


function getHasil(comp, player) {
	if (player == comp) return "SERI";
	if (player == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH!";
	if (player == "orang") return (comp == "gajah") ? "KALAH!" : "MENANG!";
	if (player == "semut") return (comp == "orang") ? "KALAH!" : "MENANG!"; 
}



// membuat gambar computer agar mutar terlebih dahulu >> menggunakan konsep timing pada javascript // terlihat agar computer nya mikir 

function putar() {
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'semut',  'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();

	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if (i == gambar.length) i = 0;
	}, 100);
};




// CARA 1 >> langsung copas code sebelumnya
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanCompoter();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanCompoter();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanCompoter();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// });

// CARA 2 >> jadikan dalam satu function / satu blok program
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanComputer = getPilihanCompoter();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);

		putar();

		setTimeout(function() {
			const imgComputer = document.querySelector('.img-komputer');
			imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);
	});
});

