import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";

export const metadata = {
  title: 'Eduor 404 Page',
  description: 'Developed by Azizur Rahman',
}
export default function NotFound() {
  return (
    <Layout>
      <ErrorSection type='Page' />
    </Layout>
  )
}