import React from 'react';

function Education() {
  return (
    <section id="education" className="bg-white p-8 my-10 max-w-5xl mx-auto rounded-2xl">

      <h2 className="text-3xl font-semibold mb-6">Education</h2>

      <div className="border-l-4 border-[#567C8D] pl-6 space-y-6">
        
        <div>
          <h3 className="font-semibold">University of the Cordilleras</h3>
          <p className="text-[#567C8D]">Bachelor of Science in Information Technology - Web Technology</p>
          <span className="text-sm">2022 - 2027</span>
        </div>

        <div>
          <h3 className="font-semibold">High School</h3>
          <p className="text-[#567C8D]">Baguio City National High School</p>
          <span className="text-sm">2018 - 2022</span>
        </div>

      </div>

    </section>
  );
}

export default Education;