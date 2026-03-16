const games = [

{name:"Run",url:"https://ubg100.github.io/run/",img:"https://img.icons8.com/fluency/96/running.png"},
{name:"Run 3",url:"https://ubg100.github.io/run-3/",img:"https://img.icons8.com/fluency/96/running.png"},
{name:"Slope",url:"https://ubg100.github.io/slope/",img:"https://img.icons8.com/fluency/96/controller.png"},
{name:"2048",url:"https://ubg100.github.io/2048/",img:"https://img.icons8.com/fluency/96/numbered-list.png"},
{name:"Drift Boss",url:"https://ubg100.github.io/drift-boss/",img:"https://img.icons8.com/fluency/96/racing-flag.png"},
{name:"Retro Bowl",url:"https://ubg100.github.io/retro-bowl/",img:"https://img.icons8.com/fluency/96/american-football.png"},
{name:"Basketball Stars",url:"https://ubg100.github.io/basketball-stars/",img:"https://img.icons8.com/fluency/96/basketball.png"},
{name:"Moto X3M",url:"https://ubg100.github.io/moto-x3m/",img:"https://img.icons8.com/fluency/96/motorcycle.png"},
{name:"Tunnel Rush",url:"https://ubg100.github.io/tunnel-rush/",img:"https://img.icons8.com/fluency/96/controller.png"},
{name:"Stickman Hook",url:"https://ubg100.github.io/stickman-hook/",img:"https://img.icons8.com/fluency/96/stick-figure.png"},

{name:"Crossy Road",url:"https://ubg100.github.io/crossy-road/",img:"https://img.icons8.com/fluency/96/chicken.png"},
{name:"Flappy Bird",url:"https://ubg100.github.io/flappy-bird/",img:"https://img.icons8.com/fluency/96/bird.png"},
{name:"Snake",url:"https://ubg100.github.io/snake/",img:"https://img.icons8.com/fluency/96/snake.png"},
{name:"Tiny Fishing",url:"https://ubg100.github.io/tiny-fishing/",img:"https://img.icons8.com/fluency/96/fishing.png"},
{name:"Paper.io",url:"https://ubg100.github.io/paper-io/",img:"https://img.icons8.com/fluency/96/paper.png"},
{name:"Drive Mad",url:"https://ubg100.github.io/drive-mad/",img:"https://img.icons8.com/fluency/96/car.png"},
{name:"OvO",url:"https://ubg100.github.io/ovo/",img:"https://img.icons8.com/fluency/96/controller.png"},
{name:"Basket Random",url:"https://ubg100.github.io/basket-random/",img:"https://img.icons8.com/fluency/96/basketball.png"},
{name:"Soccer Random",url:"https://ubg100.github.io/soccer-random/",img:"https://img.icons8.com/fluency/96/soccer-ball.png"},
{name:"Fireboy Watergirl",url:"https://ubg100.github.io/fireboy-watergirl/",img:"https://img.icons8.com/fluency/96/fire-element.png"},

{name:"Minecraft Classic",url:"https://ubg100.github.io/minecraft-classic/",img:"https://img.icons8.com/fluency/96/minecraft-logo.png"},
{name:"Geometry Dash",url:"https://ubg100.github.io/geometry-dash/",img:"https://img.icons8.com/fluency/96/square.png"},
{name:"Stack",url:"https://ubg100.github.io/stack/",img:"https://img.icons8.com/fluency/96/stack.png"},
{name:"Fruit Ninja",url:"https://ubg100.github.io/fruit-ninja/",img:"https://img.icons8.com/fluency/96/watermelon.png"},
{name:"Run 2",url:"https://ubg100.github.io/run-2/",img:"https://img.icons8.com/fluency/96/running.png"},
{name:"Slope 2",url:"https://ubg100.github.io/slope-2/",img:"https://img.icons8.com/fluency/96/controller.png"},
{name:"Tank Trouble",url:"https://ubg100.github.io/tank-trouble/",img:"https://img.icons8.com/fluency/96/tank.png"},
{name:"Stick War",url:"https://ubg100.github.io/stick-war/",img:"https://img.icons8.com/fluency/96/sword.png"},
{name:"Age of War",url:"https://ubg100.github.io/age-of-war/",img:"https://img.icons8.com/fluency/96/castle.png"},
{name:"Learn to Fly",url:"https://ubg100.github.io/learn-to-fly/",img:"https://img.icons8.com/fluency/96/penguin.png"},

{name:"Bad Ice Cream",url:"https://ubg100.github.io/bad-ice-cream/",img:"https://img.icons8.com/fluency/96/ice-cream.png"},
{name:"Super Mario",url:"https://ubg100.github.io/super-mario/",img:"https://img.icons8.com/fluency/96/super-mario.png"},
{name:"Rooftop Snipers",url:"https://ubg100.github.io/rooftop-snipers/",img:"https://img.icons8.com/fluency/96/sniper.png"},
{name:"Subway Surfers",url:"https://ubg100.github.io/subway-surfers/",img:"https://img.icons8.com/fluency/96/train.png"},
{name:"Temple Run",url:"https://ubg100.github.io/temple-run/",img:"https://img.icons8.com/fluency/96/treasure-map.png"},
{name:"BitLife",url:"https://ubg100.github.io/bitlife/",img:"https://img.icons8.com/fluency/96/life-cycle.png"},
{name:"Slither.io",url:"https://ubg100.github.io/slither-io/",img:"https://img.icons8.com/fluency/96/snake.png"},
{name:"Pixel Gun",url:"https://ubg100.github.io/pixel-gun/",img:"https://img.icons8.com/fluency/96/pixel-star.png"},
{name:"Spacebar Clicker",url:"https://ubg100.github.io/spacebar-clicker/",img:"https://img.icons8.com/fluency/96/keyboard.png"},
{name:"Tetris",url:"https://ubg100.github.io/tetris/",img:"https://img.icons8.com/fluency/96/tetris.png"}

];

const container = document.getElementById("games");
const player = document.getElementById("player");

function render(filter=""){
container.innerHTML="";
games
.filter(g=>g.name.toLowerCase().includes(filter.toLowerCase()))
.forEach(g=>{
let div=document.createElement("div");
div.className="game";
div.innerHTML=`<img src="${g.img}"><br>${g.name}`;
div.onclick=()=>{player.src=g.url};
container.appendChild(div);
});
}

render();

document.getElementById("search").addEventListener("input",e=>{
render(e.target.value);
});
