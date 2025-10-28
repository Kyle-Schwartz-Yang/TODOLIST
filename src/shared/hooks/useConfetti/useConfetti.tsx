import { useCallback } from "react";
import confetti from "canvas-confetti";

export default function useConfetti() {
  const launchConfetti = useCallback(() => {
    const end = Date.now() + 1000;
    const colors = ["#f8c3da", "#8e0043"];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return { launchConfetti };
}
