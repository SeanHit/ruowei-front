import React,{Component} from 'react'
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox
} from 'antd'; //添加ant form组件
import "./login.less"
import logo from './images/login-bg.png'
import {reqLogin} from '../../api/index'
import {message} from "antd";
import {Redirect} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
const Item =Form.Item   //不能写在impot之前
/*
* 登录的路由组件
* */
class  Login extends Component{

    handleSubmit =(event) =>{
    //    阻止时间的默认行为
        event.preventDefault();
    //    对所有表单数据进行检验
        this.props.form.validateFields(async (err, values) => {
            if (!err){  //校验成功
                const {username,password,remember} =values;
                console.log(username,password,values.remember)
                //使用await 和 async
                //异步返回r
                //==========================================================================
                // const result = await reqLogin(username,password);

                // 错误实例：
                // {
                //     "status": 1,
                //     "msg": "用户名或密码不正确!"
                // }
                const result ={
                    "status": 0,
                    "data": {
                        "id": "admin",
                        "password": "admin",
                        "username": "admin",
                        "create_time": 1547381117891,
                        "__v": 0,
                        "role": {
                            "menus": []
                        }
                    }
                }
                console.log("请求成功，返回的对象：",result);
                if(result.status===0){  //登录成功
                    message.success('登录成功');
                    const user =result.data;

                    memoryUtils.user =user;  //只是保存在内存中
                    if(remember){  //点击了 “记住密码”
                        storageUtils.saveUser(user)
                    }
                    console.log("准备走了")
                    this.props.history.push("/admin")
                }else{  //登录失败
                    message.error("登录失败"+result.msg);
                }
            }else{  //校验失败
                console.log("校验失败",values);
            }
        });

    }
     //渲染函数
     render() {

        const user =memoryUtils.user
        // 自动登录取消
        // if(user && user._id){
        //     // return <Redirect to={'/admin'} />
        //
        // }

        //得到具有强大功能form表单  对象
        const form =this.props.form
        //非常重要
        const { getFieldDecorator } =form;
        return(
            <div className={"login"}>
                <header className={"login-header"}>
                    <img src={logo} alt={""}/>
                    {/*//加载动态的值*/}
                    <h1>实验中心管理平台</h1>
                </header>
                <section className={"login-content"}>
                    <h2>用户登录</h2>
                    {/* 分割而已*/}
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {
                                /*
                                用户名/密码的的合法性要求
                                1). 必须输入
                                2). 必须大于等于 4 位
                                3). 必须小于等于 12 位
                                4). 必须是英文、数字或下划线组成
                                */
                                getFieldDecorator("username",{  //配置对象：属性名时特定名称
                                    //声明式验证：直接使用别人写好的方式验证
                                    initialValue: user.id?user.id:"admin",  //初始值
                                    // initialValue: "admin",
                                    rules: [

                                        { required: true ,whitespace :true,message:'字段值不能为空 ' },
                                        { min: 4, message:'最小长度为4 ' },
                                        { max: 12, message: '最大长度不能大于12位 '},
                                        { pattern :/^[a-zA-Z0-9_&]+$/,message:"必须是英文、数字或下划线组成 "},
                                        ],
                                })( //高阶函数  {}用来表示验证的规则
                                    //username是用来标识名称，用来获取输入框的值
                                    <Input className={"login-username"}
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator("password",{
                                    // initialValue: "admin",
                                    initialValue: user.password?user.password:"",  //初始值
                                    rules: [
                                        //注意不要写错
                                        // {validator:  this.validatePassword  },
                                        { required: true ,whitespace :true,message:'密码不能为空 ' },
                                    ],
                                })( //高阶函数  {}用来表示验证的规则
                                    //password是用来标识名称，用来获取输入框的值
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }
                        </Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a className="login-form-forgot" href="" >
                                忘记密码
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>

                </section>
            </div>)

    }
}
const WrapLogin =Form.create()(Login);
export  default WrapLogin

