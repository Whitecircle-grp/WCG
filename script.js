document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const isLoginPage = window.location.pathname.endsWith('login.html');

  if (!isLoggedIn && !isLoginPage) {
    window.location.href = 'login.html';
  } else if (isLoggedIn && !isLoginPage) {
    document.body.classList.add('is-protected'); 
    document.body.style.display = 'flex'; 
  }


  const serviceData = {
    textile: { caption: 'Textile & Apparel', products: [{ name: 'Cotton Yarn', img: 'https://i.ibb.co/YFFpvZf7/textile.jpg', importPrice: '₹400/kg', exportPrice: '₹450/kg' }] },
    automobile: { caption: 'Automobile Industry', products: [{ name: 'Engine Components', img: 'https://i.ibb.co/spNykfv5/automobile.jpg', importPrice: '₹15,000/unit', exportPrice: '₹18,000/unit' }] },
    electronics: { caption: 'Electronics & Components', products: [{ name: 'Semiconductors', img: 'https://i.ibb.co/0Rbqs1zf/electronics.jpg', importPrice: '₹500/pc', exportPrice: '₹600/pc' }] },
    pharma: { caption: 'Pharmaceuticals', products: [{ name: 'Active Pharma Ingredients', img: 'https://i.ibb.co/m5p28n5h/pharma.jpg', importPrice: '₹5,000/kg', exportPrice: '₹6,200/kg' }] },
    food: { caption: 'Food Processing', products: [{ name: 'Packaged Spices', img: 'https://i.ibb.co/Gf3yVwY8/food.jpg', importPrice: '₹300/kg', exportPrice: '₹350/kg' }] },
    machinery: { caption: 'Heavy Machinery', products: [{ name: 'CNC Machine', img: 'https://i.ibb.co/9kL8L3vg/machinery.jpg', importPrice: '₹12,00,000/unit', exportPrice: '₹15,00,000/unit' }] },
    chemicals: { caption: 'Chemicals & Fertilizers', products: [{ name: 'Industrial Solvents', img: 'https://i.ibb.co/DfXj9K2j/chemicals.jpg', importPrice: '₹150/L', exportPrice: '₹180/L' }] },
    metals: { caption: 'Metals & Mining', products: [{ name: 'Steel Coils', img: 'https://i.ibb.co/Cs9YtBcB/metals.jpg', importPrice: '₹55,000/ton', exportPrice: '₹60,000/ton' }] },
    agriculture: { caption: 'Agricultural Products', products: [{ name: 'Basmati Rice', img: 'https://i.ibb.co/ps3yDyv/agriculture.jpg', importPrice: '₹80/kg', exportPrice: '₹110/kg' }] },
    furniture: { caption: 'Furniture & Woodwork', products: [{ name: 'Teak Wood Logs', img: 'https://i.ibb.co/0VsyHwW9/furniture.jpg', importPrice: '₹2,500/cft', exportPrice: '₹3,000/cft' }] },
    plastics: { caption: 'Plastics & Packaging', products: [{ name: 'PET Granules', img: 'https://i.ibb.co/Df4gNdFP/plastics.jpg', importPrice: '₹90/kg', exportPrice: '₹105/kg' }] },
    oil: { caption: 'Oil & Gas Equipment', products: [{ name: 'Drill Pipes', img: 'https://i.ibb.co/G38dWttk/oil.jpg', importPrice: '₹80,000/unit', exportPrice: '₹95,000/unit' }] },
    renewable: { caption: 'Renewable Energy Components', products: [{ name: 'Solar Panels', img: 'https://i.ibb.co/FkgxPVBM/renewable.jpg', importPrice: '₹25/watt', exportPrice: '₹28/watt' }] },
    shipbuilding: { caption: 'Shipbuilding & Marine', products: [{ name: 'Marine Grade Steel', img: 'https://i.ibb.co/YBjGgbcP/marine.jpg', importPrice: '₹75,000/ton', exportPrice: '₹85,000/ton' }] }
  };
  const serviceBtns = document.querySelectorAll('.service-btn');
  const serviceModal = document.getElementById('service-modal');
  if (serviceBtns.length > 0 && serviceModal) {
    const serviceModalCaption = document.getElementById('service-modal-caption');
    const serviceModalProductsGrid = document.getElementById('service-modal-products-grid');
    const serviceModalClose = document.getElementById('service-modal-close');
    serviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const service = btn.getAttribute('data-service');
        const data = serviceData[service];
        if (data) {
          serviceModalCaption.textContent = data.caption;
          serviceModalProductsGrid.innerHTML = '';
          data.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `<img src="${product.img}" alt="${product.name}"><h4>${product.name}</h4><p><strong>Import:</strong> ${product.importPrice}</p><p><strong>Export:</strong> ${product.exportPrice}</p>`;
            serviceModalProductsGrid.appendChild(productCard);
          });
          serviceModal.classList.add('show');
        }
      });
    });
    const hideModal = () => serviceModal.classList.remove('show');
    serviceModalClose.addEventListener('click', hideModal);
    serviceModal.addEventListener('click', e => { if (e.target === serviceModal) hideModal(); });
  }

  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const showSignupLink = document.getElementById('show-signup');
  const showLoginLink = document.getElementById('show-login');
  if (loginForm && signupForm) {
    showSignupLink.addEventListener('click', e => { e.preventDefault(); loginForm.style.display = 'none'; signupForm.style.display = 'block'; });
    showLoginLink.addEventListener('click', e => { e.preventDefault(); loginForm.style.display = 'block'; signupForm.style.display = 'none'; });
    signupForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = signupForm.querySelector('#signup-name').value;
      const email = signupForm.querySelector('#signup-email').value;
      const password = signupForm.querySelector('#signup-password').value;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some(user => user.email === email);
      if (userExists) { alert('An account with this email already exists!'); return; }
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful! Please log in.');
      signupForm.reset();
      showLoginLink.click();
    });
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = loginForm.querySelector('#login-email').value;
      const password = loginForm.querySelector('#login-password').value;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        sessionStorage.setItem('isLoggedIn', 'true');
        alert(`Welcome back, ${user.name}!`);
        window.location.href = 'index.html';
      } else {
        alert('Invalid email or password.');
      }
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-links a');
  navLinks.forEach(link => { if (link.getAttribute('href') === currentPage) link.classList.add('active'); });

  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.removeItem('isLoggedIn');
      window.location.href = 'login.html';
    });
  }
});