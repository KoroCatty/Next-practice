import { DUMMY_NEWS } from '@/dummy-news'; // ダミーニュースデータをインポート

// 全てのニュースを取得する関数
export function getAllNews() {
  return DUMMY_NEWS; // ダミーニュースデータを返す
}

// 最新のニュース（先頭から3件）を取得する関数
export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3); // ダミーニュースデータの先頭3件を返す
}

// 利用可能なニュースの年を取得する関数
export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce<number[]>((years, news) => { // Explicitly type the accumulator as number[]
    const year = new Date(news.date).getFullYear(); // ニュースの日付から年を取得
    if (!years.includes(year)) { // 年がまだリストに含まれていない場合
      years.push(year); // リストに年を追加
    }
    return years; // 更新された年リストを返す
  }, []).sort((a, b) => b - a); // 年のリストを降順にソート
}

// 利用可能なニュースの月を取得する関数
export function getAvailableNewsMonths(year: number) {
  return DUMMY_NEWS.reduce<number[]>((months, news) => { // 配列を月ごとに集約
    const newsYear = new Date(news.date).getFullYear(); // ニュースの日付から年を取得
    if (newsYear === +year) { //! 文字列として渡される可能性のある値を数値に変換する
      const month = new Date(news.date).getMonth(); // ニュースの日付から月を取得
      if (!months.includes(month)) { // 月がまだリストに含まれていない場合
        months.push(month + 1); // リストに月を追加（0始まりのため1を加算）
      }
    }
    return months; // 更新された月リストを返す
  }, []).sort((a, b) => b - a); // 月のリストを降順にソート
}

// 指定された年のニュースを取得する関数 ( +year で数値に変換する裏技)
export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === +year // ニュースの日付が指定された年と一致する場合
  );
}

// 指定された年と月のニュースを取得する関数
export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear(); // ニュースの日付から年を取得
    const newsMonth = new Date(news.date).getMonth() + 1; // ニュースの日付から月を取得（0始まりのため1を加算）
    return newsYear === +year && newsMonth === +month; // ニュースの年と月が指定された年と月と一致する場合
  });
}
