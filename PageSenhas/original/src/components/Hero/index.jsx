import { useRef, useEffect } from "react";

export default function Hero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Faz o canvas ocupar a tela inteira
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Pega o contexto 2D
        const c = canvas.getContext("2d");
        if (!c) return;

        // Guarda a posição do mouse
        const mouse = { x: undefined, y: undefined };

        // Paleta de cores para os círculos
        const colorArray = ["F896D8", "#CA7DF9", "#724CF9", "#564592"];

        // Raio máximo e mínimo dos círculos
        const maxRaio = 40;
        const minRaio = 10;

        // Detecta o movimento do mouse
        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };

        // Atualiza o tamanho do canvas quando a janela muda
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); // recria os círculos
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        // Classe
        function Circle(x, y, dx, dy, raio) {
            this.x = x;
            this.y = y;
            this.dx = dx; // velocidade no eixo x
            this.dy = dy; // velocidade no eixo y
            this.raio = raio;
            this.minRaio = raio; // tamanho base do círculo
            this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

            // Função que desenha o círculo
            this.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();
            };

            // Rebater nas bordas horizontais e verticais
            this.update = function () {
                if (this.x + this.raio > innerWidth || this.x - this.raio < 0) {
                    this.dx = -this.dx;
                }
                if (this.y + this.raio > innerHeight || this.y - this.raio < 0) {
                    this.dy = -this.dy;
                }

                // Movimenta o círculo
                this.x += this.dx;
                this.y += this.dy;

                // Crescimento ao passar o mouse
                if (
                    mouse.x - this.x < 50 && // distância horizontal
                    mouse.x - this.x > -50 &&
                    mouse.y - this.y < 50 && // distância vertical
                    mouse.y - this.y > -50
                ) {
                    // Controla a velocidade de crescimento
                    if (this.raio < maxRaio) {
                        this.raio += 2;
                    }
                }
                // Encolhe se o mouse sair de perto
                else if (this.raio > this.minRaio) {
                    this.raio -= 1;
                }

                this.draw();
            };
        }

        // Criação do conjunto de círculos
        let circleArray = [];

        function init() {
            circleArray = []; // limpa o array
            for (let i = 0; i < 100; i++) {
                // cria 400 círculos
                const raio = Math.random() * 10 + 1;
                const x = Math.random() * (window.innerWidth - raio * 2) + raio;
                const y = Math.random() * (window.innerHeight - raio * 2) + raio;
                const dx = Math.random() - 0.5; // velocidade aleatória x
                const dy = Math.random() - 0.5; // velocidade aleatória y

                circleArray.push(new Circle(x, y, dx, dy, raio));
            }
        }

        //  Loop de animação (repetido infinitamente)
        function animate() {
            requestAnimationFrame(animate); // chama de novo o animate()
            c.clearRect(0, 0, canvas.width, canvas.height); // limpa tela

            // Atualiza e desenha todos os círculos
            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update();
            }
        }

        // Inicializa e começa a animação
        init();
        animate();
    });

    return (
        //mob first sm md lg
        <section className="flex items-center justify-center min-h-screen text-center">
            <canvas ref={canvasRef} className="absolute"></canvas>
            <div className="relative flex flex-col gap-2 bg-[#000209]/90 rounded-xl">
                <p className="txtGradiente text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold p-2">Segurança</p>
                <p className="txtGradiente text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold p-2">de</p>
                <p className="txtGradiente text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold p-2">senhas</p>
            </div>
        </section>
    );
}
