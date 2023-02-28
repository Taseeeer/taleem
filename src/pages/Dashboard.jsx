import DashboardLayout from "../components/layout/dashboard-layout";
import DashboardHome from '../components/dashboard/dashboard-home';

export default function Dashboard({ children }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}