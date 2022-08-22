import React,{useState} from 'react'



function TextForm() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleChangeEmail = (e) =>{
            setEmail(e.target.value);
    }
    const handleChangePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e) =>
    {
        alert(email+'<--->'+password);
    }
    return (
       
    <div className="card">
    <div className="card-body">
        <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={email} onChange={handleChangeEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={handleChangePassword} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
        </form>
    </div>
  </div>
    )
}

export default TextForm
