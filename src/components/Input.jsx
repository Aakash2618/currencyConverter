import React from 'react'

export default function Input({currencies=[],currencyType,inputype,converter,amount,onAmountChange,onCurrencyChange,disable}) {
  // console.log(from)
  return (
    <div style={{height:"35%"}} className="w-full rounded-xl bg-white p-5 flex flex-column">
        <div className="h-full w-1/2 flex flex-col justify-between">
            <label htmlFor="" className='text-xl text-gray-500'>{inputype}</label>
            <input type="number" className='border-0 outline-none text-2xl py-2' disabled={!disable} value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
        </div>
        <div className="h-full w-1/2 flex flex-col justify-between relative">
            <label htmlFor="" className='text-xl absolute right-0 text-gray-500'>Currency Type</label>
            <select name="currency" id="selectCurrency" value={currencyType} onChange={(e)=>onCurrencyChange(e.target.value)} className='absolute bottom-0 right-0 px-1 py-1.5 text-xl font-medium outline-none border-0 rounded-md bg-gray-100'>
              {currencies.map((value)=>{
                return (<option key={value} value={value}>{value}</option>)
              })}
            </select>
        </div>
    </div>
  )
}
