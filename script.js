let Statue = "Online";
document.getElementById("statue").innerHTML = "🟢 " + Statue;
console.log("Circlify alpha");
console.log("You are " + Statue);

function setStatus() {
  const select = document.getElementById("statusSelect");
  Statue = select.value;

  let emoji = "🟢";
  if (Statue === "Offline") emoji = "⚫";
  else if (Statue === "DND") emoji = "🔴";

  document.getElementById("statue").innerHTML = `${emoji} ${Statue}`;
  console.log("Status changed to " + Statue);
}

// Existing functions unchanged:
function createPost() {
  const content = prompt("Write your post:");
  if (content) {
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `<strong>You:</strong> ${content}`;
    document.getElementById("posts").prepend(post);
  }
}

function createPoll() {
  const question = prompt("Poll question:");
  if (question) {
    const poll = document.createElement("div");
    poll.className = "post";
    poll.innerHTML = `
      <strong>Poll:</strong> ${question}<br/>
      <button onclick="vote(this)">✅ Yes</button>
      <button onclick="vote(this)">❌ No</button>
    `;
    document.getElementById("posts").prepend(poll);
  }
}

function vote(button) {
  button.style.background = "#00c896";
  button.disabled = true;
}

function changeTheme() {
  alert("Theme changing coming soon! check our website later");
}
