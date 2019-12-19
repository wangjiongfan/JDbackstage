<template>
    <div id="aside">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse">
        <el-submenu :index="submenu.index" v-for="(submenu,index) in menulist" :key="index">
          <template slot="title">
            <i :class="submenu.icon"></i>
            <span v-text="submenu.title"></span>
          </template>
          <el-menu-item :index="index+'-'+i" @click="jumppage(item.path)" v-for="(item,i) in submenu.menu" :key="i" :disabled="item.disable">{{item.subtitle}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>
<script>   
    export default {
      data(){
        return{
          
        }
      },
      props:{
        isCollapse:{
          type:Boolean,
          default:false
        },
        menulist:{
          type:Array,
          default:function(){
            return []
          }
        }
      },
      methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        jumppage:function(key){
          console.log(1);
          this.$emit('nowpage',key)
          this.$router.push(key)
        }
      }
        
    }
</script>
<style lang="less" scoped>
.tit{
  height: 60px;
  line-height: 60px;
  font-size: 36px;
  color: white;
}
</style>
