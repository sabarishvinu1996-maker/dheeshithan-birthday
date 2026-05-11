"use client";

import { useEffect, useRef, useState } from "react";

export default function BirthdayInvitation() {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [showMusicButton, setShowMusicButton] = useState(true);

  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  // COUNTDOWN TIMER
  useEffect(() => {

    const targetDate = new Date("May 24, 2026 18:00:00").getTime();

    const interval = setInterval(() => {

      const now = new Date().getTime();

      const distance = targetDate - now;

      if (distance > 0) {

        setTimeLeft({

          days: Math.floor(
            distance / (1000 * 60 * 60 * 24)
          ).toString(),

          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
          ).toString(),

          minutes: Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
          ).toString(),

          seconds: Math.floor(
            (distance % (1000 * 60)) /
            1000
          ).toString(),

        });

      }

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  // PLAY MUSIC
  const playMusic = async () => {

    try {

      const audio = audioRef.current;

      if (!audio) return;

      audio.volume = 1;
      audio.muted = false;
      audio.currentTime = 0;

      await audio.play();

      setShowMusicButton(false);

    } catch (error) {

      alert("Tap again to play music");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-700 to-pink-500 text-white overflow-hidden font-serif">

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
      >

        {/* YOUR CUSTOM SONG */}
        <source
          src="/happy-birthday.mp3"
          type="audio/mpeg"
        />

      </audio>

      {/* MUSIC POPUP */}
      {showMusicButton && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white text-black p-8 rounded-3xl text-center shadow-2xl">

            <h2 className="text-3xl font-bold mb-4">
              🎵 Birthday Music
            </h2>

            <p className="mb-6">
              Tap below to start music
            </p>

            <button
              onClick={playMusic}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl text-xl font-bold"
            >
              ▶ Play Music
            </button>

          </div>

        </div>

      )}

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">

        {/* HEADING */}
        <div className="text-center mb-12 animate-pulse">

          <h3 className="text-2xl md:text-3xl mb-2">
            Our Little
          </h3>

          <h1 className="text-6xl md:text-7xl font-bold italic text-yellow-300 mb-4">
            Dheeshithan N.
          </h1>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Turns One 🎂
          </h2>

          <p className="mt-6 text-xl md:text-2xl">
            Let’s celebrate my first adventure around the sun!
          </p>

        </div>

        {/* MAIN SECTION */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* IMAGE */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20">

            <img
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop"
              alt="Birthday"
              className="rounded-2xl w-full h-[350px] object-cover"
            />

          </div>

          {/* DETAILS */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">

            <p className="text-lg leading-8">

              Hi everyone! It’s me,
              <strong> Dheeshithan N.</strong>

              <br /><br />

              I’ve been practicing my walking,
              babbling and cake-smashing skills
              for a whole year now!

            </p>

            <div className="mt-8 space-y-5 text-lg">

              <div className="flex gap-3">

                <span>📍</span>

                <div>
                  <p className="font-bold">Venue</p>
                  <p>Welcome ITC, Cathedral Road</p>
                </div>

              </div>

              <div className="flex gap-3">

                <span>📅</span>

                <div>
                  <p className="font-bold">Date</p>
                  <p>24th May 2026</p>
                </div>

              </div>

              <div className="flex gap-3">

                <span>⏰</span>

                <div>
                  <p className="font-bold">Time</p>
                  <p>6:00 PM onwards</p>
                </div>

              </div>

              <div className="flex gap-3">

                <span>💙</span>

                <div>
                  <p className="font-bold">Dress Code</p>
                  <p>Wear your best BLUE outfit</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* MESSAGE */}
        <div className="mt-16 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center shadow-xl">

          <h2 className="text-4xl font-bold text-yellow-300 mb-4">
            The Excitement ✨
          </h2>

          <p className="text-lg md:text-xl leading-8">

            I’ve made sure there’s music,
            magic, delicious food,
            fun games and lots of surprises
            waiting just for you!

          </p>

        </div>

        {/* TIMER */}
        <div className="mt-16 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center shadow-xl">

          <h2 className="text-4xl font-bold text-yellow-300 mb-8">
            Countdown To Celebration ⏳
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-5xl font-bold">{timeLeft.days}</h3>
              <p className="mt-2">Days</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-5xl font-bold">{timeLeft.hours}</h3>
              <p className="mt-2">Hours</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-5xl font-bold">{timeLeft.minutes}</h3>
              <p className="mt-2">Minutes</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="text-5xl font-bold">{timeLeft.seconds}</h3>
              <p className="mt-2">Seconds</p>
            </div>

          </div>

        </div>

        {/* EMOJIS */}
        <div className="mt-16 text-center text-5xl animate-bounce">
          🎈 🎂 🧸 🎁
        </div>

      </div>

    </div>

  );

}