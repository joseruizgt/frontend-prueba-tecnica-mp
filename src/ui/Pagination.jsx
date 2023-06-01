import { useEffect, useState } from 'react'

export const Pagination = ({ actualPage, totalPages, onChange }) => {
    const [linkList, setLinkList] = useState([]);
    let radio = 1;

    useEffect(() => {
        //verificacion para saber si la pagina anterior esta habilitada
        const previousPageEnabled = actualPage !== 1;
        const previousPage = actualPage - 1;
        const links = [];

        links.push({
            page: previousPage,
            enabled: previousPageEnabled,
            text: 'Anterior',
            active: false
        });

        // pushea los datos de la pagina actual al arreglo links
        for (let i = 1; i <= totalPages; i++) {
            if (i >= actualPage - radio && i <= actualPage + radio) {
                links.push({
                    page: i,
                    enabled: true,
                    text: `${i}`,
                    active: actualPage === i
                });
            }
        }

        //verificacion para saber si la pagina siguiente esta habilida
        const nextPageEnabled = actualPage !== totalPages && totalPages > 0;
        const nextPage = actualPage + 1;

        links.push({
            page: nextPage,
            enabled: nextPageEnabled,
            text: 'Siguiente',
            active: false
        });

        setLinkList(links);
        // eslint-disable-next-line
    }, [actualPage, totalPages]);

    function getClassCSS(link) {
        if (link.active) {
            return 'bg-blue-200 rounded-2xl text-black'
        }
        if (!link.enabled) {
            return 'hidden'
        }
        return 'pointer'
    }

    function selectPage(link) {
        if (link.page === actualPage) {
            return;
        }
        if (!link.enabled) {
            return;
        }
        onChange(link.page);
    }

    return (
        <nav>
            <ul className='inline-flex intems-center -space-x-px'>
                {
                    linkList.map(link =>
                        <li className={`${getClassCSS(link)}`} key={link.text} onClick={() => selectPage(link)}>
                            <button className={`py-2 px-3 rounded-2xl leading-tight text-gray-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${getClassCSS(link)}`}>
                                {link.text}
                            </button>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}
