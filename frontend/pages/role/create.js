import React from 'react'
import Title from '../../components/Title'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import { MdArrowBack } from 'react-icons/md'
import Input from '../../components/Input'
import Header from '../../components/Header'

const CreateRole = () => {
  const router = useRouter()
  const form = useFormik({
    initialValues: {
      name: '',
      wage: '',
      description: ''
    },
    validateOnChange: false,
    onSubmit: async values => {
      await fetch(process.env.NEXT_PUBLIC_API + '/role', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(values)
      })
      router.push('/role')
    },
    validate: (values, props) => {
      const erros = {}
      if (values.name == '') erros.name = 'Digite um Nome para o Cargo'
      if (values.wage == 0 || values.wage < 1100)
        erros.wage = 'Digite um valor de sálario válido'
      if (values.description == '')
        erros.description = 'Digite uma descrição para o Cargo'
      return erros
    }
  })

  return (
    <div className='container mx-auto px-6 py-8'>
      <Header title='Adicionar Cargo' />
      <Title>Adicionar Novo Cargo</Title>
      <div className='mt-8'></div>
      <Button.LinkOutline href='/role' Icon={MdArrowBack}>
        Voltar
      </Button.LinkOutline>
      {/* <pre>{JSON.stringify(form.values, null, 2)}</pre> */}
      <div className='flex flex-col mt-8'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='bg-white p-8 align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
            <form onSubmit={form.handleSubmit}>
              <Input
                label='Nome'
                type='text'
                name='name'
                placeholder='Auxiliar de Escritório'
                onChange={form.handleChange}
                value={form.values.name}
                tip={form.errors.name}
              />
              <Input
                label='Salário'
                type='number'
                name='wage'
                placeholder='1.500'
                min='0'
                step='0.01'
                onChange={form.handleChange}
                value={form.values.wage}
                tip={form.errors.wage}
              />
              <Input
                label='Descrição'
                type='text'
                name='description'
                placeholder='Atua na área corporativa para auxiliar os...'
                onChange={form.handleChange}
                value={form.values.description}
                tip={form.errors.description}
              />
              <Button type='submit'>Adicionar Cargo</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateRole
