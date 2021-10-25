class Plus {
  constructor() {
    this.icon = {
      x: 0,
      y: 0,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      scale: 1
    };
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.setTransform(
      this.icon.scale,
      0,
      0,
      this.icon.scale,
      this.icon.left + this.icon.x,
      this.icon.top + this.icon.y
    );
    ctx.lineWidth = 2;
    ctx.moveTo(0, -this.icon.height / 2);
    ctx.lineTo(0, this.icon.height / 2);

    ctx.moveTo(-this.icon.width / 2, 0);
    ctx.lineTo(this.icon.width / 2, 0);

    ctx.stroke();
    ctx.closePath();
    ctx.restore();

  }
}

const c = document.querySelector("#c");
const ctx = c.getContext("2d");
const canvas = document.querySelector(".canvas");

const signs = [];
const mouse = {
  x: 0,
  y: 0
};
const gridLength = 9;

let mouseMoved = false;
let mouseOver = false;

const init = () => {
  c.width = canvas.offsetWidth;
  c.height = canvas.offsetHeight;

  for (let i = 0; i < gridLength; i++) {
    signs[i] = [];
    for (let j = 0; j < gridLength; j++) {
      const sign = new Plus();
      const min = Math.min(c.width, c.height);
      sign.icon.left = c.width / (gridLength + 1) * (i + 1);
      sign.icon.top = c.height / (gridLength + 1) * (j + 1);

      sign.icon.width = min / 50;
      sign.icon.height = min / 50;

      signs[i][j] = sign;
    }
  }
};

const animate = () => {
  ctx.clearRect(0, 0, c.width, c.height);

  if (mouseMoved && mouseOver) {
    calculateIconPosition();

    mouseMoved = false;
  }

  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      const sign = signs[i][j];

      sign.draw(ctx);
    }
  }
};

const calculateIconPosition = () => {
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      const sign = signs[i][j];
      let radius = Math.min(c.width, c.height) / (gridLength + 1) / 2;
      const dx = mouse.x - sign.icon.left;
      const dy = mouse.y - sign.icon.top;

      const dist = Math.hypot(dx, dy) || Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      const angle = Math.atan2(dy, dx);

      dist < radius + sign.icon.width ?
        ((radius = dist),
          TweenMax.to(sign.icon, 0.3, {
            scale: 2
          })) :
        TweenMax.to(sign.icon, 0.3, {
          scale: 1
        });

      TweenMax.to(sign.icon, 0.3, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      });
    }
  }
};

const mouseMove = e => {
  const rect = c.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;

  mouseMoved = true;
};

const mouseLeave = e => {
  mouseOver = false;
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      const sign = signs[i][j];

      if (!mouseOver) {
        TweenMax.to(sign.icon, 0.3, {
          x: 0,
          y: 0,
          scale: 1
        });
      }
    }
  }
};

const mouseEnter = e => {
  mouseOver = true;
};

init();
window.addEventListener("resize", init);
TweenLite.ticker.addEventListener("tick", animate);
c.addEventListener("mouseenter", mouseEnter);
c.addEventListener("mouseleave", mouseLeave);
c.addEventListener("mousemove", e => mouseMove(e));