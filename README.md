# GAX (short for Galaxy) is the name of the project

## What is this project about?

Well, this is kinda my portfolio, finally after years in the programming field I have decided to create My portfolio.
Excited about this project. it will include many great things.

## I didn't know what to write here, so I wrote some code to explain it. I hope it helps.

```TS
// Types are declared globally, no need to import them
import { isEmpty, isNil, apply, equals } from 'ramda';

const errorBoundary = (e: Error) => console.log(e.message)

const buffer = ({person, foodAmount, iceTea, build}) => build(person, foodAmount, iceTea);

const build = (developer: Person, food = 0, iceTea = 0) =>
        isNil(developer) || apply(equals(0), [food, iceTea]) ? new Error('Build has faild') : developer.start(food, iceTea);

export const init = () =>
                fetch('life://planet-earth.global/aiman99aleryany')
                .then((res) => res.json())
                .then((res) => buffer({...res, build}))
                .catch(errorBoundary)
```

// Scratch that, I know what I am doing;

## What will the portfolio include?

1. My old projects, **All My old Projects.**
2. **Blogs!** ... All my good code that I create then I forget in which project i implemented it, and then I end up writing
   the code again from scratch. But with the blogs, this problem is solved, write once debug everywhere, I mean write once use
   everywhere.
3. Nice animations just for fun.

I think these are all the things the project will include for now, maybe I will add another section to write about general things  
in programming, Dev life, and stuff like that. you know, **how to not go crazy as a web dev**.

## Application Flowchart and Diagram

I figured that there is no need for an application flowchart nor other diagrams, so I just created a small and  
simple System Requirement to remind me of what I need to create.  
can be found in `docs` directory.

## Tech stack:

1. Typescript
2. Vite

along with the cool boring **library** React, you can check the `package.json` file to see all the packages I am using.  
Oh yeah, almost forgot to mention this, I am using some kind of mono-repo approach where I write my packages as I go.
you can find them in `packages`.  
why write them in a separate folder? go through the code base and you will understand.

Side note:
**This is the frontend application only, there will be another repo for the backend application**

## Env Configuration:

TODO: Document the project configuration.

## Git Configuration:

TODO: Document the git strategy you will implement.

## Folder Structure:

TODO: Document the folder structure.

## Application Structure:

TODO: Document How everything will work.
