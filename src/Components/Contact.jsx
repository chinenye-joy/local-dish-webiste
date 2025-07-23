import { useState } from "react"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
const {name, value} = e.currentTarget
setFormData({...formData,[name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefualt;
        alert(`Thank you ${formData.name}, we will get back to you soon!`)
    }
  return (
   <section id='contact' className='py-12 bg-gray-100'>
    <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Contact Us</h2>
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='w-full p-6 rounded shadow-md max-w-lg bg-white' >
                <div className='mb-4'>
                    <label htmlFor="name" className='block text-gray-700 font-semibold'>Name</label>
                    <input type="text" value={formData.name} onChange={handleChange} name="name" placeholder='Your name' id='name'className='border border-gray-300 w-full p-2 mt-2 outline-none'/>
                </div>
                 <div className='mb-4'>
                    <label htmlFor="email" className='block text-gray-700 font-semibold'>Email</label>
                    <input type="email" value={formData.email} onChange={handleChange} name="email"  placeholder='Your email' id='email'className='border border-gray-300 w-full p-2 mt-2 outline-none'/>
                </div>
                 <div className='mb-4'>
                    <label htmlFor="message" className='block text-gray-700 font-semibold'>Message</label>
                    <textarea type="message" value={formData.message} onChange={handleChange}  name="message" placeholder='Leave a message' id='message'className='border border-gray-300 w-full p-2 mt-2 outline-none'/>
                </div>
                <button className='bg-emerald-700 text-white w-full py-3 rounded mt-2 hover:bg-emerald-800'>Send a message</button>
            </form>
        </div>
    </div>
   </section>
  )
}

export default Contact