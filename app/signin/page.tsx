"use client";
import Image from 'next/image'
import React from 'react'
import google from  '../../public/google2.png'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  
  async function handleSubmit() {
    await signIn('google', { callbackUrl: '/dashboard'})
  }

  async function handleSubmitGithub() {
    await signIn('github', { callbackUrl: '/Form-Generator'})
  }


  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 flex flex-col justify-center items-center min-h-screen px-10 lg:px-20 md:px-14'>
      <div className='bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 border border-gray-100  max-w-md w-full h-auto shadow-xl'>
        <div className='px-8 py-8'>
          <div className='text-left space-y-2'>
            <h1 className='text-3xl font-bold text-black'>Welcome Back!</h1>
            <p className='text-gray-500'>Sign in to your account</p>
          </div>
          <div className='flex flex-col justify-center items-center py-6 space-y-2'>
            <form className='w-full' action={handleSubmit}>
              <button className="bg-gray-100 rounded-lg flex items-center w-full p-2 gap-2 shadow-md">
                <Image
                  src={google}
                  width={30}
                  height={30}
                  alt="google"
                />
                <p className="text-black">Google</p>
              </button>
              </form>
              <form className='w-full' action={handleSubmitGithub}>
              <button className="bg-gray-100 rounded-lg flex items-center w-full p-2 gap-2 mt-4 shadow-md">
                <Image
                  src={google}
                  width={30}
                  height={30}
                  alt="github"
                />
                <p className="text-black">Twitter</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
