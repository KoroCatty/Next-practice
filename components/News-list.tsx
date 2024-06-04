import Link from 'next/link'
import Image from 'next/image'

type newsPropsType ={
  id: string,
  slug: string,
  title: string,
  image: string,
  date: string
  content: string,
}
type newsListPropsType = {
  news: newsPropsType[]
}

const NewsList = ({ news }:newsListPropsType) => {
  return (
    <>
      <ul className="flex gap-4 flex-wrap">
        {news.map((newsItem) => {
          return (
            <li key={newsItem.id} className="hover:opacity-75 w-[32%]">
              <Link href={`/news/${newsItem.slug}`}>
                <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={200} height={200} />
                <h2>{newsItem.title}</h2>
                {/* <p>{newsItem.content}</p> */}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default NewsList