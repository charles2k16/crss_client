import userService from '../api/users'
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    getHostName() {
      let hn = window.location.hostname
      let uploadUrl = hn == 'localhost' ? "http://127.0.0.1:3000/uploads/" : "https://crss-server.herokuapp.com/uploads/"
      return uploadUrl;
    },
    getImageUrl(pic) {
      const url = this.getHostName()
      console.log(url)
      return url + pic
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