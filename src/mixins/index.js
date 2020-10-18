import userService from '../api/users'
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    getSender(sender) {
      if (typeof sender == 'object' && sender !== null) {
        return sender._id;
      } else if (typeof sender == 'string' && sender !== null) {
        return sender;
      }
    },
    leaveSession() {
      let userObj = {
        _id: this.user._id,
        online: false
      }
      userService.updateUser(userObj)
        .then(() => {
          this.$store.dispatch("leaveSession");
          this.$router.push("/");
        })
        .catch((errors) => console.log(errors))

    }
  }
}