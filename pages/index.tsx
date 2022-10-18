import { AppButton } from "../components/AppButton/AppButton";

export default function Home() {
  return (
    <div className="container mx-auto mx">
      <div className="container mx-auto mx px-8">
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center ">
          <AppButton name="Github" icon="./icons/github-icon.png" />
          <AppButton name="Instagram" icon="./icons/instagram-icon.svg" />
          <AppButton name="Twitter" icon="./icons/twitter-icon.svg" />
          <AppButton name="Telegram" icon="./icons/telegram-icon.svg" />
          <AppButton name="Whatsapp" icon="./icons/whatsapp-icon.svg" />
          <AppButton name="Kakao" icon="./icons/kakao-icon.svg" />
        </div>
      </div>
    </div>
  );
}
