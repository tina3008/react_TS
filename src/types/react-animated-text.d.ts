declare module 'react-animated-text' {
  import * as React from 'react';

  interface WaveProps {
    text: string;
    effect?:
      | 'stretch'
      | 'verticalFade'
      | 'pop'
      | 'fade'
      | 'throw'
      | 'swirl'
      | 'fadeOut';
    effectChange?: number;
    iterations?: number | 'infinite';
    speed?: number;
  }

  export const Wave: React.FC<WaveProps>;
}
