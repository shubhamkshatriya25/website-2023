import HomeModal from "../components/HomeModal";
import ProjectsModal from "../components/ProjectsModal";
import ExperienceModal from "../components/ExperienceModal";
import BlogsModal from "../components/BlogsModal";
import FolderClose from "../components/FolderClose";
import FolderOpen from "../components/FolderOpen";

export default {
  name: "IndexScreen",
  components: {
    HomeModal,
    ProjectsModal,
    ExperienceModal,
    BlogsModal,
    FolderClose,
    FolderOpen,
  },
  data() {
    return {
      isHomeOpen: true,
      isProjectsOpen: false,
      isExperienceOpen: false,
      isBlogsOpen: false,
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    openCloseHome: function () {
      this.closeOtherModals("Home");
      this.isHomeOpen = !this.isHomeOpen;
    },
    openCloseProjects: function () {
      this.closeOtherModals("Projects");
      this.isProjectsOpen = !this.isProjectsOpen;
    },
    openCloseExperience: function () {
      this.closeOtherModals("Experience");
      this.isExperienceOpen = !this.isExperienceOpen;
    },
    openCloseBlogs: function () {
      this.closeOtherModals("Blogs");
      this.isBlogsOpen = !this.isBlogsOpen;
    },
    closeOtherModals: function (clickedModal) {
      if (clickedModal !== "Home") this.isHomeOpen = false;
      if (clickedModal !== "Projects") this.isProjectsOpen = false;
      if (clickedModal !== "Experience") this.isExperienceOpen = false;
      if (clickedModal !== "Blogs") this.isBlogsOpen = false;
    },
    downloadResume: function () {
      var link = document.createElement("a");
      link.setAttribute("download", "Resume Shubham_Singh_Kshatriya");
      link.href = `${this.publicPath}files/resume.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
  },
};
