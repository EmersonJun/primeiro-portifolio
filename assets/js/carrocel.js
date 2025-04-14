let currentIndex = 0;

  function scrollCarousel(direction) {
    const track = document.getElementById('carouselTrack');
    const itemWidth = track.querySelector('.work-item').offsetWidth + 0; // 20 = padding
    const totalItems = track.children.length;
    const maxIndex = totalItems - 3;

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }