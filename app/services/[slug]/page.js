import ServiceDetailSection from "@/component/services/ServiceDetailSection";
import Layout from "@/component/layout/Layout";
import { services } from "@/data/Data";

export async function generateMetadata({ params }) {
    const service = services.find(s => s.slug === params.slug);
    return {
        title: `${service?.title || 'Service'} - Vidisha Junior College`,
        description: service?.desc || 'Vidisha Junior College Services',
    }
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetail({ params }) {
    const service = services.find(s => s.slug === params.slug);

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <Layout>
            <ServiceDetailSection slug={params.slug} />
        </Layout>
    )
}
