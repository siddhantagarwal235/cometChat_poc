import { CometChat } from "@cometchat-pro/chat";

const appID = "2076178ef3745bb4";
const region = "us";
let authKey = "c852e4b81435bc6e20084edfaa72cda975dd9222";
export const initializeCometChat=()=>{
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {

    console.log("Initialization completed successfully");
  },

  error => {
    console.log("hello")
    console.log("Initialization failed with error:", error);
  }
);
}

export const createUser=()=>{
  
var uid = "sid235";
var name = "Siddhant Agarwal2";

var user = new CometChat.User(uid);
user.setName(name);
CometChat.createUser(user, authKey).then(
    user => {
        console.log("user created", user);
    },error => {
        console.log("error", error);
    }
)
}

export const loginUser=()=>{

const uid = "superhero2";

CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user });    
  },
  error => {
    console.log("Login failed with exception:", { error });    
  }
);
}
