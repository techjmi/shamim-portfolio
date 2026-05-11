//this is a not found page which will be shown when the page is not found or 404
import { not_found_title, not_found_description, not_found_back_to_home, not_found_image, not_found_href } from "@/constant/404-constant";
import Image from "next/image";
import { buildSeo } from "@/utils/seo";
import Button from "@/components/ui/Button";
import Typography from '@/components/ui/Typography';

export async function generateMetadata() {
  return buildSeo({
    title: not_found_title,
    description: not_found_description,
    image: not_found_image,
  });
}
export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-125px)] grid place-items-center px-4 py-12">
      <div className="relative w-full max-w-2xl  p-8 md:p-10 text-center">
        <div className="mx-auto mb-6">
          <Image
            src={not_found_image}
            alt={not_found_title}
            width={480}
            height={320}
            priority
            className="mx-auto h-auto w-64 md:w-80 object-contain"
          />
        </div>
        <h1 className="heading-1-bold">{not_found_title}</h1>
        <Typography className="body-regular mt-2 mb-6 text-slate-600 dark:text-slate-300">{not_found_description}</Typography>
        <Button
          href={not_found_href}
          variant="filled"
          color="secondary"
          size="md"
          radius="md"
        >
          {not_found_back_to_home}
        </Button>
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      </div>
    </section>
  );
}
