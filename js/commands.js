
var github = "https://github.com/bryanohh";
var youtube = "https://youtube.com/channel/UCMVl08cfn44AOAMYuIk0EzA";
var twitch = "https://twitch.tv/Bryanohh";
var tiktok = "https://tiktok.com/@Bryanohh";
var twitter = "https://twitter.com/Bryxnoh";
var discord = "https://discord.gg/MYsvYXbg2P";
var repo = "https://github.com/Bryanohh/BryanTerminalPortfolio";
var email = '';
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `I am Bryanoh, you can simply call me Bryan. I'm a student who enjoys exploring and creating projects, with AI supported!`,
  `I Play Minecraft for a living! Well, I try to make good quality videos... Check me out on my links!`,
  "<br>",
];

links = [
  `<table>
   <tr><td>Github</td><td><a href="${github}" target="_blank">https://github.com/bryanohh</a></td></tr>
   </table>`,
   `<table>
   <tr><td>Youtube</td><td><a href="${youtube}" target="_blank">https://youtube.com/channel/UCMVl08cfn44AOAMYuIk0EzA</a></td></tr>
   </table>`,
   `<table>
   <tr><td>Twitch</td><td><a href="${twitch}" target="_blank">https://twitch.tv/Bryanohh</a></td></tr>
   </table>`,
   `<table>
   <tr><td>Tiktok</td><td><a href="${tiktok}" target="_blank">https://tiktok.com/@Bryanohh</a></td></tr>
   </table>`, 
   `<table>
   <tr><td>Twitter</td><td><a href="${twitter}" target="_blank">https://twitter.com/Bryxnoh</a></td></tr>
   </table>`, 
   `<table>
   <tr><td>Discord</td><td><a href="${discord}" target="_blank">https://discord.gg/MYsvYXbg2P</a></td></tr>
   </table>`,  
   
];

projects = [
  "<br>",
  "Check out my latets projects!",
  "Here is a list of some GitHub repositories that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
  repos,
];

help = [
  "<br>",
  'Use these commands to navigate my web-terminal:',
  // format as table to achieve responsive column layout
  `<table>
      <tr><td><span class="command">about</span></td><td>Who is Bryan?</td></tr>
  <tr><td><span class="command">links</span></td><td>Display my social links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View coding projects</td></tr>
  <tr><td><span class="command">repo</span></td><td>View repository</td></tr>
  <tr><td><span class="command">banner</span></td><td>View banner</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clears commands</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion (More commands)</td></tr>
  </table>`,
  "<br>",
];

banner = [
  "<br>",
  "███████████ ",                                           
  "░░███░░░░░███ ",                                         
  "░███    ░███ ████████  █████ ████  ██████   ████████  ",
  "░██████████ ░░███░░███░░███ ░███  ░░░░░███ ░░███░░███ ",
  "░███░░░░░███ ░███ ░░░  ░███ ░███   ███████  ░███ ░███ ",
  "░███    ░███ ░███      ░███ ░███  ███░░███  ░███ ░███ ",
  "███████████  █████     ░░███████ ░░████████ ████ █████ ",
  "░░░░░░░░░░░  ░░░░░       ░░░░░███  ░░░░░░░░ ░░░░ ░░░░░ ",
  "                         ███ ░███                      ",
  "                       ░░██████                       ",
  "                        ░░░░░░                    © 2022   ",
  "<br>",
];

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Welcome to my website.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> to see a list of available commands.</span>",
  "<br>",  
  "<span class=\"color2 terminal-welcome-msg\">The project is open-source, type </span> <span class=\"command terminal-welcome-msg\">'repo'</span><span class=\"color2 terminal-welcome-msg\"> to check out the repository.</span>",
  "<br>",  
  "<span class=\"color2 terminal-welcome-msg\">New commands will come out soon, type </span> <span class=\"command terminal-welcome-msg\">'comingsoon'</span><span class=\"color2 terminal-welcome-msg\"> to view future commands!</span>",

];

comingsoon = [
  '<span class="color2 terminal-welcome-msg">Yo! Here are new commands that are coming soon!</span>',
  "<br>",
  "Easter Eggs & Games!",
];

allCommands = [
 "help", "about", "links", "projects", "repo", "email", "goals", "github", "youtube", "twitch", "tiktok", "twitter", "discord", "history", "clear", "banner",
 "comingsoon",
];


