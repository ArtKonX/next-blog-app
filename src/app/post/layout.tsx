import LayoutBlock from "@/components/layoutBlock/layoutBlock/LayoutBlock";

export default async function PostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LayoutBlock children={children}/>
    );
}