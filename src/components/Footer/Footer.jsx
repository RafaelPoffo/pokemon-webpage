import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className='bg-[#BDCDD6] mt-24 py-8 md:py-12 lg:py-8'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between gap-12 px-4'>
          <div className='flex flex-col space-y-4 md:w-1/3'>
            <h2 className='text-xl font-semibold'>How Can We Help?</h2>
            <div className='space-y-2'>
              <p>Contact Customer Service</p>
              <p>Help Center</p>
              <p>Accessibility</p>
              <p>Refund and Return Policy</p>
            </div>
          </div>

          <div className='flex flex-col space-y-4 md:w-1/3'>
            <h2 className='text-xl font-semibold'>About</h2>
            <div className='space-y-2'>
              <p>About Us</p>
              <p>Our Core Values</p>
              <p>Careers</p>
              <p>Working at Pokemon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
