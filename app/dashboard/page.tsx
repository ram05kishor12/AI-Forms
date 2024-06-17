"use client";
import React from 'react'
import Formgenerator from '../formgenerator/page'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import router from 'next/router';


export default function () {
  const { data: session, status } = useSession();
  if(status === 'loading') return <div>Loading...</div>;
  if (!session) 
  return (
    <div className=''> 
    <Link href="/signin">
     <Button>
        Sigin
    </Button> 
    </Link>
    </div>
    ) ;
    
  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen'>
        <Formgenerator />
    </div>
  )
}
