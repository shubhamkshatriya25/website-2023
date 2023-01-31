<template>
  <div>
    <div class="home-screen">
      <div class="nav-tray">
        <div class="nav-option" @click="openCloseHome()">
          <folder-open v-if="isHomeOpen"></folder-open>
          <folder-close v-else></folder-close>
          <p class="nav-title">Home</p>
        </div>
        <div class="nav-option" @click="openCloseProjects()">
          <folder-open v-if="isProjectsOpen"></folder-open>
          <folder-close v-else></folder-close>
          <p class="nav-title">Projects</p>
        </div>
        <div class="nav-option" @click="openCloseExperience()">
          <folder-open v-if="isExperienceOpen"></folder-open>
          <folder-close v-else></folder-close>
          <p class="nav-title">Experience</p>
        </div>
        <div class="nav-option" @click="openCloseBlogs()">
          <folder-open v-if="isBlogsOpen"></folder-open>
          <folder-close v-else></folder-close>
          <p class="nav-title">Blogs</p>
        </div>
        <div class="nav-option">
          <a :href="`${this.publicPath}files/resume.pdf`" target="_blank">
            <div>
              <img
                class="resume"
                src="../assets/images/pdf.png"
                alt="pdf-icon"
              />
              <p class="nav-title">Resume</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <HomeModal v-if="isHomeOpen" />
    <ProjectsModal v-if="isProjectsOpen" />
    <ExperienceModal v-if="isExperienceOpen" />
    <BlogsModal v-if="isBlogsOpen" />
  </div>
</template>

<script src="../scripts/IndexScreen.js"></script>

<style scoped src="../styles/IndexScreen.scss" lang="scss"></style>
