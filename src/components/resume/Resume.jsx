import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-pink-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-pink-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-pink-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-pink-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Junior Web Developer 
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Studying at Northmetropolitan TAFE
                </span>
                <span className=" text-[.9rem] font-semibold text-pink-500 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                During my time studying Information Technology at NorthMetropolitan TAFE, I developed a strong passion for web development. Through hands-on projects and collaborative learning, I gained practical experience in building responsive websites, managing databases, and working with modern web technologies like React and Next.js. The supportive learning environment and access to industry-standard tools helped me enhance my problem-solving skills and teamwork, preparing me to tackle real-world challenges in web development.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-pink-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-pink-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-pink-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-pink-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Certificate 3, Certificate 4 and Diploma of Information Technology (Web Dev)
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  NorthMetropolitan TAFE
                </span>
                <span className=" text-[.9rem] font-semibold text-pink-500 sm:text-base">
                  2020 - 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                I have completed a Certificate III and IV in Information Technology, specializing in web development, where I gained a strong foundation in HTML, CSS, JavaScript, and responsive design. These courses equipped me with skills in both front-end and back-end development, including CMS management, database integration, and team collaboration using version control tools like Git. Currently pursuing a Diploma of Information Technology in Web Development, I am deepening my expertise in full-stack development, modern frameworks like React and Next.js, and web security practices, preparing me for complex, real-world projects.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
