import React,{Component} from 'react'
import {Redirect,Route,Switch}  from 'react-router-dom'  //跳转用
import memoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/index'

import QuerySchedule from '../schedule/querySchedule/querySchedule'
import TodaySchedule from '../schedule/todaySchedule/todaySchedule'
import WeekSchedule from '../schedule/weekSchedule/weekSchedule'

import CourseManageAdmin from '../course/courseManage-admin/courseManage-admin'
import CourseManageTeacher from '../course/courseManage-teacher/courseManage-teacher'
import ApplicationReply from '../course/applicationReply/applicationReply'

import EquipmentPurchase from '../equipment/equipmentPurchase/equipmentPurchase'
import EquipmentRegister from '../equipment/equipmentRegister/equipmentRegister'
import EquipmentRepair from '../equipment/equipmentRepair/equipmentRepair'
import EquipmentScrap from '../equipment/equipmentScrap/equipmentScrap'
import EquipmentTable from '../equipment/equipmentTable/equipmentTable'

import ConsumablePurchase from '../consumable/consumablePurchase/consumablePurchase'
import ConsumableReceiver from '../consumable/consumableReceiver/consumableReceiver'
import ConsumableRegist from '../consumable/consumableRegist/consumableRegist'
import ConsumableTable from '../consumable/consumableTable/consumableTable'

import SuppliesTable from '../supplies/suppliesTable/suppliesTables'
import SuppliesPurchase from '../supplies/suppliesPurchase/suppliesPurchase'
import SuppliesRegist from '../supplies/suppliesRegist/suppliesRegist'
import SuppliesReceive from '../supplies/suppliesReceive/suppliesReceive'

import DutySchedule from '../daily/dutySchedule/dutySchedule'
import Atendance from '../daily/atendance/attendance'
import TodayInspection from '../daily/todayInspection/todayInspection'

import MyCourseStudent from '../course-management/myCourse-student/myCourseStudent'
import MyCourseTeacher from '../course-management/myCourse-teacher/myCourseTeacher'

import SetSemester from '../semester/setSemester/setSemester'
import CheckoutSemester from '../semester/checkoutSemester/checkoutSemester'
import CreateSemester from '../semester/createSemester/createSemester'

import Labs from '../backManagement/labs/labs'
import Privileges from '../backManagement/privileges/privileges'
import Roles from '../backManagement/roles/roles'
import Users from '../backManagement/users/users'





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
                                    <Route path={'/schedule/querySchedule'} component={QuerySchedule}></Route>
                                    <Route path={'/schedule/todaySchedule'} component={TodaySchedule}></Route>
                                    <Route path={'/schedule/weekSchedule'} component={WeekSchedule}></Route>

                                    <Route path={'/course/courseManage-admin'} component={CourseManageAdmin}></Route>
                                    <Route path={'/course/courseManage-teacher'} component={CourseManageTeacher}></Route>
                                    <Route path={'/course/applicationReply'} component={ApplicationReply}></Route>

                                    <Route path={'/equipment/equipmentPurchase'} component={EquipmentPurchase}></Route>
                                    <Route path={'/equipment/equipmentRegister'} component={EquipmentRegister}></Route>
                                    <Route path={'/equipment/equipmentRepair'} component={EquipmentRepair}></Route>
                                    <Route path={'/equipment/equipmentScrap'} component={EquipmentScrap}></Route>
                                    <Route path={'/equipment/equipmentTable'} component={EquipmentTable}></Route>

                                    <Route path={'/consumable/consumablePurchase'} component={ConsumablePurchase}></Route>
                                    <Route path={'/consumable/consumableReceiver'} component={ConsumableReceiver}></Route>
                                    <Route path={'/consumable/consumableRegist'} component={ConsumableRegist}></Route>
                                    <Route path={'/consumable/consumableTable'} component={ConsumableTable}></Route>

                                    <Route path={'/supplies/suppliesTable'} component={SuppliesTable}></Route>
                                    <Route path={'/supplies/suppliesPurchase'} component={SuppliesPurchase}></Route>
                                    <Route path={'/supplies/suppliesRegist'} component={SuppliesRegist}></Route>
                                    <Route path={'/supplies/suppliesReceive'} component={SuppliesReceive}></Route>

                                    <Route path={'/daily/dutySchedule'} component={DutySchedule}></Route>
                                    <Route path={'/daily/atendance'} component={Atendance}></Route>
                                    <Route path={'/daily/todayInspection'} component={TodayInspection}></Route>

                                    <Route path={'/course-management/myCourse-student'} component={MyCourseStudent}></Route>
                                    <Route path={'/course-management/myCourse-teacher'} component={MyCourseTeacher}></Route>

                                    <Route path={'/semester/setSemester'} component={SetSemester}></Route>
                                    <Route path={'/semester/checkoutSemester'} component={CheckoutSemester}></Route>
                                    <Route path={'/semester/createSemester'} component={CreateSemester}></Route>

                                    <Route path={'/backManagement/labs'} component={Labs}></Route>
                                    <Route path={'/backManagement/privileges'} component={Privileges}></Route>
                                    <Route path={'/backManagement/roles'} component={Roles}></Route>
                                    <Route path={'/backManagement/users'} component={Users}></Route>
                                    <Redirect to={'/'}/>
                                </Switch>
                            </Content>
                        </Layout>
                        <Footer style={{ backgroundColor:"blue"}}>Footer</Footer>
                    </Layout>
            )
        }

    }
}