// DOM TRAVERSAL || PENELUSURAN

// kasus 1 membuat div img nama telp menghilang ketika di klik tombol close || tanpa traversal
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function () {
// 	card.style.display = 'none';
	
// });



// kasus 2 ketika kontak ada banyak tidak bisa memakai querySelector karena hanya menangkap satu di elemen pertama, makanya harus memakai querySelectorAll dalam kasus 2 ini dan memakai DOM TRAVERSAL
const close = document.querySelectorAll('.close');

// for ( let i = 0; i < close.length; i++ ) {
// 	close[i].addEventListener('click', function(e) {
// 		// tanpa traversal
// 		// close[i].parentElement.style.display = 'none';


// 		// lebih bermanfaat memakai traversal
// 		e.target.parentElement.style.display = 'none';
// 	});
// };


// tanpa pengulangan
// close.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 	});
// });

// ada method apa saja untuk menelusuri ?
// 1. parentNode >>>> node
// 2. parentElement >>>> element
// 3. nextSibling >> saudara kandung dari elemen yang kita pilih >>>> node
// 4. nextElementSibling >>>> element
// 5. previousSibling >>>> node
// 6. previousElementSibling >>>> element


// kasus atau contoh lagi
const nama = document.querySelector('.nama');
// menangkap elemen parent
console.log(nama.parentElement.parentElement.parentElement);

// menangkap enter, harus ada element sampingnya
console.log(nama.nextSibling);

// menangkap element dibawah nya atau selanjutnya || adik
console.log(nama.nextElementSibling);

// menangkap element diatas nya atau sebelumnya || kakak
console.log(nama.previousElementSibling);


// PREVENT DEFAULT
close.forEach(function(el) {
	el.addEventListener('click', function(e) {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	});
});
