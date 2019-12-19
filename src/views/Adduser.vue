<template>
    <div class="add">
        添加客户
        <div class="form-div">
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                    <el-input v-model="ruleForm.pwd"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="pwd">
                    <el-input v-model="ruleForm.repwd"></el-input>
                </el-form-item>
                <el-form-item label="职务" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="教师" value="1"></el-option>
                    <el-option label="校长" value="2"></el-option>
                    <el-option label="推销员" value="3"></el-option>
                    <el-option label="管理员" value="4"></el-option>
                    <el-option label="教务" value="5"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男" value="1"></el-radio>
                    <el-radio label="女" value="2"></el-radio>
                    </el-radio-group>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>   
    export default {
        data(){
            return{
                ruleForm: {
                    name: '',
                    pwd: '',
                    repwd: '',
                    region: '',
                    sex: '男',
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    var data = {
                        uname:this.ruleForm.name,
                        pwd:this.ruleForm.pwd,
                        sex:this.ruleForm.sex,
                        region:this.ruleForm.region
                    }
                    var param = "uname=" + this.ruleForm.name + "&pwd=" + this.ruleForm.pwd + "&sex=" + this.ruleForm.sex + "&region=" + this.ruleForm.region;

                    this.$axios.get('http://leeyiqing.site/adduser.php?'+param)//get只是请求方式
                    .then(function(e){
                        console.log(e)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }

                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
	
	}
</script>
<style lang="less" scoped>
    .add{
        width: 50%;
    }
</style>