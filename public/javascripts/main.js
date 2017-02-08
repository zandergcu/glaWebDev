console.log(`



 ██████╗ ██╗      █████╗
██╔════╝ ██║     ██╔══██╗
██║  ███╗██║     ███████║
██║   ██║██║  ██╗██╔══██║
╚██████╔╝███████║██║  ██║
 ╚═════╝ ╚══════╝╚═╝  ╚═╝
██╗    ██╗███████╗██████╗
██║    ██║██╔════╝██╔══██╗
██║ █╗ ██║█████╗  ██████╔╝
██║███╗██║██╔══╝  ██╔══██╗
╚███╔███╔╝███████╗██████╔╝
 ╚══╝╚══╝ ╚══════╝╚═════╝
██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝
╚═════╝ ╚══════╝  ╚═══╝

INFO:        @GLA_WEB_DEV`);



var slackForm = document.getElementById('slackform');
var slackFormInput = document.getElementById('mail');

slackForm.onsubmit = function() {
if (this.id == "join") {
    location = "/slack/join/" + encodeURIComponent(slackFormInput.value);
}
return false;
}
