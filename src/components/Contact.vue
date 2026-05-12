<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <div class="container">
      

      <form @submit.prevent="submit">
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.contact {
  padding: 40px 20px;
  text-align: center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
}
input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background: #2c3e50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>