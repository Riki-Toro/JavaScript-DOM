const container = document.querySelector('.container');
const besar = document.querySelector('.besar');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
	// cek apakah e sama dengan thumb
	if ( e.target.className == 'thumb' ) {
		besar.src = e.target.src;
		besar.classList.add('fade');

		setTimeout(function() {
			besar.classList.remove('fade');
		}, 500);

		thumbs.forEach(function(thumb) {
			// solusi 1
			// if ( thumb.classList.contains('active') ){
			// 	thumb.classList.remove('active');
			// }

			// solusi 2 lebih gampang
			thumb.className = 'thumb';
		});

		e.target.classList.add('active');
	}
});
