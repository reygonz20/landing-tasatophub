import React, { Component, useEffect, useState, useContext  } from "react";
import data from "../../../data/index";
import Link from 'next/link'

import PernatContext from '../../../context/user/PernatContext'

const Blog = () => {

  const { usuario, setUsuario } = useContext(PernatContext)

  const [state, setState] = useState({
    allBlogs: {}
  })

  useEffect(() => {
    setState(state => {
      return {
        ...state,
        allBlogs: data.allBlogs,
      }
    })
  }, [])

  const probando = (arg1, arg2) => {
    setUsuario({arg1, arg2})
   }

  
  const small = false;
  

  const mapAllBlogs = (state.allBlogs.blogs || []).map((blog, i) => {

    return (
      <div className="col-md-4" style={{marginBottom: '30px'}}>
        
                <div className="item" >
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <div className="media-wrapper">
                        <Link href={blog.link}><a>
                          <img className="img-fluid center-block" style={{height: '237.6px'}}
                          src={blog.img} alt="#" />
                        </a></Link>
                      </div>
                    </div>                                        
                    <div className="iq-blog-detail" style={{height: '350px'}}>
                      <div className="" style={{marginBottom: '10px'}}>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-user-circle" aria-hidden="true" /> {blog.autor}
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="fa fa-calendar" aria-hidden="true" /> {blog.fecha}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-title">
                        <Link href={blog.link}><a>
                          <h5 className="iq-tw-7 iq-mb-10">{blog.titulo}</h5>
                        </a></Link>
                      </div>
                      <div className="blog-content">
                        <p>{blog.descripcion}</p>
                      </div>
                      <ul className="list-inline" style={{textAlign:'right'}}>
                        <li className="list-inline-item">
                          <Link href={blog.link}><a className="detail-link">
                            Read more <span className="ti-arrow-right"></span>
                          </a></Link>
                        </li>
                      </ul>
                    </div>                    
                  </div>
                </div>
              </div>      
    );
  });

  return (
<React.Fragment>
        <section className="our-blog-section ptb-100 gray-light-bg">
        <div className="h1 compare-title col-lg-12" style={{backgroundColor: '#146cae', margin: '0px', padding: '0px', textAlign: 'center', marginBottom: '60px', width: '100%', height: '90px', display: 'flex', alignItems: 'center', textAlign: 'center'}}><span style={{color: 'white', fontSize: '1.8rem', margin: 'auto', fontWeight: '600'}}>Educación Financiera</span></div>
          <div className="container" style={{marginBottom: '50px'}}>
            <div className="row">
            
              {mapAllBlogs}     

              
            </div>
          </div>
        </section>
      </React.Fragment>
  )
}

export default Blog;
