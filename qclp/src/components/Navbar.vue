<template>
  <div class="head">
      <div class="header">
        <el-row  type="flex" class="row-bg" justify="space-around">
      <!-- <el-col :span="8">qclp</el-col> -->
      <el-col :span="6">
        <el-menu 
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          >
          <div v-for="(item,index) in tabcontent" :key="index" style="display:inline-block;">
             <el-submenu v-if="item.children" :index="item.id">
              <template slot="title">{{item.text}}</template>
              <el-menu-item v-for="(sub,indey) in item.children" :key="indey" :index="sub.id">
                {{sub.text}}
              </el-menu-item>
             </el-submenu>
              <el-menu-item v-else :index="item.id">
                {{item.text}}
              </el-menu-item>
          </div>
        </el-menu>
      </el-col>
      <el-col :span="6" >qclp</el-col>
      <el-col :span="6" >
        <el-menu 
          :default-active="activeIndex1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
         
          >
          <div v-for="(item,index) in tabcontent1" :key="index" style="display:inline-block;">
             <el-submenu v-if="item.children" :index="item.id">
              <template slot="title">{{item.text}}</template>
              <el-menu-item v-for="(sub,indey) in item.children" :key="indey" :index="sub.id">
                {{sub.text}}
              </el-menu-item>
             </el-submenu>
              <el-menu-item v-else :index="item.id">
                {{item.text}}
              </el-menu-item>
          </div>
        </el-menu>
      </el-col>
    </el-row>
      </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      activeIndex: '1',
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
            }   
        ],
        
         activeIndex1: '1',
         tabcontent1:[
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
                // children:[]
            },
            {
                id:'8',
                text:'联系我们',
                // children:[]
            }
        ]
      };
  },
  methods: {
    handleClick() {
      if (this.activeName == "主页") this.$router.push('/')
      if (this.activeName == "归档") this.$router.push('/file')
      if (this.activeName == "标签") this.$router.push('/category')
      if (this.activeName == "关于我") this.$router.push('/profile')
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" scoped>
.head
    margin 0
    padding 0
  width 100%
//   display flex
//   background-color blue
  height 140px
  line-height 100px
  justify-content space-between
  box-shadow: 0 3px 3px rgba(100, 100, 100, .3)
//   box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 16px rgba(0, 0, 0, .10)
// .header
//     width 100%
//      height 140px
//      line-height 100px
     
.el-menu.el-menu--horizontal {
    border-bottom: none ;
    // box-shadow: 0 10px 10px rgba(0, 0, 0, .12), 0 0 16px rgba(0, 0, 0, .10)
}
div 
    font-size 40px
.row-bg 
    // padding: 10px 0;
    background-color:#545c64;
    // text-color:#fff;
    // active-text-color:#ffd04b;
    box-shadow: 0 20px 20px rgba(0, 0, 0, .16), 0 0 20px rgba(0, 0, 0, .16)
    height 140px
.el-menu-demo
    // background-color:blue;
  
    padding-top 60px
.el-menu-item
    // font-size 18px
    // color #fff
.title
    font-size 18px

</style>