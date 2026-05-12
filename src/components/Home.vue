<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Ubumwe Hotel</h1>
        <p>Experience luxury and comfort in the heart of the city.</p>
        <router-link to="/registration" class="btn">Register</router-link>
      </div>
    </section>

  </div>
</template>

<style scoped>

.home {
  width: 100%;
  overflow-x: hidden;
}


.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
              url('../assets/hotel-ubumwe-gisenyi-20240504133230888700.webp');
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  background: #d4af37;
  color: white;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;
  transition: background 0.3s;
}

.btn:hover {
  background: #b8962d;
}


/* Responsiveness for Mobile */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 1.8rem;
  }
  
  .hero {
    padding: 60px 15px;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>