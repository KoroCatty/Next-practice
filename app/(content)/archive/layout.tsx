type ArchiveLayoutProps = {
  archive: React.ReactNode
  latest: React.ReactNode
}

// Parallel routes (Next takes care of this)
const ArchiveLayout = ({ archive, latest }: ArchiveLayoutProps) => {
  return (
    <>
      <h1 className="">News Archive</h1>

      <section className="">{archive}</section>

      <hr className="my-8" />

      <section className="">{latest}</section>
    </>
  )
}

export default ArchiveLayout