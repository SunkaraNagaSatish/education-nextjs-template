import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";

export const metadata = {
  title: 'Vidisha',
  description: 'Developed by AthenWeb',
}
export default function NotFound() {
  return (
    <Layout>
      <ErrorSection type='Page' />
    </Layout>
  )
}