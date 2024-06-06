import sql from 'better-sqlite3'


const db = sql('data.db');

type News = {
  id: string,
  slug: string,
  title: string,
  image: string,
  date: string
  content: string,
};

// 全てのニュースを取得する関数
export async function getAllNews(): Promise<News[]>{
  // return DUMMY_NEWS; // ダミーニュースデータを返す
  const news = await db.prepare('SELECT * FROM news').all() as News[];
  await new Promise((resolve => setTimeout(resolve, 2000)))
  return news;
}

// 最新のニュース（先頭から3件）を取得する関数
export async function getLatestNews() {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

// 利用可能なニュースの年を取得する関数
export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

// 利用可能なニュースの月を取得する関数
export function getAvailableNewsMonths(year) {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

// 指定された年のニュースを取得する関数 ( +year で数値に変換する裏技)
export async function getNewsForYear(year) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}

// 指定された年と月のニュースを取得する関数
export async function getNewsForYearAndMonth(year, month) {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
}