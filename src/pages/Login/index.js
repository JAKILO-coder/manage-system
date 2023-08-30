import logo from '@/assets/logo.png'
import './index.scss'
import { Card, Form, Input, Button, Checkbox} from 'antd'

function Login(){
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        <Form
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item>
            <Input size="large" placeholder="请输入手机号"/>
          </Form.Item>
          <Form.Item>
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