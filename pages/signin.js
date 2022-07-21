import cx from 'classnames';
import styles from '../styles/Signin.module.css'

export default Signin;

function Signin() {
  return (
    <>
    


      {/* <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Screens</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email addess</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main> */}

      

  
          <div className='row mt-5'>
              <div className='col-md-4 card m-auto shadow-lg'>

                 <div className="card body">
                  <div className="form group p-4">
                  <label htmlFor="Fullname">Full Name</label>
                  <input  className="form-control"  />
                  </div>

                  <div className="form group p-4">
                  <label htmlFor="password">password</label>
                  <input  className="form-control"  />
                  </div>

                  <div className="form group p-4">
                  <label htmlFor="submit"> submit</label>
                
                  </div>

                    </div> 
                 </div> 

          </div>

      
          </>
    
  )
}