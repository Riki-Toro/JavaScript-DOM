// MANIPULATION 2 NODE
// bisa membuat, mengubah dan menghapus elemen


// kasus 1
// buat elemen baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf atau gabungkan
pBaru.appendChild(teksBaru);

// simpan pBaru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// kasus 2
const liBaru = document.createElement('li');
const teksLi = document.createTextNode('item baru');

liBaru.appendChild(teksLi);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);



// kasus 3 
// remove

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);



// kasus 4
// replace

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2 = document.createElement('h2');
const teksH2 = document.createTextNode('Judul Baru');

h2.appendChild(teksH2);

sectionB.replaceChild(h2, p4);



// tanda yang baru
pBaru.style.backgroundColor = 'red';
liBaru.style.backgroundColor = 'green';
h2.style.backgroundColor = 'blue';
