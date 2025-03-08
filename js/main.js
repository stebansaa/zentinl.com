document.addEventListener('DOMContentLoaded', function() {
  // Get the current page path from URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  // Update active navigation state based on current page
  updateActiveNavigation(currentPath);
  
  // Function to update active navigation state
  function updateActiveNavigation(currentPath) {
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add('active', 'text-primary-700');
      } else {
        link.classList.remove('active', 'text-primary-700');
      }
    });
  }

  // Update metadata based on current page
  updateMetadata(currentPath);

  function updateMetadata(currentPath) {
    // This is a simplified version - you'll set proper values for each page
    const pageTitle = document.title;
    const pageDescription = document.querySelector('meta[name="description"]').getAttribute('content');
    const currentUrl = window.location.href;
    
    // Update structured data
    updateStructuredData(currentPath, pageTitle, pageDescription, currentUrl);
  }

  function updateStructuredData(currentPath, pageTitle, pageDescription, currentUrl) {
    // Base organization data
    const orgData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zentinl",
      "url": "https://zentinl.com",
      "logo": "https://zentinl.com/zentinel-logo.png",
      "sameAs": [
        "https://www.facebook.com/zentinl",
        "https://x.com/zentinl",
        "https://www.linkedin.com/company/zentinl.com/",
        "https://t.me/zentinl",
        "https://github.com/zentinl",
        "https://www.tiktok.com/@zentinl.com"
      ]
    };
    
    // Update the structured data in the DOM
    if (document.getElementById('structuredData')) {
      document.getElementById('structuredData').textContent = JSON.stringify(orgData);
    }
  }
});