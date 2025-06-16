import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'

const   Hero = () => {
  return (
    <section id='home-section' className='bg-slate-gray'>
      <div className='container pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-1 gap-10 items-center'>
          <div className='col-span-6 flex flex-col gap-8'>
            <div className='flex gap-2 mx-auto lg:mx-0'>
              <Icon
                icon='solar:verified-check-bold'
                className='text-success text-xl inline-block me-2'
              />
              <p className='text-success text-sm font-semibold text-center lg:text-start tracking-widest uppercase'>
                Get 30% off on first enroll
              </p>
            </div>
            <h1 className='text-midnight_text lg:text-start text-center font-semibold leading-tight capitalize'>
              Learn Engineering from Top Experts
            </h1>
            <p className='text-black/70 text-lg lg:text-start text-center max-w-xl capitalize'>
              Build skills with our courses and mentor from world-class
              companies.
            </p>
            <div className='relative rounded-full'>
              <input
                type='text'
                name='course'
                className='py-4 pl-8 pr-20 text-lg w-full text-black rounded-full border border-black/10 focus:outline-hidden focus:border-primary duration-300 shadow-input-shadow'
                placeholder='Search engineering courses...'
                autoComplete='off'
              />
              <button className='group border border-secondary bg-secondary hover:bg-transparent p-3 rounded-full absolute right-2 top-1.5 duration-300 hover:cursor-pointer'>
                <Icon
                  icon='solar:magnifer-linear'
                  className='text-white group-hover:text-primary text-2xl inline-block duration-300'
                />
              </button>
            </div>
            <div className='flex items-center justify-between pt-10 lg:pt-4 flex-wrap gap-4'>
              <div className='flex gap-2'>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Flexible Schedules
                </p>
              </div>
              <div className='flex gap-2'>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Guided Learning Paths
                </p>
              </div>
              <div className='flex gap-2'>
                <Image
                  src='/images/banner/check-circle.svg'
                  alt='check-image'
                  width={30}
                  height={30}
                  className='smallImage'
                />
                <p className='text-sm sm:text-lg font-normal text-black'>
                  Peer Support Community
                </p>
              </div>
            </div>
          </div>
          <div className='col-span-6 flex justify-center'>
            <Image
              src='/images/banner/mahila.webp'
              alt='nothing'
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
