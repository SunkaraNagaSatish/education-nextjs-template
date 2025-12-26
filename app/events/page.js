import AllEventSection from "@/component/event/AllEventSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Vidisha ',
    description: 'Developed by AthenWeb',
}
export default function Event() {
    return (
        <Layout>
            <AllEventSection />
        </Layout>
    )
}