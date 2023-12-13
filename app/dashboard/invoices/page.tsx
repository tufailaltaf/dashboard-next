'use client'
import {get_response} from '@/actions/response'
export default function Invoices() {
  
const {data} = get_response(`/api/get_invoices`)
  //const data = await getData()
  console.log(data)
  return <main>
    <h1>Invoice: </h1>
    {data?.map((invoice:any) => (
      <div key={invoice.id} className='py-4'>
        <h2><span className='font-bold'>Customer ID:</span> {invoice.customer_id}</h2>
        <p><span className='font-bold'>Amount:</span> {invoice.amount}</p>
        <p><span className='font-bold'>Date:</span> {invoice.date}</p>
        <p><span className='font-bold'>Status:</span> {invoice.status}</p>
      </div>
    ))}
  </main>
}