<template>
  <div class="footer">
    <div class="footer-details">
      All rights reserved 	&copy; {{timestamp }}
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-component",
  data: function() {
    return {
      timestamp: "" 
    };
  },
  methods: {
    getNow: function() {
      this.timestamp = new Date().getFullYear()
    }
  },
  created: function() {
    setInterval(this.getNow);
  }
};
</script>

<style scoped>
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #b0defa;
  color: #5c5b5e;
  height: 50px;
  position: fixed;
}
.footer-details {
  text-align: center;
  margin-top: 15px;
}
</style>
