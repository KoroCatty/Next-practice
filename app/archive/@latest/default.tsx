//! 特定のルートが見つからない場合に、このファイルが表示される。404のようなもの

// components
import NewsList from "@/components/News-list";

// ヘルパー関数
import { getLatestNews } from "@/lib/news"; // 3件だけ返す関数

export default function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList  news={latestNews} />
    </>
  )
}