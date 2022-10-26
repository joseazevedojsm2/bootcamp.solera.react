import './styles.css'

const LoginContainer = () => {
    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    return (
        <div className="form">
          <form>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
     );
}

export default LoginContainer;