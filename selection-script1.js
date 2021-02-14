// DOM SELECTION 1

// Method :
// 1. getElementById() >> boleh hanya ada 1 ID
// 2. getElementsByTagName() >> boleh ada banyak
// 3. getElementsByClassName >> boleh banyak
// 4. querySelector()
// 5. querySelectorAll()

// apa yang dihasilkan oleh method diatas :
// 1. >> elemet
// 2. >> HTMLCollection
// 3. >> HTMLCollection
// 4. >> element
// 5. >> nodeList




// CODE
// 1. document.getElemenById() >> element
const judul = document.getElementById('judul');
judul.style.color = "red";
judul.style.backgroundColor = "lightblue";
judul.innerHTML = "Riki Widiantoro";


// 2. document.getElementsByTagName() >> HTMLCollection
const p = document.getElementsByTagName('p');
for ( let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = "blue";
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';


// 3. document.getElementsByClassName() >> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';

