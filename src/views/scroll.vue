<template>
    <div id="scr"  ref="scrollbor">
        <div ref="scrollall" class="scroll" @mousewheel="listener2">
            <div class="scroll-all">
                <div class="scroll-main" @mousedown="move" ref="scrollright"  :style="{transform:'translateY('+tempRight+'px)'}"></div>
            </div>
            <ul  ref="scroll1" :style="{transform:'translateY('+tempLeft+'px)'}">
                <li v-for="(item,index) in 40" :key="index">测试用{{index}}</li>
            </ul>
        </div>
        
    </div>
</template>
<script>   
       export default {
           data(){
               return {
                    tempLeft:0,
                    tempRight:0,
                    last:0
               }
           },
           methods:{
               move(e){//百度上找的
                   let odiv = e.target;    //获取目标元素
                //    console.log(1);

                    //算出鼠标相对元素的位置
                    // let disX = e.clientX - odiv.offsetLeft;
                    let disY = e.clientY - odiv.offsetTop - this.tempRight;
                    // console.log(disY);
                    // console.log(odiv.offsetTop);

                    document.onmousemove = (e)=>{    //鼠标按下并移动的事件
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        if(e.clientY - disY >= -this.last && e.clientY - disY <=this.$refs.scrollbor.offsetHeight - this.$refs.scrollright.offsetHeight){
                            let top = e.clientY - disY  ;
                            // console.log(top)
                            // console.log(this.last);
                            
                            //绑定元素位置到positionX和positionY上面
                            this.tempRight = top ;
                            this.tempLeft = -(e.clientY - disY) / (this.$refs.scrollall.offsetHeight - this.$refs.scrollright.offsetHeight) * (this.$refs.scroll1.offsetHeight + 300 - this.$refs.scrollbor.offsetHeight)
                            this.last = this.tempRight;
                            //移动当前元素
                    
                        }
                        
                    };
                    document.onmouseup = (e) => {
                        document.onmousemove = null;
                        document.onmouseup = null;
                    };
               },
               listener2(e){
                //    console.log(this.$refs.scrollbor.offsetHeight);
                let step = 30;//每步的长度
                let a = Math.ceil((this.$refs.scroll1.offsetHeight + 300 - this.$refs.scrollbor.offsetHeight) / step);//滚动的步数
                let b = Math.ceil((this.$refs.scrollbor.offsetHeight - this.$refs.scrollright.offsetHeight) /a)//右侧滚动条的每一步的长度
                    // console.log(this.$refs.scrollbor.offsetHeight)
                    // console.log( this.$refs.scrollright.offsetHeight)
                    // console.log(a);
                   let cha = e.wheelDeltaY > 0 ? step : -step;
                   let cha2 = e.wheelDeltaY > 0 ? -b : b;
                   this.tempLeft += cha;
                   this.tempRight += cha2;
                //    console.log(this.temp)
                //    console.log(this.$refs.scrollall.offsetHeight)
                   
                   if(this.tempLeft <= 0 && this.tempLeft >= -this.$refs.scrollall.offsetHeight - 300){
                        this.tempLeft += cha;
                        this.tempRight += cha2;
                        this.last = this.tempRight;
                        // console.log(this.last);

                   }else if(this.tempLeft>0){
                        this.tempLeft = 0;
                        this.tempRight = 0;
                        // console.log(1);
                   }else if(this.tempLeft<-this.$refs.scrollall.offsetHeight - 300){
                       this.tempLeft = -this.$refs.scrollall.offsetHeight - 300;
                       this.tempRight = this.$refs.scrollall.offsetHeight - this.$refs.scrollright.offsetHeight;
                    //    console.log(2);
                   }
               }
           }
	
	}
</script>
<style lang="less" scoped>
    #scr{
        height: 95%;
        width: 100%;
        overflow: hidden;
        .scroll{
            height: 100%;
            width: 100%;
            overflow: hidden;
            position: relative;
            .scroll-all{
                float: right;
                position: fixed;
                right: 10px;
                height: 80%;
                width: 6px;
                .scroll-main{
                    height: 200px;
                    position: absolute;
                    width: 6px;
                    background-color: #666;
                    border-radius: 3px;
                }
            }
            ul{
                width: 100%;
                position: absolute;
                top: 0;
                li{
                    line-height: 36px;
                }
            }
        }
    }
</style>