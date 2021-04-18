import Mock from 'mockjs';
import { builder } from '../../util';

const followData = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
        const listItem = {
            name: Mock.Random.cword(3),
            value: Mock.Random.integer(0, 20)
        };
        list.push(listItem);
    }
    return builder(list);
};

const collectData = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
        const listItem = {
            name: Mock.Random.cword(3),
            value: Mock.Random.integer(0, 20)
        };
        list.push(listItem);
    }
    return builder(list);
};

const followPercent = () => {
    const list = [{
        name: '浏览商品详情页',
        value: 3672
    }, {
        name: '收藏商品',
        value: 1817
    }, {
        name: '提交订单详情',
        value: 10
    }, {
        name: '支付订单详情',
        value: 2
    }];
    return builder(list);
};

const collectPercent = () => {
    const list = [{
        name: '浏览商品详情页',
        value: 5962
    }, {
        name: '加入购物车',
        value: 2526
    }, {
        name: '提交订单',
        value: 207
    }, {
        name: '支付订单',
        value: 75
    }];
    return builder(list);
};

Mock.mock(/\/api\/user-analysis\/recommend\/followPercent/, 'get', followPercent);
Mock.mock(/\/api\/user-analysis\/recommend\/follow/, 'get', followData);
Mock.mock(/\/api\/user-analysis\/recommend\/collectPercent/, 'get', collectPercent);
Mock.mock(/\/api\/user-analysis\/recommend\/collect/, 'get', collectData);
