import { Link } from 'react-router-dom'
import { BsCardImage, BsCamera, BsChevronLeft } from 'react-icons/bs'

const UploadPage = () => {
  return (
    <div>
      <Link to='/'>
        <button className='flex justify-center items-center text-text font-dreiviertelfett text-[25px] bg-light rounded-[30px] shadow-sign2 py-1 px-2 pr-5 mb-10'>
          <BsChevronLeft size={30} strokeWidth={1} />
          Go back
        </button>
      </Link>
      <div className='flex'>
        <img
          src='https://dummyjson.com/image/315'
          alt='placeholder image'
          className='rounded-[20px] border-[3px] border-shade'
        />
      </div>
      <div className='grid grid-cols-2 mt-[50px] gap-[22px]'>
        <Link to='/result'>
          <div className='flex flex-col items-center justify-center text-center backdrop-blur-[20px] backdrop-brightness-[1.1] bg-card shadow-card p-[14px] rounded-[30px] text-light font-dreiviertelfett text-[15px]'>
            <BsCardImage size={78} />
            <p>
              Choose photo <br />
              from gallery
            </p>
          </div>
        </Link>
        <Link to='/result'>
          <div className='flex flex-col items-center justify-center text-center backdrop-blur-[20px] backdrop-brightness-[1.1] bg-card shadow-card p-[14px] rounded-[30px] text-light font-dreiviertelfett text-[15px]'>
            <BsCamera size={78} />
            <p>
              Take photo <br />
              with camera
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default UploadPage
