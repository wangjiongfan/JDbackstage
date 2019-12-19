<template>
    <div class="list">
        客户列表

        <el-table
        :data="userlist"
        style="width: 100%">
        <el-table-column
            prop="id"
            label="ID"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="region"
            label="地址">
        </el-table-column>
        </el-table>

        <!-- <ul>
            <li v-for="(item ,index) in userlist" :key="index">
                {{}}
            </li>
        </ul> -->


        <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :page-size='5'
                :total="totalCount"
                @current-change="changePage">
            </el-pagination>
        </div>
            
    </div>
</template>
<script>   
    export default {
        data(){
            return {
                userlist:[],
                // page:1,
                // paglen:1,
                totalCount:0
            }
        },
        created:function(){
            this.$axios.get('http://leeyiqing.site/usersort.php?page=1')
            .then((e)=>{
                console.log(e.data)
                this.userlist = e.data.data;
                // this.paglen = e.data.length;
                this.totalCount = e.data.total.count - 0;
            })
        },
        methods:{
            changePage(page){
                this.$axios.get('http://leeyiqing.site/usersort.php?page=' + page)
                .then((e)=>{
                    this.userlist = e.data.data;
                    // this.paglen = e.data.length;
                    this.totalCount = e.data.total.count - 0;
                })
            }
        }
	}
</script>
<style lang="less" scoped>
</style>