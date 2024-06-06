import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

const ImagePage = ({ params }:{ params: { slug:string }}) => {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((aaa) => aaa.slug === newsItemSlug); // slugが一致する記事を取得

  if (!newsItem) {
    notFound();
  }
  return (
    <Image
      src={`/images/news/${newsItem.image}`}
      alt={newsItem.title}
      width={600}
      height={400}
    />
  )
}

export default ImagePage