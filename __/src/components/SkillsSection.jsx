import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 80, category: "Frontend" },
  { name: "Vite", level: 75, category: "Frontend" },
  { name: "Context API", level: 70, category: "Frontend" },
  { name: "React Router", level: 80, category: "Frontend" },

  // Backend
  { name: "Spring Boot", level: 85, category: "Backend" },
  { name: "Java", level: 90, category: "Backend" },
  { name: "Go (Golang)", level: 70, category: "Backend" },
  { name: "REST APIs", level: 88, category: "Backend" },
  { name: "JWT Auth", level: 80, category: "Backend" },
  { name: "Microservices", level: 70, category: "Backend" },

  // Tools (includes DBs)
  { name: "PostgreSQL", level: 85, category: "Tools" },
  { name: "MySQL", level: 80, category: "Tools" },
  { name: "Flyway", level: 75, category: "Tools" },
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Postman", level: 85, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Maven", level: 80, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "IntelliJ IDEA", level: 85, category: "Tools" },
  { name: "Linux (Basic)", level: 70, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
  const [category, setCategory] = useState("all");

  const filteredSkills = skills.filter((skill)=>category === "all" || skill.category === category);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary  ">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((cat, key) => (
            <button
              key={key}
              onClick={() => setCategory(cat)}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                category === cat?"bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 ">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3>{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full oriign-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm texted-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
