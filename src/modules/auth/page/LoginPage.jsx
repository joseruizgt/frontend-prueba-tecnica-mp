import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InputLogin } from '../components';
import { useEffect, useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useAuthSlice } from '../../../hooks';
import { Loader } from '../../../ui';

export const LoginPage = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [hidden, setHidden] = useState(true);
  const { token, inicioSesion, loading } = useAuthSlice();

  const handleClick = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    if (token !== null) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [token])


  return (
    <div className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat bg-[url('https://www.mp.gob.gt/wp-content/uploads/2020/09/portada-5.jpeg')]">
      {loading && <Loader/>}
      <div className="rounded-xl bg-white bg-opacity-60 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="mb-8 flex flex-col items-center">
          <img src="../assets/images/MP_logo.png" width="150" alt="mp" />
          <h1 className="mt-2 text-2xl text-blue-900 font-bold">Fiscalías en Guatemala</h1>
        </div>
        <form onSubmit={handleSubmit((data) => inicioSesion(data))}>
          <InputLogin
            principalDesign='text-lg'
            register={register}
            name='usuario'
            inputDesign='rounded-3xl border-none bg-white px-6 py-2 text-center text-blue-900 font-semibold placeholder-blue-900 placeholder-opacity-50 placeholder:font-semibold shadow-lg outline-none backdrop-blur-md focus:ring '
            placeholder='@Joseruiz'
            errors={errors}
          />
          <div className='space-y-2 relative '>
            <InputLogin
              principalDesign='text-lg'
              register={register}
              name='contrasenia'
              inputDesign='rounded-3xl border-none bg-white px-6 py-2 text-center text-blue-900 font-semibold placeholder-blue-900 placeholder-opacity-50 placeholder:font-semibold shadow-lg outline-none backdrop-blur-md focus:ring '
              inputType={`${hidden ? 'Password' : 'text'}`}
              placeholder='********'
              errors={errors}
            />
            {hidden ? <EyeIcon onClick={handleClick} className="absolute right-3 top-0.5 cursor-pointer h-6 w-6 text-blue-900" /> : <EyeOffIcon onClick={handleClick} className="absolute right-3 top-0.5 cursor-pointer h-6 w-6 text-blue-900" />}
          </div>
          <div className="mt-8 flex justify-center text-lg text-black">
            <button type="submit" className="rounded-3xl bg-blue-900  px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-950">Iniciar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
