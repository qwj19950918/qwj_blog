let pathfrom = process.env.NODE_ENV === 'development' ? '127.0.0.1' : '45.76.172.8'
let ipUrl = "http://"+pathfrom+":7001/default/"
let servicePath = {
    getArticleList:ipUrl + 'getArticleList',    //首页文章列表接口
    getArticleById:ipUrl + 'getArticleById/',   //文章详细页内容接口
    getListById:ipUrl + 'getListById/',   //根据类别ID获得文章列表
}

export default servicePath;