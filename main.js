const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');

const filterBtn = document.querySelectorAll('.filter-item');
const portfolioItems = document.querySelectorAll('.portfolio-item');

menuToggler.addEventListener('click', function(){
  sideBar.classList.toggle('active');
});

function navigateToSection(sectionClass) {
  for (let j = 0; j < pages.length; j++) {
    pages[j].classList.remove('active');
  }
  
  for (let j = 0; j < navItemLinks.length; j++) {
    navItemLinks[j].classList.remove('active');
  }
  
  for (let i = 0; i < navItemLinks.length; i++) {
    const itemLinkText = navItemLinks[i].textContent.toLowerCase();
    let pageClass;
    
    switch(itemLinkText) {
      case "sobre mí":
        pageClass = "about";
        break;
      case "resumen":
        pageClass = "resume";
        break;
      case "servicios":
        pageClass = "services";
        break;
      case "proyectos":
        pageClass = "portfolio";
        break;
      case "contacto":
        pageClass = "contact";
        break;
      default:
        pageClass = itemLinkText;
    }
    
    if (pageClass === sectionClass) {
      navItemLinks[i].classList.add('active');
    }
  }
  
  const activePage = document.querySelector(`.${sectionClass}.page`);
  if (activePage) {
    activePage.classList.add('active');
    
    if (window.innerWidth <= 768) {
      sideBar.classList.remove('active');
    }
  }
}

for (let i = 0; i < navItemLinks.length; i++) {
  navItemLinks[i].addEventListener('click', function(e){
    e.preventDefault();
    
    const itemLinkText = this.textContent.toLowerCase();
    
    let pageClass;
    switch(itemLinkText) {
      case "sobre mí":
        pageClass = "about";
        break;
      case "resumen":
        pageClass = "resume";
        break;
      case "servicios":
        pageClass = "services";
        break;
      case "proyectos":
        pageClass = "portfolio";
        break;
      case "contacto":
        pageClass = "contact";
        break;
      default:
        pageClass = itemLinkText;
    }
    
    navigateToSection(pageClass);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function(){
      for (let j = 0; j < filterBtn.length; j++) {
        filterBtn[j].classList.remove('active');
      }
      this.classList.add('active');

      const selectedFilter = this.textContent.trim();
      
      portfolioItems.forEach(item => {
        const category = item.querySelector('.item-category').textContent.trim();
        
        if (selectedFilter === 'Todos' || selectedFilter === category) {
          item.classList.add('active');
          item.style.display = 'block';
        } else {
          item.classList.remove('active');
          item.style.display = 'none';
        }
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.querySelector('.contact-link');
  if (contactLink) {
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      navigateToSection('contact');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const portfolioLinks = document.querySelectorAll('.portfolio-item');
  
  portfolioLinks.forEach(link => {
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';
    link.style.display = 'block';
    link.style.cursor = 'pointer';
    link.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cvButtons = document.querySelectorAll('.btn-primary');

  cvButtons.forEach(button => {
    if (button.textContent === 'Descargar CV') {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const link = document.createElement('a');
        link.href = 'Currículum.pdf';
        link.download = 'Luis_Perez_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  });
});