// components
import Link from 'next/link'
// ヘルパー関数
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';

import NewsList from '@/components/News-list'

const FilteredNewsPage = ({ params }: { params: { filter: string } }) => {
  const filter = params.filter; // ex) ["2021", "01"]

  const selectedYear = filter ? filter?.[0] : undefined; // ex) 2021 [[...filter]]の最初の要素
  const selectedMonth = filter?.[1]; // ex) 01 [[...filter]]の2番目の要素

  let news;
  let links = getAvailableNewsYears();

  // 年が選択されていて、月が選択されていない場合、どっちもセットされる
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(+selectedYear) ; // +selectedYearで文字列を数値に変換 (月の情報を取得)
  }

  // 年と月が選択されている場合
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  // Fallback
  let newsContent = <p>Found no news for the chosen filter!</p>;

  //! newsを表示
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  //! エラーハンドリング
  if (selectedYear && (!getAvailableNewsYears().includes(+selectedYear) 
    || selectedMonth && !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid year or month")
  }

  return (
    <>
      <header>
        <nav className="">
          {/* make actual Links */}
          <ul className="flex gap-6">
            {links.map((link) => {
              // 年が選択されている場合、年、月のリンクを表示。選択されていない場合、年のリンクを表示
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
              return (
                <li key={link} className="text-[1.5rem]">
                  <Link href={`${href}`}>{link} {selectedYear && "月"}</Link>
                </li>
              )
            }
            )}
          </ul>
        </nav>
      </header>
      {/* NewsListコンポーネントを表示 */}
      {newsContent}
    </>
  )
}

export default FilteredNewsPage