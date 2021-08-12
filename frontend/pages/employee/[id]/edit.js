import React, { useEffect } from 'react'
import Title from '../../../components/Title'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../../components/Button'
import { MdArrowBack } from 'react-icons/md'
import Input from '../../../components/Input'
import Select from '../../../components/Select'
import { getAll } from '../../../util/fetcher'
import Header from '../../../components/Header'

const EditEmployee = ({ employee }) => {
  const router = useRouter()
  const { data } = getAll(process.env.NEXT_PUBLIC_API + '/role')
  const form = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      birth_date: '',
      //  wage: 0,
      role: ''
    },
    validateOnChange: false,
    onSubmit: async values => {
      await fetch(process.env.NEXT_PUBLIC_API + '/employee/' + employee.id, {
        method: 'PUT',
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
    if (employee && data) {
      form.setFieldValue('name', employee.name)
      form.setFieldValue('lastname', employee.lastname)
      form.setFieldValue('role', employee.role.id)
      form.setFieldValue('birth_date', employee.birth_date)
    }
  }, [data])

  return (
    <div className='container mx-auto px-6 py-8'>
      <Header title='Editar Funcionário' />
      <Title>Atualizar Funcionário</Title>
      <div className='mt-8'></div>
      <Button.LinkOutline href='/employee' Icon={MdArrowBack}>
        Voltar
      </Button.LinkOutline>
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
                value={form.values.role}
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
              <Button type='submit'>Atualizar Funcionário</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const employee = await fetch(
    `${process.env.NEXT_PUBLIC_API}/employee/${context.params.id}`
  ).then(res => res.json())

  return {
    props: {
      employee
    }
  }
}

export default EditEmployee
