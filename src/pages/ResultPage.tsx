import { Link } from 'react-router-dom'

const ResultPage = () => {
  return (
    <div className='grid gap-[30px]'>
      <div className='flex'>
        <img
          src='https://dummyjson.com/image/250x530'
          alt='placeholder image'
          className='rounded-[20px] shadow-result'
        />
      </div>
      <div className='flex flex-col gap-5 text-center'>
        <Link to='/result'>
          <div className='text-signin text-center font-dreiviertelfett py-2 text-[27px] bg-secondary rounded-[30px] shadow-sign2'>
            Save
          </div>
        </Link>
        <Link to='/'>
          <div className='inline text-text text-center font-buch py-2 px-9 backdrop-blur-[20px] backdrop-brightness-[1.1] bg-light rounded-[30px] text-[27px] shadow-sign2'>
            More Pics
          </div>
        </Link>
      </div>
    </div>
  )
}
export default ResultPage
