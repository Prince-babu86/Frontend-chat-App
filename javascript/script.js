let imagesUrl = [
  "https://i.pinimg.com/736x/04/b0/59/04b0591d7402691ad4f766df004119d3.jpg",
  "https://i.pinimg.com/736x/04/b0/59/04b0591d7402691ad4f766df004119d3.jpg",
  "https://i.pinimg.com/736x/20/e7/b8/20e7b827ee837dd267ee6429ad0dbd4b.jpg",
  "https://i.pinimg.com/736x/15/46/98/154698a7c8053c7ce22b1bd3c2623b2f.jpg",
  "https://i.pinimg.com/736x/40/ac/ba/40acba111f4548a62593dd7856d68a3a.jpg",
  "https://i.pinimg.com/736x/2f/f0/a5/2ff0a526be60ab87b3f4edfefedaf407.jpg",
  "https://i.pinimg.com/736x/e0/80/eb/e080eb087a2cf514694eca04e124b3e9.jpg",
  "https://i.pinimg.com/736x/85/b4/c0/85b4c0c79197c91f0f815503da3b7fe6.jpg",
  "https://i.pinimg.com/736x/de/f3/5f/def35faa9d4e7d5e09f0f276c96573c8.jpg",
  "https://i.pinimg.com/736x/fc/0f/4a/fc0f4aa2a138d9456d80070dce3399c2.jpg",
  "https://i.pinimg.com/736x/e6/f1/cc/e6f1cce0937e33e1fdb6443706003c82.jpg",
  "https://i.pinimg.com/736x/4c/78/3a/4c783a3af9cba10e85f7e7b148b4503b.jpg",
  "https://i.pinimg.com/736x/35/07/57/350757ab158513cf03b0c794b71263ca.jpg",
  "https://i.pinimg.com/736x/db/27/12/db2712dc61169866225ad3bd411e3abd.jpg",
  "https://i.pinimg.com/736x/97/de/09/97de09c8d9e7731ed2b78cccc045a24f.jpg",
  "https://i.pinimg.com/736x/b9/29/b4/b929b43610fd658735b182df514f97cf.jpg",
  "https://i.pinimg.com/736x/52/7f/06/527f06aca25cfe1ff6100ff2990a1272.jpg",
  "https://i.pinimg.com/736x/92/fb/ef/92fbef5fa7dd87df06454563690cc17c.jpg",
  "https://i.pinimg.com/736x/d0/74/6c/d0746c822c78a48c5e434313e60d1577.jpg",
  "https://i.pinimg.com/736x/63/1a/54/631a544c5b8ba2c32a0790008be79a81.jpg",
  "https://i.pinimg.com/736x/b7/d2/b0/b7d2b08dffa26a19d7b8307208183f10.jpg",
  "https://i.pinimg.com/736x/bf/3f/80/bf3f8077e9a4e42118ccf33478050f8a.jpg",
  "https://i.pinimg.com/736x/9e/7a/44/9e7a4418bd0eb4700f440de46d984285.jpg",
  "https://i.pinimg.com/736x/5e/6c/0b/5e6c0bdf553132931eed468b3b6a3ca3.jpg",
  "https://i.pinimg.com/736x/48/37/98/48379896088a6982e95f86352e533b01.jpg",
  "https://i.pinimg.com/736x/07/de/b7/07deb7508406766eeb30a82631982549.jpg",
  "https://i.pinimg.com/736x/ce/66/7d/ce667dee9f7fd1d548e5a86e0b5145e9.jpg",
  "https://i.pinimg.com/736x/f3/b9/b9/f3b9b9f98b0841795aa92404a9419a5e.jpg",
  "https://i.pinimg.com/736x/f9/c6/71/f9c671a98d4a6555ea30af394981d571.jpg",
  "https://i.pinimg.com/736x/5c/dd/d6/5cddd6b567a344d04e951ed05b59f7f4.jpg",
  "https://i.pinimg.com/736x/5a/d4/b5/5ad4b5dfd5baf52ae628d7d995bd210c.jpg",
  "https://i.pinimg.com/736x/36/fe/73/36fe73aff60fe2ad8d18fe9dd325b544.jpg",
  "https://i.pinimg.com/736x/be/f9/fd/bef9fd13e6b0890852adbebaee7b7616.jpg",
  "https://i.pinimg.com/736x/5c/57/2a/5c572ad52d3c8f3318dd9618bf8a05b6.jpg",
  "https://i.pinimg.com/736x/fa/82/f2/fa82f29f42bb94ca3e2c7495ce54e45a.jpg",
  "https://i.pinimg.com/736x/c4/8f/55/c48f55dec0cc2ae64dc303894ab838fb.jpg",
  "https://i.pinimg.com/736x/de/ce/1f/dece1fca091f290b52da14b53cdba385.jpg",
  "https://i.pinimg.com/736x/d1/47/d5/d147d5620b6fcc5816e01c7ff8d9389d.jpg",
  "https://i.pinimg.com/736x/e5/42/54/e54254aba4d677660a069a77f227e3d5.jpg",
  "https://i.pinimg.com/736x/0f/31/08/0f3108cfa59d0b13df5a7c6e7f2f23e5.jpg",

]

