
document.addEventListener('DOMContentLoaded', () => {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');

  sidebarToggle.addEventListener('click', (e) => {
    e.stopPropagation();  
    sidebar.classList.toggle('active');
  });

  mainContent.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });
  sidebar.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  mainContent.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});