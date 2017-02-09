(function() {
    // 配置
    var envir = 'online';
    var configMap = {
        test: {
            appkey: '06f770fecc1dae9cfcff604048520fea',
            url:'https://apptest.netease.im'
        },
        pre:{
    		appkey: '06f770fecc1dae9cfcff604048520fea',
    		url:'http://preapp.netease.im:8184'
        },
        online: {
           appkey: '06f770fecc1dae9cfcff604048520fea',
           url:'https://app.netease.im'
        }
    };
    window.CONFIG = configMap[envir];
}())