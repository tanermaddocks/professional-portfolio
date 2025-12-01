import { cn } from "@/lib/utils";

export default function ContentSection() {
  const title = "First Surname";
  const body = cn(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nam, eum ",
    "illum, optio porro qui quibusdam architecto quia totam quos ipsam ",
    "autem sit molestias, eligendi recusandae labore debitis nisi! Rem!"
  );

  return (
    <section className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-4xl italic font-bold">{title}</h1>
      <p className="text-lg text-center max-w-180">{body}</p>
    </section>
  );
}
