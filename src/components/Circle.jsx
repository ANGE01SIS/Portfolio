import { useEffect, useRef } from "react";
export default function Circle() {
  const circle = useRef(null);

  useEffect(() => {
    function calcCircle(e) {
      // Mover el círculo a las coordenadas del mouse
      circle.current.style.left = `${e.clientX}px`;
      circle.current.style.top = `${e.clientY}px`;
      if (e.target.classList.contains("hoverable")) {
        circle.current.classList.remove("circle_out_hover");
        circle.current.classList.add("circle_in_hover");
      } else {
        circle.current.classList.add("circle_out_hover");
        circle.current.classList.remove("circle_in_hover");
      }
    }

    document.addEventListener("mousemove", (e) => calcCircle(e));
    return () => {
      document.removeEventListener("mousemove", calcCircle);
    };
  }, []);

  return <div className="circle" ref={circle}></div>;
}
