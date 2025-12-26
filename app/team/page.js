import Layout from "@/component/layout/Layout";
import AllTeamMemberSection from "@/component/team/AllTeamMemberSection";
export const metadata = {
    title: 'Vidisha',
    description: 'Developed by AthenWeb',
}
export default function Team() {
    return (
        <Layout>
            <AllTeamMemberSection />
        </Layout>
    )
}