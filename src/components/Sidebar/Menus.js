// Components
import { useTranslation } from 'react-i18next';
import { useCustomTranslation } from '../Language/useTranslation';

// ICONs
import {BiSolidServer} from "react-icons/bi";
import {FaUserCog, FaToggleOff} from "react-icons/fa";
import {MdPolicy} from "react-icons/md";
import {RiInstallFill, RiDashboardFill, RiLogoutBoxRFill} from "react-icons/ri";
import {IoIosInformationCircle} from "react-icons/io";
import {BsFileEarmarkCheckFill} from "react-icons/bs";
import {MdOutlineLanguage} from "react-icons/md";

const Menus = [
    {
        // DONE
        title: 'Dashboard',
        icon: <RiDashboardFill />,
        spacing: true,
    },
    {
        // DONE
        title: 'Server_Management',
        icon: <BiSolidServer />,
        submenu: true,
        submenuItems: [
            { 
                title: "Server_Management",
                parent: "Server_Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "SMS_Configuration",
                        parent: "Server_Management",
                    },
                    { title: "Email_Configuration"},
                    { title: "Syslog_Servers"},
                    { title: "Brand_Management"},
                    { title: "System_Backup"},
                    { title: "Scheduled_Services"},
                    { title: "SNMP_Settings"},
                    { title: "Resource_Consumption_Notification_Settings"},
                    { title: "NTP_Settings"},
                ],
            },
            { 
                title: "Security",
                parent: "Server_Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Certificates",
                        parent: "Security",
                    },
                    { title: "Login_Policies"},
                    { title: "Password_Complexity_Settings"},
                    { title: "IP_Based_Access_Policies"},
                    { 
                        title: "Authentication_System",
                        parent: "Security",
                        submenu: true,
                        submenuItems: [
                            { 
                                title: "Active_Directory_LDAP",
                                parent: "Authentication_System",
                            },
                            { title: "Radius"},
                            { title: "TACACS"},
                        ],
                    },
                ],
            },
            { 
                title: "Reports",
                parent: "Server_Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Security_Reports",
                        parent: "Reports",
                        submenu: true,
                        submenuItems: [
                            { 
                                title: "Login_Reports",
                                parent: "Security_Reports",
                            },
                            { title: "Blocked_IPs"},
                            { title: "Users_Sessions"},
                        ],
                    },
                    { 
                        title: "System_Reports",
                        parent: "Reports",
                        submenu: true,
                        submenuItems: [
                            { 
                                title: "Registered_Logs",
                                parent: "System_Reports",
                            },
                            { title: "Messages_History"},
                            { title: "Consumption_of_Software_Resources"},
                        ],
                    },
                ],
            },
            { 
                title: "User_Management",
                parent: "Server_Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Users",
                        parent: "User_Management",
                    },
                    { title: "Roles"},
                    { title: "User_Groups"},
                    { title: "Manage_Role_Assignments"},
                ],
            },
        ],
    },
    {
        // DONE
        title: 'Client_Management',
        icon: <FaUserCog />,
        submenu: true,
        submenuItems: [
            { 
                title: "Clients_Management",
                parent: "Client_Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Clients",
                        parent: "Client_Management",
                    },
                    { title: "Group_of_Clients"},
                ],
            },
            { 
                title: "Personel_Management",
                parent: "Client_Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Personel",
                        parent: "Personel_Management",
                    },
                    { title: "Group_of_Personel"},
                    { title: "Recover_Personel_From_AD_LDAP_Servers"},
                ],
            },
            { title: "Organizational_Departments"},
            { title: "Key_Packages"},
        ],
    },
    {
        // DONE
        title: 'Policy_Management',
        icon: <MdPolicy />,
        submenu: true,
        submenuItems: [
            { 
                title: "Printer_Control",
                parent: 'Policy_Management',
            },
            { title: "Pars_Keep_Control"},
            { title: "Internet_Control"},
            { title: "Network_Control"},
            { title: "Hardware_Control"},
            { title: "Document_Control"},
            { title: "Monitoring"},
            { title: "General_Settings_Policy"},
        ],
    },
    {
        // DONE
        title: 'Agent_Management',
        icon: <RiInstallFill />,
        submenu: true,
        submenuItems: [
            { 
                title: "Download_Agent_Installation_File",
                parent: "Agent_Management",
            },
            { title: "Upfate_Agent"},
        ],
    },
    {
        // DONE
        title: 'Basic_Information',
        icon: <IoIosInformationCircle />,
        submenu: true,
        submenuItems: [
            { 
                title: "Web_Address",
                parent: "Basic_Information",
            },
            { title: "Web_Content"},
            { title: "Email_Address"},
            { title: "Hardware"},
            { title: "Document_Packages"},
            { title: "Document_Tagging"},
            { title: "Encryption_Keys"},
        ],
    },
    {
        title: 'File_Access_Requests',
        icon: <BsFileEarmarkCheckFill />,
    },
    {
        title: 'Logout',
        icon: <RiLogoutBoxRFill />,
        spacing: true,
    },
];

export default Menus;