function generateRandomImageURL(width = 300, height = 300) {
  const randomId = Math.floor(Math.random() * imagesUrl.length); // Random ID to get different images
  return imagesUrl[randomId];
}

// Example usage:
const randomImage = generateRandomImageURL();
// console.log(randomImage); // Outputs something like https://picsum.photos/id/456/300/300

function getRandomReply() {
  const replies = [
    "Hey, how's it going?",
    "What's up?",
    "Long time no see!",
    "What are you working on?",
    "That sounds interesting!",
    "Tell me more!",
    "Haha, nice one!",
    "Let's catch up soon!",
    "Are you free now?",
    "I was just thinking about you!",
    "Just chilling like a villain 😎",
    "Did you just say that out loud? 🤔",
    "I was literally thinking about that 😂",
    "Bruh, that’s what I’m talking about!",
    "Do you ever stop talking? 😅",
    "Wait, what? Are you serious? 🤯",
    "I have no idea what you're saying, but sounds cool 😂",
    "Well, that escalated quickly! 😂",
    "You’re a genius… in your own way 😏",
    "I’m laughing but also confused 🤔😂",
    "Are you the next meme king? 👑",
    "This is too much for me to handle 😵",
    "Hold up, let me get my popcorn 🍿",
    "I’m still processing this, give me a sec 🧠💥",
    "Lmao, I’m dead 😂",
    "I don’t know what’s happening but I’m here for it!",
  ];

  const index = Math.floor(Math.random() * replies.length);
  return replies[index];
} // e.g., "What are you working on?"

// Usage
const users = JSON.parse(localStorage.getItem("Usersdata")) || [
  {
    name: "Aarav Sharma",
    username: "aarav_s",
    email: "aarav.sharma@example.com",
    phone: "9876543210",
    skill: "Frontend Developer",
    address: "Delhi, India",
    dp: "https://i.pinimg.com/736x/e0/80/eb/e080eb087a2cf514694eca04e124b3e9.jpg",
    createdAt: "04/05/2025",
    messages: [
      //
    ],
  },
  {
    name: "Priya Verma",
    username: "priya_ve",
    email: "priya.verma@example.com",
    phone: "9123456789",
    skill: "UI/UX Designer",
    address: "Mumbai, India",
    dp: "https://i.pinimg.com/736x/e5/a9/5a/e5a95a3b7e8dca0cf15a3eb045007ab9.jpg",
    createdAt: "03/05/2025",
    messages: [],
  },
  {
    name: "Rahul Mehta",
    username: "rahul_dev",
    email: "rahul.mehta@example.com",
    phone: "9812345678",
    skill: "MERN Stack Developer",
    address: "Jaipur, India",
    dp: "https://i.pinimg.com/736x/de/f3/5f/def35faa9d4e7d5e09f0f276c96573c8.jpg",
    createdAt: "02/05/2025",
    messages: [],
  },
  {
    name: "Simran Kaur",
    username: "simran_ui",
    email: "simran.kaur@example.com",
    phone: "9988776655",
    skill: "Graphic Designer",
    address: "Amritsar, India",
    dp: "https://i.pinimg.com/736x/fc/0f/4a/fc0f4aa2a138d9456d80070dce3399c2.jpg",
    createdAt: "01/05/2025",
    messages: [],
  },
];

