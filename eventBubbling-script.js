// PREVENT DEFAULT
// close.forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.target.parentElement.style.display = 'none';
// 		e.preventDefault();
// 		// tambah method stop propagation()
// 		e.stopPropagation();
// 	});
// });


// EVENT BUBBLING >> untuk memperbaiki program yg sudah jalan biar lebih efektif
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
// 	card.addEventListener('click', function(e) {
// 		alert('ok');
		
// 	});
// });


// kasus terakhir lebih singkat
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
	if ( e.target.className == 'close' ) {
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	}
});
