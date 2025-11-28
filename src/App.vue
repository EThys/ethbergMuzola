<template>
  <div id="app" class="min-h-screen bg-white">
    <Header />
    <Hero />
    <Technologies />
    <About />
    <Skills />
    <Projects />
    <Resume />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Technologies from './components/Technologies.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';
import Services from './components/Services.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
