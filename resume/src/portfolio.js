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
    "Platform engineering lead with hands-on ownership of architecture and implementation for large-scale distributed systems. Build delivery pipelines, traffic management, centralized logging, and infrastructure automation from the ground up, with a focus on reliability, operational efficiency, and developer experience."
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
    "End-to-end platform architecture and implementation for large-scale distributed systems—from infrastructure foundations to production delivery and observability.",
  skills: [
    emoji(
      "Design and build CI/CD platforms with Jenkins and GitHub Actions, including containerized deployment workflows for Kubernetes."
    ),
    emoji(
      "Architect traffic management with HAProxy and automate infrastructure provisioning and configuration with Ansible and Python."
    ),
    emoji(
      "Build centralized logging from scratch with Filebeat, Logstash, and Splunk to support troubleshooting and operational visibility across distributed services."
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
    },
    {skillName: "HAProxy", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "Jenkins", fontAwesomeClassname: "fab fa-jenkins"},
    {skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-dharmachakra"},
    {skillName: "Ansible", fontAwesomeClassname: "fas fa-cogs"},
    {skillName: "PowerShell", fontAwesomeClassname: "fas fa-terminal"},
    {skillName: "Shell scripting", fontAwesomeClassname: "fas fa-terminal"},
    {
      skillName: "Filebeat",
      fontAwesomeClassname: "fas fa-file-alt"
    },
    {
      skillName: "Logstash",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "Splunk",
      fontAwesomeClassname: "fas fa-search"
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
      schoolName: "VR Siddhartha Engineering College, India",
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
      desc: "Lead platform architecture and delivery for large-scale distributed systems, translating operational needs into production infrastructure spanning CI/CD, Kubernetes deployments, traffic management, and observability.",
      descBullets: [
        "Architected and implemented centralized logging from scratch with Filebeat, Logstash, and Splunk, unifying log collection, processing, and search across distributed services to support production troubleshooting.",
        "Designed and built CI/CD infrastructure with Jenkins and GitHub Actions, establishing automated build and deployment workflows for Docker-based services on Kubernetes.",
        "Architected and deployed HAProxy-based load balancing and request routing for large-scale distributed systems, supporting service availability and production traffic management.",
        "Built repeatable provisioning and configuration workflows with Ansible, Python, PowerShell, and shell scripting, replacing manual infrastructure tasks with reusable automation.",
        "Integrated monitoring, alerting, and infrastructure hardening into platform operations to strengthen reliability and support incident response across distributed environments.",
        "Provide technical direction and mentorship to DevOps engineers, guiding implementation practices and improvements to deployment reliability, operational efficiency, and developer experience."
      ]
    },
    {
      role: "Engineer, Platform Engineering",
      company: "ICE Mortgage Technology",
      companylogo: require("./assets/images/programmer.svg"),
      date: "Jan 2022 – Jan 2024",
      desc: "Developed platform automation and configuration management capabilities across multiple services and environments, connecting release engineering with repeatable infrastructure operations.",
      descBullets: [
        "Designed and implemented deployment automation across services and environments, standardizing recurring release steps to improve delivery consistency.",
        "Built Ansible-based configuration management and cloud provisioning workflows, making environment setup and maintenance repeatable through automated configuration.",
        "Developed reusable Python and shell utilities for recurring operational tasks, reducing manual effort and simplifying infrastructure support.",
        "Mentored junior engineers and translated operational knowledge into runbooks and playbooks, enabling consistent execution of deployment and support procedures."
      ]
    },
    {
      role: "Release Engineer",
      company: "ICE Mortgage Technology",
      companylogo: require("./assets/images/programmer.svg"),
      date: "May 2021 – Dec 2021",
      desc: "Managed cross-functional software release execution, coordinating engineering teams, deployment workflows, and release risks to support reliable delivery.",
      descBullets: [
        "Coordinated complex releases across engineering teams, tracking release risks and keeping stakeholders aligned throughout deployment execution.",
        "Managed Docker-based release pipelines and CI automation, supporting repeatable deployment workflows across software releases.",
        "Applied Agile release practices to structure release execution and improve deployment predictability, with a focus on minimizing service disruption."
      ]
    }
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
