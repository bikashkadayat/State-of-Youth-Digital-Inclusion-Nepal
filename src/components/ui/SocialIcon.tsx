import { cn } from "@/lib/utils";

type Name = "Facebook" | "Instagram" | "Linkedin" | "Youtube" | "Twitter";

const paths: Record<Name, React.ReactNode> = {
  Facebook: (
    <path
      fill="currentColor"
      d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"
    />
  ),
  Instagram: (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </>
  ),
  Linkedin: (
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
    />
  ),
  Youtube: (
    <path
      fill="currentColor"
      d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14c.5-1.89.5-5.8.5-5.8s0-3.91-.5-5.8ZM9.6 15.6V8.4l6.25 3.6L9.6 15.6Z"
    />
  ),
  Twitter: (
    <path
      fill="currentColor"
      d="M18.24 2.25h3.31l-7.23 8.26L22.75 21h-6.63l-5.2-6.79L4.99 21H1.68l7.73-8.84L1.25 2.25h6.79l4.7 6.21 5.5-6.21Zm-1.16 16.78h1.83L7.01 4.12H5.05L17.08 19.03Z"
    />
  ),
};

export function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const content = paths[name as Name] ?? paths.Twitter;
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
