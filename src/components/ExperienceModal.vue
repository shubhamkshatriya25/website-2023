<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="closeExperienceModal()">
        <v-icon class="close-icon">mdi-close</v-icon></span
      >
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
      <h1>Experience</h1>
      <div class="experience">
        <div
          class="experience-card"
          v-for="(experience, index) in experiences"
          :key="index"
        >
          <p class="experience-title">{{ experience.title }}</p>
          <details>
            <summary class="company">{{ experience.company }}</summary>
            <p class="roles" v-html="experience.roles"></p>
          </details>
          <p class="duration">{{ experience.duration }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/ExperienceModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/ExperienceModal.scss" lang="scss"></style>
