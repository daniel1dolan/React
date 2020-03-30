function Corona() {
  return (
    <div>
      <div className="row">
        <div className="col s2">
          <div className="card hoverable small">
            <div className="card-image">
              <img src="http://lorempixel.com/400/400/nature/" />
            </div>
            <div className="card-content">
              <p>Coronavirus PPE</p>
              <p>Masks</p>
            </div>
            <div className="card-action">
              <a href="#">$ {true ? 9.99 : 59.99}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
