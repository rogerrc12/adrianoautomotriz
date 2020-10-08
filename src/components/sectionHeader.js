import React from "react"
import { Link } from "gatsby"

const sectionHeader = ({ sectionTitle, bg }) => {
  return (
    <section className={`inner-intro bg-1 bg-${bg} bg-overlay-black-60`}>
      <div className="container">
        <div className="row text-center intro-title">
          <div className="col-sm-6 text-md-left d-inline-block">
            <h1 className="text-white">{sectionTitle}</h1>
          </div>
          <div className="col-sm-6 text-md-right float-right">
            <ul className="page-breadcrumb">
              <li>
                <Link to="/">
                  <i className="fa fa-home" /> Inicio /
                </Link>{" "}
                <i className="fa fa-angle-double-right" />
              </li>
              <li>
                <span>{sectionTitle}</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default sectionHeader
