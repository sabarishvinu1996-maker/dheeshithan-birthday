"use client";

import { useEffect, useRef } from "react";

export default function BirthdayInvitation() {

  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current?.play();
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-blue-900 font-serif overflow-hidden">

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source
          src="https://www2.cs.uic.edu/~i101/SoundFiles/HappyBirthday.mid"
          type="audio/midi"
        />
      </audio>

      <div className="relative">

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-10">

          {/* Heading */}
          <div className="text-center mb-10 animate-pulse">

            <h3 className="text-2xl md:text-3xl tracking-wide mb-2">
              Our Little
            </h3>

            <h1 className="text-5xl md:text-7xl font-bold italic text-blue-700 mb-4">
              Dheeshithan N.
            </h1>

            <h2 className="text-4xl md:text-5xl font-semibold">
              Turns One 🎂
            </h2>

            <p className="mt-6 text-xl md:text-2xl text-blue-800">
              Let’s celebrate my first adventure around the sun!
            </p>

          </div>

          {/* Main Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Image */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-200">

              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop"
                alt="Birthday"
                className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
              />

            </div>

            {/* Details */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-blue-200">

              <p className="text-lg leading-8">
                Hi everyone! It’s me, <strong>Dheeshithan N.</strong>
                <br />
                I’ve been practicing my walking, babbling, and cake-smashing
                skills for a whole year now, and I’m finally ready for the big stage!
              </p>

              <div className="mt-8 space-y-5 text-lg">

                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>

                  <div>
                    <p className="font-bold">Venue</p>
                    <p>Welcome ITC, Cathedral Road</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">📅</span>

                  <div>
                    <p className="font-bold">Date</p>
                    <p>24th May 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏰</span>

                  <div>
                    <p className="font-bold">Time</p>
                    <p>6:00 PM onwards</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">💙</span>

                  <div>
                    <p className="font-bold">Dress Code</p>
                    <p>Wear your best BLUE outfit</p>
                  </div>
                </div>

              </div>

              {/* Button */}
              <button className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl text-xl font-semibold shadow-lg transition-all duration-300">
                I Can’t Wait To See You There!
              </button>

            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-blue-200">

            <h2 className="text-4xl font-bold mb-4 text-blue-700">
              The Excitement ✨
            </h2>

            <p className="text-lg md:text-xl leading-8 max-w-3xl mx-auto">
              I’ve made sure there’s music, magic, delicious food,
              fun games, and lots of surprises waiting just for you.
              Come celebrate my very first birthday and make beautiful memories with us.
            </p>

          </div>

          {/* Emoji Animation */}
          <div className="mt-16 text-center">

            <div className="inline-flex gap-4 text-5xl animate-bounce">
              🎈 🎂 🧸 🎁
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}