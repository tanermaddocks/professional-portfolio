import React from "react";

export default function ContactButton(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="24"
        fill= "var(--color-foreground)"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M15 37V19C15 18.45 15.1958 17.9792 15.5875 17.5875C15.9792 17.1958 16.45 17 17 17H33C33.55 17 34.0208 17.1958 34.4125 17.5875C34.8042 17.9792 35 18.45 35 19V31C35 31.55 34.8042 32.0208 34.4125 32.4125C34.0208 32.8042 33.55 33 33 33H19L15 37Z"
        fill="var(--color-accent)"
      />
    </svg>
  );
}
