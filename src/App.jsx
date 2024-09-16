import { useState } from 'react'
import  {currencyInfo}  from './hooks/useCurrencyInfo'
import Input from './components/Input'



function App() {
  // const [currencies,setCurrencies]=useState([])
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')
  const [amount,setAmount]=useState(50)
  const [changedAmount,setChangedAmount]=useState(0)
  const [enable,setEnable]=useState()
  const [disable,setDisable]=useState(true)
  const switchComponent=()=>{
    setTo(from);
    setFrom(to)
    setChangedAmount(amount)
    setAmout(changedAmount)
  }
  let data=currencyInfo(from)
 let keys=data?Object.keys(data):[];
 const converter=(amount)=>{
  console.log(amount)
    let changed=data[to]*amount;
    setChangedAmount(changed)
    console.log(changedAmount)
 }
  const imgUrl="https://images.pexels.com/photos/27927537/pexels-photo-27927537/free-photo-of-estrellas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  return (
    <>
      <div style={{background:`url(${imgUrl})`,backgroundSize:"cover",backgroundPosition: "center",backgroundRepeat: "no-repeat"}} className="bg-blue-400 flex justify-center items-center h-screen w-screen filter-none relative">
        <div style={{backgroundColor: "rgba(255, 255, 255, 0.25)",overflow:"hidden"}} className="flex border-2 p-5 flex-row h-3/4 w-1/2 flex-wrap items-center rounded-xl">
          <Input 
            currencies={keys} 
            currencyType={from} 
            inputype="From"
            converter={converter} amount={amount} setAmount={setAmount}
            onAmountChange={(amt=>setAmount(amt))}
            onCurrencyChange={(currency)=>setFrom(currency)}
            disable={disable}

          />
          <Input 
            currencies={keys} 
            currencyType={to} 
            inputype="To" 
            converter={converter} 
            amount={changedAmount} 
            setAmount={setChangedAmount}
            onAmountChange={(changedAmount=>setChangedAmount(changedAmount))}
            disable={!disable}

          />
            <div style={{height:"20%"}} className="w-full rounded-xl flex flex-column border-2">
              <button className='outline-none h-full w-full align-center border-none hover:bg-blue-700 rounded-xl bg-blue-600 text-white text-xl font-medium' onClick={()=>converter(amount)}>Convert Usd to Inr</button>
          </div>
          
        </div>
        <button style={{backgroundColor:"rgb(69 66 66)" ,top:'39%',':hover':{backgroundColor:"blue"}}} className='absolute left-5/4 outline-none border-0 border-gray-400 text-lg font-medium text-white py-1 px-2 rounded-lg' onClick={switchComponent}>Switch</button>
      </div>
    </>
  )
}

export default App
