const banner = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523445418678&di=b36f48b50f8fc2cc0717ce009f90e8fd&imgtype=0&src=http%3A%2F%2Fimgbdb2.bendibao.com%2Ftour%2F201212%2F19%2F20121219143436777.jpg'

const hotel = {
  name: '维也纳酒店',
  region: '千灯湖、桂城',
  address: '桂澜北路',
  score: 4.6,
  comment_count: 366,
  latitude: 0,
  longitude: 0,
  gallery: new Array(4).fill(banner),
  roomList: [
    {
      name: '标准双床房',
      size: '25',
      bed_count: '双床',
      floors: '3-5层',
      img: banner,
      price: '261',
      priceList: [
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        },
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        },
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        }
      ]
    },
    {
      name: '标准双床房',
      size: '25',
      bed_count: '双床',
      floors: '3-5层',
      img: banner,
      price: '261',
      priceList: [
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        },
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        },
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        }
      ]
    },
    {
      name: '标准双床房',
      size: '25',
      bed_count: '双床',
      floors: '3-5层',
      img: banner,
      price: '261',
      priceList: [
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        },
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        },
        { 
          id: '3', name: '特惠价',
          desc: '双份早餐 大床 2人',
          breakfast: '双份早餐',
          beds: '大床',
          people: '2',
          price: '245'
        }
      ]
    }
  ],
  facility_list: [
    {
      cname: '网络',
      list: [
        '客房WiFi免费',
        '房间内高速上网',
        '公用区WiFi免费'
      ]
    },
    {
      cname: '交通服务',
      list: [
        '免费停车场',
        '叫车服务'
      ]
    },
    {
      cname: '休闲娱乐',
      list: [
        '按摩室',
        '桌球室',
        '棋牌室',
        'KTV'
      ]
    },
    {
      cname: '前台服务',
      list: [
        '行李寄存',
        '24小时前台',
        '24小时大堂经理',
        '免费旅游交通图',
        '邮政服务',
        '前台保险柜',
        '信用卡结算',
        '一次性账单结算',
        '快速办理入住',
        '私人登记入住'
      ]
    },
    {
      cname: '餐饮服务',
      list: [
        '中餐厅',
        '送餐服务',
        '西餐厅',
        '自助餐'
      ]
    },
    {
      cname: '商务服务',
      list: [
        '会议厅'
      ]
    },
    {
      cname: '商用设施',
      list: [
        '暖气',
        '电梯',
        '大堂吧',
        '非经营性休息区',
        '公共音响系统',
        '无烟楼层',
        '吸烟区',
        '公共区监控系统'
      ]
    },
    {
      cname: '其他服务',
      list: [
        '婚宴服务',
        '外送洗衣'
      ]
    }
  ],
  infoList: [
    {
      text: '酒店政策',
      value: '入住时间: 14:00以后 离店时间: 12:00以前'
    },
    {
      text: '儿童与加床',
      value: '不接受18岁以下客人单独入住'
    },
    {
      text: '膳食安排',
      value: '自助早餐 RMB38'
    },
    {
      text: '宠物',
      value: '不可携带宠物'
    }
  ]
}

export default {
  hotel
}