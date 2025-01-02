import Atropos from "atropos/react";

export default function Card({ children, className }) {
  return (
    <Atropos className="atropos-cont">
      <li className={className}>{children}</li>
    </Atropos>
  );
}
