import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../Loader/Loader';
import MySingleProject from './MySingleProject';


const Myproject = () => {
    const [myprojectLoader, setMyprojectLoader] = useState(false)
    const { data: myprojects = [], isLoading, refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(`https://tanvir-taqi-server.vercel.app/projects`)
            const data = await res.json();
            return data
        }

    })

    const handleDeleteMyProject = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this project')
        if (!proceed) {
            refetch()
            return
        } else {
            setMyprojectLoader(true)
            fetch(`http://localhost:5000/myproject/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        setMyprojectLoader(false)
                    } else {
                        refetch()
                        setMyprojectLoader(false)
                    }
                })
                .catch(err => {
                    console.log('====================================');
                    console.log(err);
                    console.log('====================================');
                    refetch()
                    setMyprojectLoader(false)
                })
        }
    }

    const handleIndexUpdate = (id, indexValue) =>{
        if(!indexValue){
            alert('Please Input new Index value')
            return
        }
        setMyprojectLoader(true)
        fetch(`http://localhost:5000/myproject/${id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({indexValue:parseInt(indexValue)})
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    setMyprojectLoader(false)
                } else {
                    refetch()
                    setMyprojectLoader(false)
                }
            })
            .catch(err => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');
                refetch()
                setMyprojectLoader(false)
            })
    }

    if (isLoading || myprojectLoader) {
        return <Loader></Loader>
    }

    return (
        <div className='py-20'>
            <h1 className='text-4xl font-extrabold text-secondary'>My Projects</h1>
            {
                myprojects.map(mp => <MySingleProject
                    key={mp._id}
                    project={mp}
                    handleDeleteMyProject={handleDeleteMyProject}
                    handleIndexUpdate={handleIndexUpdate}
                ></MySingleProject>)
            }
        </div>
    );
};

export default Myproject;