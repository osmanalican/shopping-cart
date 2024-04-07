import { Header } from "antd/es/layout/layout";
import {Button, Menu} from "antd";
import { Link } from "react-router-dom";
import {ShoppingCartOutlined} from "@ant-design/icons";

export function Navbar() {
    const items1 = [
        { key: 'home', label: 'Home', link: '/' },
        { key: 'store', label: 'Store', link: '/store' },
        { key: 'about', label: 'About', link: '/about' }
    ];

    return (
        <Header className={"bg-white shadow sticky top-0"} style={{ display: 'flex', alignItems: 'center' }}>
            {/*//for the logo*/}
            <div className="demo-logo" />
            <Menu
                className={"bg-white me-auto"}
                mode="horizontal"
                defaultSelectedKeys={['home']}
                style={{ flex: 1, minWidth: 0 }}
            >
                {items1.map(item => (
                    <Menu.Item key={item.key}>
                        <Link className={"text-2xl"} to={item.link}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
            <Button className={"h-14 w-14 border border-sky-600 flex justify-center items-center rounded-full relative"}>
                <ShoppingCartOutlined  className={"text-center text-sky-600 text-2xl"} />
                <div className={"flex items-center justify-center absolute w-6 h-6 -bottom-1 -right-1 bg-sky-600 text-white text-sm font-semibold rounded-full"}>7</div>
            </Button>
        </Header>
    );
}
