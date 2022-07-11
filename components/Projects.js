import ProjectItem from "./ProjectItem";
import csvImg from "../public/assets/projects/csv-importer.jpg";
import contextMappingImage from "../public/assets/projects/context-mapping.jpg";
import campsiteImg from "../public/assets/projects/campsite.jpg";
import uniclothImg from "../public/assets/projects/unicloth.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>

        <h2 className="py-4">What I've Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="CSV Importer"
            backgroundImg={csvImg}
            projectUrl="/csv"
            tech="Nextjs, Papa Parse, React Table"
          />

          <ProjectItem
            title="Context Mapping"
            backgroundImg={contextMappingImage}
            projectUrl="/contextMapping"
            tech="Nextjs, Xarrows, useRef"
          />

          <ProjectItem
            title="Campsite (FYP)"
            backgroundImg={campsiteImg}
            projectUrl="/campsite"
            tech="React, Firebase, Google Maps API"
          />

          <ProjectItem
            title="UniCloth"
            backgroundImg={uniclothImg}
            projectUrl="/unicloth"
            tech="Nodejs, MongoDB, Heroku"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
