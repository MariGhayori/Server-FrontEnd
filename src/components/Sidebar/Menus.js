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
        title: 'Server Management',
        icon: <BiSolidServer />,
        submenu: true,
        submenuItems: [
            { 
                title: "Server Management",
                parent: "Server Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "SMS Configuration",
                        parent: "Server Management",
                    },
                    { title: "Email Configuration"},
                    { title: "Syslog Servers"},
                    { title: "Brand Management"},
                    { title: "System Backup"},
                    { title: "Scheduled Services"},
                    { title: "SNMP Settings"},
                    { title: "Resource Consumption Notification Settings"},
                    { title: "NTP Settings"},
                ],
            },
            { 
                title: "Security",
                parent: "Server Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Certificates",
                        parent: "Security",
                    },
                    { title: "Login policies"},
                    { title: "Password Complexity Settings"},
                    { title: "IP-Based Access Policies"},
                    { 
                        title: "Authentication System",
                        parent: "Security",
                        submenu: true,
                        submenuItems: [
                            { 
                                title: "Active-Directory/LDAP",
                                parent: "Authentication System",
                            },
                            { title: "RADIUS"},
                            { title: "TACACS+"},
                        ],
                    },
                ],
            },
            { 
                title: "Reports",
                parent: "Server Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Security Reports",
                        parent: "Reports",
                        submenu: true,
                        submenuItems: [
                            { 
                                title: "Login Reports",
                                parent: "Security Reports",
                            },
                            { title: "Blocked IPs"},
                            { title: "User's Sessions"},
                        ],
                    },
                    { 
                        title: "System Reports",
                        parent: "Reports",
                        submenu: true,
                        submenuItems: [
                            { 
                                title: "Registered Logs",
                                parent: "System Reports",
                            },
                            { title: "Messages History"},
                            { title: "Consumption of Software Resources"},
                        ],
                    },
                ],
            },
            { 
                title: "User Management",
                parent: "Server Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Users",
                        parent: "User Management",
                    },
                    { title: "Roles"},
                    { title: "User Groups"},
                    { title: "Manage Role Assignments"},
                ],
            },
        ],
    },
    {
        // DONE
        title: 'Client Management',
        icon: <FaUserCog />,
        submenu: true,
        submenuItems: [
            { 
                title: "Clients Management",
                parent: "Client Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Clients",
                        parent: "Client Management",
                    },
                    { title: "Group of Clients"},
                ],
            },
            { 
                title: "Personel Management",
                parent: "Client Management",
                submenu: true,
                submenuItems: [
                    { 
                        title: "Personel",
                        parent: "Personel Management",
                    },
                    { title: "Group of Personel"},
                    { title: "Recover Personel from AD/LDAP Servers"},
                ],
            },
            { title: "Organizational Departments"},
            { title: "Key Packages"},
        ],
    },
    {
        // DONE
        title: 'Policy Management',
        icon: <MdPolicy />,
        submenu: true,
        submenuItems: [
            { 
                title: "Printer Control",
                parent: 'Policy Management',
            },
            { title: "Pars Keep Control"},
            { title: "Internet Control"},
            { title: "Network Control"},
            { title: "Hardware Control"},
            { title: "Document Control"},
            { title: "Monitoring"},
            { title: "General settings policy"},
        ],
    },
    {
        // DONE
        title: 'Agent Management',
        icon: <RiInstallFill />,
        submenu: true,
        submenuItems: [
            { 
                title: "Download Agent's Installation File",
                parent: "Agent Management",
            },
            { title: "Update Agent"},
        ],
    },
    {
        // DONE
        title: 'Basic Information',
        icon: <IoIosInformationCircle />,
        submenu: true,
        submenuItems: [
            { 
                title: "Web Address",
                parent: "Basic Information",
            },
            { title: "Web Content"},
            { title: "Email Address"},
            { title: "Hardware"},
            { title: "Document Packages"},
            { title: "Document Tagging"},
            { title: "Encryption Keys"},
        ],
    },
    {
        title: 'File Access Requests',
        icon: <BsFileEarmarkCheckFill />,
    },
    {
        title: 'Logout',
        icon: <RiLogoutBoxRFill />,
        spacing: true,
    },
];

export default Menus;