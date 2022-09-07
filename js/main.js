var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");
var after = document.getElementById("after");

var git = 0;
var tab = 0;
var pw = false;
let pwd = false;
var commandsLog = [];
var selectedTabCmd = "";
var current_theme = "coral";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

setTimeout(async function() {
  //await new Promise((resolve)=>{resolve(loopLines(banner, "terminal-banner", 80));});
  await loopLines(banner, "terminal-banner", 20);
  loopLines(welcomeMsg, "", 80);
  textarea.focus();
}, 100);

window.addEventListener('click', focusTextArea, true); 
window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function focusTextArea() {
  textarea.focus();
}

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  // Enter key
  if (e.keyCode == 13) {    
    removeTabCompleteLine();    
    tab = 0;                                  // update the tab index
    if ( selectedTabCmd != "" ) {
      textarea.value = selectedTabCmd;
      command.innerHTML = selectedTabCmd;
      selectedTabCmd = "";
      return;
    }
    commandsLog.push(command.innerHTML);
    git = commandsLog.length;                 // update the arrow key index
    addLine(" > " + command.innerHTML, "no-animation", 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  // Arrow up
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commandsLog[git];
    command.innerHTML = textarea.value;
  }
  // Arrow down
  if (e.keyCode == 40 && git != commandsLog.length) {
    git += 1;
    if (commandsLog[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commandsLog[git];
    }
    command.innerHTML = textarea.value;
  }
  // Tab complete
  if (e.keyCode == 9) {
    // if (textarea.value.length == 0) {
    //   refreshTabCompleteLine("");
    // }
    // else {
      cmdOptions = completeQuery(allCommands, textarea.value);
      if ( tab == cmdOptions.length ) {
        tab = 0;
      }
      if (cmdOptions.length == 1) {
        textarea.value = cmdOptions[0];
        command.innerHTML = textarea.value;
      }
      else if (cmdOptions.length > 1) {
        selectedTabCmd = cmdOptions[tab];

        suggestionTxt = "";
        for (let i = 0; i < cmdOptions.length; i++) {
          if ( i == tab ) {
            suggestionTxt += `<span class=\"command\">${cmdOptions[i]}</span>    `;
            continue;
          }
          suggestionTxt += `<span class=\"inherit\">${cmdOptions[i]}</span>    `;
        }
        refreshTabCompleteLine(suggestionTxt, "no-animation", 0);
      }
      tab += 1;
    }
  // }
}


function commander(cmd) {
  var cmdAll = cmd.split(" "); 
  var cmd = cmdAll[0];
  var args = "";
  if (cmdAll.length > 1) {
    args = cmdAll.slice(1).join(" ");
  }
  switch (cmd.toLowerCase()) {
    // content stuff
    case "help":
      loopLines(help, "color2 margin no-animation", 20);
      break;
    case "about":
      loopLines(about, "color2 margin no-animation", 0);
      break;
    case "links":
      loopLines(links, "color2 margin no-animation", 0);
      break;
    case "projects":
      loopLines(projects, "color2 margin no-animation", 0);
      break;
      case "repo":
        addLine("Opening repository...", "color2", 0);
        newTab(repo);
        break;
    case "email":
      addLine('Opening mailto:<a href="mailto:"></a>...', "color2", 80);
      newTab(email);
      break;
      case "goals":
        addLine('For 2022-2023 I would love to:', "color2", 80);
        addLine('🎉 Grow up an amazing community', "color2", 80);
        addLine('🎉 Hit 500 Subscribers on Youtube', "color2", 80);
        addLine('🎉 Hit 500 Followers on Twitch', "color2", 80);
        addLine('🎉 Hit 1k Followers on Tiktok', "color2", 80);
        addLine('🎉 Create More Websites Templates!', "color2", 80);
        addLine('🎉 And A Lot More!', "color2", 80);
        break;
    // socials
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
      case "youtube":
      addLine("Opening Youtube...", "color2", 0);
      newTab(youtube);
      break;
      case "twitch":
      addLine("Opening Twitch...", "color2", 0);
      newTab(twitch);
      break;
      case "tiktok":
      addLine("Opening Tiktok...", "color2", 0);
      newTab(tiktok);
      break;
      case "Twitter":
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
      break;
      case "discord":
      addLine("Opening Discord...", "color2", 0);
      newTab(discord);
      break;
    // functional commands
    case "history":
      addLine("<br>", "", 0);
      loopLines(commandsLog, "color2", 20);
      addLine("<br>", "command", 80 * commandsLog.length + 50);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "terminal-banner", 20);
      break;
      // Fun commands
    case "Yeah, This is a coming soon command as well ;D":
      addLine('Permission denied: unable to run the command "undefined" as root...', "color2", 0);
      setTimeout(function() {
        window.open('');
      }, 1); 
      break;
      case "comingsoon":
        loopLines(comingsoon, "color2 margin no-animation", 20);
        break;
    case "":
      addLine("", "color2", 0);
      break;
    default:
      addLine(`Command not found: ${cmd}. Type <span class=\"command\">'help'</span> to see available commands.`, "inherit no-animation", 0);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

async function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  //setTimeout(function() {
  await delay(time);
  var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  //}, time);
  return;
}

async function loopLines(name, style, time) {
  // name.forEach(function(item, index) {
  //     addLine(item, style, index * time);
  // });
  for (var i = 0; i < name.length; i++) {
    await addLine(name[i], style, i * time);
  }
  return;
}

function completeQuery(arr, query) {
  // Completes the query string with a list of matching elements from arr
  return arr.filter(function(item) {
    return item.startsWith(query);
  });
}

function refreshTabCompleteLine(text, style, time) {
  // Refreshes the line below the command for tab completion suggestions
  removeTabCompleteLine();
  setTimeout(function() {
    var next = document.createElement("p");
    next.setAttribute("id", "tabCompleteLine");
    next.innerHTML = text;
    next.className = style;

    after.parentNode.insertBefore(next, after);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function removeTabCompleteLine() {
  // Deletes the HTML element
  var tcl = document.getElementById("tabCompleteLine");
  if ( tcl !== null ) {
    tcl.outerHTML = "";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}