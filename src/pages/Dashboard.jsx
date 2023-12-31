import { Button } from "@mui/material";
import { logout } from "../config/firebase";

const Dashboard = () => {

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Dashboard (Ruta Protegida</h1>
            <Button variant="contained"
            onClick={handleLogout}
            >Logout Material UI</Button>

            {/* <button onClick={handleLogout}>Logout</button> */}
        </>
    );
};

export default Dashboard;
