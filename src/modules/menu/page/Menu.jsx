import React, { useEffect, useState } from 'react'
import { InputSearch, InputSelectOption, Pagination, TransitionPopover } from '../../../ui'
import { Card } from '../components';
import { useFiscaliaSlice } from '../../../hooks';
import { useForm } from 'react-hook-form';
import { VerFiscalia } from '../../fiscalia/pages/VerFiscalia';
const GT = require("territory-gt");

export const Menu = () => {

  const [show, setShow] = useState(false);
  const { register, watch } = useForm();
  const [page, setPage] = useState(1);
  const { fiscalias, totalPaginas, obtenerTotalFiscalias, obtenerFiscIndividual } = useFiscaliaSlice();
  let watchItems = watch();

  const fiscaliaIndividual = (id_fiscalia) => {
    obtenerFiscIndividual(id_fiscalia);
    setShow(true);
  }

  useEffect(() => {
    obtenerTotalFiscalias(watchItems.buscador, page, 3, watchItems.departamento);
    // eslint-disable-next-line
  }, [page, watchItems.buscador, watchItems.departamento]);

  useEffect(() => {
    setPage(1);
  }, [watchItems.buscador, watchItems.departamento]);

  return (

    <>
      <div className="md:flex justify-start mt-10 sm:mx-28 ">
        <InputSearch register={register} name="buscador" position='md:w-1/4 md:mb-0 mb-4 text-gray-600 font-semibold' />
        <InputSelectOption
          dimensionA="md:mb-0 mb-4 text-lg "
          dimensionB="flex justify-center"
          name="departamento"
          register={register}
          designInput=" block text-sm py-3 px-4 rounded-xl  w-80 border outline-none bg-gray-50 text-gray-600 font-semibold"
          array={GT.departamentos()}
        />
      </div>

      <div className='sm:mx-20 mx-5 mb-5 flex flex-wrap justify-evenly'>
        {
          fiscalias.map((item, index) => (
            <Card key={index} imagen={item.url_imagen} titulo={item.nombre_fiscalia} direccion={item.direccion} telefono={item.telefono} funcion={() => fiscaliaIndividual(item.id_fiscalia)} />

          ))
        }
        <TransitionPopover title='Detalles' show={show} setShow={setShow} >
          <VerFiscalia />
        </TransitionPopover>
      </div>
      <div className="flex justify-end sm:mx-28 mx-5">
        <Pagination totalPages={totalPaginas} actualPage={page} onChange={(newPage) => setPage(newPage)} />
      </div>
    </>
  )
}
