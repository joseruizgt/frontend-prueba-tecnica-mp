import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { Fiscalia, Menu, CrearFiscalia, Maps, EditarFiscalia } from "../modules";
import { Footer, Navbar } from "../ui";

//rols 1-usuario normal 2-admin 3-superadmin
//workPosition 1-jefe agencia 2-oficial 3-admin 4-consultas 5-cobros 6-coordinador cobros

export const PrivateRouteContainer = () => {
    return (
        <div className="AltoBody animate__animated animate__fadeIn AltoBody pb-[150px] sm:pb-[72]">
            <Navbar />
            <Routes>
                <Route element={<PrivateRoute rols={[1, 2, 3]} />}>
                    <Route path='/fiscalia' element={<Fiscalia/>} />
                    <Route path='/fiscalia/crear' element={<CrearFiscalia/>} />
                    <Route path='/fiscalia/editar/:id' element={<EditarFiscalia/>} />
                    <Route path='/mapa' element={<Maps/>} />
                    <Route path='/' element={<Menu />} />
                    <Route path="/*" element={<Navigate to='/' />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    )
}
