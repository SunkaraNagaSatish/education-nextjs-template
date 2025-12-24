import WhatWeOfferSection from "@/component/what-we-offer/WhatWeOfferSection";
import Layout from "@/component/layout/Layout";

export const metadata = {
    title: 'What We Offer - Vidisha Junior College',
    description: 'Comprehensive programs, infrastructure, and support at Vidisha Junior College',
}

export default function WhatWeOffer() {
    return (
        <Layout>
            <WhatWeOfferSection />
        </Layout>
    )
}
