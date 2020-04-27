import { Avatar, Divider } from 'antd'
import { WechatOutlined, GithubOutlined, QqOutlined } from '@ant-design/icons';
import '../public/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="/img/avatar.jpg"></Avatar></div>
            <div className="author-introduction">
                头发茂盛程序员，专注于WEB和H5前端开发。
                <Divider>社交账号</Divider>
                <Avatar icon={<GithubOutlined />} className="account">github</Avatar>
                <Avatar icon={<QqOutlined />} className="account">qq</Avatar>
                <Avatar icon={<WechatOutlined />} className="account">Wechat</Avatar>
            </div>
        </div>
    )
}
export default Author
