<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><i :class="isCollaps ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="changeCollaps"></i></el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </div>
</template>
<script>   
    export default {
        data(){
            return{
                isCollaps:false,
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods:{
            changeCollaps(){
                this.isCollaps = !this.isCollaps;
                console.log(1);
                this.$emit('changeColl',this.isCollaps)
            },
            handleSelect(key,keyPath){
                // console.log(key,keyPath);
            }
        }
	}
</script>
<style lang="less" scoped>

</style>