let random = Math.floor(Math.random() * imagesUrl.length);
let loginbtn = document.getElementById("login-btn");
let loginForm = document.querySelector(".form-box");
let formwrapper = document.querySelector(".form-wrapper");
let name = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let skill = document.getElementById("skill");
let address = document.getElementById("address");
let formBtn = document.getElementById("login-btn-form");
let contacts = document.querySelector(".contacts");

loginbtn.addEventListener("click", (e) => {
  formwrapper.style.display = "flex";
  console.log("clicked");
});

formwrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("form-wrapper")) {
    formwrapper.style.display = "none";
  }
});

function checker() {
  const user = JSON.parse(localStorage.getItem("User"));
  let userLogedimage = document.querySelector("#loged-uesr-image");
  if (user) {
    console.log("User is logged in:", user.name);
    userLogedimage.src = user.dp;
    loginbtn.style.display = "none";
  } else {
    console.log("No user is logged in.");
  }
}

checker();

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = {
    name: name.value,
    username: username.value,
    email: email.value,
    phone: phone.value,
    skill: skill.value,
    address: address.value,
    dp: imagesUrl[random],
    createdAt: new Date().toLocaleDateString(),
  };
  localStorage.setItem("User", JSON.stringify(user));
  formBtn.innerHTML = `<div class="spiner-btn"></div>`;

  setTimeout(() => {
    formBtn.innerHTML = "Submit";
    formwrapper.style.display = "none";
    name.value = "";
    username.value = "";
    email.value = "";
    phone.value = "";
    skill.value = "";
    address.value = "";
  }, 3000);
});

function rederContacts() {
  let clutter = "";
  users.forEach((elem, id) => {
    let lastmessage = elem.messages[elem.messages.length - 1];
   

    clutter += `
      <div class="contact">
      <div id=${id} class="select" ></div>
                <div class="user">
                  <img class="userdp"
                    src=${elem.dp}
                    alt=""
                  />
                  <h4>${elem.name}</h4>
                 
                </div>
                <div class="user-ext">
                  <h5>${
                    elem.messages.length > 0
                      ? elem.messages[elem.messages.length - 1].timestamp
                      : ""
                  } </h5>
                 <h6>${
                   elem.messages.length > 0 
                     ? elem.messages[elem.messages.length - 1].content
                     : ""
                 }</h6>
                </div>
              </div>`;
  });

  contacts.innerHTML = clutter;
}

rederContacts();

let activeUserIndex = null;
let msgsenderinput = document.getElementById("msg-sender-input");
let chatContainer = document.querySelector(".messages-container-data");
let inputFile = document.getElementById("fileupload");

let randomImagecontent = null;

