"use client";

import { AppContext } from "@/context/AppProvider";
import { IApp } from "@/types/apps.type";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallAppButton = ({ app }:{app: IApp}) => {
    const { installedApps, setInstalledApps } = useContext(AppContext);

    console.log(installedApps, "installedApps");

    const handleInstall = () => {
        console.log("Install button clicked", app);
        setInstalledApps([...installedApps, app]);
        toast.success(`${app.title} installed successfully!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };
    return (
        <button 
        className="mt-6 rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-focus cursor-pointer" onClick={() => handleInstall()}>
            Install
         </button>
    );
};

export default InstallAppButton;