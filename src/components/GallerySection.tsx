"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

export default function GallerySection() {
  const stockImages = [
    { id: 1, src: "/image_2.jpg", alt: "An image" },
    { id: 2, src: "/image.png", alt: "Also an image" },
  ];

  return (
    <section>
      <Carousel plugins={[Autoplay({ delay: 50000 })]}>
        <CarouselContent>
          {" "}
          {/** TODO: stop autoplay on interaction */}
          {stockImages.map((image) => (
            <CarouselItem
              key={image.id}
              className="min-h-full flex items-center justify-center"
            >
              <div className="m-6 p-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="border-4 rounded-lg overflow-hidden object-contain"
                  height={400}
                  width={400}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
