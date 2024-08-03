import TagsMenu from "@/components/tags/TagsMenu/TagsMenu";

import Footer from "@/components/footer/Footer";

import HeaderContainer from "@/components/header/HeaderContainer";

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container">
            <div className="wrapper">
                <HeaderContainer />
                <TagsMenu />
                {children}
                <Footer />
            </div>
        </div>
    );
}