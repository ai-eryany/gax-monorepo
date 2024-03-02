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

1. **Typescript**  
   Why TypeScript when there isn't an extensive dataset to handle?" Well, my preference steers away from JavaScript. However, data persists in various forms, and during the iterative process, code refactoring occurs frequently, potentially leading to the utilization of inappropriate data types. Moreover, I contend that employing types facilitates the development of marginally more organized code structures

2. **Vite**  
   This development environment is unequivocally outstanding, scoring a solid '10'. The server operates swiftly, and the build time is impressively rapid—what more could one desire? Every time I initiate the server, I'm consistently in awe of its velocity. Furthermore, Vite offers a plethora of plugins, enhancing code cleanliness—akin to Next.js, imports feature '@' effortlessly. Vite can be seamlessly configured with fully typed objects, adding to its versatility.

3. **React**  
   When it comes to developing web applications, React emerges as the go-to framework. Its robust ecosystem significantly accelerates the development process.

4. **SWR**  
   The unparalleled champion of fetching and handling requests, particularly with its Stale-while-revalidate strategy, which streamlines the processing of asynchronous code. This efficiency is further heightened when seamlessly integrated with Axios.

5. **Axios**  
   Why Axios? Well, it offers a smoother experience compared to using the fetch API, minimizing the challenges and complexities typically associated with asynchronous data retrieval.

6. **Ramda**  
   Write me some functional code! making things cleaner and more readable.

7. **Zod**  
   Validating data structures.

8. **Tailwindcss & SASS**  
   Both tools serve their purpose in styling. Why utilize both? Tailwind CSS, while proficient in many aspects, lacks comprehensive support for animations. Additionally, I aim to avoid cluttering the Tailwind CSS configuration with numerous custom values. Hence, SASS primarily handles animation components. Consequently, finding files with SASS imports indicates their focus on animations.

9. **Terser**  
   Rollup will bundle the code, Terser will optimize the bundle and mangle it.

10. **React Error Boundary**  
    This is the peak of handling errors with react.

11. **Panda/core**  
    This is the pacakge I am writing, you can find the source code in the `packages` directory.

**These are the most important packages used in the project that I wanted to point out.**

Oh yeah, almost forgot to mention that I am using some kind of mono-repo approach where I write my packages as I go as a seperate project. you can find them in `packages`.  
why write them in a separate directory? ever heard of mono-repo?

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
