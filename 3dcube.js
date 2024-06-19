document.addEventListener("DOMContentLoaded", () => {
  const cube = document.querySelector(".cube");

  // Rotate cube based on mouse movement
  cube.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 10;
    const y = (window.innerHeight / 2 - e.clientY) / 10;
    cube.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  // Reset cube rotation on mouse leave
  cube.addEventListener("mouseleave", () => {
    cube.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
