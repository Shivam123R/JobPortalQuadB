import React from "react";

function Footer() {
  return (
    <footer className="bg-purple-500 text-white py-4 p-4">
      <div className="container flex justify-between items-center max-w-[1200px] mx-auto">
        <div className="text-center sm:text-left text-xl">
          <p className="">&copy; {new Date().getFullYear()} Shivam Jaiswal</p>
        </div>
        <div className="text-center">
          <ul className="flex space-x-4 text-2xl">
            <li>
              <a href="#" className="hover:underline">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
