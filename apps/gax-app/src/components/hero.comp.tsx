// UI
import { Props } from '@gax/types';
import { Img, Section } from '@gax/ui';
import { clx, cntl } from '@gax/utils';

const heroImgModelStyle = cntl``;

function HeroImg(props: Props<'img'>) {
  return <Img {...props} className={clx(heroImgModelStyle)} />;
}

const heroDescModelStyle = cntl``;

function HeroDesc() {
  return (
    <div className={clx(heroDescModelStyle)}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, nam!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, nam!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, nam!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, nam!
      </p>
    </div>
  );
}

function Hero() {
  return (
    <Section>
      <HeroImg />
      <HeroDesc />
    </Section>
  );
}

export { Hero };
