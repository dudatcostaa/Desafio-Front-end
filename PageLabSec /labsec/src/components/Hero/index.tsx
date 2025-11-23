import heroImage from "../../assets/images/HeroBG.png";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div
        className="text-[#1351B4]"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginLeft: "2.5rem" }}
      >
        <p>Soluções na área</p>
        <p>de segurança em</p>
        <p>computação</p>
      </div>
    </section>
  );
}
