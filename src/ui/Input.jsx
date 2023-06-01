export const InputSearch = ({ register, name, position, place = 'Buscar' }) => {
  return (
    <div className={`relative text-gray-600 w-full ${position} px-3`}>
      <input
        {...register(name)}
        id='buscarColaborador'
        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none w-full"
        placeholder={place}
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-5">
        <svg className="text-gray-500 h-5 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
          version="1.1" id="Capa_1" x="0px" y="0px"
          viewBox="0 0 56.966 56.966"
          width="512px" height="512px">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
  )
}

export const InputSelectOption = ({
  dimensionA,
  dimensionB,
  register,
  name,
  req = true,
  designInput,
  array,
}) => {
  return (
    <div className={dimensionA}>
      <div className={dimensionB}>
        <select
          {...register(name)}
          className={designInput}
          name={name}
        >
          <option value="">
            --ninguna opción--
          </option>
          {
            array.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))
          }
        </select>


      </div>
    </div>
  );
};

export const InputText = ({ nameLabel, register, name, message, errors, position = 'md:w-full', Placeholder = 'Informática', disabled = false, requerido = true }) => {

  return (
    <div className={`w-full ${position} px-3 mb-6`}>
      <label className="labelCss">{nameLabel}</label>
      <input
        {...register(name, {
          required: {
            value: requerido,
            message
          },
        })}
        className={`${errors[name] ? 'inputCssError' : 'inputCss'}`} placeholder={Placeholder} type='text' disabled={disabled}
      />
      {errors[name] && <span className='text-red-500'>{errors[name].message}</span>}
    </div>
  )
}

export const InputNumber = ({ nameLabel, register, name, message, errors, position = 'md:w-full', Placeholder = 'Informática', disabled = false, requerido = true }) => {

  return (
    <div className={`w-full ${position} px-3 mb-6`}>
      <label className="labelCss">{nameLabel}</label>
      <input
        {...register(name, {
          pattern: {
            value: /^[0-9]+$/,
            message: 'El campo solo admite números'
          },
          required: {
            value: requerido,
            message
          },
        })}
        className={`${errors[name] ? 'inputCssError' : 'inputCss'}`} placeholder={Placeholder} type='text' disabled={disabled}
      />
      {errors[name] && <span className='text-red-500'>{errors[name].message}</span>}
    </div>
  )
}

export const SelectOption = ({ nameLabel, register, name, message, errors, array, position = 'md:w-full' }) => {
  return (
    <div className={`w-full ${position} px-3 mb-6`}>
      <label className="labelCss" >{nameLabel}</label>
      <select className={`${errors[name] ? 'inputCssError' : 'inputCss'}`} name="id_area"
        {...register(name, {
          required: {
            value: true,
            message: message
          }
        })}
      >
        <option value=''>
          --Ninguna opción--
        </option>
        {
          array.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        }
      </select>
      {errors[name] && <span className='text-red-500'>{errors[name].message}</span>}
    </div>
  )
}

export const TextArea = ({ nameLabel, register, name, position = 'md:w-full', errors }) => {
  return (
    <div className={`w-full ${position} px-3 mb-6`}>
      <label className="labelCss">{nameLabel}</label>
      <textarea placeholder='Descripción' className={`${errors[name] ? 'inputCssError' : 'inputCss'}`}
        {...register(name, {
          required: {
            value: true,
            message: 'La descripción es necesaria'
          }
        })}
      >
      </textarea>
      {errors[name] && <span className='text-red-500'>{errors[name].message}</span>}
    </div>
  )
}


export const InputImage = ({ fileList, setFileList }) => {

  const getFiles = async (newFiles) => {
      let save = [];
      newFiles.forEach(item => {
          let saved = true;
          fileList.forEach(item2 => {
              if (item2.archivo.name === item.name && item2.archivo.size === item.size) {
                  saved = false;
              }
          });
          if (saved) {
              save.push(item);
          }
      });
      return save;
  }

  const uploadFiles = async (event) => {
      const newImages = await getFiles(Array.from(event.target.files));
      let arrayNewImages = [];
      for (let i = 0; i < newImages.length; i++) {
          arrayNewImages.push({ archivo: newImages[i], image: URL.createObjectURL(newImages[i]) });
      }
      setFileList([...fileList, ...arrayNewImages]);
  }

  function deleteImage(index) {
      var hola = [...fileList]
      hola.splice(index, 1)
      setFileList(hola)
  }

  return (
      <>
          <label htmlFor="files" className="mx-3 mb-4 cursor-copy w-full flex flex-wrap items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center z-1">
              <div className='flex flex-col items-center w-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Cargar imagen</h2>
              </div>
              <div className='flex flex-wrap place-content-center w-full'>
                  {
                      fileList.length > 0 ?
                          fileList.map((item, index) =>
                              <div key={index} className='relative w-38 pt-5 pr-5 m-1 cursor-auto z-10'>
                                  <img src={item.image} className="h-28 w-28 border-2 border-black shadow-xl animate__animated animate__bounce" alt='hola' />
                                  <button type="button" className='h-7 w-7 bg-red-500 text-white rounded-full absolute top-0 right-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300' onClick={() => deleteImage(index)}>
                                      x
                                  </button>
                              </div>
                          ) :
                          <p className="mt-2 text-gray-500 tracking-wide">No ha cargado ninguna imagen</p>
                  }
              </div>
              <input type="file" id="files" accept='image/*' onChange={uploadFiles} multiple className="hidden" />
          </label>
      </>
  )

}
