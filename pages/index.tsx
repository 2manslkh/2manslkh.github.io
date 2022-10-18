import { AppButton } from "../components/AppButton/AppButton";

export default function Home() {
  return (
    <div className="container mx-auto mx px-8">
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center ">
        <AppButton
          name="Github"
          icon="./icons/github-icon.png"
          link="https://github.com/2manslkh"
        />
        <AppButton
          name="Instagram"
          icon="./icons/instagram-icon.svg"
          link="https://instagram.com/kenkhwin"
        />
        <AppButton
          name="Twitter"
          icon="./icons/twitter-icon.svg"
          link="https://twitter.com/zK_enk"
        />
        <AppButton
          name="Telegram"
          icon="./icons/telegram-icon.svg"
          link="https://t.me/zKenk"
        />
        <AppButton
          name="Whatsapp"
          icon="./icons/whatsapp-icon.svg"
          link="https://wa.me/qr/E3KTGXRXXSQGB1"
        />
        {/* <AppButton name="Kakao" icon="./icons/kakao-icon.svg" />
        <AppButton name="OnlyFans" icon="./icons/onlyfans-blue-icon.svg" /> */}
        <AppButton
          name="LinkedIn"
          icon="./icons/linkedin-icon.svg"
          link="http://linkedin.com/in/kenghin"
        />
      </div>
    </div>
  );
}
