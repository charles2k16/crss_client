<template>
  <div class="session">
    <div class="session_head">
      <h3>Class Session</h3>

      <div>
        <el-button type="danger" icon="el-icon-turn-off" size="mini" @click="leaveSession">
          Leave Session
        </el-button>
        <el-button type="primary" icon="el-icon-user" size="mini">
          Welcome {{ user.name }}
        </el-button>
      </div>
    </div>

    <el-row type="flex" justify="center">
      <el-col :span="6">
        <div class="message-box">
          <div>
            <p>Online Teacher: <el-tag size="mini">Xha</el-tag></p>
            <el-collapse>
              <el-collapse-item title="Online Students">
                <ul v-for="u in onlineUsers" :key="u._id">
                  <li>{{ u.name }}</li>
                </ul>
              </el-collapse-item>
            </el-collapse>
          </div>
          <br /><br />
          <el-input
            type="textarea"
            v-model="message"
            rows="7"
            placeholder="Send questions"
          ></el-input>
          <div style="margin-top: 15px;">
            <el-button icon="el-icon-s-promotion" @click="sendMessage"></el-button>
            <el-button icon="el-icon-full-screen" @click="showBoard = true"
              >Send Equation</el-button
            >
          </div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="chat-window">
          <div
            :class="msg.sender_id !== user._id ? 'incoming-message' : 'outgoing-message'"
            v-for="(msg, index) in messages"
            :key="index"
          >
            <div>
              <p>
                {{ msg.message }}
              </p>
              <div>
                <img :src="getImageUrl(msg.media)" alt="pic" v-if="msg.media" />
              </div>

              <span>Sent By: {{ msg.sender_id !== user._id ? msg.sender.name : user.name }}</span>
              <span> => few seconds ago</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="Board()" :visible.sync="showBoard" fullscreen>
      <DrawingBoard v-on:finished="closeDrawingBoard" />
    </el-dialog>
  </div>
</template>

<script>
import io from "socket.io-client";
import messageService from "../api/messages";
import userService from "../api/users";
import { mapGetters } from "vuex";

import DrawingBoard from "../components/DrawingBoard";

export default {
  name: "Session",
  components: {
    DrawingBoard
  },
  data() {
    return {
      onlineUsers: [],
      message: "",
      messages: [],
      showBoard: false,
      socket: io("localhost:3000")
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  mounted() {
    this.socket.on("MESSAGE", data => {
      this.messages = [...this.messages, data];
    });
  },
  // watch: {
  //   messages: function(v) {
  //     console.log(v);
  //   }
  // },
  created() {
    this.getAllMessages();
    this.getOnlineUsers();
  },
  methods: {
    getAllMessages() {
      messageService.getMessages().then(response => {
        this.messages = response.data;
        console.log(this.messages);
      });
    },
    getOnlineUsers() {
      let self = this;
      userService
        .getUsers()
        .then(response => {
          self.onlineUsers = response.data.filter(user => user.online === true);
        })
        .catch(error => console.log(error));
    },
    sendMessage(e) {
      e.preventDefault();

      if (!this.message || this.message.trim() === "") {
        return;
      }
      let messageObj = {
        message: this.message.trim(),
        sender: this.user._id,
        name: this.user.name,
        sender_id: this.user._id
      };

      messageService
        .createMessage(messageObj)
        .then(response => {
          this.socket.emit("SEND_MESSAGE", response.data);
        })
        .catch(errors => console.log(errors));

      this.message = "";
    },
    closeDrawingBoard() {
      this.showBoard = false;
    }
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

      img {
        width: 70%;
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

      img {
        width: 70%;
      }

      span {
        font-size: 12px;
      }
    }
  }
}
</style>
