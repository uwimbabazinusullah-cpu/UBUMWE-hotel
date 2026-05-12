<template>
  <div class="register-page">
    <div class="register-card">
      <h2>Guest Registration</h2>
      <p>Join Ubumwe Hotel today</p>

      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <label>Full Name</label>
          <input type="text" v-model="name" placeholder="Enter your name" required />
        </div>

        <div class="input-group">
          <label>Email Address</label>
          <input type="email" v-model="email" placeholder="Enter your email" required />
        </div>

        <button type="submit" class="reg-btn">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')

const handleRegister = () => {
  console.log(name.value, email.value)
}
</script>



<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 20px;
}

.register-card {
  background: white;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
}

.input-group {
  text-align: left;
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.reg-btn {
  width: 100%;
  padding: 12px;
  background-color: #d4af37;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}

.reg-btn:hover {
  background-color: #b8962d;
}
</style>