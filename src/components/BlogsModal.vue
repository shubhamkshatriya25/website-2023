<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="closeBlogsModal()">
        <v-icon class="close-icon">mdi-close</v-icon>
      </span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
      <h1>Blogs</h1>
      <div class="blogs">
        <div
          class="blog-card"
          v-for="(blog, index) in blogs"
          :key="index"
        >
          <small>{{ blog.type }}</small>
          <a :href="blog.link" target="_blank">{{ blog.heading }}</a>
          <p>{{ blog.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/BlogsModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/BlogsModal.scss" lang="scss"></style>
