import RegisterSection from "@/component/authentication/RegisterSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Vidisha Sign-Up Page',
    description: 'Developed by AthenWeb',
}
export default function SignUp() {
    return (
        <Layout>
            <RegisterSection />
        </Layout>
    )
}