// BERMAIN DENGAN WARNA

// tangkap element
const t1 = document.getElementById('tUbahWarna');
const bg = document.getElementsByTagName('body')[0];

// mengubah warna putih ke biru muda
// pakai event handler
// t1.onclick = function() {
// 	bg.style.backgroundColor = 'lightblue';
// }

// pakai event addEventListener
// t1.addEventListener('click', function() {
// 	bg.style.backgroundColor = 'lightblue';
// });

// mengubah 2 warna
t1.onclick = function() {
// 	// bg.setAttribute('class', 'biru-muda');
		bg.classList.toggle('biru-muda');
}

// kasus 2 membuat tombol baru ketika di clik merubah warna background nya random & membuat tombolnya dengan javascript

const t2 = document.createElement('button');
const textT2 = document.createTextNode('Acak Warna');

t2.appendChild(textT2);
t2.setAttribute('type', 'button');

t1.after(t2);

// kasih event
t2.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);

	bg.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});




// kasus 3 membuat slider dengan parameter 3 warna dasar

const sMerah = document.querySelector('input[name=slider-merah]');
const sHijau = document.querySelector('input[name=slider-hijau]');
const sBiru = document.querySelector('input[name=slider-biru]');

sMerah.addEventListener('input', function() {
	const red = sMerah.value;
	const green = sHijau.value;
	const blue = sBiru.value;
	bg.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
});

sHijau.addEventListener('input', function() {
	const red = sMerah.value;
	const green = sHijau.value;
	const blue = sBiru.value;
	bg.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
});

sBiru.addEventListener('input', function() {
	const red = sMerah.value;
	const green = sHijau.value;
	const blue = sBiru.value;
	bg.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
});



