"use client";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('https://static.wixstatic.com/media/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg/v1/fill/w_980,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8c4554_6f448836e66a4f64961eea6a50536aa4~mv2.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/60" />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          ONE ROOT MANY BRANCHES GLOBAL OUTREACH, inc
        </h1>
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl mb-4 lg:max-w-3xl">
          Bringing love and joy to our Senior Citizens, our Local Community, and Beyond
        </h2>
        <p className="text-white text-md md:text-lg lg:text-xl mb-8 w-full md:max-w-full lg:max-w-2xl">
          Making Life Worth Living
        </p>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
