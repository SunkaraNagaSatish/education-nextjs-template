import Layout from "@/component/layout/Layout";
import AchievementsGallery from "@/component/achievements/AchievementsGallery";
import '@/public/css/achievements-gallery.css';

export const metadata = {
    title: 'Our Achievements',
    description: 'Developed by AthenWeb',
}
export default function Achievements() {
    return (
        <Layout>
            <AchievementsGallery />
        </Layout>
    )
}
