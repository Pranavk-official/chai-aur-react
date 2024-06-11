# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

React Fiber is a significant architectural change introduced in React 16 to improve the performance and responsiveness of React applications. It involves a complete rewrite of React's core reconciliation algorithm, focusing on enhancing the user interface's smoothness and interactivity, especially in large-scale applications.

## Key Concepts of React Fiber :-

- **Incremental Rendering**: React Fiber allows React to split the rendering work into smaller chunks, enabling it to yield control back to the browser whenever necessary. This approach significantly improves the application's responsiveness by prioritizing updates and reducing the likelihood of blocking the main thread.

- **Concurrency**: Fiber introduces the capability to work on multiple tasks concurrently. This feature is crucial for prioritizing updates and efficiently managing rendering, ensuring that high-priority updates are processed before lower-priority ones.

- **Error Boundaries**: React Fiber introduces a new error-handling mechanism called Error Boundaries. These allow developers to catch errors in the component tree and display a fallback UI, preventing the entire application from crashing due to an error in a small part of the UI.

- **Scheduling**: Fiber's scheduling mechanism helps prioritize and manage updates more efficiently. It ensures that high-priority updates are processed before lower-priority ones, maintaining the application's performance and responsiveness.

### Structure of Fiber :-

A fiber is a JavaScript object that represents a unit of work in React Fiber's architecture. It is analogous to a virtual DOM node but also contains additional information about the work's state, priority, and other metadata. Each fiber is associated with a component instance and represents a part of the component tree. During the reconciliation process, React creates a tree of fibers, iterating over each React element to generate a fiber for it. Although referred to as a tree, React Fiber actually creates a singly-linked list of fiber nodes, where each node is a fiber. This structure maintains relationships between parent, child, and sibling fibers, allowing React to efficiently manage and render components.

### Benefits of React Fiber :-

- **Improved Performance**: By introducing incremental rendering, concurrency, error boundaries, and an enhanced scheduling mechanism, React Fiber ensures that large applications remain performant and responsive. It addresses the limitations of the previous reconciliation algorithm, known as the Stack Reconciler, which worked in a recursive manner and could block the main thread during the update process.

- **Enhanced User Experience**: The ability to split rendering work into smaller units and prioritize updates more effectively leads to a smoother user experience, especially in complex applications with frequent state changes.

- **Flexibility and Control**: React Fiber's architecture provides developers with greater flexibility and control over rendering processes, allowing for more efficient management of resources and better optimization of application performance.

In summary, React Fiber represents a major advancement in React's architecture, offering significant improvements in performance, responsiveness, and developer control over rendering processes. Its introduction marks a shift towards a more flexible and efficient reconciliation algorithm, paving the way for future developments in React's ecosystem.

Citations:
[1](https://codedamn.com/news/reactjs/react-fiber-architecture)
[2](https://github.com/acdlite/react-fiber-architecture)
[3](https://blog.bitsrc.io/react-what-is-fiber-architecture-and-how-it-works-fab95622b0ba)
[4](https://blog.logrocket.com/deep-dive-react-fiber/)
[5](https://www.velotio.com/engineering-blog/react-fiber-algorithm)
[6](https://medium.com/@aliWhosane/react-fiber-data-structure-demystified-d3794470a8a4)
[7](https://www.geeksforgeeks.org/what-is-react-fiber/)
[8](https://medium.com/@Vaibhavihole31/react-fiber-architecture-b8ac9f38cfb5)
[9](https://portal.gitnation.org/contents/understanding-reacts-fiber-architecture)
