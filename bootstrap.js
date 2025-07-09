<script type="text/javascript">
const correctPassword = "secret123"; // 🔒 Change this to your desired password

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("protected-content").style.display = "block";
  } else {
    document.getElementById("error-msg").textContent = "Incorrect password. Try again.";
  }
}
</script>
