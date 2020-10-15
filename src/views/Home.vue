<template>
  <div class="login">
    <div class="login_form ">
      <h2>Welcome to the new way to access your classroom</h2>
      <p>Get started to as a teacher or student and enter a class session</p>

      <div>
        <el-form :model="loginForm" ref="loginForm" :rules="rules" style="">
          <el-form-item prop="name" class="my-3">
            <el-input
              v-model="loginForm.name"
              placeholder="enter a name"
              clearable
              prefix-icon="el-icon-user"
            />
          </el-form-item>
          <el-form-item prop="user_type" class="my-3">
            <el-radio-group v-model="loginForm.user_type">
              <el-radio label="Teacher"></el-radio>
              <el-radio label="Student"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            :loading="btnLoading"
            @click="enterSession"
            icon="el-icon-mouse"
          >
            Enter Session / room</el-button
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      btnLoading: false,
      loginForm: {
        name: "",
        user_type: "",
        online: false
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter a name",
            trigger: ["blur", "change"]
          },
          { max: 3, message: "Length should not be more than 3 characters", trigger: "blur" }
        ],
        user_type: [{ required: true, message: "Choose a type", trigger: "blur" }]
      }
    };
  },
  methods: {
    enterSession() {
      console.log(this.loginForm);
    }
  }
};
</script>
