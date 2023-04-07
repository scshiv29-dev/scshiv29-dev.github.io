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

const ProjectCard = ({ project }: any) => {
  const fullScreen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: any
  ) => {
    e.preventDefault();
    let elem: any = document.getElementById(`iframe-${id}`);

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err: { message: any; name: any }) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <div className="border-2 border-gray-300 flex h-[26rem]  flex-col gap-y-4 rounded-md p-4 ">
      <h2 className="text-xl font-bold ">{project.title}</h2>
      <p className="text-gray-100 ">{project.description}</p>
      <div className="flex flex-wrap">
        {project.stack.map(
          (
            item:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined,
            index: React.Key | null | undefined
          ) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-md px-2 py-1 mr-2 "
            >
              {item}
            </span>
          )
        )}
      </div>

      <iframe
        src={project.url}
        title={project.title}
        allowFullScreen
        id={`iframe-${project.id}`}
        className="rounded-md aspect-video  w-[20rem]"
      />
      <button
        className="bg-lime-500 text-white rounded-md px-2 py-1  w-1/2"
        onClick={(e) => fullScreen(e, project.id)}
      >
        View in Full Screen
      </button>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="grid lg:grid-cols-2 snap-center snap-always w-full  grid-cols-1 gap-4 my-10 justify-center container mx-auto">
      {projects.map((project) => (
        <div key={project.id} className="lg:w-full w-1/2">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
