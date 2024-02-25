module.exports =()=>{
    return {
        searchRecomments: [
            {
                value: 0,
                label: '牛腩'
            }
        ],
        banner: [
            {imgUrl: ''}
        ],
        transformer: [
            {label: '美食外卖', imgUrl: ''}
        ],
        scrollBarInfoList: [
            {
                type: 'bean',
                badge: '赚豆',
                detail: `今天再下<span class="info-num">1</span>单赚<span class="info-num">400</span>吃货豆`,
                btn: '领任务',
              },
              {
                type: 'hongbao',
                badge: '红包',
                detail: `你有<span class="info-num">4</span>张总<span class="info-num">43.5</span>元红包即将到期`,
                btn: '去查看',
              },
        ],
        countdown: {
            time: 25*60*60*1000,
            goods:{
                imgUrl: '',
                name: '那鸡腿 + 录像干 + 冰红茶',
                price: 19.8,
                oldPrice: 29.8,
            }
        },
        activities: ['']


    }
}