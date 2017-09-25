const apiPre = '/api.php';

// 微信
export const wxPre = `${apiPre}?s=api/weixin/WxInfos`;

// 分类
export const category = {
	getlevel1children:`${apiPre}?s=api/category/getlevel1children`,
	getlevel1:`${apiPre}?s=api/category/getlevel1`,
}

// export const ajax = (api) => {
// 	return this.http.get(url)   
// 			.toPromise()   
// 			.then(res => res.json())   
// 			.catch(this.handleError);
// }