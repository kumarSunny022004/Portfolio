import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "WayZor",
    description:
      "A comprehensive travel platform offering flight, hotel, and cab booking with Google Maps integration and role-based access control.",
    image: "/projects/WayZor_Vienna_Hotel_Search_Interface.png", // Replace with actual image path
    tags: ["React", "Spring Boot", "PostgreSQL", "Google Maps API"],
    demoUrl: "#", // Add real URL if available
    gitHub: "https://github.com/yourusername/wayzor", // Replace with actual GitHub link
  },
  {
    id: 2,
    title: "Taskify",
    description:
      "A full-stack task management app with JWT authentication, project-wise task tracking, and Go microservice integration.",
    image: "projects/Taskify_ Manage_Tasks_Effectively.png", // Replace with actual image path
    tags: ["React", "Spring Boot", "Go", "PostgreSQL", "Docker"],
    demoUrl: "#",
    gitHub: "https://github.com/yourusername/taskify", // Replace with actual GitHub link
  },
  {
    id: 3,
    title: "Journal App",
    description:
      "A personal journaling application with built-in sentiment analysis to track mental health over time.",
    image: "projects/Journal_App_Interface_Design.png", // Replace with actual image path
    tags: ["React", "Spring Boot", "Redis", "MongoDB", "Kafka"],
    demoUrl: "#",
    gitHub: "https://github.com/yourusername/journal-app", // Replace with actual GitHub link
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary "> Projects </span>
        </h2>
        <p>
          Here are some of my recent projects that showcase my skills in
          full-stack development and system design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span className="px-2 py-2 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground  ">{tag}</span>
                    ))}
                </div>
              

              <h3 className="font-semibold text-xl mb-2 ">{project.title}</h3>
              <p className="text-muted-foreground tetx">{project.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 ">
                    <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                        <ExternalLink/>
                    </a>
                    <a href={project.gitHub} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank"><Github/></a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/kumarSunny022004" target="_blank">Check my Github <ArrowRight size={16}/></a>
        </div>
      </div>
    </section>
  );
};
