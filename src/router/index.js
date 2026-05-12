import { createRouter, createWebHistory } from 'vue-router';

// Importing from the components folder as requested
import Home from '../components/Home.vue';
import AboutUs from '../components/AboutUs.vue';
import Contact from '../components/Contact.vue';
import Registration from '../components/Registration.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/about', 
    name: 'AboutUs', 
    component: AboutUs 
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: Contact 
  },
  { 
    path: '/registration', 
    name: 'Registration', 
    component: Registration 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;