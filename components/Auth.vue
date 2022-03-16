<template>
<el-card class="d-flex box-card">
  <div class="mb card-header">
    <span class="h1">Авторизация</span>
  </div>

  <el-alert v-show="isChecked" :title="message" :type="type" center show-icon />

  <el-form :model="form" center="true">
    <el-form-item label="Имя">
      <el-input v-model="form.name" type="text" autocomplete="off" />
    </el-form-item>

    <el-form-item label="Пароль">
      <el-input v-model="form.pass" type="password" autocomplete="off" />
    </el-form-item>

    <el-form-item>
      <el-button class="fl" type="primary" @click="submitForm()">Вход</el-button>
    </el-form-item>
  </el-form>
</el-card>
</template>

<script>
export default {
  name: 'MvcAuth',
  data() {
    return {
      form: {
        name: '',
        pass: ''
      },
      isChecked: false,
      message: 'Заполните данные',
      type: ''
    }
  },
  methods: {
    submitForm() {
      if (this.form.name !== '' && this.form.pass !== '') {
        this.message = 'Успешно'
        this.type = 'success'
      } else {
        this.message = 'Заполните данные'
        this.type = 'error'
      }

      this.isChecked = !this.isChecked
    }
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: center;
}

.h1 {
  font-size: 30px;
  font-weight: 700;
}

.mb {
  margin-bottom: 30px;
}

.mt {
  margin-top: 10px;
}

.fl {
  float: right;
}
</style>
