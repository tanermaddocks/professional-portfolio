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

  const stockImages = [{id: 1, src: "/image", alt: "An image"}, {id: 2, src: "/image", alt: "Also an image"} ]
  

  return (
    <Carousel className="relative w-full p-8">
      <CarouselContent>
        {stockImages.map((image) => 
                <CarouselItem key={image.id}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={image.src} alt={image.alt} width={300} height={300}/>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious className="scale-200" />
      <CarouselNext className="scale-200" />
    </Carousel>
  );
}
