'use client'
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

const InterceptedImagePage = ({ params }: { params: { slug: string } }) => {
const router = useRouter();

  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((aaa) => aaa.slug === newsItemSlug); // slugが一致する記事を取得

  if (!newsItem) {
    notFound();
  }
  return (
    <section className="w-screen h-screen bg-red-600/65">
      <h2 className="text-red-900 text-[3rem]">INTERCEPTED!!</h2>
      <button className="p-3 bg-white text-black" onClick={router.back}>GO BACK</button>
      <Image
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title}
        width={600}
        height={400}
      />
    </section>
  )
}

export default InterceptedImagePage