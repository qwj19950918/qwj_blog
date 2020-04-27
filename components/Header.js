import React from 'react'
import '../public/style/components/header.css'
import { Row, Col, Menu} from 'antd'
import { HomeOutlined, SmileOutlined, YoutubeOutlined, BulbOutlined } from '@ant-design/icons'
import Router from 'next/router'
import Link from 'next/link'
const Header = () => {
    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else if (e.key < 3) {
            Router.push('/list?id=' + e.key)
        } else {
            window.location.href = '//www.qiweijie.com'
        }
    }
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">
                        <Link href={{ pathname: '/' }}>
                            <a>鱼弦</a>
                        </Link>
                    </span>
                    <span className="header-txt">清除一下缓存，然后刷新一下看看？</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="0" onClick={handleClick}>
                            <HomeOutlined twoToneColor="#eb2f96" />
                            首页
                        </Menu.Item>
                        <Menu.Item key="1" onClick={handleClick}>
                            <YoutubeOutlined />
                            文章
                        </Menu.Item>
                        <Menu.Item key="2" onClick={handleClick}>
                            <SmileOutlined />
                            生活
                        </Menu.Item>
                        <Menu.Item key="3" onClick={handleClick}>
                            <BulbOutlined />
                            简历
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header
