import ComplexNavbar from "../Components/Home/ComplexNavbar"
import CustomSidebar from "../Components/Home/CustomSidebar"

export default function Home() {

    return (
        <>
            <div className="flex justify-center">
                <ComplexNavbar />
            </div>
            <CustomSidebar />
        </>
    )
}