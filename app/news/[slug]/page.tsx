import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetailPage = ({ params }: { params: { slug: string } }) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)

  if (!newsItem) {
    notFound()
  }
  return (
    <article className="container mx-auto text-center">
      <header className="">
        {/* 画像ページへ遷移 */}
        <Link href={`/news/${newsItem?.slug}/image`}>
          <Image src={`/images/news/${newsItem?.image}`} alt={newsItem?.title!} width={200} height={200} className="object-cover hover:opacity-60" />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>


    </article>
  )
}

export default NewsDetailPage