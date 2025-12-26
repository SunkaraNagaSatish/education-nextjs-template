import AllFaqSection from "@/component/faq/AllFaqSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Vidisha FAQ',
    description: 'Developed by AthenWeb',
}
export default function Faq() {
    return (
        <Layout>
            <AllFaqSection />
        </Layout>
    )
}