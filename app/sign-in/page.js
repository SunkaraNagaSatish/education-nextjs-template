import LoginSection from "@/component/authentication/LoginSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Eduor Sign-In Page',
    description: 'Developed by Azizur Rahman',
}
export default function SignIn() {
    return (
        <Layout>
            <LoginSection />
        </Layout>
    )
}