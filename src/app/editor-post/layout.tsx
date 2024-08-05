import LayoutBlock from "@/components/layoutBlock/layoutBlock/LayoutBlock";

export default async function EditorPostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LayoutBlock children={children}/>
    );
}