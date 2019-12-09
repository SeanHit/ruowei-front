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
                key: '/todaySchedule',
                icon: 'bell'
            },
            {
                title: '本周课表',
                key: '/weekSchedule',
                icon: 'history'
            },
            {
                title: '课表查询',
                key: '/querySchedule',
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
                key: '/courseManageAdmin',
                icon: 'setting'
            },
            {
                title: '课程管理(教师端)',
                key: '/courseManageTeacher',
                icon: 'setting'
            },
            {
                title: '排课申请处理',
                key: '/applicationReply',
                icon: 'carry-out'
            },
        ]
    },
    {
        title: '设备管理',
        key: '/8',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '设备台账',
                key: '/9',
                icon: 'bars'
            },
            {
                title: '购置设备',
                key: '/10',
                icon: 'bars'
            },
            {
                title: '新设备登记',
                key: '/11',
                icon: 'setting'
            },
            {
                title: '设备维修',
                key: '/12',
                icon: 'carry-out'
            },
            {
                title: '设备报废',
                key: '/13',
                icon: 'carry-out'
            },
        ]
    },
    {
        title: '耗材管理',
        key: '/14',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '耗材台账',
                key: '/15',
                icon: 'bars'
            },
            {
                title: '耗材登记',
                key: '/16',
                icon: 'tool'
            },
            {
                title: '耗材购置',
                key: '/17',
                icon: 'tool'
            },
            {
                title: '耗材领用',
                key: '/18',
                icon: 'tool'
            },
        ]
    },
    {
        title: '用品管理',
        key: '/19',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '用品台账',
                key: '/20',
                icon: 'bars'
            },
            {
                title: '用品登记',
                key: '/21',
                icon: 'tool'
            },
            {
                title: '用品购置',
                key: '/22',
                icon: 'tool'
            },
            {
                title: '用品领用',
                key: '/23',
                icon: 'tool'
            },
        ]
    },
    {
        title: '日常管理',
        key: '/24',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '值班表',
                key: '/25',
                icon: 'bars'
            },
            {
                title: '考勤',
                key: '/26',
                icon: 'tool'
            },
            {
                title: '巡检',
                key: '/27',
                icon: 'tool'
            },
        ]
    },
    {
        title: '实验课管理',
        key: '/28',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '我的实验课(学生)',
                key: '/29',
                icon: 'bars'
            },
            {
                title: '我的实验课(教师)',
                key: '/30',
                icon: 'tool'
            },
        ]
    },
    {
        title: '学期管理',
        key: '/31',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '创建学期',
                key: '/32',
                icon: 'bars'
            },
            {
                title: '学期查看',
                key: '/33',
                icon: 'tool'
            },
            {
                title: '设置学期',
                key: '/34',
                icon: 'tool'
            },
        ]
    },
    {
        title: '后台管理',
        key: '/35',
        icon: 'appstore',
        children: [
            // 子菜单列表
            {
                title: '用户管理',
                key: '/36',
                icon: 'bars'
            },
            {
                title: '角色管理',
                key: '/37',
                icon: 'tool'
            },
            {
                title: '权限管理',
                key: '/38',
                icon: 'tool'
            },
            {
                title: '实验室管理',
                key: '/39',
                icon: 'tool'
            },
        ]
    },
]
export default menuList;