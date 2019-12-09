import  React,{Component} from 'react'
import { Menu, Icon, Button } from 'antd';
import logo from '../../assets/images/login-bg.png'
import {Link} from "react-router-dom"
import './index.less'
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

export default class LeftNav extends Component{

    //生成导航栏
    // title: '实验室课表',
    //         key: '/schedule',
    //         icon: 'table',
    //         children: [
    getMenuNodes_map =(menuList) =>{
        return menuList.map(item =>{
            if(!item.children){
                return(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                    )
            }else{
                return (
                    <SubMenu  //商品子菜单
                        key={item.key}
                        title={
                            <span>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes_map(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    render(){
        return(
            <div className={'left-nav'} style={{ width: '100%' }}>
                <Link to="/admin"  className={"left-nav-header"}>
                    <img src={logo} alt={"log"}/>
                    <h1>操作界面</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.getMenuNodes_map(menuList)
                    }
                </Menu>
            </div>
        )
    }
}