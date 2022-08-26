/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FunctionComponent } from 'react'
import { useFormspark } from '@formspark/use-formspark'
import { useForm } from 'react-hook-form'
import z from 'zod'

export type SubmitContactForm = z.TypeOf<typeof submitContactForm>

export const submitContactForm = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(10)
})

const ContactForm: FunctionComponent = () => {
  const { handleSubmit, register, formState: { errors, isSubmitted }, resetField } = useForm<SubmitContactForm>()
  const [submit, submitting] = useFormspark({
    formId: 'SdhXPyCc'
  })

  const onSubmit = (values: SubmitContactForm): void => {
    submit(values)
      .catch((err) => console.log(err))
    resetField('name')
    resetField('email')
    resetField('message')
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)} className='flex grow flex-col gap-4 text-p-mobile md:text-p'>
      <div className='flex flex-col'>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...register('name', { required: true })} className={`h-12 rounded-lg border-4 border-secondary bg-black-75 p-1 text-white focus:outline-none ${(errors.name != null) ? 'border-error' : ''}`}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" {...register('email', { required: true })} className={`h-12 rounded-lg border-4 border-secondary bg-black-75 p-1 text-white focus:outline-none ${(errors.email != null) ? 'border-error' : ''}`}/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="message">Message</label>
        <textarea id="message" cols={30} rows={7} {...register('message', { required: true })} className={`rounded-lg border-4 border-secondary bg-black-75 p-1 text-white focus:outline-none ${(errors.message != null) ? 'border-error' : ''}`}></textarea>
      </div>
      <input type="submit" className={`h-12 w-1/2 self-end rounded-lg border-4 border-secondary bg-black-75 p-1 text-white transition-all duration-200 hover:cursor-pointer hover:text-secondary active:bg-black-5 active:text-black-100 active:outline-none ${isSubmitted ? 'border-green-500' : ''}`} value='Send'/>
    </form>
  )
}

export default ContactForm
