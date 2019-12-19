<template>
    <div>
        添加商品

        <div class="form-div">
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="ruleForm.price"></el-input>
                </el-form-item>
                <el-form-item label="缩略图" prop="img">
                    <el-input v-model="ruleForm.img"></el-input>
                </el-form-item>
            
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
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
                    price: '',
                    img: ''
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    
                    var param = "title=" + this.ruleForm.name + "&price=" + this.ruleForm.price + "&img=" + this.ruleForm.img;

                    this.$axios.get('http://leeyiqing.site/addproduct.php?'+param)//get只是请求方式
                    .then((e) =>{

                        this.$refs[formName].resetFields();
                        this.$message('添加成功')
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
</style>