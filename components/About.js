import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>

          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600">
            &#47;&#47; I am a web developer that happens to major in networking and security.
          </p>

          <p className="py-2 text-gray-600">
            I found my interest in web development when I was studying Web Fundamental 101 at my
            University. I began to self-learn web development through online courses so that I could
            compete with other students that have a Software Engineering background.
          </p>

          <p className="py-2 text-gray-600">
            In 2019, I began to enrol in a Web Development course on Udemy. I learned a lot about
            creating websites and web apps and thus establish my future in working in the field of
            web development.
          </p>

          <p className="py-2 text-gray-600">
            In 2020, I landed a part-time job during the pandemic. This, lead me towards using
            Firebase as the backend of my web app. During my third year at the university, I chose
            to create a web app using React and Firebase as my final year project.
          </p>

          <p className="py-2 text-gray-600">
            After graduating, I have some experience using React and Firebase. So I landed a
            Software Engineer job mainly focusing on using Firebase. And after quitting that job, I
            get a role as a front-end React/Nextjs developer in my current company.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded" src="/assets/work-photo.jpg" alt="my photo" />
        </div>
      </div>
    </div>
  );
};

export default About;
