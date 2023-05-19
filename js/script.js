  window.onload = function() {
        let spanNode = document.querySelector('.home__multiple');
        let words = ['Web Designer', 'Web Deweloper', 'Web Master'];
        let i = 0;
        setInterval(function() {
          spanNode.textContent = words[i];
          i = (i + 1) % words.length;
        }, 2000);

        const video = document.querySelector('.video');

        video.addEventListener('mouseover', () => {
          video.play();
        });

        video.addEventListener('mouseout', () => {
          video.pause();
          video.currentTime = 0;
        });
      };