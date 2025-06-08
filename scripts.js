"use strict";
// Navigation functionality
    document.addEventListener('DOMContentLoaded', function() {
      const navLinks = document.querySelectorAll('#navbar a');
      const sections = document.querySelectorAll('section');
      
      // Add click event to nav links
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
          
          // Update active nav link
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        });
      });
      
      // Add scroll spy functionality
      window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
          }
        });
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
          }
        });
      });
      
      // Your existing scripts.js content would go here
      // For now, just setting visits to 0
      document.getElementById('visits').textContent = '0';
    });