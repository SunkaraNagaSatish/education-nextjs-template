import RegisterSection from "@/component/authentication/RegisterSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Eduor Sign-Up Page',
    description: 'Developed by Azizur Rahman',
}
export default function SignUp() {
    return (
        <Layout>
            <RegisterSection />
        </Layout>
    )
}