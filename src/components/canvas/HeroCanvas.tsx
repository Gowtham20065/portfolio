import React, { useEffect, useRef } from 'react';

interface NodeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  label: string;
  isOp: boolean;
}

const AST_LABELS = [
  'BinOp', 'SafeVisitor', 'TokenBucket', 'Mutex', 'AST.Node',
  'Vector', 'Redis.Lua', 'NumPy.Matrix', 'LSB.Mask', 'DAG.Sort',
  'PyMuPDF', 'PyTest', 'Prisma.Tx', 'POSIX.IO', 'ChromaDB'
];

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    let mouse = { x: -1000, y: -1000, active: false };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Generate Nodes
    const isMobile = width < 768;
    const nodeCount = isMobile ? 22 : 45;
    const particles: NodeParticle[] = [];

    for (let i = 0; i < nodeCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: Math.random() * 2 + 2,
        label: AST_LABELS[i % AST_LABELS.length],
        isOp: i % 4 === 0,
      });
    }

    // Pause when off-screen using IntersectionObserver
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    // Render loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw Connection Edges
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = isMobile ? 110 : 150;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(182, 242, 58, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & Draw Nodes
      particles.forEach((p) => {
        // Subtle mouse repulsion/attraction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        // Velocity movement
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Node Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.isOp ? '#B6F23A' : '#71766D';
        ctx.fill();

        // Node Glow for operator nodes
        if (p.isOp) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.baseRadius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(182, 242, 58, 0.08)';
          ctx.fill();
        }

        // Draw Monospace Label
        if (!isMobile) {
          ctx.font = '9px "Geist Mono", monospace';
          ctx.fillStyle = p.isOp ? 'rgba(182, 242, 58, 0.7)' : 'rgba(154, 158, 149, 0.4)';
          ctx.fillText(p.label, p.x + 7, p.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};
