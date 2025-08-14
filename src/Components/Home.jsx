import previewImage from "../assets/preview.webp";

const Home = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center text-center px-6"
      style={{ backgroundImage: `url(${previewImage})` }}
    >
      
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      
      <div className="relative z-10 max-w-4xl px-4 ">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg leading-tight">
          Discover the Spaces We Transform
        </h1>
        <p className="text-white text-lg mt-5 drop-shadow-sm max-w-xl mx-auto">
          From homes to commercial hubs, explore how our expert designers bring
          every sector to life.
        </p>

        <a
          href="#features"
          className="inline-flex items-center mt-7 px-6 py-3 bg-[#7F543D] text-white font-medium rounded-md hover:bg-[#74A8A4] transition duration-300"
        >
          Get Started
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Home;
