import { ChatAltIcon, CogIcon, LogoutIcon, ShoppingCartIcon, TemplateIcon, UserIcon } from "heroicons-react";

export const navLinks = [ 
    {
        id:0,
        title:"Dashboard",
        icon: <TemplateIcon ClassName="nav-icon"/>,
    },

    {
        id:1,
        title:"Market",
        icon: <ShoppingCartIcon ClassName="nav-icon"/>,
    },

    {
        id:2,
        title:"Portfolio",
        icon: <UserIcon ClassName="nav-icon"/>,
    },

    {
        id:3,
        title:"Novidades",
        icon: <ChatAltIcon ClassName="nav-icon"/>,
    },

    {
        id:4,
        title:"Configuracao",
        icon: <CogIcon ClassName="nav-icon"/>,
    },

    {
        id:5,
        title:"sair",
        icon: <LogoutIcon ClassName="nav-icon"/>,
    },
    
];