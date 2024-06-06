

// components
import NewsList from "@/components/News-list"

// ヘルパー自作関数
import { getAllNews } from "@/lib/news"

const NewsPage = async () => {
  const news = await getAllNews();
  // const res = await fetch('http://localhost:8080/news');
  // if (!res.ok) {
  //   throw new Error('Failed to fetch news.');
  // }
  // const news = await res.json();


  return (
    <section className="container mx-auto">
      <div>NewsPage</div>
      <NewsList news={news} />
    </section>
  )
}

export default NewsPage