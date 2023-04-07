import React from "react";

const projects = [
  {
    id: 1,
    title: "Crustulum ",
    url: "https://crustulum.ml",
    description:
      "A small pastebin clone where you can paste some text and choose the expiry and share the link to your friends to view the text.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "YT magic",
    url: "https://ytmagic.ml",
    description:
      "A youtube downloader website with pwa enabled can be added to home screen from phone.",
    stack: ["FAST API", "Python", "React"],
  },
  {
    id: 3,
    title: "Crustulum v2",
    url: "https://v2.crustulum.ml",
    description: "A full stack markdown editing and sharing system.",
    stack: ["Nextjs", "Supabase", "Prisma", "Typescript"],
  },

  {
    id: 4,
    title: "Bhagvad Gita Bot",
    url: "https://twitter.com/bhagvadgitabot",
    description:
      "A twitter bot that posts a slok from Shrimad Bhagvad Gita along with its hindi and english translation every 3 hours and sends DM to people once everyday.",
    stack: ["Twitter", "Javascript", "Cron", "Bot"],
  },
  // Add more projects as needed
];

const ProjectCard = ({ project }) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4  w-full h-full">
      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-100 mb-4">{project.description}</p>
      <div className="flex flex-wrap">
        {project.stack.map((item, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 rounded-md px-2 py-1 mr-2 mb-2"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="aspect-w-16 aspect-h-9 mt-4">
        <iframe
          src={project.url}
          title={project.title}
          allowFullScreen
          className="rounded-md"
        />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center container mx-auto">
      {projects.map((project) => (
        <div key={project.id} className="w-full sm:w-1/2">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
