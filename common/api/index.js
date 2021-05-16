import request from './request.js'
import { formatGetUri } from '@/common/util.js'

const api = {}
const PORT = ''
// POST请求方式 1 普通数据格式 2 数据格式：form-data
api.orderList = params => request.globalRequest(`${PORT}/sdg/driver/index/getOrderHallList`, 'POST', params, 2)
// GET请求方式api.register = params => request.globalRequest(`${PORT1}/mobile/signUp${formatGetUri(params)}`, 'GET //必须大写，为了兼容其他应用',{}, 1)
api.login = params => request.globalRequest(`${PORT}/sdg/driver/index/signIn`, 'POST', params, 2)

api.receiveOrder = params => request.globalRequest(`${PORT}/sdg/driver/index/receiveOrder`, 'POST', params, 2)

api.getReservationOrderList = params => request.globalRequest(`${PORT}/sdg/driver/order/getReservationOrderList`, 'POST', params, 2)

api.transferOrder = params => request.globalRequest(`${PORT}/sdg/driver/order/transferOrder`, 'POST', params, 2)


api.transferList = params => request.globalRequest(`${PORT}/sdg/user/transferList`, 'POST', params, 1)

api.journeyList = params => request.globalRequest(`${PORT}/sdg/user/journeyList`, 'POST', params, 1)

api.billList = params => request.globalRequest(`${PORT}/sdg/user/billList`, 'POST', params, 1)

api.acceptOrder = params => request.globalRequest(`${PORT}/sdg/user/acceptOrder`, 'POST', params, 1)

export default api