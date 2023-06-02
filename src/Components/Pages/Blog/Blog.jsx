import React from "react";

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-center -mt-20 lg:-mt-28 underline font-bold text-accent">
        Blogs
      </h2>
      <div className="my-container">
        <Pdf
          targetRef={ref}
          filename="itlian-chef.pdf"
          x={1}
          y={1}
          scale={0.74}
          
        >
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              href="#_"
              className="relative inline-block text-lg group mt-6"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-accent  group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3  bg-primary"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-accent group-hover:-rotate-180 ease "></span>
                <span className="relative text-xl font-bold ">
                  Generate PDF
                </span>
              </span>
            </button>
          )}
        </Pdf>
        <div ref={ref}>
          {/* question-01 */}
          <div>
            <div className="border bg-[#F1EEE8] p-10 mt-10">
              <h2 className="text-4xl font-bold">
                Differences between uncontrolled and controlled components?
              </h2>

              <div className="mt-8">
                <table className="w-5/6 border border-primary">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-xl border-b border-primary">
                        Type
                      </th>
                      <th className="py-2 px-4 text-xl border-b border-primary">
                        Definition
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-primary border-r">
                        Uncontrolled Components
                      </td>
                      <td className="py-2 px-4 border-b border-primary text-xl">
                        Uncontrolled components manage their own state
                        internally and directly access and modify the DOM. They
                        don't rely on React state or props for handling user
                        input.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-primary border-r">
                        Controlled Components
                      </td>
                      <td className="py-2 px-4 border-b border-primary text-xl">
                        Controlled components rely on React state or props to
                        manage and control user input. They handle changes
                        through event handlers and update the state, which in
                        turn updates the UI.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* question-02 */}

            <div className="border bg-[#F1EEE8] p-10 mt-10">
              <h2 className="text-4xl font-bold">
                Differences between NODE JS and EXPRESS JS?
              </h2>

              <div className="mt-8">
                <p className="text-xl text-neutral-500 ">
                  To validate React props using PropTypes, you can define the
                  expected types and requirements for each prop in the
                  component's propTypes object. PropTypes provide a way to check
                  the type and presence of props passed to a component during
                  development. It helps catch bugs early and provides clear
                  error messages.
                </p>
              </div>
            </div>

            {/* question-03 */}

            <div className="border bg-[#F1EEE8] p-10 mt-10">
              <h2 className="text-4xl font-bold">
                Differences between uncontrolled and controlled components?
              </h2>

              <div className="mt-8">
                <table className="w-5/6 border border-primary">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-xl border-b border-primary">
                        Type
                      </th>
                      <th className="py-2 px-4 text-xl border-b border-primary">
                        Definition
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b border-primary border-r">
                        Node JS
                      </td>
                      <td className="py-2 px-4 border-b border-primary text-xl">
                        Node.js is a runtime environment that allows you to
                        execute JavaScript code on the server-side. It provides
                        an event-driven, non-blocking I/O model, making it
                        efficient for handling concurrent requests.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-primary border-r">
                        Express JS
                      </td>
                      <td className="py-2 px-4 border-b border-primary text-xl">
                        Express.js, on the other hand, is a web application
                        framework built on top of Node.js. It provides a set of
                        features and utilities for building web applications and
                        APIs. Express.js simplifies the process of handling
                        routes, middleware, and managing HTTP requests and
                        responses.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* question-04 */}

            <div className="border bg-[#F1EEE8] p-10 mt-10">
              <h2 className="text-4xl font-bold">
                What is a custom hook, and why will you create a custom hook?
              </h2>

              <div className="mt-8">
                <p className="text-xl text-neutral-500 ">
                  A custom hook in React is a reusable function that allows you
                  to extract and share stateful logic between components. It
                  helps with code reuse, abstraction, and organization of logic
                  in a modular and efficient way.
                  <br /> <br /> A custom hook is created in React to encapsulate
                  complex logic or behavior that can be reused across multiple
                  components. It promotes code reusability, simplifies component
                  logic, and improves overall maintainability of the codebase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
