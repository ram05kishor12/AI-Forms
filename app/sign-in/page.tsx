"use client";
import Image from 'next/image'
import React from 'react'
import google from  '../../public/google2.png'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  
  async function handleSubmit() {
    await signIn('google', { callbackUrl: '/Form-Generator'})
  }

  async function handleSubmitGithub() {
    await signIn('github', { callbackUrl: '/Form-Generator'})
  }


  return (
    <div className='bg-black flex flex-col justify-center items-center min-h-screen px-10 lg:px-20 md:px-14'>
      <div className='bg-white rounded-xl max-w-md w-full h-auto'>
        <div className='px-8 py-8'>
          <div className='text-left'>
            <h1 className='text-3xl font-bold text-black'>Welcome Back!</h1>
            <p className='text-gray-500'>Sign in to your account</p>
          </div>
          <div className='flex flex-col justify-center items-center py-6 space-y-2'>
            <form className='w-full' action={handleSubmit}>
              <button className="bg-gray-100 rounded-lg flex items-center w-full p-2 gap-2">
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
              <button className="bg-gray-100 rounded-lg flex items-center w-full p-2 gap-2 mt-4">
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
