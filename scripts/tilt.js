let shadowmult = 1;
let progress = 0;
var textElements;
var shadowX;
var shadowY;

function startTransitionProgress() {
  const startTime = performance.now(); // Get the current timestamp

  function updateProgress() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    progress = Math.min(elapsedTime / 800, 1); // Progress as a float between 0 and 1
    shadowmult = progress;

    if (progress < 1) {
      requestAnimationFrame(updateProgress); // Continue until transition completes
    }
  }

  requestAnimationFrame(updateProgress); // Start the progress tracking
}

document.querySelectorAll('.projectgriditem').forEach(item => {
    item.addEventListener('mouseenter', function() {
      startTransitionProgress();
    });

    item.addEventListener('mousemove', function(e) {
      const rect = item.getBoundingClientRect(); // Get the div's position and size
      const itemWidth = rect.width;
      const itemHeight = rect.height;
      const centerX = rect.left + itemWidth / 2;
      const centerY = rect.top + itemHeight / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const sensitivity = 40;

      const rotateX = (mouseY / itemHeight) * sensitivity; // Properly invert Y-axis rotation
      const rotateY = (mouseX / itemWidth) * sensitivity;   // X-axis rotation remains the same
      
      theItem = item;

      item.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      item.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(255, 255, 255, 0.6)`; // Dynamic shadow
    });
  
    item.addEventListener('mouseleave', function() {
      item.style.transform = `rotateX(0deg) rotateY(0deg)`; // Reset rotation on mouse leave
      item.style.boxShadow = `0 10px 10px rgba(0, 0, 0, 0)`; // Reset shadow
    });
  });
  