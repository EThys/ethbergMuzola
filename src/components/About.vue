<template>
  <section class="about-section relative py-20 lg:py-32 overflow-hidden" id="about">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary/10 mb-6">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="text-sm font-bold text-primary">À Propos</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          À Propos de 
          <span class="text-primary">Moi</span>
        </h2>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-6 animate-fade-in-left">
          <div class="space-y-4">
            <p class="text-lg text-gray-700 leading-relaxed">
              Avec une <span class="font-bold text-primary">passion précoce pour la technologie</span>, j'ai commencé à m'intéresser à l'informatique dès mon plus jeune âge. J'ai appris les bases de l'algorithmique avant même d'entrer à l'université.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Je suis un <span class="font-bold text-primary">développeur web et mobile minutieux</span>, qui accorde une grande importance aux détails et à la qualité. Chaque ligne de code que j'écris est pensée pour offrir la meilleure expérience utilisateur possible.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Je suis convaincu que la <span class="font-bold text-secondary">collaboration étroite</span> avec les clients et l'équipe de développement est essentielle pour la réussite d'un projet. Au fil du temps, j'ai développé mes compétences en développement web et mobile et je suis impatient de travailler avec vous pour créer des applications innovantes et de haute qualité.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-6 pt-8">
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-primary/10">
              <div class="text-3xl font-bold text-primary mb-2">5+</div>
              <div class="text-sm text-gray-600 font-semibold">Projets Réalisés</div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-secondary/10">
              <div class="text-3xl font-bold text-secondary mb-2">2+</div>
              <div class="text-sm text-gray-600 font-semibold">Années d'Expérience</div>
            </div>
          </div>
        </div>

        <!-- Right Images -->
        <div class="relative animate-fade-in-right">
          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-6">
              <div class="relative group">
                <div class="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img 
                  class="relative w-full h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-4 border-white" 
                  src="/images/moi.jpg" 
                  alt="Ethberg Muzola" 
                />
              </div>
              <div class="bg-primary rounded-2xl p-6 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                <div class="flex items-center space-x-3">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <div>
                    <div class="font-bold text-lg">Développeur</div>
                    <div class="text-sm opacity-90">Web & Mobile</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-6 pt-12">
              <div class="bg-white rounded-2xl p-6 shadow-xl border-2 border-primary/10 transform hover:scale-105 transition-all duration-300">
                <div class="text-4xl font-bold text-primary mb-2">100%</div>
                <div class="text-sm text-gray-600 font-semibold">Dédication</div>
              </div>
              <div class="relative group">
                <div class="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img 
                  class="relative w-full h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-4 border-white" 
                  src="/images/eth.jpg" 
                  alt="Ethberg Muzola" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic if needed
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out 0.2s both;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out 0.4s both;
}
</style>

