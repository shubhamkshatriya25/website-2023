<template>
  <div
    :class="{
      modal: true,
      'modal-full-screen-view': isBlogsInFullScreen,
      'modal-default-view': !isBlogsInFullScreen,
    }"
  >
    <div class="modal-header">
      <span class="modal-icon close" @click="closeBlogsModal()"> </span>
      <span class="modal-icon"></span>
      <span class="modal-icon" @click="toggleBlogsInFullScreenView()"></span>
    </div>
    <div
      :class="{
        'modal-body': true,
        'modal-body-full-screen-view': isBlogsInFullScreen,
        'modal-body-default-view': !isBlogsInFullScreen,
      }"
    >
      <h1>Blogs</h1>
      <div class="blogs">
        <div class="blog-card" v-for="(blog, index) in blogs" :key="index">
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
