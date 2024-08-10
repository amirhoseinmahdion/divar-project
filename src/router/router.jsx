import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/homepage";
import Dashboardpage from "../pages/dashboardpage";
import Adminpage from "../pages/adminpage";
import NotFoundPage from "../pages/404";
import AuthPage from "../pages/authpage";
import { useQuery } from "react-query";
import { getUser } from "../services/user";
import Loadnig from "../components/module/loading";
import DetailPost from "../components/module/deatailpost";




const RouterPage = () => {


    const { data, isLoading } = useQuery(["Get-User"], getUser)
    if (isLoading) return <Loadnig />
    return (
        <div style={{ minHeight: "100vh" }}>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/dashboard" element={data ? <Dashboardpage /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={data ? <Navigate to="/dashboard" /> : <AuthPage />} />
                <Route path="/admin" element={data && data?.data?.role === "ADMIN" ? <Adminpage /> : <Navigate to="/" />} />
                <Route path="/:id" element={<DetailPost />} />
                <Route path="/by-category-slug/:slug" element={<Homepage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default RouterPage;