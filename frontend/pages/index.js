import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Alert from '../components/Alert'
import { MdInfo, MdPerson, MdWork } from 'react-icons/md'
import Header from '../components/Header'

const Index = ({ employees, roles }) => {
  return (
    <div className='container mx-auto px-6 py-8'>
      <Header title='Início' />
      <Title>Painel de Controle</Title>

      <div className='mt-4'>
        <div className='flex flex-wrap -mx-6'>
          <Card>
            <Card.Icon color='indigo-600'>
              <MdPerson className='text-white text-3xl' />
            </Card.Icon>
            <Card.Data>
              <Card.Title>{employees}</Card.Title>
              <Card.Description>Total de Funcionários</Card.Description>
            </Card.Data>
          </Card>

          <Card>
            <Card.Icon color='orange-600'>
              <MdWork className='text-white text-3xl' />
            </Card.Icon>
            <Card.Data>
              <Card.Title>{roles}</Card.Title>
              <Card.Description>Total de Cargos</Card.Description>
            </Card.Data>
          </Card>
        </div>
      </div>

      <div className='mt-8'></div>

      <div className='flex flex-col mt-8'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <Alert
            Icon={MdInfo}
            title='Aviso '
            bgColor='green-100'
            borderColor='green-500'
            textColor='green-700'
          >
            Clique nos itens ao lado (
            <i>
              <MdPerson className='inline-block' /> Funcionários
            </i>{' '}
            ou{' '}
            <i>
              <MdWork className='inline-block' /> Cargos
            </i>
            ) para vizualizar-los.
          </Alert>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let employees = []
  let roles = []
  try {
    employees = await fetch(
      process.env.NEXT_PUBLIC_API + '/employee/count'
    ).then(res => res.json())
    roles = await fetch(process.env.NEXT_PUBLIC_API + '/role/count').then(res =>
      res.json()
    )
  } catch (err) {
    console.log('Erro ao requisitar a API')
  }

  return {
    props: {
      employees,
      roles
    }
  }
}

export default Index
