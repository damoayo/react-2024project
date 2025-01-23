import React from "react";

const Site = () => {
  const siteText = [
    {
      text: ["make", "site compliant with", "webstandard"],
      title: "비트를 이용한 사이트 제작",
      code: "https://vite-2024project-3wbr.vercel.app/",
      view: "https://github.com/damoayo/vite-2024project",
      info: [
        "site coding",
        "production period : two days",
        "use stack : HTML5/CSS3, CSS Variable, Vite",
      ],
    },
    {
      text: ["make", "site compliant with", "react.js"],
      title: "리액트를 이용한 사이트 제작",
      code: "https://github.com/damoayo/react-2024project",
      view: "https://port2023-react.netlify.app",
      info: [
        "site coding",
        "production period : two days",
        "use stack : HTML5/CSS3, CSS Variable, Vite",
      ],
    },
    {
      text: ["make", "site compliant with", "next.js"],
      title: "넥스트를 이용한 사이트 제작",
      code: "https://github.com/damoayo/react-2024project",
      view: "https://port2023-react.netlify.app",
      info: [
        "site coding",
        "production period : two days",
        "use stack : HTML5/CSS3, Scss Variable, next.js",
      ],
    },
    {
      text: ["make", "site compliant with", "next.js"],
      title: "넥스트를 이용한 사이트 제작",
      code: "https://github.com/damoayo/react-2024project",
      view: "https://port2023-react.netlify.app",
      info: [
        "site coding",
        "production period : two days",
        "use stack : HTML5/CSS3, Scss Variable, next.js",
      ],
    },
  ];

  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((item, index) => (
            <article key={index} className={`site__item s${index + 1}`}>
              <span className="num">1.</span>
              <div className="text">
                <div>{item.text[0]}</div>
                <div>{item.text[1]}</div>
                <div>{item.text[2]}</div>
              </div>
              <h3 className="title">{item.title}</h3>
              <div className="btn">
                <a href={item.code}>code</a>
                <a href={item.view}>view</a>
              </div>
              <div className="info">
                <span>{item.info[0]}</span>
                <span>{item.info[1]}</span>
                <span>{item.info[2]}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
