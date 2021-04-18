const basicColumns = [
  {
    title: '手机号',
    key: 'phone'
  },
  {
    title: '平台名称',
    key: 'platform'
  },
  {
    title: '实名认证',
    key: 'certification',
    render: (h, params) => {
      if (params.row.certification) {
        return h('span', { domProps: { innerText: '已实名' }, style: { color: 'green' } });
      } else {
        return h('span', { domProps: { innerText: '未实名' }, style: { color: 'red' } });
      }
    }
  },
  {
    title: '身份证号',
    key: 'idCard'
  },
  {
    title: '姓名',
    key: 'username'
  },
  {
    title: '邮箱',
    key: 'email'
  },
  {
    title: '注册时间',
    key: 'regDate'
  },
  {
    title: '昵称',
    key: 'nickname'
  },
  {
    title: '会员',
    key: 'vip',
    render: (h, params) => {
      if (params.row.vip) {
        return h('span', { domProps: { innerText: 'vip' } });
      } else {
        return h('span', { domProps: { innerText: '普通用户' } });
      }
    }
  }
];

const orderColumns = [
  {
    title: '订单编号',
    key: 'id'
  },
  {
    title: '平台名称',
    key: 'platform'
  },
  {
    title: '下单时间',
    key: 'orderTime'
  },
  {
    title: '商品数量',
    key: 'orderCount'
  },
  {
    title: '订单金额',
    key: 'orderAmount'
  },
  {
    title: '收货方式',
    key: 'takeDelivery',
    render: (h, params) => {
      if (params.row.takeDelivery === 1) {
        return h('span', { domProps: { innerText: '线上支付' } });
      } else {
        return h('span', { domProps: { innerText: '货到付款' } });
      }
    }
  },
  {
    title: '收货日期',
    key: 'takeDeliveryTime'
  },
  {
    title: '收货地址',
    key: 'address'
  },
  {
    title: '操作',
    slot: 'action'
  }
];

export {
  basicColumns,
  orderColumns
};
