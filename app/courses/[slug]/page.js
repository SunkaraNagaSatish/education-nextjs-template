import Layout from "@/component/layout/Layout";
import CourseDetailSection from "@/component/course/CourseDetailSection";
import { courseDataArray } from "@/data/Data";
import ErrorSection from "@/component/error/ErrorSection";
export const metadata = {
  title: "Vidisha Course Details",
  description: "Developed by AthenWeb",
};
export default function CourseDetails({ params }) {
  const { slug } = params; // Destructure 'slug' from 'params'
  const courseDesc = courseDataArray.find((item) => item.slug === slug); // Use 'slug' here
  return (
    <Layout>
      {courseDesc ? (
        <CourseDetailSection courseData={courseDesc} />
      ) : (
        <ErrorSection type="Course" />
      )}
    </Layout>
  );
}
