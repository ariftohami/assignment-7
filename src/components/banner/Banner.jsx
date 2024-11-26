import backgroundImage from '../../../public/images/tuna.jpg';

const Banner = () => {
  return (
      <>
          <div className=" mx-[140px] text-center bg-cover bg-center h-screen  text-white flex flex-col justify-evenly items-center rounded-3xl
           "
              style={{ backgroundImage: `url(${backgroundImage})` }} >
              <h1 className='text-4xl font-bold'>Experience the finest cuisine and unforgettable flavors.</h1>

              <p>Discover a unique blend of traditional and contemporary dishes, crafted with the finest ingredients and served in a warm, welcoming atmosphere.We pride ourselves on serving fresh, locally sourced ingredients and creating flavors that will linger in your memory.</p>
              
              <div className="flex gap-10 font-bold" >
              <button className=" bg-amber-500 px-[30px] py-[20px] rounded-[150px] ">Explore Now</button>
              <button className="bg-transparent border-[2px]
              border-amber-500 px-[28px] py-[18px] rounded-[150px] " >Our Feedback</button>
                  
              </div>


          </div>
      
      </>
  )
}

export default Banner