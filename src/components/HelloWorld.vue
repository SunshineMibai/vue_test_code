<template>
  <div class="hello">
    <test-code  @imgCode="imgCode" ref="imgVerify" style='margin-left:10px;'/>
    <div style='margin:20px 0'>
      <input type="text" name="" v-model='inputCode' placeholder="请输入验证码" />
    </div>
    <p :class="testSend == '验证成功'?'blue':'red'">{{testSend}}</p>
    <button class='btn' @click='getCode'>验证</button>
  </div>
</template>

<script>
  import TestCode from './test_code.vue'
  export default {
    name: 'HelloWorld',
    components:{TestCode},
    props: {
      msg: String
    },
    data() {
      return {
        code: '',
        inputCode:'',
        testSend:''
      } 
    },
    methods: {
      imgCode(code) {
        this.code = code
        console.log(this.code)
      },
      getCode() {
        if(this.code == this.inputCode.toUpperCase()){
          this.testSend = '验证成功'
        }else{
          this.testSend = '验证失败'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  background: #feb101;
  border:none;
  color: #fff;
  width: 120px;
  height:35px;
  border-radius: 5px;
}
.blue{
  color: blue!important;
}
.red{
  color: red!important;
}
</style>
