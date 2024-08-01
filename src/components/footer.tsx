const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex w-full py-10 mb-5 md:mb-20 flex-col justify-center items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5">
          <h2 className="text-2xl md:text-3xl text-center font-bold text-white">
            Daily Bible Verse
          </h2>
          <p className="md:w-7/12 text-center my-3 text-base text-white">
            Those whom I love I rebuke and discipline. So be earnest and repent.
          </p>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <button className="bg-white text-gray-900 py-2 px-4 rounded-md">
              Revelation 3:19
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <a
            href="https://www.material-tailwind.com"
            target="_blank"
            className="text-green-800 text-xl font-semibold"
          >
            ORMBGO 
          </a>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
          PO Box 821 Boca Raton, <br /> FL 33429 561-668-3925
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <i className="fa-brands fa-twitter text-lg" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <i className="fa-brands fa-youtube text-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <i className="fa-brands fa-instagram text-lg" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <i className="fa-brands fa-github text-lg" />
            </a>
          </div>
        </div>
        <p className="text-center mt-12 font-normal text-gray-700">
          Copyright © 2024 ORMBGO (One Root Many Branches Global Outreach, Inc.)
          | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
