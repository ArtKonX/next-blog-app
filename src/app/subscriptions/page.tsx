import SubscriptionsContainer from "@/components/subscriptions/SubscriptionContainer"

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Subscriptions',
}

export default function SubscriptionsPage() {

    return (
        <div>
            <SubscriptionsContainer />
        </div>
    )
}
