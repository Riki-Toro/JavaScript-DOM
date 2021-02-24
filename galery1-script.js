const container = document.querySelector('.container');
const besar = document.querySelector('.besar');
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function (e) {
	if ( e.target.className == 'thumb' ) {
		besar.src = e.target.src;


		thumbs.forEach(function(thumb) {
			thumb.className = 'thumb';
		});
		e.target.classList.add('active');
	}
});
