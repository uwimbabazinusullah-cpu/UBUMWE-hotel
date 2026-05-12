<template>
  <div class="about-container">
    <header class="about-header">
      <h1>Our Story</h1>
      <div class="underline"></div>
    </header>

    <section class="about-section">
      <div class="about-text">
        <h2>A Beacon of Hospitality</h2>
        <p>
          Ubumwe Hotel has been a landmark of excellence for over a decade. 
          Located in the heart of the Rubavu city,  
          
        </p>
        <p>
          
        </p>
      </div>
      <div class="about-image">
        <img src="../assets/hotel-ubumwe-gisenyi-20240504133418270400.webp" alt="Ubumwe Interior">
      </div>
    </section>

    <section class="about-section reverse">
      <div class="about-image">
        <img src="../assets/hotel-ubumwe-gisenyi-20240504133230888700.webp" alt="Ubumwe View">
      </div>
      <div class="about-text">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to provide a sanctuary of comfort.  
          
        </p>
        
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.about-header {
  text-align: center;
  margin-bottom: 60px;
}

.about-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.underline {
  width: 80px;
  height: 4px;
  background: #d4af37;
  margin: 0 auto;
}


.about-section {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 80px;
}

.about-section.reverse {
  flex-direction: row-reverse;
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 1.8rem;
  color: #d4af37;
  margin-bottom: 20px;
}

.about-text p {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 15px;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.about-image img:hover {
  transform: scale(1.02);
}



@media (max-width: 850px) {
  .about-section, .about-section.reverse {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .about-header h1 {
    font-size: 2rem;
  }

  .about-text h2 {
    font-size: 1.5rem;
  }

  .stats {
    justify-content: space-around;
  }
}
</style>