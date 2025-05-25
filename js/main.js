
  // Spinner
  const spinnerWrapperEl = document.querySelector(".spinner-wrapper");

  window.addEventListener("load", () => {
    spinnerWrapperEl.style.opacity = "0";
  });

  setTimeout(() => {
    spinnerWrapperEl.style.display = "none";
  }, 1000);


  // portfolio
document.addEventListener('DOMContentLoaded', function () {
    var grid = document.querySelector('.isotope-container');
    var iso = new Isotope(grid, {
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry'
    });

    // Filter buttons
    var filterButtons = document.querySelectorAll('.portfolio-filters li');

    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var filterValue = this.getAttribute('data-filter');

        // Update Isotope filter
        iso.arrange({ filter: filterValue });

        // Update active class
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        this.classList.add('filter-active');
      });
    });
  });





