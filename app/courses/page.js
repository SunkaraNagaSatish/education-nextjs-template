import AllCourseSection from "@/component/course/AllCourseSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Vidisha Courses',
    description: 'Developed by AthenWeb',
}
export default function Courses() {
    return (
        <Layout>
            <AllCourseSection />
        </Layout>
    )
}