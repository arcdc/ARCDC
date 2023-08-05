document.getElementById('menuToggle').addEventListener('click', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuContainer = document.getElementById('menuContainer');

    // Toggle the 'active' class on the hamburger icon
    menuToggle.classList.toggle('active');

    // Toggle the visibility of the menu container
    menuContainer.classList.toggle('hide');
  });

  function goToDatabasePage() {
    window.location.href = "database.html";
  }