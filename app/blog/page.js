import AllBlogSection from "@/component/blog/AllBlogSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Our Achievements',
    description: 'Developed by AthenWeb',
}
export default function Blog() {
    return (
        <Layout>
            <AllBlogSection />
        </Layout>
    )
}