import React from "react";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const pageRoutes = () => {
    return[
        {
            link:"/home",
            icon :  <DesktopOutlined/>,
            name : "Home"
        },
        {
            link:"/content",
            icon : <FileOutlined />,
            name : "Content"
        },
        {
            link:"/about",
            icon : <UserOutlined />,
            name : "About"
        }
    ]
}


export default pageRoutes();