// console.log(randomImagecontent);
// Safe rerender: only clears once
function rerender() {
  chatContainer.innerHTML = "";
  //   if (!users[activeUserIndex] || !users[activeUserIndex].messages) return;

  users[activeUserIndex].messages.forEach((msg) => {
    const msgDiv = document.createElement("div");
    const msgDivImg = document.createElement("img");
    const messagebubble = document.createElement("div");
    const text = document.createElement("div");
    const meta = document.createElement("div");

    msgDiv.classList.add("message-row", msg.from === "me" ? "you" : "sender");

    if (msg.from === "me") {
      const user = JSON.parse(localStorage.getItem("User"));
      msgDivImg.setAttribute("src", user?.dp || "default_me.jpg");
    } else {
      msgDivImg.setAttribute("src", users[activeUserIndex].dp);
    }

    // if(msg.from === "user" && msg.content === randomImagecontent){
    //   const img = document.createElement("img")
    //   img.setAttribute("src" , randomImagecontent)
    //   img.classList.add("image-add")
    //   messagebubble.appendChild(img)
    //   messagebubble.style.backgroundColor = "transparent";
    //   // text.textContent = ""
    // }else{
    //   text.textContent = msg.content
    // }

    if (msg.content.startsWith("image=".toLowerCase())) {
      const imageUrl = msg.content.split("image=")[1];
      // console.log(imageUrl);
      const img = document.createElement("img");
      img.setAttribute("src", imageUrl);
      img.classList.add("image-add");
      messagebubble.style.backgroundColor = "transparent";
      messagebubble.appendChild(img);
      // console.log(msgDiv);
    } else if(msg.content.startsWith("yt=".toLowerCase())){
      let youtube = document.createElement("iframe");
      let ytUrl = msg.content.split("yt=")[1]
      youtube.setAttribute("src" , `https://www.youtube.com/embed/${ytUrl}`);
      youtube.setAttribute("allowfullscreen" , "")
      messagebubble.style.backgroundColor = "transparent"
      messagebubble.appendChild(youtube)
      console.log("ytvideo");
    }
    else {
      text.textContent = msg.content;
    }

    //  if (msg.content.startsWith(randomImagecontent)){
    //   let imageurl = randomImagecontent
    //   const img = document.createElement("img");
    //   img.setAttribute("src", imageurl);
    //   img.classList.add("image-add2");
    //   messagebubble.appendChild(img);
    //   messagebubble.style.backgroundColor = "transparent";
    //   // text.textContent = ""
    //   console.log(messagebubble);
    // }else{
    //   // text.textContent = msg.content;
    // }

    msgDivImg.classList.add("avatar");
    msgDiv.appendChild(msgDivImg);

    messagebubble.classList.add("message-bubble");
    text.classList.add("text");
    meta.classList.add("meta");

    meta.textContent = msg.timestamp;

    messagebubble.appendChild(text);
    messagebubble.appendChild(meta);
    msgDiv.appendChild(messagebubble);
    chatContainer.appendChild(msgDiv);
  });
}

