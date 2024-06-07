"use client";
import React from "react";
import useSound from "use-sound";
import useKeyboardBindings from "@/hooks/useKeyboardBindings";

const AudioPlayer = () => {
  const [play] = useSound('/sound/tom.mp3', {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
  });

  const [play2] = useSound('/sound/kick.mp3', {
    sprite: {
      sound1: [0, 1000],
      sound2: [1500, 2000],
    },
  });

  useKeyboardBindings({
    '1': () => play({ id: 'kick' }),
    '2': () => play({ id: 'hihat' }),
    '3': () => play({ id: 'snare' }),
    '4': () => play({ id: 'cowbell' }),
    '5': () => play2({ id: 'sound1' }),
    '6': () => play2({ id: 'sound2' }),
  });

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        aria-label="kick"
        onMouseDown={() => play({ id: 'kick' })}
        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
      >
        Kick (1)
      </button>
      <button
        aria-label="hihat"
        onMouseDown={() => play({ id: 'hihat' })}
        className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
      >
        Hi-Hat (2)
      </button>
      <button
        aria-label="snare"
        onMouseDown={() => play({ id: 'snare' })}
        className="px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none"
      >
        Snare (3)
      </button>
      <button
        aria-label="cowbell"
        onMouseDown={() => play({ id: 'cowbell' })}
        className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
      >
        Cowbell (4)
      </button>
      <button
        aria-label="sound1"
        onMouseDown={() => play2({ id: 'sound1' })}
        className="px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600 focus:outline-none"
      >
        Sound 1 (5)
      </button>
      <button
        aria-label="sound2"
        onMouseDown={() => play2({ id: 'sound2' })}
        className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 focus:outline-none"
      >
        Sound 2 (6)
      </button>
    </div>
  );
};

export default AudioPlayer;