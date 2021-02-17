// DOM EVENTS

// events != even (events tidak sama dengan even)
// even = genap
// event = kejadian

// event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM
// kejadian bisa dilakukan oleh user = mouse event, keyboard event, dll
// atau bisa dilakukan secara otomatis oleh API = animasi selesai dijalankan oleh CSS, halaman selesai di load, dll


// cara mendengarkan event
// 1. Event Handler = inline HTML attribute & element method
// 2. addEventListener()


// kasus 1 mengubah warna background pada paragraf 3 ketika setelah di klik pakai inline HTML attribute
const p3 = document.querySelector('section#a .p3');

function ubahWarnaP3() {
	p3.style.backgroundColor = 'lightblue';
}

// // kasus 2 mengubah warna background pada paragraf 2 ketika setelah di klik pakai element method
function ubahWarnaP2() {
	p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;



// // kasus 3 addEventListener menambah list baru ketika di klik paragraf 4
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');

	const li = document.createElement('li');
	const textLi = document.createTextNode('List Baru');

	li.appendChild(textLi);
	ul.appendChild(li);
});


// perbedaan : ketika kita memberikan lebih dari satu perubahan pada sebuah event, jika kita menggunakan event handler maka perubahan yang terakhir dilakukan akan menimpa perubahan sebelumnya, sedangkan menggunakan addeventlistener maka akan menambah perubahan sebelumnya.


// kasus 4 sama seperti kasus sebelumnya pada p3 merubah warna background color
// Event Handler
const p3 = document.querySelector('.p3');
p3.onclick = function() {
	p3.style.backgroundColor = 'lightblue';
}

p3.onclick = function() {
	p3.style.color = 'red';
}

// addEventListener
const p3 = document.querySelector('.p3');
p3.addEventListener('click', function () {
	p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function () {
	p3.style.color = 'red';
});


// daftar event masih banyak lagi!!
