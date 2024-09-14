import { SkillCard } from './Skill.card';
import { Db } from '@gax/data-access';

export function SkillsArea() {
    return (
        <div className="h-screen w-full text-gray-300">
            {/* Container */}
            <div className="mx-auto flex h-full w-full flex-col justify-center p-4">
                <div>
                    <p className="inline border-b-4 border-pink-600 text-4xl font-bold ">
                        Skills
                    </p>
                    <p className="py-4">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="flex w-full flex-wrap gap-6 py-8">
                    {Db.skills.map((skill) => (
                        <SkillCard
                            name={skill.name}
                            src={skill.icon}
                            description={skill.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
