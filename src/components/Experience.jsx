import React, { useState } from 'react';

function Experience() {
  const [open, setOpen] = useState(false);

  return (
    <section id="experience" className="bg-white p-8 my-10 max-w-5xl mx-auto rounded-2xl">

      <h2 className="text-3xl font-semibold mb-6">Experience</h2>

      <div
        onClick={() => setOpen(!open)}
        className="border-l-4 border-[#567C8D] pl-6 cursor-pointer"
      >
        <h3 className="font-semibold">
          Self-Learning Journey
        </h3>

        <span className="text-sm text-[#567C8D]">
          Present
        </span>

        {open && (
          <p className="mt-3 text-[#567C8D]">
            Learning web development through online resources and building personal projects.
            Focused on React, UI design, and problem solving.
          </p> 
          
        )}
      </div>

        <section><p>.</p></section>
        <div
        onClick={() => setOpen(!open)}
        className="border-l-4 border-[#567C8D] pl-6 cursor-pointer"
      >
        <h3 className="font-semibold">
          Architectutral Designing
        </h3>

        <span className="text-sm text-[#567C8D]">
          2022 - 2023
        </span>

        {open && (
          <p className="mt-3 text-[#567C8D]">
           Before becoming a UCian, I was a Luisian. I studied architectural designing in Saint Louis University for about a year. With this experience, I can adapt the disigning knowledge, Creaticty, and Critical Thinking that I have learned.
          </p>
        )}
      </div>

      <section><p>.</p></section>
        <div
        onClick={() => setOpen(!open)}
        className="border-l-4 border-[#567C8D] pl-6 cursor-pointer"
      >
        <h3 className="font-semibold">
          Vibe Coding
        </h3>

        <span className="text-sm text-[#567C8D]">
          2023 - present
        </span>

        {open && (
          <p className="mt-3 text-[#567C8D]">
            With the pressure of deadlines, I have resorted to using Ai. Though it is not recommended by a lot of people, specially in Universities. I have learned some great ways to use Ai for coding. Instead of letting the Ai work for or Create my entire code. I only let them guide me on doing things so that I would Figure it out on my own.
          </p>
        )}
      </div>

    </section>
  );
}

export default Experience;