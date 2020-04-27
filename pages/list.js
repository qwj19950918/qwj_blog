import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Row, Col, List, Breadcrumb } from 'antd'
import { FieldTimeOutlined, GiftOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Link from 'next/link'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import '../public/style/pages/comm.css'
import Router from 'next/router'
const Listas = (props) => {
    const [mylist, setMylist] = useState(props.data);
    const [myType, setMyType] = useState(1);
    useEffect(() => {
        setMylist(props.data);
        setMyType(Router.query.id);
    })
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        sanitize: false,
        xhtml: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }

    });
    return (
        <>
            <Head>
                <title>{myType == 1 ? '文章 | 鱼弦' : '生活 | 鱼弦'}</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>{myType == 1 ? '文章' : '生活'}类型</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <List
                            itemLayout="vertical"
                            dataSource={mylist}
                            renderItem={item => (
                                <List.Item>
                                    <div className="list-title">
                                        <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                                            <a>{item.title}</a>
                                        </Link></div>
                                    <div className="list-icon">
                                        <span className="list-icon-item"><FieldTimeOutlined /> {item.addTime}</span>
                                        <span className="list-icon-item"><GiftOutlined /> {item.typeName}</span>
                                        {/* <span className="list-icon-item"><MehOutlined /> {item.view_count}人</span> */}
                                    </div>
                                    <div className="list-context" dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}></div>
                                </List.Item>
                            )}
                        />
                    </div>

                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                </Col>
            </Row>
            <Footer />
        </>
    )

}
Listas.getInitialProps = async (context) => {

    let id = context.query.id
    const promise = new Promise((resolve) => {
        axios(servicePath.getListById + id).then(
            (res) => resolve(res.data)
        )
    })
    return await promise
}

export default Listas