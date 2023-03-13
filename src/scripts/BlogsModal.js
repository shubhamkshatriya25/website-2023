export default {
  name: "Blogs",
  data() {
    return {
      isBlogsInFullScreen: false,
      blogs: [
        {
          type: "Web Development",
          heading: "Upload a file in chunks using django and AJAX",
          link: "https://dev.to/shubhamkshatriya25/ajax-file-upload-in-chunks-using-django-with-a-progress-bar-4nhi",
          description: `
            Imagine you are uploading a file whose size is 1GB to a server and until that file is completely uploaded you can't do anything. How painful! 
            The idea of uploading file as a whole turns out to be really painful while dealing with files whose sizes are in GBs. 
            There is a concept of uploading files in chunks which can be very handy. Let's see how can we upload a file in chunks to a django server using AJAX.
          `,
        },
        {
          type: "Web Development",
          heading: "Build a email newsletter subscriber using django and AJAX",
          link: "https://dev.to/shubhamkshatriya25/how-to-build-a-email-newsletter-subscriber-in-django-j2p",
          description: `
            An email newsletter is an email that is sent out on a regular basis (e.g. weekly or monthly) to subscribed users. 
            As you’ll probably know by looking at your inboxes, email newsletters are a popular medium for businesses. 
            Let's see how to build an email newsletter subscriber using django and AJAX.
          `,
        },
        {
          type: "Exception Handling (JavaScript)",
          heading: "How does JavaScript handle Divide by Zero?",
          link: "https://www.educative.io/answers/how-does-javascript-handle-divide-by-zero",
          description: `
          Divide by Zero is considered a special case by most programming languages. 
          Any number can never be divided by zero because its result is indeterminate. 
          But JavaScript never misses a chance to amaze everyone and handles a Divide by Zero in a different way. Let's see how!
          `,
        },
      ],
    };
  },
  methods: {
    closeBlogsModal: function () {
      this.$parent.$data.isBlogsOpen = false;
    },
    toggleBlogsInFullScreenView: function () {
      this.isBlogsInFullScreen = !this.isBlogsInFullScreen;
    },
  },
};

// blog json format
// {
//   type: "",
//   heading: "",
//   link: "",
//   description: ``,
// },
