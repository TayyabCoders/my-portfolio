import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  // Using useGSAP for animation
  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      if (counter) {
        const numberElement = counter.querySelector(".counter-number") as HTMLElement;
        const item = counterItems[index];

        // Set initial value to 0
        gsap.set(numberElement, { innerText: "0" });

        // Create the counting animation
        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 }, // Ensures whole numbers
          scrollTrigger: {
            trigger: "#counter",
            start: "top center",
          },
          // Add the suffix after counting is complete
          onComplete: () => {
            if (numberElement) {
              numberElement.textContent = `${item.value}${item.suffix}`;
            }
          },
        });
      }
    });
  }, [counterItems]); // Dependency array to trigger animation when items are loaded

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) countersRef.current[index] = el;
            }}
            className="rounded-lg p-10 flex flex-col justify-center min-w-[250px]"
            style={{
              background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0 {item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
