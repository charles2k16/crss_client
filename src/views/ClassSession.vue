<template>
  <div class="session">
    <div class="session_head">
      <h3>Class Session</h3>
      <el-button type="text" icon="el-icon-turn-off"> Leave Session</el-button>
    </div>

    <el-row type="flex" justify="center">
      <el-col :span="6">
        <div class="message-box">
          <p>Online Teacher: <el-tag size="mini">Xha</el-tag></p>
          <el-button type="text">Online Students <i class="el-icon-arrow-down"></i></el-button>
          <ul>
            <li>Cha</li>
            <li>Xig</li>
            <li>Ama</li>
            <li>Chi</li>
          </ul>

          <el-input
            type="textarea"
            v-model="message"
            rows="7"
            placeholder="Send questions"
          ></el-input>
          <div style="margin-top: 15px;">
            <el-button icon="el-icon-s-promotion"></el-button>
            <el-button icon="el-icon-full-screen">Send Equation</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="chat-window">
          <div class="outgoing-message">
            <div>
              <p>
                Mesage hi all people in the group, hope we all going good Mesage hi all people in
                the group, hope we all going good
              </p>
              <span>Sent By: Cha</span> <span>| few seconds ago</span>
            </div>
          </div>
          <div class="incoming-message">
            <div>
              <p>
                Mesage hi all people
              </p>
              <span>Sent By: Cha</span> <span>| few seconds ago</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Session",
  data() {
    return {
      message: ""
    };
  }
};
</script>

<style scoped lang="scss">
.session {
  width: 100;
  margin: 20px;

  .session_head {
    display: flex;
    justify-content: space-between;
  }
}

.chat-window {
  border: 1px dashed #1e2e5f;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  margin-left: 10px;

  .outgoing-message {
    width: 80%;
    background: transparent;
    float: right;
    margin: 10px 5px;
    position: relative;
    padding: 5px;

    div {
      float: right;
      background: #ced8f7;
      border: 1px solid rgb(231, 229, 229);
      border-radius: 8px;
      padding: 0 5px;

      p {
        font-size: 15px;
        margin-bottom: 4px;
        margin-top: 5px;
      }

      span {
        font-size: 12px;
      }
    }
  }

  .incoming-message {
    width: 80%;
    background: transparent;
    float: left;
    margin: 10px 5px;
    position: relative;
    padding: 5px;

    div {
      float: left;
      background: #e7daf7;
      border: 1px solid rgb(231, 229, 229);
      border-radius: 8px;
      padding: 0 5px;

      p {
        font-size: 15px;
        margin-bottom: 4px;
        margin-top: 5px;
      }

      span {
        font-size: 12px;
      }
    }
  }
}
</style>
