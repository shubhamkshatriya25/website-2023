export default {
  name: "ProjectsModal",
  data() {
    return {
      projects: [
        {
          timeline: "Dec 2021 - Present",
          title: "Modolabs",
          stack: "Node.js, Express.js, TypeScript, PostgreSQL",
          description: `<ul>
            <li>A cloud based application (SAAS) that provides services like streamline and coordinate bookings for work and study spaces</li>
            <li>Developed database queries and their corresponding REST APIs</li>
            <li>Optimized certain existing APIs to reduce the response time by 15% to 20%</li>
          </ul>`,
        },
        {
          timeline: "Feb 2021 - Nov 2021",
          title: "Beyond Labz",
          stack: "Vue.js, Pixi.js, Tailwind, X (aka Experience) API, Chart.js",
          description: `<ul>
            <li>A web-based e-Learning application (LMS) that simulates virtual scientific labs</li>
            <li>Implemented responsive sprite animations</li>
            <li>Explored and integrated the X-API in the LMS to keep a track of each and every action performed by the students</li>
            <li>Explored and created multiple charts to visualize real-time data, with support to zoom in and out on the chart</li>
          </ul>`,
        },
        {
          timeline: "Jun 2020 - Apr 2021",
          title: "Park ME: Your parking partner (Previously: Parkup)",
          stack: "Flutter, Firebase, RazorPay, Twilio, Figma",
          description: `<ul>
            <li>A cross-platform mobile application for remote parking services at user's live location or at a specific place</li>
            <li>Integrated Google Maps API and features like in-app payment gateway and SMS notifications</li>
            <li>Created and integrated Firestore database and Firebase authentication</li>
            <li>Designed the prototype of the application</li>
          </ul>`,
        },
        {
          timeline: "Feb 2020 - Aug 2020",
          title: "Legal WIZ",
          stack:
            "Python, Django, SQLite, Twilio, HTML, CSS, BootStrap, Vanilla JS",
          description: `<ul>
            <li>Full stack web application (MIS) built at Smart India Hackathon 2020 (grand finale)</li>
            <li>Designed the database architecture and built corresponding database queries</li>
            <li>Created API endpoints and integrated them with the User Interface of the system</li>
            <li>Led and managed the entire team right from the registration to the grand finale</li>
          </ul>`,
        },
        {
          timeline: "Nov 2019 - Jan 2020",
          title: "Spark",
          stack: "Kotlin, Firebase, Application development using Android",
          description: `<ul>
            <li>A mobile application, and a website that provides fast, reliable and accurate sport event updates like live score and schedules, occuring in SVIT campus</li>
            <li>Designed and developed the UI of the website</li>
            <li>Developed the UI of the application</li>
          </ul>`,
        },
      ],
    };
  },
  methods: {
    closeProjectsModal: function () {
      this.$parent.$data.isProjectsOpen = false;
    },
  },
};

// project json format for future projects
// {
//   timeline: "",
//   title: "",
//   stack: "",
//   description: `<ul>
//     <li></li>
//     <li></li>
//     <li></li>
//     <li></li>
//   </ul>`,
// }
