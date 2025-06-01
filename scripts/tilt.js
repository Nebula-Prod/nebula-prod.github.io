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

    textElements.forEach(text => {
      text.style.textShadow = `${shadowX * shadowmult}px ${shadowY * shadowmult}px 4px rgba(0, 0, 0, 1)`; // Adjust opacity as needed
    });
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

      // Calculate shadow offsets based on mouse position
      shadowX = (mouseX / itemWidth) * -30; // Shadow moves in the opposite direction of mouse
      shadowY = (mouseY / itemHeight) * -30;
      
      theItem = item;

      item.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      item.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.6)`; // Dynamic shadow

      // Apply the same shadow to text elements inside the div
      textElements = item.querySelectorAll('*'); // All child elements
      textElements.forEach(text => {
        text.style.textShadow = `${shadowX * shadowmult}px ${shadowY * shadowmult}px 4px rgba(0, 0, 0, 1)`; // Adjust opacity as needed
      });
    });
  
    item.addEventListener('mouseleave', function() {
      item.style.transform = `rotateX(0deg) rotateY(0deg)`; // Reset rotation on mouse leave
      item.style.boxShadow = `0 10px 10px rgba(0, 0, 0, 0.4)`; // Reset shadow

      // Reset text shadow when mouse leaves
      const textElements = item.querySelectorAll('*');
      textElements.forEach(text => {
        text.style.textShadow = `0px 1px 2px rgba(0, 0, 0, 0.4)`; // Reset text shadow
      });
    });
  });
  