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
import userService from "../api/users";

export default {
  name: "Home",
  data() {
    return {
      btnLoading: false,
      teacherPresent: false,
      teacher: null,
      users: [],
      loginForm: {
        name: "",
        user_type: "",
        online: true
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
  created() {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      userService
        .getUsers()
        .then(response => {
          this.users = response.data;
          let findTeacher = this.users.find(user => user.user_type === "Teacher");
          this.teacherPresent = findTeacher ? true : false;
          this.teacher = this.teacherPresent ? findTeacher : null;
        })
        .catch(errors => console.log(errors));
    },
    enterSession() {
      this.btnLoading = true;
      let u = this.users;
      let checkusers = Array.isArray(u) || u.length ? this.login() : this.signUp();
    },
    login() {
      let authuser = this.users.find(user => user.name == this.loginForm.name);
      if (authuser) {
        this.$store.dispatch("get_user", authuser);
        this.btnLoading = false;
        this.$router.push("/session");
      } else {
        this.signUp();
      }
    },
    signUp() {
      let self = this;
      if (this.teacher !== null && this.loginForm.user_type === "Teacher") {
        alert("There is a teacher already in the session");
      } else {
        this.$refs["loginForm"].validate(valid => {
          if (valid) {
            userService
              .createUser(this.loginForm)
              .then(response => {
                this.$store.dispatch("get_user", response.data);
                this.$store.dispatch("get_teacher", self.teacher);
                this.btnLoading = false;
                this.$router.push("/session");
              })
              .catch(errors => console.log(errors));
          } else {
            this.btnLoading = false;
            return false;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss">
.login {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  .login_form {
    width: 430px;
    border-radius: 10px;
    padding: 25px;
    background-color: whitesmoke;
  }
}
</style>
