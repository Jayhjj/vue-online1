<template>
    <div id="m-header">
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-submenu :index="item.id"  v-for="(item,index) in tabcontent" :key="index">
                <template   slot="title">{{item.text}}</template>
                <el-menu-item   v-for="(childItem,index) in item.children" :key="index" :index="childItem.id">
                    {{childItem.text}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>



<script>
  export default {
    data() {
      return {
        activeIndex2: '1',
        tabcontent:[
            {
                id:'1',
                text:'首页',
                // children:[]
            },
            {
                id:'2',
                text:'关于我们',
                children:[
                    {
                        id:'2-1',
                        text:'企业简介'
                    },
                    {
                        id:'2-2',
                        text:'洽谈室'
                    },
                    {
                        id:'2-3',
                        text:'发展前景'
                    },
                    {
                        id:'2-4',
                        text:'企业文化'
                    },
                    {
                        id:'2-5',
                        text:'项目优势'
                    }
                ]
            },
            {
                id:'3',
                text:'特色产品',
                children:[
                    {
                        id:'3-1',
                        text:'营养早餐'
                    },
                    {
                        id:'3-2',
                        text:'圆满火锅'
                    },
                    {
                        id:'3-3',
                        text:'户外烧烤'
                    },
                    {
                        id:'3-4',
                        text:'健康轻食'
                    },
                    {
                        id:'3-5',
                        text:'中国招牌菜'
                    },
                    {
                        id:'3-6',
                        text:'快乐甜点'
                    },
                    {
                        id:'3-7',
                        text:'浪漫西餐'
                    },
                    {
                        id:'3-8',
                        text:'精品厨具'
                    },
                    {
                        id:'3-9',
                        text:'鲜果饮品'
                    }
                ]
            },
            {
                id:'4',
                text:'餐厅查询'
            },
            {
                id:'5',
                text:'加盟合作',
                children:[
                    {
                        id:'5-1',
                        text:'加盟流程'
                    },
                    {
                        id:'5-2',
                        text:'加盟优势'
                    },
                    {
                        id:'5-3',
                        text:'门店展示'
                    }
                ]
            },
            {
                id:'6',
                text:'部门服务',
                children:[
                    {
                        id:'6-1',
                        text:'市场研发中心'
                    },
                    {
                        id:'6-2',
                        text:'财务咨询中心'
                    },
                    {
                        id:'6-3',
                        text:'品牌推广中心'
                    },
                    {
                        id:'6-4',
                        text:'仓库物流管理中心'
                    },
                    {
                        id:'6-5',
                        text:'总经理办公室'
                    },
                    {
                        id:'6-6',
                        text:'运营中心'
                    },
                    {
                        id:'6-7',
                        text:'团队建设部'
                    }
                ]
            },
            {
                id:'7',
                text:'试味间',
                children:[]
            },
            {
                id:'8',
                text:'联系我们',
                children:[]
            }
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style lang="stylus" scoped>
#m-header{
}
</style>