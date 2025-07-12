import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Devloper</h3>

            <p className="text-muted-foreground">
              I work with modern backend technologies like Spring Boot and
              Golang to build scalable, high-performance systems. For data
              storage and management, I use PostgreSQL and MySQL, often paired
              with tools like Flyway for schema versioning. I also integrate
              RESTful APIs, handle authentication, and use Docker for
              containerization and Postman for API testing to ensure smooth
              development and deployment.
            </p>

            <p className="text-muted-foreground">
              I am passionate about building real-life solutions using modern
              web technologies. With a strong foundation in frontend
              development, I enjoy creating intuitive and responsive user
              interfaces that enhance user experience. My goal is to solve
              real-world problems by combining clean design with efficient and
              scalable web solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In touch{" "}
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Backend Devlopment</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating scalable and efficient backend systems that power
                    real-world applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                 <div className="text-left">
                  <h4 className="text-lg font-semibold">Frontend Devlopment</h4>
                  <p className="text-muted-foreground">
                    {" "}
                   Skilled in crafting responsive and user-friendly frontend interfaces using modern web technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              {" "}
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                 <div className="text-left">
                  <h4 className="text-lg font-semibold">Experience</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    over 1 years of experience in web development, building robust applications that solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
