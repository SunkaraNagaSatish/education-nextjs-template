import AllEventSection from "@/component/event/AllEventSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Eduor Events Page',
    description: 'Developed by Azizur Rahman',
}
export default function Event() {
    return (
        <Layout>
            <AllEventSection />
        </Layout>
    )
}