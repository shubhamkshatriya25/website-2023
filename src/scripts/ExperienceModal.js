export default {
  name: "Experience",
  data() {
    return {
      isExperienceInFullScreen: false,
      experiences: [
        {
          duration: "Feb 2020 - Present",
          title: "Software Engineer",
          company: "Zeus Learning Pvt. Ltd.",
          roles: `<ul>
            <li>Working on developing the backend of a SAAS using Node JS and PostgreSQL. Creating new REST APIs to serve the requirements as well as optimizing the existing ones</li>
            <li>Worked on developing the user interface of a Learning Management System (LMS) using Pixi JS and Vue JS. Explored and integrated various APIs, made use of chart.js to visualize real-time data, and created sprite animations</li>
            <li>Took the lead for the estimation and the development of the required features and delivered them whilst following proper code structure and validating lint and sonar qube errors</li>
          </ul>`,
        },
        {
          duration: "Jul 2019 - Jul 2022",
          title: "Co-founder and Managing Director",
          company: "Scudo Systems LLP",
          roles: `<ul>
            <li>Innovated a low-cost two-wheeler security system that tracks the vehicle's location, captures the access points' GPS coordinates, and allows users to control their vehicles remotely</li>
            <li>Selected in the Top 5 Startup out of 2,200 participants at the 2017 Start-Up India Yatra. Moreover, raised funds of approximately INR 8.60 lakhs to commercialize the invention</li>
            <li>Worked on developing the prototype's technical design and coding solutions</li>
            <li>Managed company's finance</li>
          </ul>`,
        },
        {
          duration: "Jul 2021 - Jun 2022",
          title: "Freelance Technical Content Writer",
          company: "Educative Inc",
          roles: `<ul>
            <li>Wrote articles on popular frameworks and technologies, with an aim to make learning easy for developers around the world</li>
            <li>My articles can be found at <a href="https://www.educative.io/profile/view/4908239310815232" target="_blank">here</a></li>
          </ul>`,
        },
        {
          duration: "Oct 2020 - Dec 2020",
          title: "Back End Developer Intern",
          company: "Piblitz",
          roles: `<ul>
            <li>Worked on developing a robust file and folder uploader web app that allows a user to upload files of any size and folders of any hierarchy to a server chunk by chunk using AJAX and Django</li>
            <li>Worked on developing a lazy image loader web app that retrieves data from the server in byte format and converts them into data-URI images using Web Workers and Django</li>
            <li>Worked on developing a video-on-demand web app that streams a video to the user using AJAX and Django. The app supports features like play, pause and seek</li>
            <li>Worked on optimizing the existing queries and cookies management</li>
          </ul>`,
        },
      ],
    };
  },
  methods: {
    closeExperienceModal: function () {
      this.$parent.$data.isExperienceOpen = false;
    },
    toggleExperienceInFullScreenView: function () {
      this.isExperienceInFullScreen = !this.isExperienceInFullScreen;
    },
  },
};
