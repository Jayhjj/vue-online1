<template>
    <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container" >
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
            <img class='swiper-img' :src='item.imgUrl'/>
        </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
    name:'HomeSwiper',
    //es6的写法，相当于data:function(){return{swiperOption:{}}}
    data(){
        return{
            swiperOption:{
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                 autoplay: {
                delay: 2500, //自动切换的时间间隔，单位ms
                stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
                disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
                // reverseDirection: true, //开启反向自动轮播。
                waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
                },
                //滑动速度
                speed:1000,
            },
            //三张轮播，使用变量循环
            swiperList:[
                {
                    id:'001',
                    imgUrl:"http://www.jjhhg.com/upload/image/20191205/20191205150030_9379.jpg"
                },
                {
                    id:'002',
                    imgUrl:"http://www.jjhhg.com/upload/image/20190726/20190726114152_2352.jpg"
                },
                {
                    id:'003',
                    imgUrl:"http://www.jjhhg.com/upload/image/20190726/20190726115754_9482.jpg"
                }
            ]
        }
    },
      
}
</script>
<style lang='stylus' scoped>
    .wrapper
        overflow:hidden
        width 100%
        height:0
        padding-bottom:26.6666667%
        .swiper-item
            width:100%
            .swiper-img
                width:100%
</style>
