import React from "react";

const ExperienceItem = () => {
  return (
    <>
      {/* EDAG Holding */}
      <div className="lg:grid grid-cols-5 gap-12 mt-10">
        <div className="col-span-2 mb-10 mb-lg-0">
          <h2 className="font-normal hidden lg:block">
            EDAG Holding Sdn. Bhd.
          </h2>
          <p className="italic mt-3 hidden lg:block">November 2022 - present</p>
        </div>

        <div className="col-span-3 mb-10 mb-lg-0">
          <h2 className="pb-2 mb-1">Front-end Software Developer</h2>

          <div>
            <h3 className="text-2xl font-normal lg:hidden">
              EDAG Holding Sdn. Bhd.
            </h3>
            <p className="italic mt-3 mb-4 lg:hidden">
              November 2022 - present
            </p>
          </div>

          <div>
            <h4 className="py-2">Project: Work Place Reservation System</h4>
            <p className="py-2">
              Utilized Angular components, services, modules, and routing to
              create a modular and maintainable codebase
            </p>
            <p className="py-2">
              Experienced in resolving complex merge conflicts, resolved 82
              merge conflicts across 7 branches using Git knowledge
            </p>
            <p className="py-2">
              Merged 7 story branches with pull requests, improving
              collaboration with the development team
            </p>
            <p className="py-2">
              Implemented design changes suggested by clients and team members
            </p>
            <p className="py-2">
              Wrote Jest unit tests with 80% code coverage to catch bugs early
              and ensure code quality during the development process
            </p>
            <p className="py-2">
              Collaborated with the back-end team to integrate REST APIs for
              faster data processing.
            </p>
            <p className="py-2">
              Shared knowledge with colleagues from Malaysia and Germany on
              front-end topics, including code quality
            </p>
          </div>
        </div>
      </div>

      {/* OmniGeo Solutions */}
      <div className="lg:grid grid-cols-5 gap-12 mt-10">
        <div className="col-span-2 mb-10 mb-lg-0">
          <h2 className="font-normal hidden lg:block">
            OmniGeo Solutions Sdn Bhd.
          </h2>
          <p className="italic mt-3 hidden lg:block">
            September 2021 - October 2022
          </p>
        </div>

        <div className="col-span-3 mb-10 mb-lg-0">
          <h2 className="pb-2 mb-1">Front-end Software Developer</h2>

          <div>
            <h3 className="text-2xl font-normal lg:hidden">
              OmniGeo Solutions Sdn Bhd.
            </h3>
            <p className="italic mt-3 mb-4 lg:hidden">
              September 2021 - October 2022
            </p>
          </div>

          <div>
            <p className="py-2">
              Developed web applications and admin systems using Next.js and
              Bootstrap, implementing responsive designs that optimized user
              experience across various devices
            </p>
            <p className="py-2">
              Created custom functions for uploading, processing, and error
              handling of CSV files
            </p>
            <p className="py-2">
              Implement user authentication using OAuth with Next Auth
            </p>
            <p className="py-2">
              Create user interfaces with data retrieved from the server
            </p>
            <p className="py-2">
              Submitted data to the server with API, utilizing RESTful
              architecture to ensure data integrity and reliability
            </p>
            <p className="py-2">
              Linking two sets of data dynamically with an npm package such as
              Xarrow to create context between data, and enable seamless data
              visualization
            </p>
          </div>
        </div>
      </div>

     {/* Jumpstart Commerce Sdn Bhd */}
      <div className="lg:grid grid-cols-5 gap-12  mt-10">
        <div className="col-span-2 mb-10 mb-lg-0">
          <h2 className="font-normal hidden lg:block">
            Jumpstart Commerce Sdn. Bhd.
          </h2>
          <p className="italic mt-3 hidden lg:block">
            December 2020 - March 2021
          </p>
        </div>

        <div className="col-span-3 mb-10 mb-lg-0">
          <h2 className="pb-2 mb-1">
            Shopify Front-end Web Developer
            <span className="font-light text-2xl"> (Internship)</span>
          </h2>

          <div>
            <h3 className="text-2xl font-normal lg:hidden">
              Jumpstart Commerce Sdn. Bhd.
            </h3>
            <p className="italic mt-3 mb-4 lg:hidden">
              December 2020 - March 2021
            </p>
          </div>

          <div>
            <p className="py-2">
              Developed custom Shopify themes using HTML, CSS, and JavaScript to
              enhance user experience and increase conversions
            </p>
            <p className="py-2">
              Launched 3 new Shopify stores and updated 6 existing ones,
              utilizing expertise in the Shopify platform to ensure optimal
              performance and user experience
            </p>
            <p className="py-2">
              Collaborated with cross-functional teams to deliver high-quality
              e-commerce solutions that met client requirements
            </p>
            <p className="py-2">
              Provided technical support and troubleshooting for Shopify stores,
              resolving issues related to theme customization and app
              integration
            </p>
          </div>
        </div>
      </div>

      {/* Leo Code Sdn Bhd */}
      <div className="lg:grid grid-cols-5 gap-12  mt-10">
        <div className="col-span-2 mb-10 mb-lg-0">
          <h2 className="font-normal hidden lg:block">Leo Code Sdn. Bhd.</h2>
          <p className="italic mt-3 hidden lg:block">May 2020 - July 2020</p>
        </div>

        <div className="col-span-3 mb-10 mb-lg-0">
          <h2 className="pb-2 mb-1">
            Front-end Web Developer
            <span className="font-light text-2xl"> (Part-time)</span>
          </h2>

          <div>
            <h3 className="text-2xl font-normal lg:hidden">
              Leo Code Sdn. Bhd.
            </h3>
            <p className="italic mt-3 mb-4 lg:hidden">May 2020 - July 2020</p>
          </div>

          <div>
            <p className="py-2">Create webpages with Angular and Bootstrap</p>
            <p className="py-2">
              Check for bugs in the development and production environment
            </p>
            <p className="py-2">
              Translate website content to other languages with i18n
            </p>
            <p className="py-2">
              Provide ideas for creating UI for the application
            </p>
            <p className="py-2">
              Attend weekly meetings to provide progress reports
            </p>
            <p className="py-2">
              Assist colleagues in completing tasks and projects
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
