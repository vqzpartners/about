// Function to create and inject the navigation menu
function createNavigationMenu() {
  // Create the navigation element
  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';
  
  // Define the menu items
  const menuItems = [
    { href: '/', icon: '⌂', text: 'Home' },
    { href: '/founder', icon: '👤', text: 'Founder' },
    { href: '/business', icon: '💎', text: 'Partners' },
    { href: '/contact', icon: '💬', text: 'Contact' },
  ];
  
  // Create and append each menu item
  menuItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.className = 'nav-item';
    
    const iconSpan = document.createElement('span');
    iconSpan.className = 'nav-icon';
    iconSpan.textContent = item.icon;
    
    const textSpan = document.createElement('span');
    textSpan.className = 'nav-text';
    textSpan.textContent = item.text;
    
    link.appendChild(iconSpan);
    link.appendChild(textSpan);
    nav.appendChild(link);
  });
  
  // Append the navigation to the body
  document.body.appendChild(nav);
  
  // Highlight the active menu item
  highlightActiveMenuItem();
}

// Function to highlight the current active menu item
function highlightActiveMenuItem() {
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (currentPath === href || (href !== '/' && currentPath.startsWith(href))) {
      item.classList.add('active');
    }
  });
}

// Initialize the menu when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createNavigationMenu);
