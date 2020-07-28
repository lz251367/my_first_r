import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

// 导入子组件
import Home from '../Home'
import HouseList from '../HouseList'
import News from '../News'
import My from '../My'
import NotFount from '../NotFount'

export default class Layout extends Component {
    render() {
        return <div>
            {/* 内容部分 */}
            <div style={{ height: 500 }}>
                <Switch>
                    <Route path="/layout/index" component={Home} />
                    <Route path="/layout/houselist" component={HouseList} />
                    <Route path="/layout/news" component={News} />
                    <Route path="/layout/my" component={My} />
                    {/* 重定向 */}
                    <Redirect exact from="/layout" to="/layout/index" />
                    {/* 404写在最后 */}
                    <Route component={NotFount} />
                </Switch>
            </div>

            {/* tabBar */}
            <div style={{ position: 'fixed', botttom: 0, left: 0, height: 50 }}>
                <Link to="/layout/index">首页</Link>&nbsp;&nbsp;
                <Link to="/layout/houselist">找房</Link>&nbsp;&nbsp;
                <Link to="/layout/news">咨询</Link>&nbsp;&nbsp;
                <Link to="/layout/my">我的</Link>&nbsp;&nbsp;
            </div>
        </div>
    }
}
