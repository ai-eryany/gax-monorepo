# GAX (short for Galaxy) is the name of the project

## What is this project about?

Well, this is kinda my portfolio, finally after years in the programming field I have decided to
create My portfolio. Excited about this project. it will include many great things.

## I didn't know what I am doing, so I wrote some code. I hope it helps.

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
   When it comes to developing web applications, React emerges as the go-to framework. Its robust ecosystem significantly accelerates the development process. **I hate React**

4. **Axios**  
   Why Axios? Well, it offers a smoother experience compared to using the fetch API, minimizing the challenges and complexities typically associated with asynchronous data retrieval. why am I using it with a frontend app? well.. look around and find out!

5. **Ramda**  
   Write me some functional code! making things cleaner and more readable.

6. **Tailwindcss & SASS**  
   Both tools serve their purpose in styling. Why utilize both? Tailwind CSS, while proficient in many aspects, lacks comprehensive support for animations. Additionally, I aim to avoid cluttering the Tailwind CSS configuration with numerous custom values. Hence, SASS primarily handles animation components. Consequently, finding files with SASS imports indicates their focus on animations.

7. **Terser**  
   Rollup will bundle the code, Terser will optimize the bundle and mangle it.

8. **React Error Boundary**  
   This is the peak of handling errors with react.

9. **mr**  
   This is the package I am writing, you can find the source code in the `packages` directory.
   This package will be a piece of art. simple yet dynamical .. it's customized to help you
   write piped functions with conditions and callbacks.. it also accepts async functions
   which makes async code tolerable. **I hate async code, therefore I created this library**
   **it's still not ready ... So you won't find it yet in the directory**

**These are the most important packages used in the project that I wanted to point out.**

Oh yeah, almost forgot to mention that I am using a monorepo approach where I write my
packages as I go in a seperate project. you can find them in `packages`.  
why write them in a separate directory? ever heard of monorepo?

## Side note:

**This is a front-end application only**

## Env Configuration:

TODO: Document the project configuration.

## Git Configuration:

### Git branches naming convention

        Format: feature_name/issue_name

### Git commits naming convention

-   Adding New features:  
     "Add: navbar languages menu"

---

-   Fixing old features:  
    "Fix: navbar horizontal scrollbar bug"

---

-   Removing old features:  
    "Remove: navbar background color"

---

-   Updating old features:  
    "Update: navbar width"

---

-   Combinations:  
    "Add: navbar langauges menu | Fix: navbar horizontal scrollbar bug | Update: navbar width"

## Folder Structure:

TODO: Document the folder structure.

## Application Structure:

TODO: Document How everything will work.
