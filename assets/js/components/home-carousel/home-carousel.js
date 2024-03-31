evenPicServices.directive('homeCarousel', function(
	$interval
) {
	return {
		templateUrl: 'assets/js/components/home-carousel/home-carousel.html',
		replace: true,
		link: function(scope) {
			let currentIndex = 1;

			scope.mainImages = {
				1: {
					url: 'https://www.cnet.com/a/img/resize/76c825b09b4e3367d2a1e06321278e6403a4c60e/hub/2021/08/31/d56dec80-f6de-42ae-9e2a-dad48e1f3d13/gettyimages-1331974820.jpg?auto=webp&fit=crop&height=675&width=1200',
					next_index: 2,
				},
				2: {
					url: 'https://www.tomorrowland.com/src/Frontend/Themes/tomorrowland/Core/Layout/images/timeline/2019-1.jpg',
					next_index: 3,
				},
				3: {
					url: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/lollapalooza-2024-ingressos.jpg?w=1200&h=675&crop=1',
					next_index: 1,
				}
			};

			$interval(() => {
				const currentImage = scope.mainImages[currentIndex];

				jQuery(`#image-${currentIndex}`).css({ opacity: '0' });

				currentIndex = currentImage.next_index;

				jQuery(`#image-${currentIndex}`).css({ opacity: '1' });
			}, 2000);
		}
	};
});
