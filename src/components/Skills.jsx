import React from 'react';

function Skills() {
  const skills = [
    "HTML", "CSS", "Adaptive",
    "Basic Frontend", "Hard Working",
    "Creative Thinking", "Basic Vibe Coding"
  ];

  return (
    <section id="skills" className="bg-white p-8 my-10 max-w-5xl mx-auto rounded-2xl">

      <h2 className="text-3xl font-semibold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-[#C8D9E6] px-4 py-2 rounded-lg cursor-pointer
                       transition transform hover:scale-110 hover:bg-[#567C8D] hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>

    </section>
  );
}

export default Skills;