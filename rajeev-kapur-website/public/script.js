const nodes = document.querySelectorAll('.node');

nodes.forEach(node => {
  node.addEventListener('mouseover', () => {
    node.style.background = 'linear-gradient(45deg, #00e5ff, #ff4081)';
  });

  node.addEventListener('mouseout', () => {
    node.style.background = 'linear-gradient(45deg, #ff4081, #7c4dff)';
  });
});