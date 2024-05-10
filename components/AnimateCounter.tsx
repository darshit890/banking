'use client'
import React from 'react'
import CountUp from 'react-countup/'

const AnimateCounter = ({ amount }: { amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
          end={amount} 
          prefix='$'
          decimal='.'
          decimals={2}
        />
    </div>
  )
}

export default AnimateCounter