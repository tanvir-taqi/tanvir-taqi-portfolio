import React, { useState } from 'react';
import Loader from '../Loader/Loader';


const AddProject = () => {

    const [loader,setLoader] = useState(false)

    const addProjectsToDb = (e)=>{
        e.preventDefault()
        setLoader(true)
        const form = e.target
        const name = form.name.value
        const subtitle = form.subtitle.value
        const live = form.live.value
        const client = form.client.value
        const type = form.type.value
        const source = form.source.value
        const index = form.index.value
        const details = form.details.value
        const technologies = form.technologies.value
        const image = form.img.files[0]

        const imagebbkey = process.env.REACT_APP_IMAGEBB_KEY
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imagebbkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.status === 200) {
                    const projectPhoto = imgData.data.url

                    const project = {
                        subtitle ,
                        live ,
                        client ,
                        type ,
                        source ,
                        index ,
                        details ,
                        technologies ,
                        projectPhoto ,
                        name
                    }

                    fetch(' https://tanvir-taqi-server.vercel.app/projects',{
                        
                            method: 'POST',
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(project)
                
                        })
                        .then(res => res.json())
                        .then(data => {
                          if(data.acknowledged === true) {
                            setLoader(false)
                            form.reset()
                          }
                        })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => {
                console.log('====================================')
                console.log(err)
                console.log('====================================')
            })

    }


    if(loader){
        return <Loader></Loader>
    }

    return (
        <div className='w-full flex justify-center '>
            <form onSubmit={addProjectsToDb} className='bg-gray-700 text-black w-2/3 p-10' >
                <div className="form-control">
                    <label htmlFor="name">Project Name</label>
                    <input className='py-1 px-4 text-lg font-medium' type="text" name='name' />
                </div>
                <div className="form-control">
                    <label htmlFor="subtitle">subtitle</label>
                    <input className='py-1 px-4 text-lg font-medium' type="text" name='subtitle' />
                </div>
                <div className="form-control">
                    <label htmlFor="live">Live Link</label>
                    <input className='py-1 px-4 text-lg font-medium' type="text" name='live' />
                </div>
                <div className="form-control">
                    <label htmlFor="client">client</label>
                    <input className='py-1 px-4 text-lg font-medium' type="text" name='client' />
                </div>
                <div className="form-control">
                    <label htmlFor="source">source</label>
                    <input className='py-1 px-4 text-lg font-medium' type="text" name='source' />
                </div>
              
                
                <div className="form-control">
                    <label htmlFor="type">type</label>
                    <input className='py-1 px-4 text-lg font-medium' type="text"  name='type'/>
                </div>
                <div className="form-control">
                    <label htmlFor="index">index</label>
                    <input className='py-1 px-4 text-lg font-medium' type="text"  name='index'/>
                </div>
                <div className="form-control">
                    <label htmlFor="img">img</label>
                    <input className='py-1 px-4 text-lg font-medium' type="file" name='img'/>
                </div>
                <div className="form-control">
                    <label htmlFor="details">details</label>  
                    <textarea className='py-1 px-4 text-lg font-medium'  name="details" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="technologies">technologies</label>    
                    <textarea className='py-1 px-4 text-lg font-medium'  name="technologies" id="" cols="30" rows="3"></textarea>
                </div>
                <div className="form-control">
                   <input type="submit" value="Add Project" className='bg-blue-400 my-4 w-1/6 cursor-pointer' />
                </div>
            </form>
        </div>
    )
};

export default AddProject;