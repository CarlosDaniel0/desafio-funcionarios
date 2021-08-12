import React, { useEffect } from 'react'
import Title from '../../components/Title'
import Table from '../../components/Table'
import { FaPlus } from 'react-icons/fa'
import { MdToys } from 'react-icons/md'
import Link from 'next/link'
import Button from '../../components/Button'
import Alert from '../../components/Alert'
import { getAll } from '../../util/fetcher'
import { currencyFromBR } from '../../util/convert'
import Header from '../../components/Header'

const Role = () => {
  const { data, mutate } = getAll(process.env.NEXT_PUBLIC_API + '/role')
  const remove = id => async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API + '/role/' + id, {
      method: 'DELETE'
    })
    mutate()
  }

  return (
    <div className='container mx-auto px-6 py-8'>
      <Header title='Cargos' />
      <Title>Gerenciar Cargos</Title>

      <div className='mt-8'></div>
      <Button.Link href='/role/create' Icon={FaPlus}>
        Adicionar Cargo
      </Button.Link>
      <div className='flex flex-col mt-8'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          {!data && (
            <Alert
              Icon={MdToys}
              title='Sem Cargos '
              bgColor='orange-100'
              borderColor='orange-500'
              textColor='orange-700'
            >
              Adicione cargos para vê-los aqui.
            </Alert>
          )}
          {data && data.length > 0 && (
            <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <Table>
                <Table.Head>
                  <Table.Th>Cargo</Table.Th>
                  <Table.Th>Salário</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Head>

                <Table.Body>
                  {data &&
                    data.map(item => {
                      return (
                        <Table.Tr key={item.id}>
                          <Table.Td>
                            <div className='flex items-center'>
                              <div>
                                <div className='text-sm leading-5 font-medium text-gray-900'>
                                  {item.name}
                                </div>
                                <div className='text-sm leading-5 text-gray-500'>
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </Table.Td>

                          <Table.Td>
                            <div className='flex items-center'>
                              <div className='text-sm leading-5 font-medium text-gray-900'>
                                R$ {currencyFromBR(item.wage)}
                              </div>
                            </div>
                          </Table.Td>

                          <Table.Td>
                            <div className='flex items-center'>
                              <div>
                                <Link href={`/role/${item.id}/edit`}>
                                  <a className='text-indigo-600 hover:text-indigo-900'>
                                    Editar
                                  </a>
                                </Link>
                                <div className=''>
                                  <button
                                    onClick={remove(item.id)}
                                    className='text-indigo-600 hover:text-indigo-900'
                                  >
                                    Remover
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Table.Td>
                        </Table.Tr>
                      )
                    })}
                </Table.Body>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Role
