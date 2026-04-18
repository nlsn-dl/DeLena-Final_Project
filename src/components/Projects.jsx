import React from 'react';

function Projects() {
  const projects = [
    "Debugging Practice",
    "Digitalize Framework",
    "Product Landing Page",
    "Quiz Game",
    "Survey Project",
    "Tribute Page",
    "there are no major projects"
  ];

  return (
    <section id="projects" className="bg-white p-8 my-10 max-w-5xl mx-auto rounded-2xl">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <ul className="space-y-3">
        {projects.map((proj, i) => ( 
          <li key={i} className="bg-[#C8D9E6] px-4 py-2 rounded-lg cursor-pointer
                       transition transform hover:scale-110 hover:bg-[#567C8D] hover:text-white"
          >
            {proj}
          </li>
          
        ))}
      </ul>

      
    </section>
  );
}

export default Projects;