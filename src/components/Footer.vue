<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>UBUMWE <span>HOTEL</span></h3>
        <p>Luxury redefined in the heart of the city. Experience world-class hospitality and comfort.</p>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/registration">Book a Room</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="https://www.instagram.com/ubumwehotel" target="_blank">YouTube</a></li>
          <li><a href="https://www.instagram.com/ubumwehotel" target="_blank">Instagram</a></li>
          <li><a href="https://www.facebook.com/ubumwehotel" target="_blank">Facebook</a></li>
          <li><a href="https://twitter.com/ubumwebwacu" target="_blank">Twitter</a></li>
          <li><a href="https://www.linkedin.com/company/ubumwebwacu" target="_blank">LinkedIn</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <p> Rubavu</p>
        <p>Phone: +250 787 017 109</p>
        <p>Email:tambirealainbruno183@gmail.com</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      &copy; 2026 Ubumwe Hotel. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #33023d;
  color: #ffffff;
  padding: 4rem 8% 1rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-section h3 {
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-bottom: 1.2rem;
}

.footer-section h3 span {
  color: #c5a059;
  font-weight: 300;
}

.footer-section h4 {
  color: #c5a059;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.footer-section p, 
.footer-section ul a {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #ccc;
  text-decoration: none;
  transition: 0.3s;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul a:hover {
  color: #c5a059;
  padding-left: 5px;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  font-size: 0.8rem;
  color: #777;
}
</style>