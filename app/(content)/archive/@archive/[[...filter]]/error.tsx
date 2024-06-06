'use client';

// error を next.js から受け取って表示
const ErrorPage = ({ error }: { error: {message: string} } ) => {
  return (
    <>
    <h1 className="text-red-900 text-3xl">{error.message}</h1>
    <h2 className="text-red-900 text-3xl"> エラーです</h2>
    </>
  )
}

export default ErrorPage