<template>
  <div class="home">
    <el-container class="main">
      <el-aside :width="asidewidth" class="aside">
        <div class="logo">{{admin}}</div>
        <useraside :isCollapse="isCollaps" :menulist="menulist" @nowpage="changePage"></useraside>
        <!-- <router-link to="/admin/add" >添加客户</router-link> -->
        <!-- <router-link to="/admin/list" >客户列表</router-link> -->
      </el-aside>
      <el-container class="content">
        <el-header class="header">
          <userheade @changeColl="changeCollaps"></userheade>
        </el-header>
        <el-main class="el-main">

          <!-- 面包屑 -->
          <el-breadcrumb separator="/" class="el-breadcrumb">
            <el-breadcrumb-item :to="item.path" v-for="(item,index) in breadList" :key="index">
              <span >{{item.title}}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>

          <router-view/>
        </el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import useraside from '@/components/Aside.vue'
import userheade from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
   useraside,
   userheade
  },
  data(){
    return{
      admin:'admin',
      asidewidth:'200px',
      isCollaps:false,
      menulist:[
            {
              index:'1',
              title:'主页',
              icon:"el-icon-location",
              menu:[
                {
                  subtitle:'添加用户',
                  path:'/admin/home/add',
                  disable:false
                },
                {
                  subtitle:'用户列表',
                  path:'/admin/home/list',
                  disable:false
                },
                {
                  subtitle:'pc端滚动条',
                  path:'/admin/home/scroll',
                  disable:false
                }
              ]
            },
            {
              index:'2',
              title:'组件',
              icon:"el-icon-menu",
              menu:[
                {
                  subtitle:'添加商品',
                  path:'/admin/component/product',
                  disable:false
                },
                {
                  subtitle:'测试用',
                  path:'',
                  disable:true
                },
                {
                  subtitle:'测试用',
                  path:'/admin/component/test1',
                  disable:false
                }
              ]
            },
            {
              index:'3',
              title:'页面',
              icon:"el-icon-document",
              menu:[]
            },
            {
              index:'4',
              title:'应用',
              icon:"el-icon-setting",
              menu:[]
            }
          ],
          breadList:[
            {
              title:'首页',
              path:'/'
            },
            {
              title:'主页',
              path:'/admin/home/add'
            },
            {
              title:'添加用户',
              path:''
            }
          ],
          arr:[]
    }
  },
  methods:{
    changeCollaps(e){
      this.isCollaps = e;
      console.log(e);
      if(this.isCollaps){
        this.asidewidth = '64px';
        this.admin = '';
      }else{
        this.asidewidth = '200px';
        this.admin = 'admin';
      }
    },
    changePage(res){
      var that = this;
      this.menulist.forEach(function(item,index){
        console.log(item)
        item.menu.forEach(function(obj,i){
          console.log(obj);
          if(obj.path == res){
            that.breadList[1] = {
              title:item.title,
              path:item.menu[0].path
            }
            that.breadList[2] = {
              title:obj.subtitle,
              path:obj.path
            }
            return false
          }
        })
      })
    }
  },
  created:function(){
    
  }

}
</script>

<style lang="less" scoped>
  .home{
    height: 100%;
    width: 100%;
    .main{
      height: 100%;
      .aside{
        height: 100%;
        background-color: #333;
        .logo{
          height: 60px;
          line-height: 60px;
          font-size: 36px;
          color: white;
        }
      }
      .content{
        height: 100%;
        .el-main{
          height: 100%;
          padding-bottom: 0 !important;
          .el-breadcrumb{
            height: 5%;
          }
        }
        .header,.footer{
          background-color: #8d8d8d;
        }
      }
    }
  }
  a{
    display: block;
    color: white;
    text-decoration: none;
  }
  .second{
    display: inline !important;
  }
</style>
