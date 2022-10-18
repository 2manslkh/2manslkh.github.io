import { AppButton } from "../components/AppButton/AppButton";

export default function Home() {
  return (
    <div className="container mx-auto mx">
      <div className="container mx-auto mx px-8">
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center ">
          <AppButton name="Github" icon="" />
          <AppButton name="Instagram" icon="" />
          <AppButton name="Twitter" icon="" />
          <AppButton name="Telegram" icon="" />
          <AppButton name="Whatsapp" icon="" />
          <AppButton name="Kakao" icon="" />
        </div>
      </div>
    </div>
  );
}
