import React from 'react'
import Des from './components/description'

export default function Hero() {
    return (
        <div>
            <Des />
            <div className='h-[500px] w-full bg-slate-300'></div>
            <div className='h-[500px] w-full bg-slate-200'></div>
            <div className='h-[500px] w-full bg-slate-400'></div>
        </div>
    )
}
