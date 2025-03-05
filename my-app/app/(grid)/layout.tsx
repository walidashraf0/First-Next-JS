import ButtonGradient from "../Components/ButtonGradient";
import GridContainer from "../Components/defaults/GridContainer";
import MaxWidthWrapper from "../Components/defaults/MaxWidthWrapper";
import NavBar from "../Components/nav/NavBar";
import SideBar from "../Components/nav/SideBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="background grid h-screen">
            <ButtonGradient />
            <GridContainer cols={12}>
                <SideBar />
                <MaxWidthWrapper className="col-span-full lg:col-span-10">
                    <NavBar />
                    {children}
                </MaxWidthWrapper>
            </GridContainer >
        </main>

    );
}
