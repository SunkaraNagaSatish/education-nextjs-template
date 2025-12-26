import LoginSection from "@/component/authentication/LoginSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Vidisha Sign-In Page',
    description: 'Developed by AthenWeb',
}
export default function SignIn() {
    return (
        <Layout>
            <LoginSection />
        </Layout>
    )
}