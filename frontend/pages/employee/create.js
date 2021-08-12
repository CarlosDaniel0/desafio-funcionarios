import React, { useEffect } from 'react'
import Title from '../../components/Title'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import { MdArrowBack } from 'react-icons/md'
import Input from '../../components/Input'
import Select from '../../components/Select'
import { getAll } from '../../util/fetcher'
import Header from '../../components/Header'

const CreateEmployee = () => {
  const router = useRouter()
  const { data } = getAll(process.env.NEXT_PUBLIC_API + '/role')
  const form = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      birth_date: '',
      // wage: '',
      role: ''
    },
    validateOnChange: false,
    onSubmit: async values => {
      await fetch(process.env.NEXT_PUBLIC_API + '/employee', {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(values)
      })
      router.push('/employee')
    },
    validate: (values, props) => {
      const erros = {}
      if (values.name == '') erros.name = 'Digite um Nome'
      if (values.lastname == '') erros.lastname = 'Digite um Sobrenome'

      const [year, month, day] = values.birth_date.split('-')
      const currentDate = new Date()
      if (year < 1900 || year > currentDate.getFullYear())
        erros.birth_date = 'Data de nascimento inválida'
      return erros
    }
  })
  useEffect(() => {
    if (data) form.values.role = data[0].id
  }, [form.values.name])

  return (
    <div className='container mx-auto px-6 py-8'>
      <Header title='Adicionar Empregado' />
      <Title>Adicionar Novo Funcionário</Title>
      <div className='mt-8'></div>
      <Button.LinkOutline href='/employee' Icon={MdArrowBack}>
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
                placeholder='Raimundo'
                onChange={form.handleChange}
                value={form.values.name}
                tip={form.errors.name}
              />
              <Input
                label='Sobrenome'
                type='text'
                name='lastname'
                placeholder='Santiago'
                onChange={form.handleChange}
                value={form.values.lastname}
                tip={form.errors.lastname}
              />
              <Input
                label='Data de Nascimento'
                type='date'
                name='birth_date'
                onChange={form.handleChange}
                value={form.values.birth_date}
                tip={form.errors.birth_date}
              />
              <Select
                label='Selecionar Cargo'
                name='role'
                onChange={form.handleChange}
              >
                {!data && (
                  <Select.Option id='loading'>Carregando...</Select.Option>
                )}
                {data &&
                  data.map(item => {
                    return (
                      <Select.Option id={item.id}>{item.name}</Select.Option>
                    )
                  })}
              </Select>
              <Button type='submit'>Adicionar Funcionário</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEmployee
