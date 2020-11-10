import {
	baseUrl
} from './config'
import {
	showToast
} from '../utils/index'

export function request(url, method = 'GET', data, header = {}) {
	return new Promise((resolve, reject) => {
		wx.showLoading({
			title: '玩命加载中...'
		})
		resolve({
  "data": {
    "waitingTimes": [
      "最快3分钟接驾",
      "最快2分钟接驾",
      "最快2分钟接驾",
      "最快1分钟接驾",
      "最快2分钟接驾",
      "最快4分钟接驾",
      "最快3分钟接驾",
      "最快5分钟接驾",
      "最快3分钟接驾",
      "附近暂无车可用，请稍等"
    ],
    "drivers": [
      {
        "id": "0",
        "name": "处师傅",
        "stars": "2.9 6w+单",
        "Cartnumber": "赣A30H75",
        "cart": "黑色●宝马Q4"
      },
      {
        "id": "1",
        "name": "将师傅",
        "stars": "3.7 5w+单",
        "Cartnumber": "赣A66666",
        "cart": "红色●路虎Q2"
      },
      {
        "id": "2",
        "name": "斯师傅",
        "stars": "1.8 9w+单",
        "Cartnumber": "赣A365K2",
        "cart": "蓝色●奔驰Q9"
      },
      {
        "id": "3",
        "name": "结师傅",
        "stars": "2.6 1w+单",
        "Cartnumber": "赣A85IHG",
        "cart": "白色●宝马Q5"
      },
      {
        "id": "4",
        "name": "技师傅",
        "stars": "2.8 9w+单",
        "Cartnumber": "赣AHGN42",
        "cart": "白色●大众Q6"
      },
      {
        "id": "5",
        "name": "至师傅",
        "stars": "2.7 7w+单",
        "Cartnumber": "赣A88888",
        "cart": "黑色●哈福Q5"
      }
    ],
    "imgUrls": [
      "/static/img/swiper/swiper-1.png",
      "/static/img/swiper/swiper-2.png",
      "/static/img/swiper/swiper-3.png"
    ],
    "cost": [
      {
        "id": "0",
        "name": "现在出发",
        "url": "/static/img/time.png"
      },
      {
        "id": "1",
        "name": "换乘车人",
        "url": "/static/img/people.png"
      },
      {
        "id": "2",
        "name": "个人支付",
        "url": "/static/img/play.png"
      }
    ],
    "reasons": [
      {
        "value": "0",
        "name": "行程有变，暂时不需要用车",
        "checked": "false"
      },
      {
        "value": "1",
        "name": "赶时间，换用其它交通工具",
        "checked": "false"
      },
      {
        "value": "2",
        "name": "平台派单太远",
        "checked": "false"
      },
      {
        "value": "3",
        "name": "司机以各种理由不来接我",
        "checked": "false"
      },
      {
        "value": "4",
        "name": "联系不上司机",
        "checked": "false"
      },
      {
        "value": "5",
        "name": "我找不到终点",
        "checked": "false"
      }
    ],
    "entity": [
      {
        "id": "0",
        "title": "江西农业大学",
        "address": "江西南昌市志敏大道1101号"
      },
      {
        "id": "1",
        "title": "昌北机场T2航空楼",
        "address": "江西南昌市新建区机场大道"
      },
      {
        "id": "2",
        "title": "万达广场(红谷滩店)",
        "address": "江西省南昌市青山湖区会展路999号"
      },
      {
        "id": "3",
        "title": "范家新村-公交站",
        "address": "青三湖区广兰路东"
      },
      {
        "id": "4",
        "title": "东华大道",
        "address": "江西省南昌市青山湖区"
      },
      {
        "id": "5",
        "title": "江西财经大学(蛟桥园校区)",
        "address": "江西省南昌市青山湖区双港东大街169号"
      },
      {
        "id": "6",
        "title": "江西财经大学(麦庐园校区北门)",
        "address": "江西省南昌市青山湖区枫林大道632号"
      },
      {
        "id": "7",
        "title": "东华理工大学(南昌校区)",
        "address": "江西省南昌市青山湖区广兰大道418号"
      },
      {
        "id": "8",
        "title": "南昌西站",
        "address": "江西省南昌市新建县西站大街"
      },
      {
        "id": "9",
        "title": "东华大道",
        "address": "江西省南昌市青山湖区"
      },
      {
        "id": "10",
        "title": "八一广场",
        "address": "江西省南昌市东湖区八一大道"
      }
    ]
  }
})

	})
}

