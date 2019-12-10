import React,{Component} from 'react'
import './index.less'
import logo from '../../assets/images/login-bg.png'
import {Link,withRouter} from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';
import menuList  from'../../config/menuConfig'
/*
* 左侧导航
* */
const { SubMenu } = Menu;

class LeftNav extends Component{

    getMenuNodes_reduce =(menuList) =>{
        const path =this.props.location.pathname;
        return menuList.reduce((pre,item) =>{
            //向pre中添加《》Menu.item 或者  menu.item
            if(!item.children){
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            }else{
                if(item.children.find(cItem => cItem.key === path))
                {
                    this.openKey = item.key
                }
                pre.push((
                    <SubMenu  //商品子菜单
                        key={item.key}
                        title={
                            <span>
                                    <Icon type={item.icon} />
                                    <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes_reduce(item.children)}
                    </SubMenu>
                ))
            }
            return pre;
        },[])
    }

    componentWillMount() {  //第一次render之前，自动调用
        this.menuNodes =this.getMenuNodes_reduce(menuList)
    }

    render() {
        // debugger
        //取得当前请求的路由路径
        const path =this.props.location.pathname;
        console.log("render",path)
        return(
            <div  className={"left-nav"} >
                <Link to="/admin"  className={"left-nav-header"}>
                    <img src={logo} alt={"log"}/>
                    <h1>实验中心</h1>
                </Link>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[this.openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.menuNodes  //获得菜单栏对象
                    }
                </Menu>
            </div>
        )
    }
}

export default withRouter(LeftNav);
