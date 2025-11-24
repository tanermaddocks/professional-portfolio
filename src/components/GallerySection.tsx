import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function GallerySection() {
  const stockImages = [
    { id: 1, src: "/image_2.jpg", alt: "An image" },
    { id: 2, src: "/image.png", alt: "Also an image" },
  ];

  return (
    <section>
      <Carousel>
        <CarouselContent>
          {stockImages.map((image) => (
            <CarouselItem key={image.id} className="min-h-full flex items-center justify-center">
              <div className="border rounded-lg m-6 p-2">
                <img src={image.src} alt={image.alt} className="border rounded-lg overflow-hidden"/>
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
