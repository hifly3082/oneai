import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <Link to='upload'>
      <div className='flex flex-col backdrop-blur-[20px] backdrop-brightness-[1.1] bg-card shadow-card p-[14px] rounded-[30px]'>
        <img
          src='https://dummyjson.com/image/280'
          alt='placeholder image'
          className='rounded-[20px]'
        />
        <h2 className='font-montserrat font-black text-[35px] text-light'>
          Lego
        </h2>
      </div>
    </Link>
  )
}

export default Card
