import { HomePage } from '@pages';
import {
    HeroComp,
    AboutComp,
    ContactComp,
    SkillsComp,
    WorkComp,
} from '@components';
import { Container } from '@gax/ui';
import { clx } from '@gax/utils';
import { useWindow } from '@gax/hooks';

function HomeOutlet() {
    const [windowWidth] = useWindow();

    return (
        <HomePage>
            {/* 300 is the side social media width when hovered on */}
            <Container
                style={{ width: windowWidth - 300 }}
                className={clx('max-w-7xl')}
            >
                <HeroComp />
                <AboutComp />
                <SkillsComp />
                <WorkComp />
                <ContactComp />
            </Container>
        </HomePage>
    );
}

export { HomeOutlet };
