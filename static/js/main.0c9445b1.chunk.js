(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header.97eb6b36.jpeg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/about.0dcb9215.jpg"},function(e,t,a){e.exports=a.p+"static/media/Anannya-Shilotri-Resume.ec833c47.pdf"},function(e,t,a){e.exports=a.p+"static/media/c.dccbba62.svg"},function(e,t,a){e.exports=a.p+"static/media/java.64f6e320.svg"},function(e,t,a){e.exports=a.p+"static/media/javascript.8ee02715.svg"},function(e,t,a){e.exports=a.p+"static/media/python.4948e676.svg"},function(e,t,a){e.exports=a.p+"static/media/react.2ac4caf9.svg"},function(e,t,a){e.exports=a.p+"static/media/sql.f8ded136.svg"},function(e,t,a){e.exports=a.p+"static/media/git.5eed2c8c.svg"},function(e,t,a){e.exports=a.p+"static/media/netlify.a375e07c.svg"},function(e,t,a){e.exports=a.p+"static/media/heroku.4c4ba55d.svg"},function(e,t,a){e.exports=a.p+"static/media/postman.f8e94173.svg"},function(e,t,a){e.exports=a.p+"static/media/unity.1ed7e1a6.svg"},function(e,t,a){e.exports=a.p+"static/media/blender.b9417561.svg"},function(e,t,a){e.exports=a.p+"static/media/figma.5e209b95.svg"},,,function(e,t,a){e.exports=a(50)},,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),c=a.n(o),i=(a(40),a(31)),r=a(2),s=a(8),m=a(7),d=a(6);const p=s.a.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 40px;
  background-color: black;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
  letter-spacing: 1px;

  &.light-mode {
    background-color: white;
    color: black;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`,u=s.a.a`
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: white;

  ${p}.light-mode & {
    color: black;
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
  }
`,g=s.a.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;
  margin-right: 70px;

  a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    position: relative;
    letter-spacing: 1px;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: white;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    ${p}.light-mode & {
      color: black;

      &::after {
        background: black;
      }
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide navbar links on mobile */
  }
`,E=s.a.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  width: 40px;
  height: 40px;
  position: absolute; /* Ensure it's positioned */
  right: 50px; /* Align to the right */
  top: 10px; /* Align to the top */

  &:focus {
    outline: none;
  }

  ${p}.light-mode & {
    color: black;
  }

  @media (max-width: 768px) {
    display: block; /* Make it visible on small screens */
  }
`,h=s.a.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;

    ${p}.light-mode & {
      color: black;
    }
  }
`,b=s.a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: black;
  color: white;
  padding-top: 60px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1001;

  &.open {
    transform: translateX(0);
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
  }

  ${p}.light-mode & {
    background-color: white;
    color: black;

    a {
      color: black;
    }
  }
`;var f=()=>{const[e,t]=Object(n.useState)(!0),[a,o]=Object(n.useState)(!1),c=()=>{o(!a)};return Object(n.useEffect)(()=>{const e=e=>{!a||e.target.closest(".side-menu")||e.target.closest(".hamburger-icon")||o(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[a]),l.a.createElement(p,{className:e?"":"light-mode"},l.a.createElement(h,{onClick:c,className:"hamburger-icon"},l.a.createElement(m.a,{icon:a?d.e:d.a})),l.a.createElement(u,{href:"#header"},"Anannya Shilotri"),l.a.createElement(g,{className:"navbar-links"},l.a.createElement("a",{href:"#header"},"Home"),l.a.createElement("a",{href:"#about"},"About Me"),l.a.createElement("a",{href:"#skills"},"Skills"),l.a.createElement("a",{href:"#projects"},"Projects"),l.a.createElement("a",{href:"#contact"},"Contact Me")),l.a.createElement(b,{className:`side-menu ${a?"open":""}`},l.a.createElement("a",{href:"#header",onClick:c},"Home"),l.a.createElement("a",{href:"#about",onClick:c},"About Me"),l.a.createElement("a",{href:"#skills",onClick:c},"Skills"),l.a.createElement("a",{href:"#projects",onClick:c},"Projects"),l.a.createElement("a",{href:"#contact",onClick:c},"Contact Me")),l.a.createElement(E,{onClick:()=>{t(!e),document.body.classList.toggle("light-mode"),document.querySelector("nav").classList.toggle("light-mode")}},l.a.createElement(m.a,{icon:e?d.c:d.d})))};a(43);var v=()=>{const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{const e=()=>{const e=window.scrollY;t(e>100)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),l.a.createElement("header",null,l.a.createElement("section",{id:"header",className:"header"},l.a.createElement("div",{className:"overlay"}),l.a.createElement("div",{className:`header-content ${e?"shrink":""}`},l.a.createElement("h1",null,l.a.createElement("span",{className:"first-name"},"Anannya "),l.a.createElement("span",{className:"last-name"},"Shilotri")))))},w=(a(44),a(16)),k=a.n(w),y=a(17),x=a.n(y);var N=()=>{const[e,t]=Object(n.useState)(!1),a=()=>{const e=document.getElementById("about"),{top:a,bottom:n}=e.getBoundingClientRect();console.log("top:",a,"bottom:",n),console.log("window.innerHeight:",window.innerHeight),a<window.innerHeight&&n>0?(console.log("Setting isVisible to true"),t(!0)):(console.log("Setting isVisible to false"),t(!1))};return Object(n.useEffect)(()=>(window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)),[]),l.a.createElement("section",{id:"about",className:"about-section"},l.a.createElement("div",{className:`about-image ${e?"visible":""}`},l.a.createElement("img",{src:k.a,alt:"Anannya Shilotri"})),l.a.createElement("div",{className:`about-content ${e?"visible":""}`},l.a.createElement("h2",{className:"about-title"},"About Me"),l.a.createElement("p",{className:"about-text"},"I\u2019m a Computer Engineering student with a love for blending technology and fashion. My journey as a developer is driven by the intersection of these two worlds, where I combine technical expertise with a creative vision to craft unique and functional digital experiences. My enthusiasm for fashion influences my approach to design, infusing my projects with an aesthetic sense that balances style, functionality, and sustainability.",l.a.createElement("br",null),l.a.createElement("br",null),"I\u2019m a fast learner, adaptable to new challenges, and always eager to collaborate with teams where technology and creativity converge to make an impact."),l.a.createElement("div",{className:"download-button-wrapper"},l.a.createElement("a",{href:x.a,download:"Anannya Shilotri Resume.pdf",className:"download-button"},"Download My Resume"))))};var j=()=>l.a.createElement("div",{className:"home"},l.a.createElement("h1",null," "),l.a.createElement("p",null," ")),S=(a(45),a(11));var C=()=>{const[e,t]=Object(n.useState)(!1),a=()=>{const e=document.getElementById("contact"),{top:a,bottom:n}=e.getBoundingClientRect();a<window.innerHeight&&n>0?t(!0):t(!1)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)),[]),l.a.createElement("section",{id:"contact",className:`contact-section ${e?"visible":""}`},l.a.createElement("h2",{className:"contact-title"},"Let's Connect"),l.a.createElement("p",null,"I would love to hear from you!"),l.a.createElement("form",{className:"contact-form"},l.a.createElement("input",{type:"text",placeholder:"Your Name",required:!0}),l.a.createElement("input",{type:"email",placeholder:"Your Email",required:!0}),l.a.createElement("textarea",{placeholder:"Your Message",required:!0}),l.a.createElement("button",{type:"submit",className:"submit-button"},"Send Message")),l.a.createElement("div",{className:"contact-info"},l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{href:"mailto:anannyashilotri@gmail.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.a,{icon:d.b})),l.a.createElement("a",{href:"https://www.linkedin.com/in/anannyashilotri",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.a,{icon:S.b})),l.a.createElement("a",{href:"https://github.com/dev-anannya",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.a,{icon:S.a})))))};a(46);const L=[{title:"E-Commerce Website",description:"An e-commerce platform with a sleek UI and dynamic product listing.",liveDemo:"https://your-live-demo-link.com",repository:"https://github.com/your-repo-link",image:a(10)},{title:"AR Application",description:"An augmented reality app that enhances real-world experiences.",liveDemo:"https://your-live-demo-link.com",repository:"https://github.com/your-repo-link",image:a(10)},{title:"To-Do List App",description:"A web application for managing tasks with a user-friendly interface.",liveDemo:"https://your-live-demo-link.com",repository:"https://github.com/your-repo-link",image:a(10)}];var A=()=>{const[e,t]=Object(n.useState)(0),[a,o]=Object(n.useState)(!1),[c,i]=Object(n.useState)(0),[r,s]=Object(n.useState)(!1),m=()=>{const e=document.getElementById("projects"),{top:t,bottom:a}=e.getBoundingClientRect();t<window.innerHeight&&a>0?o(!0):o(!1)};Object(n.useEffect)(()=>(window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)),[]);const d=()=>{t(e=>(e+1)%L.length)},p=()=>{t(e=>(e-1+L.length)%L.length)};return l.a.createElement("section",{id:"projects",className:`projects-section ${a?"visible":""}`,onTouchStart:e=>{i(e.touches[0].clientX),s(!0),e.preventDefault()},onTouchMove:e=>{if(!r)return;const t=e.touches[0].clientX,a=c-t;a>50?(d(),s(!1)):a<-50&&(p(),s(!1))},onTouchEnd:e=>{s(!1)}},l.a.createElement("h2",{className:"projects-title"},"Projects"),l.a.createElement("div",{className:"carousel"},l.a.createElement("button",{className:"carousel-btn left",onClick:p},"<"),l.a.createElement("div",{className:"carousel-slide"},l.a.createElement("img",{src:L[e].image,alt:L[e].title,className:"project-thumbnail"}),l.a.createElement("div",{className:"project-details"},l.a.createElement("h3",{className:"project-title"},L[e].title),l.a.createElement("p",{className:"project-description"},L[e].description),l.a.createElement("div",{className:"project-buttons"},l.a.createElement("a",{href:L[e].liveDemo,className:"project-btn"},"Live Demo"),l.a.createElement("a",{href:L[e].repository,className:"project-btn"},"Repository")))),l.a.createElement("button",{className:"carousel-btn right",onClick:d},">")),l.a.createElement("div",{className:"carousel-indicators"},L.map((a,n)=>l.a.createElement("span",{key:n,className:`indicator ${n===e?"active":""}`,onClick:()=>t(n)}))))},O=(a(47),a(18)),M=a.n(O),$=a(19),B=a.n($),H=a(20),R=a.n(H),I=a(21),P=a.n(I),D=a(22),z=a.n(D),X=a(23),q=a.n(X),J=a(24),T=a.n(J),Y=a(25),U=a.n(Y),_=a(26),F=a.n(_),G=a(27),Q=a.n(G),V=a(28),W=a.n(V),K=a(29),Z=a.n(K),ee=a(30),te=a.n(ee);var ae=()=>{const[e,t]=Object(n.useState)(!1),a=()=>{const e=document.getElementById("skills"),{top:a,bottom:n}=e.getBoundingClientRect();a<window.innerHeight&&n>0?t(!0):t(!1)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)),[]),l.a.createElement("section",{id:"skills",className:`skills-section ${e?"visible":""}`},l.a.createElement("h2",{className:"skills-title"},"Skills"),l.a.createElement("div",{className:"dropdowns"},l.a.createElement("div",{className:"dropdown"},l.a.createElement("h3",{className:"dropdown-title"},"Programming Languages"),l.a.createElement("ul",{className:"dropdown-list"},l.a.createElement("li",null,"C ",l.a.createElement("img",{src:M.a,alt:"C logo",className:"skill-logo"})),l.a.createElement("li",null,"Java ",l.a.createElement("img",{src:B.a,alt:"Java logo",className:"skill-logo"})),l.a.createElement("li",null,"JavaScript ",l.a.createElement("img",{src:R.a,alt:"JavaScript logo",className:"skill-logo"})),l.a.createElement("li",null,"Python ",l.a.createElement("img",{src:P.a,alt:"Python logo",className:"skill-logo"})))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("h3",{className:"dropdown-title"},"Web Development"),l.a.createElement("ul",{className:"dropdown-list"},l.a.createElement("li",null,"SQL ",l.a.createElement("img",{src:q.a,alt:"SQL logo",className:"skill-logo"})),l.a.createElement("li",null,"React.js ",l.a.createElement("img",{src:z.a,alt:"React logo",className:"skill-logo"})))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("h3",{className:"dropdown-title"},"Other Tools"),l.a.createElement("ul",{className:"dropdown-list"},l.a.createElement("li",null,"Git ",l.a.createElement("img",{src:T.a,alt:"Git logo",className:"skill-logo"})),l.a.createElement("li",null,"Netlify ",l.a.createElement("img",{src:U.a,alt:"Netlify logo",className:"skill-logo"})),l.a.createElement("li",null,"Heroku ",l.a.createElement("img",{src:F.a,alt:"Heroku logo",className:"skill-logo"})),l.a.createElement("li",null,"Postman ",l.a.createElement("img",{src:Q.a,alt:"Postman logo",className:"skill-logo"})),l.a.createElement("li",null,"Unity ",l.a.createElement("img",{src:W.a,alt:"Unity logo",className:"skill-logo"})),l.a.createElement("li",null,"Blender ",l.a.createElement("img",{src:Z.a,alt:"Blender logo",className:"skill-logo"})),l.a.createElement("li",null,"Figma ",l.a.createElement("img",{src:te.a,alt:"Figma logo",className:"skill-logo"}))))))};a(48),a(49);var ne=()=>l.a.createElement("div",{className:"App"}," ",l.a.createElement(i.a,null,l.a.createElement(f,null),l.a.createElement(v,null)," ",l.a.createElement(N,null),l.a.createElement(ae,null),l.a.createElement(A,null),l.a.createElement(C,null),l.a.createElement(r.c,null,l.a.createElement(r.a,{path:"/",element:l.a.createElement(j,null)}),l.a.createElement(r.a,{path:"/about",element:l.a.createElement(N,null)}),l.a.createElement(r.a,{path:"/contact",element:l.a.createElement(C,null)}),l.a.createElement(r.a,{path:"/projects",element:l.a.createElement(A,null)}),l.a.createElement(r.a,{path:"/skills",element:l.a.createElement(ae,null)}))));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ne,null)),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.0c9445b1.chunk.js.map