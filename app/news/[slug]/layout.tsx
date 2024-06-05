import { ReactNode } from "react"

type Props = {
  children: ReactNode
  modal: ReactNode
}

const NewsDetailLayout = ({ children, modal }: Props) => {
  return (
    <>
      {/* @modal の内容 */}
      {modal}

      {/* page.tsxの内容 */}
      {children}
    </>
  )
}

export default NewsDetailLayout