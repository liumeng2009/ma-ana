import {
	baseUrl
} from './env';

export default async(url = '', data = {}, type = 'GET', contentType = 'application/json', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;
	if (type === 'GET') {
		let dataStr = ''; // 数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		});

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	if (window.fetch && method === 'fetch') {
		const requestConfig = {
		//	credentials: 'include',
			method: type,
			headers: {
				'Content-Type': contentType
			},
			mode: 'cors'
		};

		if (contentType === 'file' && type === 'POST') {
			requestConfig['body'] = data;
			delete requestConfig['headers'];
		} else if (type === 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			});
		}

		try {
			const response = await Promise.race([
			fetch(url, requestConfig),
			new Promise(function(resolve, reject) {
					setTimeout(() => reject(new Error('request timeout')), 100000);
			}) ]);
				const responseJson = await response.json();
			// const response = await fetch(url, requestConfig);
			// const responseJson = await response.json();
			// console.log(response)
			return responseJson;
		} catch (error) {
			// alert('网络请求失败，请检查网络或联系管理员');
			throw new Error(error);
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				// eslint-disable-next-line no-undef
				requestObj = new ActiveXObject();
			}

			let sendData = '';
			if (type === 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState === 4) {
					if (requestObj.status === 200) {
						let obj = requestObj.response;
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj);
					} else {
						reject(requestObj);
					}
				}
			};
		});
	}
};
