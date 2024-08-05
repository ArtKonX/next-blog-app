import LayoutAdvancedBlock from "@/components/layoutBlock/layoutBlock/layoutAdvancedBlock/LayoutAdvancedBlock";

export default async function PostsHiddenLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LayoutAdvancedBlock children={children}/>
    );
}