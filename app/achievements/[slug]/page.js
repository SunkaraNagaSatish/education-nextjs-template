import BlogDetailSection from "@/component/blog/BlogDetailSection";
import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";
import { blogData } from "@/data/Data";
export const metadata = {
    title: 'Achievement Details',
    description: 'Developed by AthenWeb',
}
export default function AchievementDetails({ params }) {
    const { slug } = params;
    const blogDesc = blogData.find((item) => item.slug === slug);
    return (
        <Layout>
            {blogDesc ? (
                <BlogDetailSection blogDesc={blogDesc} />
            ) : (
                <ErrorSection type='Achievement' />
            )}
        </Layout>
    )
}
