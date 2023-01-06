export default function Faq() {
  return (
    <div className="faq">
      <h3>Frequently Asked Questions about React-Router 6.4</h3>

      <div className="question">
        <p>
          <strong>404 Errors</strong>
        </p>
        <p>
          There are more than one way to approach a 404 page. You can use
          errorElements, which is a new feature to React Router 6.4 but this
          will be implemented later. The way it will be set up for now is by
          creating a catch all link in the App.js component where we register
          all of the routes. The route we add will be hit only if the other
          routes selected don't exist. In other words, if it doesn't meet the
          routes setup, it will fall back to this route.
        </p>
        <p>
          Don't forget to go inside App.js and pass in the component to the 404
          element
        </p>
      </div>

      <div className="question">
        <p>
          <strong>Lorem ipsum dolor sit amet.</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          recusandae doloribus qui molestias similique asperiores incidunt.
          Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium
          inventore quia odio minus eligendi ipsa?
        </p>
      </div>

      <div className="question">
        <p>
          <strong>Lorem ipsum dolor sit amet.</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          recusandae doloribus qui molestias similique asperiores incidunt.
          Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium
          inventore quia odio minus eligendi ipsa?
        </p>
      </div>

      <div className="question">
        <p>
          <strong>Lorem ipsum dolor sit amet.</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          recusandae doloribus qui molestias similique asperiores incidunt.
          Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium
          inventore quia odio minus eligendi ipsa?
        </p>
      </div>

      <div className="question">
        <p>
          <strong>Lorem ipsum dolor sit amet.</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          recusandae doloribus qui molestias similique asperiores incidunt.
          Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium
          inventore quia odio minus eligendi ipsa?
        </p>
      </div>
    </div>
  );
}
