// MANIPULATION 1 ELEMENT


// element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Riki Widiantoro</em>';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'Hello World';



// element.style.<properti CSS>
const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'salmon';



// mengelola atribut (sesuatu yang menempel pada tag HTML) :
// element.getAttribute()
// element.setAttribute()
// element.removeAttribute()

const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'Riki');

const a = document.querySelector('section#a a');

// di console :
// a.setAttribute('id', 'link');
// undefined
// a.getAttribute('href');
// "#"
// judul.getAttribute('id');
// "judul"




const p2 = document.querySelector('section#a .p2');
p2.setAttribute('class', 'label');

// cara menambahkan atribute agar tidak menimpa atribut sebelumnya yaitu dengan method dibawah.

// element.classList.add() manambah
// di console : 
// p2.classList
// DOMTokenList ["p2", value: "p2"]
// p2.classList.add('label');
// undefined
// p2.claList
// DOMTokenList(2) ["p2", "labssel", value: "p2 label"]

// element.classList.remove() menghilangkan
// di console :
// p2.classList.remove('label');
// undefined
// p2.classList
// DOMTokenList ["p2", value: "p2"]

// element.classList.toggle() jika tidak punya class maka akan menambahkan, jika sudah punya maka akan menghilangkan
// di console :
// p2.classList.toggle('label');
// true
// p2.classList.toggle('label');
// false

// element.classList.item() utuk mengetahui class tertentu dalam elemen
// element.classList.contains() mengecek dalam elemen ada nggak kelas tertentu
// di console :
// p2.classList
// DOMTokenList ["p2", value: "p2"]
// p2.classList.add('satu')
// undefined
// p2.classList.add('dua')
// undefined
// p2.classList.add('tiga')
// undefined
// p2.classList.item(2)
// "dua"
// p2.classList.contains(2)
// false
// p2.classList.contains(4)
// false

// element.classList.replace() untuk mengganti class yang ada dengan class yang baru
// di console :
// p2.classList.replace('tiga', 'empat')
// true
