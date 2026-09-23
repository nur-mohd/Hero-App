import { IApp } from "@/types/apps.type";
import AppCard from "../shared/AppCard";

const getAllApp = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}

const TrendingApp = async () => {
    const data = await getAllApp();
    console.log(data);
    return (
        <div className="my-[60px] container mx-auto">
            <div className="space-y-2 mx-auto max-w-[400px] text-center">
                <h2 className="text-2xl font-bold text-[#001931]">Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                data.slice(0,8).map((app:IApp, ind:number) => {
                    return (
                       <AppCard app={app} key={ind}/>
                    )
                })
            }
            </div>
                            
        </div>
    );
};

export default TrendingApp;