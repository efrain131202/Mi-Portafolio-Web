//Evento de Descarga de CV

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadCVBtn');
  
    downloadBtn.addEventListener('click', function(event) {
      const downloadLink = "./assets/CV_EfrainCruzLobato_2024.pdf";
      window.location.href = downloadLink;
  
      event.preventDefault(); 
    });
  });
  
  // Evento de año Automatico

  const yearElement = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
  

  document.addEventListener('DOMContentLoaded', function() {

    // Función para el efecto de desplazamiento suave al hacer clic en los enlaces
    
    const navbarLinks = document.querySelectorAll('.navbar-menu a');
  
    navbarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
  
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth' 
          });
        }
      });
    });
  });
 
  document.addEventListener('DOMContentLoaded', function() {

    // Función para el botón flotante que redirige al inicio de la página con desplazamiento suave

    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
  
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  //Evento Para progresBar

  document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() { myFunction() };
  
    function myFunction() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('myBar').style.width = scrolled + '%';
    }
  });
  
  