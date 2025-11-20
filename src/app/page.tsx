import ContactForm from "@/components/ContactForm";
import ContentSection from "@/components/ContentSection";
import GallerySection from "@/components/GallerySection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <GallerySection />
        <Separator />
        <ContentSection />
      </div>
      <ContactForm />
    </main>
  );
}
