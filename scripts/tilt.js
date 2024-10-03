document.querySelectorAll('.projectgriditem').forEach(item => {
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
      const shadowX = (mouseX / itemWidth) * -30; // Shadow moves in the opposite direction of mouse
      const shadowY = (mouseY / itemHeight) * -30;

      item.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      item.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.3)`; // Dynamic shadow
    });
  
    item.addEventListener('mouseleave', function() {
      item.style.transform = `rotateX(0deg) rotateY(0deg)`; // Reset rotation on mouse leave
      item.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.4)`; // Reset shadow
    });
  });
  