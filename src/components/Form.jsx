function Form() {
  return (
    <div className="container">
      <form
        target="_blank"
        action="https://formsubmit.co/d4df8153c5ddae5aa482d4900f5a06fa"
        method="POST"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required=""
              />
            </div>
            <div className="col">
              <label htmlFor="email">Adresse courriel</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required=""
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required=""
          ></textarea>
        </div>
        <input
          type="hidden"
          name="_next"
          value="https://ronald-junior-rivest-trudel.vercel.app/"
        />

        <button type="submit" className="btn btn-lg btn-dark btn-block">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Form;
