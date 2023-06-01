import { Transition } from '@headlessui/react'

export const TransitionPopover = ({ title, children, show, setShow }) => {

    return (
        <Transition
            show={show}
            className='bg-white h-screen w-full fixed top-0 left-0 rounded-t-xl z-40 overflow-auto'
            enter="transition ease-in-out duration-300 transform"
            enterFrom={`translate-y-full`}
            enterTo={`translate-y-0`}
            leave="transition ease-in-out duration-300 transform"
            leaveFrom={`translate-y-0`}
            leaveTo={`translate-y-full`}
        >
            <div className='bg-blue-950 w-full h-12 rounded-t-xl flex items-center justify-between'>
                <h2 className='text-white font-semibold text-xl ml-4 flex flex-wrap'>
                    <img className='w-12 me-2' src="../assets/images/MP_logo_dorado.png" alt="mp" />
                    {title}
                </h2>
                <button
                    className="inline-block p-3 text-center text-white transition rounded-full ripple hover:bg-red-500 focus:outline-none ml-2"
                    onClick={() => setShow(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className='px-8'>
                {children}
            </div>
        </Transition>
    )
}
