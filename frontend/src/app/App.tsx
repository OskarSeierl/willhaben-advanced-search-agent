import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {ProtectedRoute} from '../components/guards/ProtectedRoute.tsx';
import Welcome from './routes/Welcome.tsx';
import Home from './routes/Home.tsx';
import {AuthProvider} from "../context/AuthProvider.tsx";
import {InfoProvider} from "../context/InfoProvider.tsx";
import {MainLayout} from "../components/layouts/MainLayout.tsx";
import {SmallCenterLayout} from "../components/layouts/SmallCenterLayout.tsx";
import Profile from './routes/Profile.tsx';

function App() {
    return (
        <Router>
            <InfoProvider>
                <AuthProvider>
                    <Routes>
                        <Route element={<SmallCenterLayout/>}>
                            <Route path="/welcome" element={<Welcome />} />
                        </Route>
                        <Route element={<MainLayout/>}>
                            <Route element={<ProtectedRoute/>}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                            </Route>
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace/>}/>
                    </Routes>
                </AuthProvider>
            </InfoProvider>
        </Router>
    );
}

export default App;
