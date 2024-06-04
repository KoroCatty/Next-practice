
// Dummy DB 
import { DUMMY_NEWS } from "@/dummy-news"

// components
import NewsList from "@/components/News-list"

const NewsPage = () => {
  return (
    <section className="container mx-auto">
      <div>NewsPage</div>

      <NewsList news={DUMMY_NEWS} />

    </section>
  )
}

export default NewsPage