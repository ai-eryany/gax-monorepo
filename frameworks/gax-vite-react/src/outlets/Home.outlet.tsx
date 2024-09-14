import { HomePage } from '@pages';
import { Container } from '@gax/ui';
import { clx, cntl } from '@gax/utils';
import { useWindow } from '@gax/hooks';
import { elementFadeInAnimation } from '@styles';

const style = cntl`
    max-w-7xl
    
`;

export function HomeOutlet() {
    const [windowWidth] = useWindow();

    return (
        <HomePage>
            <Container
                style={{ width: windowWidth - 300 }}
                className={clx(style, elementFadeInAnimation.fade)}
            >
                {/* 300 is the side social media width when hovered on */}
                {/* <HeroArea /> */}
                {/* <AboutArea /> */}
                {/* <SkillsSection /> */}
                {/* <WorkSection /> */}
                {/* <ContactSection /> */}
            </Container>
        </HomePage>
    );
}
