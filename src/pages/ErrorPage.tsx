import { useRouteError } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError()
  return (
    <div className='flex flex-col gap-8 justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  )
}

export default ErrorPage
