import React from "react";

export default function XCard({ header, items }) {
  return (
    <div className="experience__frontend">
      <h3 className="exp">{header}</h3>
      <div className="experience__content">
        {items.map((item, index) => (
          <article className="experience__details" key={index}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="experience__details-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
            </svg>
            <div>
              <h4>{item}</h4>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}