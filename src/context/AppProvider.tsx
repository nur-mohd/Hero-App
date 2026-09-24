"use client";
import { IApp } from "@/types/apps.type";
import { createContext, useState } from "react";

interface IAppContextType {
    installedApps: IApp[];
    setInstalledApps: React.Dispatch<React.SetStateAction<IApp[]>>;
}


export const AppContext = createContext<IAppContextType>({
    installedApps: [],
    setInstalledApps: () => {}
});

const AppProvider = ({children}: {children: React.ReactNode}) => {
    const [installedApps, setInstalledApps] = useState<IApp[]>([]);
    const sharedData = {
        installedApps,
        setInstalledApps
    }
    return (
        <div>
            <AppContext.Provider value={sharedData}>
                {children}
            </AppContext.Provider>
        </div>
    );
};

export default AppProvider;