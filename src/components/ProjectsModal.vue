<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="closeProjectsModal()">
        <v-icon class="close-icon">mdi-close</v-icon>
      </span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
      <h1>Projects</h1>
      <div class="projects">
        <div
          class="project-card"
          v-for="(project, index) in projects"
          :key="index"
        >
          <p class="project-timeline">{{ project.timeline }}</p>
          <details>
            <summary class="summaryroject-title">{{ project.title }}</summary>
            <p class="project-description" v-html="project.description"></p>
          </details>
          <p class="project-stack">
            Technology experience: {{ project.stack }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/ProjectsModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/ProjectsModal.scss" lang="scss"></style>
