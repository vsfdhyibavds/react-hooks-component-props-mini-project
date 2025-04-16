function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
    const renderMinutesToRead = () => {
      if (!minutesToRead) return null;

      if (minutesToRead < 30) {
        const coffeeCups = Math.ceil(minutesToRead / 5);
        return ` ${'☕️'.repeat(coffeeCups)} ${minutesToRead} min read`;
      } else {
        const bentoBoxes = Math.ceil(minutesToRead / 10);
        return ` ${'🍱'.repeat(bentoBoxes)} ${minutesToRead} min read`;
      }
    };

    return (
      <article>
        <h3>{title}</h3>
        <small>
          {date}
          {renderMinutesToRead()}
        </small>
        <p>{preview}</p>
      </article>
    );
  }

  export default Article;