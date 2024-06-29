import React, { useEffect, useRef } from 'react';

const CanvasAnimation = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      const sidebarWidth = 25; // Width of the sidebars
      const headerFooterHeight = 35; // Height of the header and footer
      
      // Set canvas dimensions taking into account the sidebars and header/footer
      canvas.width = (window.innerWidth - sidebarWidth * 2) * window.devicePixelRatio;
      canvas.height = (window.innerHeight - headerFooterHeight * 2) * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth - sidebarWidth * 2}px`;
      canvas.style.height = `${window.innerHeight - headerFooterHeight * 2}px`;
    };

    resizeCanvas();

    class Dot {
      constructor(x, y, effect) {
        this.originX = x;
        this.originY = y;
        this.effect = effect;
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.ctx = this.effect.ctx;
        this.ctx.fillStyle = darkMode ? '#F7F3E3' : '#2E242A';
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.9;
        this.friction = 0.95;
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        this.size = 1;
        this.draw();
      }

      draw() {
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, this.size, this.size);

      }

      update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance * 8;

        if (this.distance < this.effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        this.draw();
      }
    }

    class Effect {
      constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.ctx = context;
        this.particlesArray = [];
        this.gap = 10;
        this.mouse = {
          radius: 0,
          x: 0,
          y: 0,
        };
        this.mouseTimer = null;
        this.init();
        this.addEventListeners();
      }

      addEventListeners() {
        window.addEventListener('mousemove', this.handleMouseMove.bind(this));
        window.addEventListener('resize', this.handleResize.bind(this));
      }

      handleMouseMove(e) {
        this.mouse.x = e.clientX * window.devicePixelRatio -50;
        this.mouse.y = e.pageY * window.devicePixelRatio-60;
        this.mouse.radius = 10000;

        clearTimeout(this.mouseTimer);
        this.mouseTimer = setTimeout(() => {
          this.mouse.radius = 0;
        }, 750);
      }

      handleResize() {
        resizeCanvas();
        this.width = canvas.width;
        this.height = canvas.height;
        this.particlesArray = [];
        this.init();
      }

      init() {
        for (let x = 0; x < this.width; x += this.gap) {
          for (let y = 0; y < this.height; y += this.gap) {
            this.particlesArray.push(new Dot(x, y, this));
          }
        }
      }

      update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.particlesArray.length; i++) {
          this.particlesArray[i].update();
        }
      }
    }

    const effect = new Effect(canvas.width, canvas.height, ctx);

    const animate = () => {
      effect.update();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', effect.handleResize);
      window.removeEventListener('mousemove', effect.handleMouseMove);
    };
  }, [darkMode]);

  return (
    <div style={{ position: 'absolute', top: '35px', bottom: '35px', left: '25px', right: '25px' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default CanvasAnimation;