// Assign only once
msgsenderinput.addEventListener("keypress", function (e) {
  randomImagecontent = generateRandomImageURL();
  if (e.key === "Enter" && activeUserIndex !== null) {
    let value = e.target.value.trim();
    if (value === "") return;

    let msg = {
      from: "me",
      type: "text",
      content: value,
      timestamp: new Date().toLocaleTimeString(),
    };

    if (
      value === "hey" ||
      value === "hello" ||
      value === "namsate" ||
      value === "hi" ||
      value === "hii"
    ) {
      const replymsg = {
        from: "user",
        type: "text",
        content: "Hello , What can I help you",
        timestamp: new Date().toLocaleTimeString(),
      };

   

      setTimeout(() => {
        users[activeUserIndex].messages.push(replymsg);
        localStorage.setItem("Usersdata", JSON.stringify(users));
        rerender();
        rederContacts();
        chatContainer.scrollTop = chatContainer.scrollHeight;
        document.querySelector(".user-stat-circi h4").innerHTML = "Online";
        document.querySelector(".user-stat-circi h4").style.color = "#464646";
      }, 2000);
    } else if (
      value === "how are you" ||
      value === "kya chal raha hai" ||
      value === "or sab bhaidai"
    ) {
      const replymsg = {
        from: "user",
        type: "text",
        content: "I am also fine and you",
        timestamp: new Date().toLocaleTimeString(),
      };

      console.log(replymsg);

      setTimeout(() => {
        users[activeUserIndex].messages.push(replymsg);
        localStorage.setItem("Usersdata", JSON.stringify(users));
        rerender();
        rederContacts();
        chatContainer.scrollTop = chatContainer.scrollHeight;
        document.querySelector(".user-stat-circi h4").innerHTML = "Online";
        document.querySelector(".user-stat-circi h4").style.color = "#464646";
      }, 2000);
    } else if (
      value === "i love you" ||
      value === "i like you" ||
      value === "💖💖" ||
      value === "i am fine" ||
      value === "who are you" ||
      value === "love" ||
      value === "like"
    ) {
      const replymsg = {
        from: "user",
        type: "text",
        content: "I Love You so much 💖💖😎😎🥰🥰 ",
        timestamp: new Date().toLocaleTimeString(),
      };

      console.log(replymsg);

      setTimeout(() => {
        users[activeUserIndex].messages.push(replymsg);
        localStorage.setItem("Usersdata", JSON.stringify(users));
        rerender();
        rederContacts();
        chatContainer.scrollTop = chatContainer.scrollHeight;
        document.querySelector(".user-stat-circi h4").innerHTML = "Online";
        document.querySelector(".user-stat-circi h4").style.color = "#464646";
      }, 2000);
    } else if (
      value === "img" ||
      value === "image" ||
      value === "can you create a image" ||
      value === "create a image" ||
      value === "create image" ||
      value === "more" ||
      value === "add more" ||
      value === "add a photo" ||
      value === value.includes("img")
    ) {
      const replymsg = {
        from: "user",
        type: "image",
        content: "Yes sure i can create a image",
        timestamp: new Date().toLocaleTimeString(),
      };

      // if(randomImagecontent !== null){
      //   randomImagecontent = generateRandomImageURL()
      //   randomImagecontent = null
      // }else{
      //   console.log(randomImagecontent);
      // }

      const created = {
        from: "user",
        type: "image",
        content: "Created",
        timestamp: new Date().toLocaleTimeString(),
      };

      const createImage = {
        from: "user",
        type: "text",
        content: `image=${randomImagecontent}`,
        timestamp: new Date().toLocaleTimeString(),
      };

      

      console.log(createImage);

      setTimeout(() => {
        users[activeUserIndex].messages.push(replymsg);
        localStorage.setItem("Usersdata", JSON.stringify(users));
        rerender();
        rederContacts();
        chatContainer.scrollTop = chatContainer.scrollHeight;
        document.querySelector(".user-stat-circi h4").innerHTML = "Creating...";
        document.querySelector(".user-stat-circi h4").style.color = "blue";

        setTimeout(() => {
          users[activeUserIndex].messages.push(createImage);
          localStorage.setItem("Usersdata", JSON.stringify(users));
          rederContacts();
          rerender();

          chatContainer.scrollTop = chatContainer.scrollHeight;
          document.querySelector(".user-stat-circi h4").innerHTML = "Created";
          document.querySelector(".user-stat-circi h4").style.color = "#464646";
          setTimeout(() => {
            users[activeUserIndex].messages.push(created);
          localStorage.setItem("Usersdata", JSON.stringify(users));
          rederContacts();
          rerender();

          chatContainer.scrollTop = chatContainer.scrollHeight;
          document.querySelector(".user-stat-circi h4").innerHTML = "Online";
          document.querySelector(".user-stat-circi h4").style.color = "#464646";
          }, 1000);
        }, 3000);
      }, 2000);
    } else {
      const replymsg = {
        from: "user",
        type: "text",
        content: getRandomReply(),
        timestamp: new Date().toLocaleTimeString(),
      };

      setTimeout(() => {
        users[activeUserIndex].messages.push(replymsg);
        localStorage.setItem("Usersdata", JSON.stringify(users));
        rerender();
        chatContainer.scrollTop = chatContainer.scrollHeight;
        document.querySelector(".user-stat-circi h4").innerHTML = "Online";
        document.querySelector(".user-stat-circi h4").style.color = "#464646";
        rederContacts();
      }, 2000);
    }

    users[activeUserIndex].messages.push(msg);
    document.querySelector(".user-stat-circi h4").innerHTML = "Typing...";
    document.querySelector(".user-stat-circi h4").style.color = "green";

    localStorage.setItem("Usersdata", JSON.stringify(users));
    e.target.value = "";
    rerender();
    rederContacts();
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
});

// inputFile.addEventListener("change" , function(e){
//     const file = e.target.files[0]
//     if(file){
//         const objecturl = URL.createObjectURL(file)
//         console.log(objecturl);
//         if (file.type.startsWith("image/")) {
//             let msg = {
//                 from: "me",
//                 type: "image",
//                 url: objecturl,
//                 timestamp: new Date().toLocaleTimeString(),
//               };
//               users[activeUserIndex].messages.push(msg);
//               localStorage.setItem("Usersdata", JSON.stringify(users));
//               rerender();

//           }
//     }

// })

// When a contact is clicked

contacts.addEventListener("click", function (e) {
  let index = e.target.id;

  console.log(e.target.classList.contains("userdp"));

  if(e.target.classList.contains("userdp")){
    document.querySelector(".userProfileView").style.display = "flex"
    document.querySelector(".userProfileView img").src = e.target.src
  }

  if (e.target.classList.contains("select")) {
    activeUserIndex = index;
     document.querySelector(".userProfileView").style.display = "none"
    chatContainer.scrollTop = chatContainer.scrollHeight
    document.querySelector(".pager").style.display = "none";
    document.querySelector(".message-box-banner").style.display = "flex";
    document.querySelector(".message-container").style.height = "100%";
    // document.querySelector(".container nav").style.display = "none"
    document.querySelector(".container nav").style.display = "none";

    // Update UI
    document.querySelector(".msg-box-top .user-data img").src = users[index].dp;
    document.querySelector(".user-stat h4").innerHTML = users[index].name;
    document.querySelector(".user-dt-top img").src = users[index].dp;
    document.querySelector(".user-dt-top h2").innerHTML = users[index].name;
    document.querySelector(".user-dt-top h3").innerHTML = users[index].address;
    document.querySelector(".user-dt-top h4").innerHTML = users[index].skill;
    document.querySelector(".item .item-phone").innerHTML = users[index].phone;
    document.querySelector(".item .item-email").innerHTML = users[index].email;
    document.querySelector(".item .item-createdat").innerHTML =
      users[index].createdAt;

    rerender();
  }

 
});


document.querySelector(".userProfileView i").addEventListener("click" , function(){
   document.querySelector(".userProfileView").style.display = "none"
})

document.querySelector(".userProfileView").addEventListener("click" , function(e){
  if(e.target.classList.contains("userProfileView")){
     document.querySelector(".userProfileView").style.display = "none"
  }
})

document
  .querySelector(".ri-arrow-left-line")
  .addEventListener("click", function () {
    document.querySelector(".message-box-banner").style.display = "none";
    document.querySelector(".message-container").style.height = "100%";
    document.querySelector(".container nav").style.display = "flex";
  });

document
  .querySelector(".ri-information-2-line")
  .addEventListener("click", function (e) {
    console.log("clicked");
    document.querySelector(".user-details-sections").style.display = "block";
    document.querySelector(".message-box-banner").style.width = "55%";
  });

document
  .querySelector(".user-details-sections .ri-close-fill")
  .addEventListener("click", function (e) {
    document.querySelector(".user-details-sections").style.display = "none";
    document.querySelector(".message-box-banner").style.width = "100%";
    console.log(".........");

  });


document.querySelector(".ri-emotion-line").addEventListener("click" , function(){
  // document.querySelector(".emojies").style.display = "flex"
  chatContainer.scrollTop = chatContainer.scrollHeight
})

function scrollDown(){
  chatContainer.scrollTop = chatContainer.scrollHeight
}

scrollDown()

document.querySelector(".emojies").addEventListener("click" , function(e){
  
})


chatContainer.addEventListener("click" , function(e){
  if(e.target.classList.contains("image-add")){
    document.querySelector(".fullscreenview").style.display = "flex"
    document.querySelector(".fullscreenview img").src = e.target.src
  }
})

document.querySelector(".fullscreenview").addEventListener("click" , function(e){
  if(e.target.classList.contains("fullscreenview")){
 document.querySelector(".fullscreenview").style.display = "none"
  }
  
})

