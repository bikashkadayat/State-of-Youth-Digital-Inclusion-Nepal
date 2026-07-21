import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { galleryImages } from "@/data/images";

export function Gallery({
  limit,
  showHeading = true,
}: {
  limit?: number;
  showHeading?: boolean;
}) {
  const list = limit ? galleryImages.slice(0, limit) : galleryImages;
  return (
    <section className="py-20 lg:py-28">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Moments from the movement"
            subtitle="Real scenes from our workshops, camps and community sessions across Nepal."
          />
        )}
        <Stagger className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
          {list.map((g, i) => (
            <StaggerItem
              key={g.src}
              className={
                i % 6 === 0 || i % 6 === 3
                  ? "row-span-2"
                  : ""
              }
            >
              <div className="group relative h-full w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
