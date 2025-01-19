# Page Animation Effects in the Project

This document outlines the various page animation effects implemented in the project, primarily within the `app/page.tsx` and `app/layout.tsx` files. These animations enhance the user experience by adding smooth and engaging transitions.

## Libraries Used

The project leverages the following libraries for creating animations:

1.  **Framer Motion:**
    *   **Purpose:** This is the core animation library used. It provides a powerful and flexible way to animate React components.
    *   **Key Features:**
        *   `motion`: A component that wraps HTML elements, making them animatable.
        *   `useScroll`: A hook that tracks the user's scroll position and progress.
        *   `useTransform`: A hook that maps a value from one range to another, allowing dynamic animation based on scroll or other factors.
        * `initial`: The starting state of the animation.
        * `animate`: The end state of the animation.
        * `transition`: Controls the speed, easing, and timing of the animation.
    *   **How it works:** Framer Motion uses the concept of "variants" to define animation states. You specify an initial state and an animate state, and Framer Motion handles the smooth transition between them.

2.  **React Intersection Observer:**
    *   **Purpose:** This library is used to detect when an element enters or exits the viewport.
    *   **Key Feature:**
        *   `useInView`: A hook that provides a boolean value indicating whether an element is currently visible in the viewport.
    *   **How it works:** It efficiently observes the position of elements relative to the viewport and triggers a callback when they become visible.

## Animation Effects

### 1. Scroll-Based Parallax Effect (Hero Section)

*   **Name:** `Hero Parallax`
*   **Description:** This effect creates a subtle parallax motion in the hero section as the user scrolls. The main heading and text move upward and fade out as the user scrolls down.
*   **Mechanism:**
    *   **`useScroll`:** Tracks the vertical scroll progress of the `containerRef`.
    *   **`useTransform`:** Maps the scroll progress to the `y` property (vertical position) and `opacity`.
    *   As the scroll progress goes from `0` to `1` (start to end), the `y` property changes from `0%` to `50%`, and `opacity` goes from `1` to `0`.
*   **Code Snippets:**
```
tsx
    import { motion, useScroll, useTransform } from 'framer-motion';
    import { useRef } from 'react';

    export default function Home() {
        const containerRef = useRef(null);
        const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ['start start', 'end start'],
        });

        const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
        const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

        return (
            <section ref={containerRef} className="min-h-screen relative overflow-hidden">
                <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center">
                   // Content
                </motion.div>
            </section>
        );
    }
    
```
* **Breakdown**
    * `const containerRef = useRef(null)`: Here we create a ref so we can attach it to an element.
    * `const { scrollYProgress } = useScroll({...})`: We used the hook `useScroll` from `framer-motion` to keep track of the scroll and have the scroll progress with `scrollYProgress`.
    * `const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])`: This line creates the animation. The first parameter is the scroll progress. The second parameter `[0, 1]` is the input range of the scroll progress (from 0% to 100% of the scroll) and the last one is the output range that applies to the `y` property (from 0% to 50%).
    * `const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);`: This line will apply an opacity effect to the element as the user scroll down.
    * `<motion.div style={{y, opacity}}`: Here we apply the animation created previously to the `<motion.div>` element.

### 2. Fade and Slide Entrance Animation (Hero Section)

*   **Name:** `Hero Entrance`
*   **Description:** This effect makes the hero section's heading and paragraph smoothly fade in and slide up when the page loads.
*   **Mechanism:**
    *   **`motion`:** The `<motion.h1>` and `<motion.p>` components are used to make the elements animatable.
    *   **`initial`:** The elements start with `opacity: 0` and `y: 20` (invisible and 20px below their final position).
    *   **`animate`:** The elements transition to `opacity: 1` and `y: 0` (fully visible at their final position).
    *   **`transition`:** Controls the animation's `duration` (speed) and `delay` (start time).
