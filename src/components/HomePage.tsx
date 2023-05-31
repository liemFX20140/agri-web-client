// import banner from '../images/banner.jpg';
import CaroselBanner from './Carosel';

export function HomePage() {
  return (
    <div>
      <h1 className='font-display text-7xl text-green-600 text-center py-8'>
        Đà Lạt Farm
      </h1>
      <CaroselBanner></CaroselBanner>

      <div
        className='flex bg-primary my-8 rounded-xl relative lg:h-96 md:h-48 '
        id='hero'
      >
        <img
          src='./src/images/vuon_dau.jpg'
          className='rounded-md w-1/2 inline-block my-4 mx-4 absolute inset-y-neg  left-8 '
        ></img>
        <div className='text-gray-800 w-2/5 ml-auto px-2 py-4 my-auto'>
          <h3 className='text-lg'>Lorem ipsum dolor sit.</h3>
          <p>
            expedita accusantium dolores atque, neque veniam minus repellendus
            am, suscipit reiciendis nemo? Itaque, magni assumenda!
          </p>
        </div>
      </div>
    </div>
  );
}
