/**
 * Local imagery — authentic photos from the chapter's
 * "Digital Literacy Program: Enabling Digitalization in the Musahar Community".
 * Stored in /public/gallery. Swap or extend freely.
 */
export const img = {
  heroMain: "/gallery/photo-8.jpg", // full classroom of engaged students
  heroFloat: "/gallery/photo-5.jpg", // leader teaching, arms open
  aboutGroup: "/gallery/photo-6.jpg", // group photo on steps with banner
  leader: "/gallery/photo-2.jpg", // Bikash presenting
  teaching: "/gallery/photo-1.jpg", // instructor at smartboard
  classroom: "/gallery/photo-3.jpg", // students seated in class
  presenting: "/gallery/photo-7.jpg", // "why digital skills are important" slide
  welcome: "/gallery/photo-9.jpg", // welcome banner presentation
  session: "/gallery/photo-4.jpg", // small-group session
} as const;

export const galleryImages: { src: string; alt: string }[] = [
  {
    src: "/gallery/photo-8.jpg",
    alt: "A full classroom of students engaged in a digital literacy session",
  },
  {
    src: "/gallery/photo-6.jpg",
    alt: "Group photo of students holding the Digital Literacy Program banner",
  },
  {
    src: "/gallery/photo-5.jpg",
    alt: "Facilitator teaching essential digital skills to the community",
  },
  {
    src: "/gallery/photo-1.jpg",
    alt: "Instructor presenting why digital skills matter on a smartboard",
  },
  {
    src: "/gallery/photo-3.jpg",
    alt: "Students seated during a digital literacy program",
  },
  {
    src: "/gallery/photo-7.jpg",
    alt: "A session on how technology helps everyday life",
  },
  {
    src: "/gallery/photo-9.jpg",
    alt: "Welcome session: enabling digitalization in the Musahar community",
  },
  {
    src: "/gallery/photo-4.jpg",
    alt: "A hands-on community learning session",
  },
];
