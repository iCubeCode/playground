import React from 'react'

function Example() {
    return (
        <div>
            <div style={{ padding: "30px" }}>
                <input type='text' name='search' placeholder='Search...' style={{ width: "300px", height: "40px", paddingLeft: "16px" }} />
            </div>
            {
                MYCONTENT.map((item) => {
                    return (
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Example



let MYCONTENT = [
    {
        title: "React Tutorials",
        content: "React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements."
    },
    {
        title: "JavaScript Tutorials",
        content: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."
    },
    {
        title: "CSS Tutorials",
        content: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]"
    },
    {
        title: "HTML Tutorials",
        content: "HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
    }
]




// highlighter during the search

// make a search bar

// have some content and when we search - we need to search in title and content and if we find the item then we need to break that particular item and put it in <mark> </mark> tag...
// so that it will be hightlighted

