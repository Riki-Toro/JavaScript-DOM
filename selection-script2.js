// DOM SELECTION 2

// 4. document.querySelector() >> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';



// 5. document.querySelectorAll() >> nodeList
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'red';
}

// Root
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p');
p4[0].style.backgroundColor = 'red';
