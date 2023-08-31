import logo from '@/assets/logo.png'
import './index.scss'
import { Card, Form, Input, Button, Checkbox} from 'antd'

function Login(){
  function onFinish (values){
    console.log(values)
    
  }
  function onFinishFailed (errorInfo){
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        <Form validateTrigger={['onBlur', 'onChange']}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'please input phone number'
              },
              {
                pattern:/^1[3-9]\d{9}$/,
                message:'请输入正确的手机号',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'please input code'
              },
              {
                len: 6,
                message: '请输入6位密码',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="请输入验证码"/>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName='checked'
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login