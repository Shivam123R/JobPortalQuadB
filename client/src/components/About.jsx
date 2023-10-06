import React from "react";

function About() {
  return (
    <>
      <h1 className="text-3xl text-center py-4 uppercase text-[#4e4e4e]">
        About
      </h1>
      <div className="max-w-[1200px] mx-auto text-xl">
        Welcome to our cutting-edge Job Portal, a state-of-the-art platform
        meticulously crafted with the latest technologies, including React,
        Tailwind CSS, Redux Toolkit, and the MERN stack (MongoDB, Express.js,
        React, Node.js). Designed with your career aspirations in mind, our Job
        Portal offers a seamless and secure job-seeking experience like no
        other.
        <div> Key Features:</div>
        <p className="text-xl text-slate-600 py-2">
          1. User Authentication: Secure your job search with our robust user
          authentication system. Your data is protected using JWT tokens and
          bcrypt encryption, ensuring that your personal information remains
          confidential.
        </p>
        <p className="text-xl text-slate-600 py-2">
          {" "}
          2. MERN Stack: Our website leverages the power of the MERN stack,
          combining the capabilities of MongoDB, Express.js, React, and Node.js.
          This stack ensures lightning-fast performance, scalability, and
          real-time updates.
        </p>
        <p className="text-xl text-slate-600 py-2">
          3. Redux Toolkit: State management has never been easier, thanks to
          Redux Toolkit. Seamlessly manage and access your application's state
          to provide a smooth and efficient user experience.
        </p>
        <p className="text-xl text-slate-600 py-2">
          {" "}
          4. React Router DOM: Easily navigate through our website with React
          Router DOM. Explore job listings, access your dashboard, and find
          valuable resources effortlessly.
        </p>
        <p className="text-xl text-slate-600 py-2">
          5. Axios for Data Fetching: We use Axios, a popular HTTP client, to
          fetch and display job listings and other data. Experience fast-loading
          pages and real-time updates as you browse job opportunities.
        </p>
        <p className="text-xl text-slate-600 py-2">
          6. Comprehensive Job Listings: Discover an extensive array of job
          listings from top companies across various industries. Filter jobs by
          location, industry, and job type to find the perfect match for your
          skills and preferences.
        </p>
        <p className="text-xl text-slate-600 py-2">
          7. Responsive Design: Our website is fully responsive, ensuring a
          seamless experience across all devices, from desktops to smartphones.
        </p>
      </div>
    </>
  );
}

export default About;
