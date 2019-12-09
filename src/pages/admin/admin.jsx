import React,{Component} from 'react'
import {Redirect,Route,Switch}  from 'react-router-dom'  //跳转用
import memoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/index'

const { Header, Footer, Sider, Content } = Layout;
/*
* 管理的路由组件
* */

export default class  Admin extends Component{

    render() {
        //从内存中获取数据
        const user =memoryUtils.user;
        if(!user || !user.id){
            //render()自动跳转到登录
            return <Redirect to={'/login'}/>
        }else{
            return(
                    <Layout style={{height:"100%"}}>
                        <Header style={{ backgroundColor:"blue"}}>Header</Header>
                        <Layout>
                            <Sider>
                                <LeftNav/>
                            </Sider>
                            <Content>
                                <Switch>
                                    {/*<Route path={'/home'} component={Home}></Route>*/}

                                    {/*<Redirect to={'/home'}/>*/}
                                </Switch>
                            </Content>
                        </Layout>
                        <Footer style={{ backgroundColor:"blue"}}>Footer</Footer>
                    </Layout>
            )
        }

    }
}