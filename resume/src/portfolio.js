/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chakradhar Chinnam",
  title: "Hi all, I'm Chakradhar Chinnam",
  subTitle: emoji(
    "Platform Engineer at ICE Mortgage Technology. Passionate about building reliable, scalable platform infrastructure, automation, and developer experience."
  ),
  resumeLink: "", // Set to empty to hide the button until you provide your resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chakradharchinnam",
  linkedin: "https://www.linkedin.com/in/chakradharchinnam/",
  gmail: "chakradharchinnam@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Platform engineering, infrastructure automation, observability, and developer experience for mission-critical systems.",
  skills: [
    emoji(
      "⚡ Automate reliable CI/CD pipelines and deployment workflows for distributed services"
    ),
    emoji(
      "⚡ Build infrastructure and platform tooling to improve developer productivity and stability"
    ),
    emoji(
      "⚡ Improve observability, incident response, and operational reliability across cloud-native systems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "server",
      fontAwesomeClassname: "fas fa-server"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Missouri-Kansas City",
      // logo: leave undefined or add a path to your logo
      subHeader: "Master's degree, Computer Science",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "VR Siddhartha Engineering College (Autonomous), Vijayawada",
      subHeader: "Bachelor's degree, Computer Science",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Platform & Reliability Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Infrastructure Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Operations & Tooling",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineer, Platform Engineering",
      company: "ICE Mortgage Technology",
      companylogo: require("./assets/images/programmer.svg"),
      date: "Jan 2024 – Present",
      desc: "Lead Platform Engineer focused on automating and optimizing deployment processes, reliability, and developer experience.",
      descBullets: [
        "Lead and mentor DevOps engineers, driving best practices and continuous improvement.",
        "Designed and implemented CI/CD pipelines using Jenkins, Docker, and Git to improve release efficiency and reliability.",
        "Developed automation and tooling with Python, PowerShell, and shell scripting for provisioning and operational tasks.",
        "Improved observability and high-availability through monitoring, alerting, and infrastructure hardening."
      ]
    },
    {
      role: "Sr Analyst, Platform Engineering",
      company: "ICE Mortgage Technology",
      companylogo: require("./assets/images/programmer.svg"),
      date: "Jan 2022 – Jan 2024",
      desc: "DevOps engineer focusing on automation, configuration management, and release engineering.",
      descBullets: [
        "Automated and optimized deployment processes across multiple services and environments.",
        "Implemented configuration management and provisioning workflows using Ansible and cloud tooling.",
        "Authored scripts in Python and shell to streamline operational tasks and reduce manual effort.",
        "Mentored junior engineers and contributed to operational runbooks and playbooks."
      ]
    },
    {
      role: "Release Engineer",
      company: "ICE Mortgage Technology",
      companylogo: require("./assets/images/programmer.svg"),
      date: "May 2021 – Dec 2021",
      desc: "Release Engineer coordinating complex software releases and ensuring smooth deployments.",
      descBullets: [
        "Coordinated cross-functional release activities, risk management, and stakeholder communication.",
        "Managed release pipelines and automation using Docker and CI tooling.",
        "Applied Agile release practices to reduce downtime and improve deployment predictability."
      ]
    },
    // Removed template experience entries
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // hide fetched medium blogs
  blogs: [],
  display: false // hide this section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // hide talks section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // hide podcast section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Connect with me on LinkedIn or send an email to chakradharchinnam@gmail.com.",
  number: "",
  email_address: "chakradharchinnam@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // Set false to hide this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
