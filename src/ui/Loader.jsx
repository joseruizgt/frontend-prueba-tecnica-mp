import './Loader.css';

export const Loader = () => {
    return (
        <div className={'absolute z-50 top-0 left-0 bg-black w-full h-full flex items-center justify-center opacity-40 '}>
            <div className="lds-dual-ring"></div>
        </div>
    )
}
