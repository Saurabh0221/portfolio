<!-- Previous HTML code -->

  <script>
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
          window.scrollTo({
            top: target.offsetTop - nav.offsetHeight, // Adjust for fixed navigation height
            behavior: 'smooth'
          });
        }
      });
    });

    // Show or hide the "Back to Top" button based on scroll position
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    // Scroll to the top when the "Back to Top" button is clicked
    backToTopButton.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  </script>

</body>
</html>
<a href="#top" id="back-to-top">Back to Top</a>
<!-- Previous HTML code -->

  <script>
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
          window.scrollTo({
            top: target.offsetTop - nav.offsetHeight, // Adjust for fixed navigation height
            behavior: 'smooth'
          });
        }
      });
    });

    // Show or hide the "Back to Top" button based on scroll position
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    // Scroll to the top when the "Back to Top" button is clicked
    backToTopButton.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    // Toggle mobile-friendly navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  </script>

</body>
</html>
<div class="nav-toggle">&#9776;</div>
<!-- Previous HTML code -->

<nav>
  <div class="nav-toggle">&#9776;</div>
  <ul>
    <!-- Your navigation links here -->
  </ul>
</nav>

<!-- Continue with the rest of your HTML content -->