*   **Code Snippets:**
```
tsx
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900"
    >
        Being a Woman of Faith
    </motion.h1>
    <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
    >
        A life full of purpose
    </motion.p>
    
```
* **Breakdown**
    * `<motion.h1 initial={{ opacity: 0, y: 20 }} ...>`: Here we set the initial state of the element. It will be invisible and 20px below its final position.
    * `<motion.h1 animate={{ opacity: 1, y: 0 }} ...>`: Here we set the end state of the animation. The element will be fully visible and in its final position.
    * `<motion.h1 transition={{ duration: 0.8 }} ...>`: Here we set the `duration` of the animation. In this case, is `0.8` seconds. For the paragraph the `delay` is `0.2` so it will start after `0.2` seconds.

### 3. Fade and Slide Entrance with Stagger (Categories Section)

*   **Name:** `Categories Entrance`
*   **Description:** This effect makes the categories section fade in and slide up when it enters the viewport. Each category item appears with a slight delay after the previous one, creating a staggered effect.
*   **Mechanism:**
    *   **`useInView`:** Detects when the categories section is in the viewport.
    *   **`motion`:** Both the container and the individual category items are wrapped in `<motion.div>`.
    *   **`initial`:** The elements start with `opacity: 0` and `y: 20`.
    *   **`animate`:** The elements transition to `opacity: 1` and `y: 0` when `inView` is true.
    *   **`transition`:** The `duration` is set to `0.8` seconds.
    * **`Stagger`**: Each item will have a `delay` using `index * 0.2` , so the delay will increment for each category.
*   **Code Snippets:**
```
tsx
    import { useInView } from 'react-intersection-observer';
    import { motion } from 'framer-motion';

    export default function Home() {
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        });

         const categories = [...]; // List of categories
        return(
             <section ref={ref} className="py-24 bg-gradient-to-b from-white to-blue-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                           // Content
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        )

    }
    
```
* **Breakdown**
    * `const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1, });`: We are using the `useInView` hook to keep track if the element is in the view or not. `triggerOnce: true` will trigger only once the animation. `threshold: 0.1` means that if at least 10% of the element is in the view, it will trigger the animation.
    * `<section ref={ref} ...>`: Here we are attaching the ref to the section element.
    * `<motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} ...>`: Here we set the animation for the container, when inView is true it will animate, if not, it will not animate.
    * `<motion.div key={category.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: index * 0.2 }} ...>`: Here we set the animation for the category elements. We add a `delay` based on `index * 0.2` so for the first category `index` is 0 so the `delay` will be 0, for the second one, the index will be 1, so the `delay` will be `0.2` and so on.

## Conclusion

The project uses Framer Motion and React Intersection Observer to create various engaging animation effects. These animations enhance the overall user experience and make the website more visually appealing. By understanding these effects and their implementation, developers can further customize and extend the animations as needed.

### 4. Smooth Page Transitions

*   **Name:** `Page Transitions`
*   **Description:** This effect provides smooth transitions between pages when navigating using Next.js's built-in routing. It uses a fade-in and fade-out effect for a visually appealing experience.
*   **Mechanism:**
    *   **Next.js `Layout`:** The animation is applied within the `app/layout.tsx` file using Next.js's layout feature.
    *   **`motion`:** The `motion` component wraps the `children` prop, which represents the content of the current page.
    *   **`initial`, `animate`, `exit`:** These properties define the animation states for when the page enters, is visible, and exits, respectively.
    *   **`transition`:** Controls the animation duration and easing for a smooth effect.
*   **Code Snippets:**


*   **Name:** `Page Transitions`
*   **Description:** This effect provides smooth transitions between pages when navigating using Next.js's built-in routing. It uses a fade-in and fade-out effect for a visually appealing experience.
*   **Mechanism:**
    *   **Next.js `Layout`:** The animation is applied within the `app/layout.tsx` file using Next.js's layout feature.
    *   **`motion`:** The `motion` component wraps the `children` prop, which represents the content of the current page.
    *   **`initial`, `animate`, `exit`:** These properties define the animation states for when the page enters, is visible, and exits, respectively.
    *   **`transition`:** Controls the animation duration and easing for a smooth effect.
*   **Code Snippets:**
