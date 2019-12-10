/*
* 这个是左边导航栏的菜单
* */
const  menuList = [
    {
        title: '实验室课表',
        key: '/schedule',
        icon: 'table',
        children: [
            // 子菜单列表
            {
                title: '今日课表',
                key: '/schedule/todaySchedule',
                icon: 'bell'
            },
            {
                title: '本周课表',
                key: '/schedule/weekSchedule',
                icon: 'history'
            },
            {
                title: '课表查询',
                key: '/schedule/querySchedule',
                icon: 'carry-out'
            },
        ]
    },
    {
        title: '课程预约',
        key: '/course',
        icon: 'solution',
        children: [
            // 子菜单列表
            {
                title: '课程管理(管理员)',
                key: '/course/courseManage-admin',
                icon: 'setting'
            },
            {
                title: '课程管理(教师端)',
                key: '/course/courseManage-teacher',
                icon: 'setting'
            },
            {
                title: '排课申请处理',
                key: '/course/applicationReply',
                icon: 'carry-out'
            },
        ]
    },
    {
        title: '设备管理',
        key: '/equipment',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '设备台账',
                key: '/equipment/equipmentTable',
                icon: 'bars'
            },
            {
                title: '购置设备',
                key: '/equipment/equipmentPurchase',
                icon: 'bars'
            },
            {
                title: '新设备登记',
                key: '/equipment/equipmentRegister',
                icon: 'setting'
            },
            {
                title: '设备维修',
                key: '/equipment/equipmentRepair',
                icon: 'carry-out'
            },
            {
                title: '设备报废',
                key: '/equipment/equipmentScrap',
                icon: 'carry-out'
            },
        ]
    },
    {
        title: '耗材管理',
        key: '/consumable',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '耗材台账',
                key: '/consumable/consumableTable',
                icon: 'bars'
            },
            {
                title: '耗材登记',
                key: '/consumable/consumableRegist',
                icon: 'tool'
            },
            {
                title: '耗材购置',
                key: '/consumable/consumablePurchase',
                icon: 'tool'
            },
            {
                title: '耗材领用',
                key: '/consumable/consumableReceiver',
                icon: 'tool'
            },
        ]
    },
    {
        title: '用品管理',
        key: '/supplies',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '用品台账',
                key: '/supplies/suppliesTable',
                icon: 'bars'
            },
            {
                title: '用品登记',
                key: '/supplies/suppliesRegist',
                icon: 'tool'
            },
            {
                title: '用品购置',
                key: '/supplies/suppliesPurchase',
                icon: 'tool'
            },
            {
                title: '用品领用',
                key: '/supplies/suppliesReceive',
                icon: 'tool'
            },
        ]
    },
    {
        title: '日常管理',
        key: '/daily',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '值班表',
                key: '/daily/dutySchedule',
                icon: 'bars'
            },
            {
                title: '考勤',
                key: '/daily/atendance',
                icon: 'tool'
            },
            {
                title: '巡检',
                key: '/daily/todayInspection',
                icon: 'tool'
            },
        ]
    },
    {
        title: '实验课管理',
        key: '/course-management',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '我的实验课(学生)',
                key: '/course-management/myCourse-student',
                icon: 'bars'
            },
            {
                title: '我的实验课(教师)',
                key: '/course-management/myCourse-teacher',
                icon: 'tool'
            },
        ]
    },
    {
        title: '学期管理',
        key: '/semester',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '创建学期',
                key: '/semester/createSemester',
                icon: 'bars'
            },
            {
                title: '学期查看',
                key: '/semester/checkoutSemester',
                icon: 'tool'
            },
            {
                title: '设置学期',
                key: '/semester/setSemester',
                icon: 'tool'
            },
        ]
    },
    {
        title: '后台管理',
        key: '/backManagement',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '用户管理',
                key: '/backManagement/users',
                icon: 'bars'
            },
            {
                title: '角色管理',
                key: '/backManagement/roles',
                icon: 'tool'
            },
            {
                title: '权限管理',
                key: '/backManagement/privileges',
                icon: 'tool'
            },
            {
                title: '实验室管理',
                key: '/backManagement/labs',
                icon: 'tool'
            },
        ]
    },
]
export default menuList;