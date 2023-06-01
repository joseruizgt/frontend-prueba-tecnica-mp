import { Route, Routes, } from "react-router-dom";
import { LoginPage } from "../modules";
import { PrivateRouteContainer } from "./PrivateRoutesContainer";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRouteContainer />
                } />

            </Routes>
        </>
    )
}
