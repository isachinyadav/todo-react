    import React from 'react'

    export const Foam = () => {
      return (
        <div className='container my-5'>
        <form className="row g-3">
        <div className="col-auto">
          <label for="staticEmail2" className="visually-hidden">Add work to do :</label>
          <input type="text" readonly className="form-control-plaintext " id="staticEmail2" value="Add work to do"/>
        </div>
        <div className=''>

        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">Work to do</label>
          <input type="password" className="form-control" id="inputPassword2" placeholder="Work To do"/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3 mx-3">Add</button>
        </div>
        <div className="col-auto">
          <label for="staticEmail2" className="visually-hidden">Add work to do :</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="1:"/>
        </div>
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden"></label>
          <input className ="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled/>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3 mx-3">Delete</button>
        </div> 
        </div>
       
        
        
       
      
      </form>
      </div>
      )
    }

    export default Foam
