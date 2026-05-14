<template>
  <div id="app">
    <header class="header">
      <nav class="navbar">
        <div class="logo">
          UBUMWE IWACU <span>HOTEL</span>
        </div>
        
        <div class="links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
          <router-link to="/registration" class="reg-btn">Register</router-link>
        </div>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
:root {
  --gold: #c5a059;
  --gold-hover: #b38f4d;
  --dark: #1a1a1a;
  --light-gray: #f8f9fa;
  --white: #ffffff;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Playfair Display', 'Segoe UI', serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--white);
}

.header {
  background-color: blue;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 5%;
  height: 80px;
}

.logo {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 3px;
  color: var(--dark);
  text-transform: uppercase;
  cursor: pointer;
}

.logo span {
  color: var(--gold);
  font-weight: 300;
}

.links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  text-decoration: none;
  color: var(--dark);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: var(--transition);
  background-color:green;
}
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: var(--gold);
  transition: var(--transition);
}

.nav-link:hover {
  color:gold;
}

.nav-link:hover::after {
  width: 100%;
}

.reg-btn {
  border: 2px solid var(--gold);
  padding: 0.7rem 1.8rem;
  border-radius: 0;
  color: var(--gold) !important;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
}

.reg-btn:hover {
  background-color: var(--gold);
  color: var(--white) !important;
  box-shadow: 0 4px 15px rgba(197, 160, 89, 0.3);
  transform: translateY(-2px);
}

.content {
  flex: 1;
  width: 100%;
  padding: 4rem 5%;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 992px) {
  .navbar {
    height: auto;
    padding: 1.5rem 5%;
  }
  
  .links {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1.5rem;
  }

  .links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .reg-btn {
    padding: 0.5rem 1.2rem;
  }
}
</style>