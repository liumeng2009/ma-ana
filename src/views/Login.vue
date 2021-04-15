<template lang="html">
  <div id="home" class="loginContainerStyle">
    <PointWave />
    <div class="form">
      <span class="title">营销信息分析平台</span>
      <Form ref="loginForm" :model="loginForm" :rules="loginFormRules">
        <FormItem prop="username">
          <label class="user">
            <img :src="UserPng" alt="" />
            <Input v-model="loginForm.username" />
          </label>
        </FormItem>
        <FormItem prop="password">
          <label class="password">
            <img :src="PasswordPng" alt="" />
            <Input v-model="loginForm.password" type="password" />
          </label>
        </FormItem>
      </Form>
      <Button class="btn" @click="handleSubmit" :loading="loading" type="primary">登录</Button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import PointWave from '@/components/common/PointWave';
  import UserPng from '@/assets/img/login/user.png';
  import PasswordPng from '@/assets/img/login/password.png';
  export default {
    components: {
      PointWave
    },
    data() {
      return {
        UserPng,
        PasswordPng,
        loading: false,
        loginForm: {
          username: '',
          password: ''
        },
        loginFormRules: {
          username: [{ required: true, message: '请填写用户名' }],
          password: [{ required: true, message: '请输入密码' }]
        }
      };
    },
    methods: {
      ...mapActions(['Login']),
      handleSubmit() {
        const { Login } = this;
        this.$refs.loginForm.validate((valid) => {
          if (!valid) {
            return;
          }
          this.loading = true;
          Login(this.loginForm)
            .then((res) => {
              this.loginSuccess(res);
            })
            .catch(() => {})
            .finally(() => {
              this.loading = false;
            });
        });
      },
      loginSuccess() {
        // console.log('跳转到首页');
        this.$router.push({ path: '/' });
      }
    }
  };
</script>

<style lang="scss">
  #home {
    height: 100%;

    .form {
      position: absolute;
      left: 50%;
      width: 448px;
      top: 35%;
      transform: translate(-50%, -50%);

      .title {
        color: #fff;
        letter-spacing: 1.5px;
        text-align: center;
        display: block;
        position: relative;
        top: -80px;
        color: #1890ff;
        font-size: 40px;
        font-family: Artiely;
      }

      input {
        background: transparent;
        border: 1px solid hsla(0, 0%, 100%, 0.1);
        color: #ded5d5;
        font-size: 14px;
        padding-left: 50px;
        height: 54px;
      }

      .user {
        margin-bottom: 25px;
      }

      label {
        background: rgba(0, 0, 0, 0.1);
        height: 54px;
        display: block;
        position: relative;

        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 25px;
          left: 12px;
        }
      }

      .btn {
        width: 100%;
        font-size: 16px;
        margin-top: 30px;
        height: 40px;
      }
    }
  }
  .loginContainerStyle {
    background-image: url('~@/assets/img/login/bg.png');
    background-size: '100%';
    background-position: '50%';
  }
</style>
