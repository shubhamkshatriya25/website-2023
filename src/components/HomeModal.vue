<template>
  <div
    :class="{
      modal: true,
      'modal-full-screen-view': isHomeInFullScreen,
      'modal-default-view': !isHomeInFullScreen,
    }"
  >
    <div class="modal-header">
      <span class="modal-icon" @click="kCloseHomeModal()"> </span>
      <span class="modal-icon"></span>
      <span class="modal-icon" @click="toggleHomeInFullScreenView()"> </span>
    </div>
    <div
      :class="{
        'modal-body': true,
        'modal-body-full-screen-view': isHomeInFullScreen,
        'modal-body-default-view': !isHomeInFullScreen,
      }"
    >
      <h1 style="text-align: left">Hello World, I'm Shubham!</h1>
      <p>
        As a software engineer at
        <a
          class="company-link"
          target="_blank"
          href="https://www.zeuslearning.com/"
          >Zeus Learning Pvt. Ltd.</a
        >, I am constantly striving to improve my skills and knowledge in the
        field of Information Technology. My journey in this field began in 2017,
        when I enrolled in the Bachelor of Engineering in Information Technology
        program at Sardar Vallabhbhai Patel Institute of Technology in Gujarat,
        India. Through hard work and dedication, I graduated with a CGPA of
        9.71/10.0 in June 2021.
      </p>
      <p>
        In addition to my professional pursuits, I am an eternal student,
        constantly seeking to expand my knowledge and understanding of the world
        around me. I devour books like a hungry scholar, constantly seeking new
        insights and perspectives. And, like a mentor passing on their wisdom, I
        enjoy writing technical blogs to help and teach others in the community.
      </p>
      <p>
        My interests are as diverse as a colorful tapestry, from music and
        movies to anime, cricket and chess. I believe that it is important to be
        well-rounded and have a broad understanding of different fields. And,
        like a social butterfly, I am always on the lookout for new people to
        connect with and exchange ideas with. As the famous quote goes, 'The
        more that you read, the more things you will know. The more that you
        learn, the more places you'll go' - Dr. Seuss. I strive to go to as many
        places as I can, both physically and mentally, through the power of
        learning and connection.
      </p>
      <div class="social">
        <p>Find me on</p>
        <a href="mailto:shubhamkshatriya521@gmail.com" target="_blank"
          ><v-icon class="social-icon gmail" style="display: block"
            >mdi-gmail</v-icon
          ></a
        >
        <a href="https://www.linkedin.com/in/shubhamkshatriya25" target="_blank"
          ><v-icon class="social-icon linkedin" style="display: block"
            >mdi-linkedin</v-icon
          ></a
        >
        <a href="https://www.instagram.com/s.h.u.b.h.a.m._25" target="_blank"
          ><v-icon class="social-icon instagram" style="display: block"
            >mdi-instagram</v-icon
          ></a
        >
        <a href="https://twitter.com/shubhHAM_" target="_blank"
          ><v-icon class="social-icon twitter" style="display: block"
            >mdi-twitter</v-icon
          ></a
        >
        <a href="https://github.com/shubhamkshatriya25" target="_blank"
          ><v-icon class="social-icon github" style="display: block"
            >mdi-github</v-icon
          ></a
        >
      </div>
    </div>
  </div>
</template>

<script src="../scripts/HomeModal.js"></script>
<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/HomeModal.scss" lang="scss"></style>
