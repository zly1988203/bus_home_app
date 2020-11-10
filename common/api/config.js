export const baseUrl = 'https://127.0.0.1:8080/mock/'
export const device = '12545666'

export function getOpenId(){
	let data = {
		
	}
	return data;
}

export function getUserId(userIdData){
	return new Promise((resolve,reject) => {
		resolve({
			'data' : {
				userId:'254545'
			}
		})

	})
}