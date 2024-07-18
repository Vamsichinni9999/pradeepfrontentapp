import React from "react";

const Features=()=>{
    return(
        <>
    <div className="row g-4 p-5 row-cols-1 row-cols-lg-3 m-4  rounded-5">
  <div className="feature col">
    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
      <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
    </div>
    <h3 className="fs-2 text-body-emphasis ">Security</h3>
    <p className="text-white">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    <a href="#" className="icon-link text-warning">
      Call to action
    </a>
  </div>
  <div className="feature col">
    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
      <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle"></use></svg>
    </div>
    <h3 className="fs-2 text-body-emphasis">Fast delivery</h3>
    <p className="text-white">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    <a href="#" className="icon-link text-warning">
      Call to action
      <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
    </a>
  </div>
  <div className="feature col">
    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
      <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
    </div>
    <h3 className="fs-2 text-body-emphasis">Online payment</h3>
    <p className="text-white">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
    <a href="#" className="icon-link text-warning">
      Call to action
      <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
    </a>
  </div>
  <hr></hr><hr></hr><hr></hr>
</div>


        </>
    )
}
export default  Features