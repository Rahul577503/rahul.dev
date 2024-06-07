// types/use-sound.d.ts
declare module 'use-sound' {
    export interface UseSoundOptions {
      volume?: number;
      playbackRate?: number;
      loop?: boolean;
      soundEnabled?: boolean;
      sprite?: Record<string, [number, number]>;
      interrupt?: boolean;
      onend?: () => void;
      onload?: () => void;
      onloaderror?: (id: number, error: any) => void;
      onplayerror?: (id: number, error: any) => void;
    }
  
    type PlayFunction = (options?: { id?: string; forceSoundEnabled?: boolean }) => void;
  
    type ReturnedValue = [
      PlayFunction,
      {
        stop: () => void;
        isPlaying: boolean;
        sound: any;
      }
    ];
  
    export default function useSound(
      src: string | string[],
      options?: UseSoundOptions
    ): ReturnedValue;
  }
  
  declare module '*.mp3' {
    const src: string;
    export default src;
  }
  