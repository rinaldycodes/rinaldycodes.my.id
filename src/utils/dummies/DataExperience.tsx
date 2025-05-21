import { MyImages } from "../constants/MyImages";
import MyFunctions from "../MyFunctions";

export const DataExperience = [
    {
        company_id: MyFunctions.generateUUID(),
        company_name: "PT. CITRA VAN TITIPAN KILAT (TIKI)",
        is_show_year_work: true,
        start_year_work: "2021",
        end_year_work: "Present",
        position: "Software Engineer",
        company_photo: require('@/assets/images/logo-tiki.jpg')
    },
    {
        company_id: MyFunctions.generateUUID(),
        company_name: "Personal Project",
        is_show_year_work: false,
        start_year_work: "2021",
        end_year_work: "Present",
        position: "Attendance App",
        company_photo: MyImages.project,
    }
];