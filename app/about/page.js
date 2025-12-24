import AboutSection3 from "@/component/about/AboutSection3";
import WorkSection from "@/component/work/WorkSection";

import Layout from "@/component/layout/Layout";
import PopularServiceSection2 from "@/component/service/PopularServiceSection2";
export const metadata = {
    title: 'About Vidisha',
    description: 'Developed by AthenWeb',
}
export default function About() {
    return (
        <Layout>
            <section className="tf__about_us_page mt_195 xs_mt_100">
                <AboutSection3 style='' />
                <PopularServiceSection2 />
                <WorkSection />
            </section>
        </Layout>
    )
}