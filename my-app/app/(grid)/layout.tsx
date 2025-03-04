import GridContainer from "../Components/defaults/GridContainer";
import SideBar from "../Components/nav/SideBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="background grid h-screen">
            <GridContainer cols={12}>
                <SideBar />
                <div className="col-span-full lg:col-span-10">{children}</div>
            </GridContainer >
        </main>

    );
}
