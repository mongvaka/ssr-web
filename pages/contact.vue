<template>
  <div class="screen">
    {{ uId }}
    <input
      class="inp"
      for="message"
      type="text"
      placeholder="พิมพ์ข้อความ"
      required
      v-model="roomId"
    />
    <div v-on:click="newServer()" class="sendbtn icon-btn">new server</div>
    <div v-on:click="conectServer()" class="sendbtn icon-btn">connect</div>
    <div class="videochat">
      <video src class="camera-stream main-overay" id="local_video" autoplay playsinline></video>
      <video src class="camera-peer main-overay" id="stream_video" autoplay playsinline></video>

      <div class="operater">
        <div class="share icon-btn">
          <img class="img-icon-opr" src="/images/computer.png" />
        </div>
        <div v-on:click="showCamera()" class="camera icon-btn">
          <img class="img-icon-opr" src="/images/video-camera.png" />
        </div>
        <div class="mic icon-btn">
          <img class="img-icon-opr" src="/images/mic.png" />
        </div>
        <div class="valumn icon-btn">
          <img class="img-icon-opr" src="/images/volume.png" />
        </div>
        <div class="dismiss icon-btn">
          <img class="img-icon-opr" src="/images/phone-call.png" />
        </div>
      </div>
    </div>
    <div class="message">
      <div class="readarea main-overay">
        <div class="message-unit">hello left</div>
        <div class="message-unit">hello right</div>
      </div>
      <div class="typeper">
        <div class="addfile icon-btn">
          <img class="img-icon" src="/images/more.png" />
        </div>
        <div class="inputmessage">
          <input
            class="inp"
            for="message"
            type="text"
            placeholder="พิมพ์ข้อความ"
            required
            v-model="message"
          />
        </div>
        <div v-on:click="sendMessage()" class="sendbtn icon-btn">
          <img class="img-icon" src="/images/send-message.png" />
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script setup>
useHead({
  title: "BIZ SPACE รับทำระบบ : ติดต่อเรา",
  meta: [
    {
      name: "description",
      content: "ติดต่อ BIZ SPACE"
    }
  ]
});
</script>
<script>
import { Peer } from "peerjs";
import { v4 as uuidv4 } from "uuid";

//  const conn = peer.connect("mong-peer-1");
// var conn = peer.connect(this.roomId);

export default {
  data() {
    return {
      message: "defualt",
      uId: uuidv4(),
      roomId: "",
      peer: new Peer(),
      connection: null,
      localStream:null,
      caller:null
    };
  },
  created: function() {
    this.listen();
  },
  mounted() {
    this.peer.on('connection', function(conn) {
      console.log(conn);
      conn.on('data', function(data){
        // Will print 'hi!'
        console.log(data);
      });

      // console.log('Connection is open');
      //   conn.on('open',function(){
      //   conn.on('data', function(data) {
      //       console.log('Data: '+data);
      //   });
      //  });
    });
    this.peer.on('call', call =>{
        console.log("onCall");
        call.answer(this.localStream);
        call.on("stream",stream=>{
        const remoteVideo = document.getElementById("stream_video");
        remoteVideo.srcObject = stream;
        remoteVideo.onloadedmetadata = ()=> remoteVideo.play();
        })
      })
      this.peer.on('stream', call =>{
        console.log("onStreammmmmm");
  
      })
    // this.connection.on("data", function(data) {
    //       console.log("Received", data);
    //     });
  },
  methods: {
    callStream(){
      console.log("callStream");
      this.caller.on("stream",stream=>{
          console.log("onstream");
        const remoteVideo = document.getElementById("stream_video");
        remoteVideo.srcObject = stream;
        remoteVideo.onloadedmetadata = ()=> remoteVideo.play();
            })
    },
    listen() {
      this.peer = new Peer();
      console.log("listen method" + this.uId);
      this.connection = this.peer.connect(this.uId);
      this.peer.on("open", function(id) {
        console.log("My peer ID is: " + id);

      });
      this.peer.on('connection', function(conn) {
        console.log("onConnection");
      });

    },
    showCamera() {
      const myvideo = document.getElementById("local_video");
      myvideo.srcObject = null;
      let camera =
        this.cameraFace == "rear"
          ? { facingMode: { exact: "environment" } }
          : "user";
      myvideo.muted = false;
      navigator.mediaDevices
        .getUserMedia({
          video: camera,
          audio: true
        })
        .then(stream => {
          this.localStream = stream
          myvideo.srcObject = this.localStream;
        })
        .catch(e => {
          alert("Camera not found");
          this.cameraFace = "front";
          localStorage.setItem("cameraFace", this.cameraFace);
          this.showCamera();
        });
    },
    newServer() {
      //   console.log("newServer",this.uId);
      //  const connection =  this.peer.connect(this.uId);
    },
    // conectServer() {
    //   console.log("connectServer", this.roomId);
    //   this.peer = new Peer();
    //   this.connection = this.peer.connect(this.roomId);
    //   this.peer.on("open", function(id) {
    //     console.log("My peer ID is: " + id);
    //   });
    // },
    sendMessage() {
      var conn = this.peer.connect(this.roomId);
      conn.on('open', function(){
        // here you have conn.id
        conn.send("hi");
      });
    },
    conectServer(){
      // var conn2= this.peer.connect(this.roomId);
      // conn2.on('open', function(){
      //   // here you have conn.id
      //   conn2.send("hi");
      // });
      const myvideo = document.getElementById("local_video");
      myvideo.srcObject = null;
      myvideo.muted = false;
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true
        })
        .then(stream => {
          this.localStream = stream;
        myvideo.srcObject = this.localStream;
        this.caller = this.peer.call(`${this.roomId}`,this.localStream)
        this.callStream();
        }).catch(function(err) {
          console.log("error: " + err);
        })

      
    }
  }
};
</script>

<style scope>
.screen {
  display: flex;
  justify-content: center;
}
.videochat {
  height: 650px;
  width: 63%;
  position: relative;
  margin-right: 1%;
}
.message {
  height: 650px;
  width: 33%;
  position: relative;
}
.readarea {
  height: 650px;
  width: 100%;
}
.typeper {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}
.operater {
  display: flex;
  justify-content: center;
}
.img-icon-opr {
  width: 30px;
  height: 30px;
}
.camera-stream {
  height: 112px;
  width: 150px;
  margin: 10px;
  position: absolute;
}
.camera-peer {
  width: 100%;
  height: 650px;
}
.icon-btn {
  border: 1px;
  border-style: solid;
  border-radius: 15px;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
  color: gray;
}
.inp {
  border: 1px;
  border-style: solid;
  border-radius: 15px;
  width: 95%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  margin-top: 3px;
  margin-left: 0px !important;
}
.inputmessage {
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 5px;
  margin-right: 5px;
}
.main-overay {
  border: 1px;
  border-radius: 15px;
  border-style: solid;
  color: gray;
}
.message-unit {
  margin-top: 5px;
  background-color: rgba(0, 128, 0, 0.318);
  border: 1px;
  border-color: grey;
  border-style: solid;
  max-width: 70%;
  margin-left: auto;
  margin-right: 5px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 0px;

  padding: 10px;
}
</style>