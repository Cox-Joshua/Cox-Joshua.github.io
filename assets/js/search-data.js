// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-josh",
    title: "About Josh",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "Resume",
          description: "You can click the PDF button to download my usual 1-page resume. The rest of this page provides the same information and then some.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Cool applications and experiences B)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "A Scout is helpful!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-hobbies",
          title: "Hobbies",
          description: "...collecting hobbies is a hobby I hear",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-wip-game-development",
          title: '[WIP]Game Development',
          description: "CS415",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Cla_CS415_project/";
            },},{id: "projects-wip-robot-dynamics-and-control",
          title: '[WIP]Robot Dynamics and Control',
          description: "ME446",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Cla_ME446_project/";
            },},{id: "projects-wip-computer-control-of-mechanical-systems",
          title: '[WIP]Computer Control of Mechanical Systems',
          description: "ME461",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Cla_ME461_project/";
            },},{id: "projects-wip-illinois-space-society",
          title: '[WIP]Illinois Space Society',
          description: "The best engineering student organization on campus",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ISS_General_project/";
            },},{id: "projects-wip-microg",
          title: '[WIP]MicroG',
          description: "Project team building a tool for astronaut use",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ISS_MicroG_project/";
            },},{id: "projects-wip-space-grant",
          title: '[WIP]Space Grant',
          description: "Freshman high-power rocketry team",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ISS_SG_project/";
            },},{id: "projects-wip-spaceshot",
          title: '[WIP]Spaceshot',
          description: "Helping a multiyear rocket project reach space!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ISS_Spaceshot_project/";
            },},{id: "projects-wip-robot-car",
          title: '[WIP]Robot Car',
          description: "Description",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Per_Car_project/";
            },},{id: "projects-wip-6-dof-robotic-arm",
          title: '[WIP]6 DoF Robotic Arm',
          description: "Description",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Per_RobotArm_project/";
            },},{id: "projects-wip-lunar-autonomy-challenge",
          title: '[WIP]Lunar Autonomy Challenge',
          description: "Description",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Res_LAC_project/";
            },},{id: "projects-wip-reinforcement-expert-informed-learning",
          title: '[WIP]Reinforcement Expert Informed Learning',
          description: "Description",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Res_RL_project/";
            },},{id: "projects-wip-wayfinding",
          title: '[WIP]Wayfinding',
          description: "Description",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Res_Wayfinding_project/";
            },},{id: "projects-wip",
          title: '[WIP]',
          description: "Description",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%67%63%6F%78%32@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/joshua-cox-07a881182", "_blank");
        },
      },{
        id: 'social-hca_lab',
        title: 'Hca_lab',
        section: 'Socials',
        handler: () => {
          window.open("https://thehcalab.web.illinois.edu/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
